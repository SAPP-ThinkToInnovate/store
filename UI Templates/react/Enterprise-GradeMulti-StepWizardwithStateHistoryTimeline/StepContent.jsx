import React from 'react';
import { useForm } from './FormContext';
import styles from './FormFields.module.css';

export const StepContent = () => {
  const { currentStep, totalSteps, formData, errors, touched, updateFormData, handleBlur } = useForm();

  // STEP 1: Core Account Identification
  if (currentStep === 1) {
    return (
      <div>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Account Category</label>
          <div className={styles.selectionGrid}>
            <button type="button" onClick={() => updateFormData({ accountType: 'personal' })} className={`${styles.selectCard} ${formData.accountType === 'personal' ? styles.selectCardActive : ''}`}>
              <div className={styles.radioCircle}>{formData.accountType === 'personal' && <div className={styles.radioInner} />}</div>
              <div>
                <p className={styles.cardTitle}>Individual</p>
                <p className={styles.cardDesc}>Single user profile space account setup.</p>
              </div>
            </button>
            <button type="button" onClick={() => updateFormData({ accountType: 'business' })} className={`${styles.selectCard} ${formData.accountType === 'business' ? styles.selectCardActive : ''}`}>
              <div className={styles.radioCircle}>{formData.accountType === 'business' && <div className={styles.radioInner} />}</div>
              <div>
                <p className={styles.cardTitle}>Corporate</p>
                <p className={styles.cardDesc}>Multi-seat compliance organization tier configuration.</p>
              </div>
            </button>
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Full Name</label>
          <input type="text" value={formData.fullName} onChange={(e) => updateFormData({ fullName: e.target.value })} onBlur={() => handleBlur('fullName')} className={`${styles.input} ${touched.fullName && errors.fullName ? styles.inputError : ''}`} placeholder="John Doe" />
          {touched.fullName && errors.fullName && <span className={styles.errorMsg}>{errors.fullName}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Email Address</label>
          <input type="email" value={formData.email} onChange={(e) => updateFormData({ email: e.target.value })} onBlur={() => handleBlur('email')} className={`${styles.input} ${touched.email && errors.email ? styles.inputError : ''}`} placeholder="john@example.com" />
          {touched.email && errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
        </div>
      </div>
    );
  }

  // STEP 2: Conditional Business Information Module
  if (currentStep === 2 && formData.accountType === 'business') {
    return (
      <div>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Company Name</label>
          <input type="text" value={formData.companyName} onChange={(e) => updateFormData({ companyName: e.target.value })} onBlur={() => handleBlur('companyName')} className={`${styles.input} ${touched.companyName && errors.companyName ? styles.inputError : ''}`} placeholder="Acme Corp" />
          {touched.companyName && errors.companyName && <span className={styles.errorMsg}>{errors.companyName}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Corporate Tax ID / EIN</label>
          <input type="text" value={formData.taxId} onChange={(e) => updateFormData({ taxId: e.target.value })} onBlur={() => handleBlur('taxId')} className={`${styles.input} ${touched.taxId && errors.taxId ? styles.inputError : ''}`} placeholder="12-3456789" />
          {touched.taxId && errors.taxId && <span className={styles.errorMsg}>{errors.taxId}</span>}
        </div>
      </div>
    );
  }

  // STEP 3 (or 2 for individuals): Subscription Selector Tier
  if (currentStep === totalSteps - 1) {
    return (
      <div className={styles.fieldGroup}>
        <label className={styles.label}>Choose Performance Tier</label>
        <div className={styles.selectionGrid}>
          {['Growth Plan', 'Enterprise Core'].map((planItem, i) => {
            const key = i === 0 ? 'growth' : 'enterprise';
            return (
              <button key={key} type="button" onClick={() => updateFormData({ plan: key })} className={`${styles.selectCard} ${formData.plan === key ? styles.selectCardActive : ''}`}>
                <div className={styles.radioCircle}>{formData.plan === key && <div className={styles.radioInner} />}</div>
                <div>
                  <p className={styles.cardTitle}>{planItem}</p>
                  <p className={styles.cardDesc}>{i === 0 ? '$49/mo optimal deployment settings.' : '$299/mo premium workspace configurations.'}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // FINAL STEP: Verification & Confirmation Abstract Summary Check
  if (currentStep === totalSteps) {
    return (
      <div>
        <div className={styles.summaryBlock}>
          <h3 style={{ marginTop: 0, marginBottom: '16px', fontSize: '16px' }}>Verify Information Parameters</h3>
          <div className={styles.summaryRow}><span className={styles.summaryLabel}>Structure Model</span><span className={styles.summaryValue}>{formData.accountType.toUpperCase()}</span></div>
          <div className={styles.summaryRow}><span className={styles.summaryLabel}>Registrant Operator</span><span className={styles.summaryValue}>{formData.fullName}</span></div>
          <div className={styles.summaryRow}><span className={styles.summaryLabel}>Communication Channel</span><span className={styles.summaryValue}>{formData.email}</span></div>
          {formData.accountType === 'business' && (
            <>
              <div className={styles.summaryRow}><span className={styles.summaryLabel}>Company</span><span className={styles.summaryValue}>{formData.companyName}</span></div>
              <div className={styles.summaryRow}><span className={styles.summaryLabel}>Tax Identifier</span><span className={styles.summaryValue}>{formData.taxId}</span></div>
            </>
          )}
          <div className={styles.summaryRow}><span className={styles.summaryLabel}>Resource Provision Allocation</span><span className={styles.summaryValue}>{formData.plan.toUpperCase()}</span></div>
        </div>

        <div className={`${styles.fieldGroup}`} style={{ marginTop: '24px' }}>
          <label className={styles.checkboxContainer}>
            <input type="checkbox" checked={formData.agreeToTerms} onChange={(e) => updateFormData({ agreeToTerms: e.target.checked })} onBlur={() => handleBlur('agreeToTerms')} className={styles.checkbox} />
            <span>I authorize resource allocation provisioning terms and compliance conditions.</span>
          </label>
          {touched.agreeToTerms && errors.agreeToTerms && <span className={styles.errorMsg}>{errors.agreeToTerms}</span>}
        </div>
      </div>
    );
  }

  return null;
};