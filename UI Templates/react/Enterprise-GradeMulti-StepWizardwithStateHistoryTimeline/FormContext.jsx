import React, { createContext, useContext, useState, useEffect } from 'react';

const FormContext = createContext(undefined);

const INITIAL_FORM_DATA = {
  accountType: 'personal', // personal | business
  fullName: '',
  email: '',
  companyName: '',
  taxId: '',
  plan: 'growth',
  agreeToTerms: false
};

export const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  // Undo/Redo history stacks
  const [history, setHistory] = useState([INITIAL_FORM_DATA]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // Dynamic conditional branching logic to compute total steps
  const totalSteps = formData.accountType === 'business' ? 4 : 3;

  // Track state changes into timeline history
  const updateFormData = (fields) => {
    const nextData = { ...formData, ...fields };
    setFormData(nextData);

    // Wipe out future timelines if user changes data after an Undo action
    const cleanHistory = history.slice(0, historyIndex + 1);
    setHistory([...cleanHistory, nextData]);
    setHistoryIndex(cleanHistory.length);
  };

  const undo = () => {
    if (historyIndex > 0) {
      const prevIndex = historyIndex - 1;
      setHistoryIndex(prevIndex);
      setFormData(history[prevIndex]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const nextIndex = historyIndex + 1;
      setHistoryIndex(nextIndex);
      setFormData(history[nextIndex]);
    }
  };

  // Centralized declarative validation matrix
  const validateStep = (step) => {
    const nextErrors = { ...errors };
    
    if (step === 1) {
      if (!formData.fullName.trim()) nextErrors.fullName = 'Full Name is required';
      else delete nextErrors.fullName;

      if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nextErrors.email = 'Valid email address is required';
      else delete nextErrors.email;
    }
    
    if (step === 2 && formData.accountType === 'business') {
      if (!formData.companyName.trim()) nextErrors.companyName = 'Company name is required';
      else delete nextErrors.companyName;

      if (!formData.taxId.trim()) nextErrors.taxId = 'Tax ID number is required';
      else delete nextErrors.taxId;
    }

    if (step === totalSteps) {
      if (!formData.agreeToTerms) nextErrors.agreeToTerms = 'You must accept the terms to proceed';
      else delete nextErrors.agreeToTerms;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).every(key => {
      // Return true only if no active errors persist for the fields relevant to this step
      if (step === 1 && ['fullName', 'email'].includes(key)) return false;
      if (step === 2 && formData.accountType === 'business' && ['companyName', 'taxId'].includes(key)) return false;
      if (step === totalSteps && ['agreeToTerms'].includes(key)) return false;
      return true;
    });
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateStep(currentStep);
  };

  return (
    <FormContext.Provider value={{
      currentStep, totalSteps, formData, errors, touched,
      updateFormData, handleBlur, nextStep, prevStep, validateStep,
      canUndo: historyIndex > 0, canRedo: historyIndex < history.length - 1, undo, redo
    }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error('useForm must be used within a FormProvider');
  return context;
};