import React from 'react';
import { FormProvider, useForm } from './FormContext';
import { StepContent } from './StepContent';
import styles from './WizardLayout.module.css';

const WizardShell = () => {
  const { currentStep, totalSteps, nextStep, prevStep, canUndo, canRedo, undo, redo } = useForm();

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    alert('Transaction Execution Profile Form Dispatched Natively!');
  };

  return (
    <div className={styles.wizardContainer}>
      <div className={styles.card}>
        
        {/* Dynamic State Management Command Toolbar */}
        <div className={styles.toolbar}>
          <div className={styles.historyControls}>
            <button type="button" onClick={undo} disabled={!canUndo} className={styles.historyBtn}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg> Undo
            </button>
            <button type="button" onClick={redo} disabled={!canRedo} className={styles.historyBtn}>
              Redo <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <span className={styles.draftBadge}>State Tracked Automatically</span>
        </div>

        {/* Scalable Progress Stepper Header */}
        <div className={styles.stepperHeader}>
          {Array.from({ length: totalSteps }).map((_, i) => {
            const stepNum = i + 1;
            const isActive = currentStep === stepNum;
            const isComplete = currentStep > stepNum;
            
            return (
              <div key={stepNum} className={styles.stepNode}>
                <div className={`${styles.circle} ${isActive ? styles.circleActive : ''} ${isComplete ? styles.circleComplete : ''}`}>
                  {isComplete ? '✓' : stepNum}
                </div>
                <span className={`${styles.stepLabel} ${isActive ? styles.stepLabelActive : ''}`}>
                  {stepNum === 1 ? 'Profile' : stepNum === 2 && totalSteps === 4 ? 'Business' : stepNum === totalSteps ? 'Confirm' : 'Plan'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Content Work Area */}
        <div className={styles.body}>
          <StepContent />
        </div>

        {/* Action Controls Footer */}
        <div className={styles.footer}>
          <button type="button" onClick={prevStep} disabled={currentStep === 1} className={styles.btnSec} style={{ opacity: currentStep === 1 ? 0.3 : 1 }}>
            Back
          </button>
          {currentStep === totalSteps ? (
            <button type="button" onClick={handleFinalSubmit} className={styles.btnPri} style={{ backgroundColor: '#10b981' }}>
              Submit Profile
            </button>
          ) : (
            <button type="button" onClick={nextStep} className={styles.btnPri}>
              Continue
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export const FormWizard = () => (
  <FormProvider>
    <WizardShell />
  </FormProvider>
);