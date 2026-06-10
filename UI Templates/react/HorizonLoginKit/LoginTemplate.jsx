import { useMemo, useState } from "react";
import styles from "./LoginTemplate.module.css";

const defaultFields = [
  { name: "email", type: "email", label: "Email", placeholder: "you@example.com", required: true },
  { name: "password", type: "password", label: "Password", placeholder: "Enter your password", required: true }
];

export default function LoginTemplate({
  title = "Welcome back",
  subtitle = "Sign in to continue",
  brand = "Acme Studio",
  heroImage = "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80",
  sideImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  fields = defaultFields,
  submitText = "Sign in",
  secondaryText = "Create account",
  onSubmit
}) {
  const initialForm = useMemo(() => {
    const data = {};
    fields.forEach((f) => {
      data[f.name] = "";
    });
    return data;
  }, [fields]);

  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        console.log("Login payload:", formData);
        await new Promise((resolve) => setTimeout(resolve, 700));
        alert("Demo submit complete. Replace onSubmit with real API call.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <main className={styles.shell}>
        <section className={styles.visualPanel}>
          <img className={styles.visualImage} src={heroImage} alt="Workspace preview" />
          <div className={styles.visualOverlay}>
            <p className={styles.brandBadge}>{brand}</p>
            <h2>Build faster with a focused workflow</h2>
            <p>One reusable login template, easy to customize for any project.</p>
          </div>
        </section>

        <section className={styles.formPanel}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <img className={styles.avatarImage} src={sideImage} alt="Team collaboration" />
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              {fields.map((field) => (
                <label key={field.name} className={styles.field}>
                  <span>{field.label}</span>
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    autoComplete={field.name}
                  />
                </label>
              ))}

              <div className={styles.optionsRow}>
                <label className={styles.checkbox}>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <button type="button" className={styles.linkBtn}>
                  Forgot password?
                </button>
              </div>

              <button className={styles.primaryBtn} type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Signing in..." : submitText}
              </button>

              <button type="button" className={styles.secondaryBtn}>
                {secondaryText}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}