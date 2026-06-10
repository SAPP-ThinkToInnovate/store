import React from 'react';
import styles from './CinematicPortfolio.module.css';

const featuredProjects = [
  {
    title: 'Aurora Commerce',
    category: 'Brand system + storefront',
    description: 'An immersive retail platform balancing editorial storytelling with fast product discovery.',
    accent: 'Linear gradient(135deg, #ff8a5b 0%, #ffd86b 100%)'
  },
  {
    title: 'Northstar Finance',
    category: 'Data-rich product design',
    description: 'A decision-support dashboard designed to make complex capital flows feel legible and calm.',
    accent: 'Linear gradient(135deg, #6dd5ed 0%, #2193b0 100%)'
  },
  {
    title: 'Studio Meridian',
    category: 'Creative portfolio direction',
    description: 'A visual identity and site language built around movement, texture, and deliberate restraint.',
    accent: 'Linear gradient(135deg, #d66efd 0%, #7a5cff 100%)'
  }
];

const skillGroups = [
  ['Product Strategy', 'Interaction Design', 'Motion Systems'],
  ['React', 'Design Systems', 'Creative Development'],
  ['Prototyping', 'Art Direction', 'Performance UX']
];

const stats = [
  { value: '9+', label: 'Years shaping digital products' },
  { value: '42', label: 'Launches across startup and enterprise' },
  { value: '18', label: 'Cross-functional teams led end-to-end' }
];

export default function CinematicPortfolio() {
  return (
    <div className={styles.page}>
      <div className={styles.noise} />
      <div className={styles.orbOne} />
      <div className={styles.orbTwo} />

      <header className={styles.hero}>
        <nav className={styles.nav}>
          <span className={styles.brand}>Suriya Rao</span>
          <div className={styles.navLinks}>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>Product designer • creative developer • visual storyteller</div>
          <h1>Building digital experiences with atmosphere, motion, and precision.</h1>
          <p className={styles.heroCopy}>
            I design polished interfaces and identity-driven products that feel as expressive as they are usable. The work blends product thinking, motion systems, and front-end craft.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryAction} href="#work">View selected work</a>
            <a className={styles.secondaryAction} href="#contact">Start a conversation</a>
          </div>
        </div>

        <div className={styles.heroPanel}>
          <div className={styles.panelLabel}>Currently shaping</div>
          <div className={styles.panelTitle}>Next-generation portfolio systems and elegant product surfaces</div>
          <div className={styles.panelMeta}>Available for freelance, consulting, and in-house leadership roles.</div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.metrics} aria-label="Key metrics">
          {stats.map((stat) => (
            <article key={stat.label} className={styles.metricCard}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section className={styles.section} id="work">
          <div className={styles.sectionIntro}>
            <span>Featured work</span>
            <h2>Projects with a clear visual point of view.</h2>
          </div>
          <div className={styles.projectGrid}>
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className={styles.projectCard}
                style={{ '--card-accent': project.accent, animationDelay: `${index * 120}ms` }}
              >
                <div className={styles.projectGlow} />
                <div className={styles.projectIndex}>0{index + 1}</div>
                <h3>{project.title}</h3>
                <p className={styles.projectCategory}>{project.category}</p>
                <p className={styles.projectDescription}>{project.description}</p>
                <button type="button" className={styles.projectLink}>Case study</button>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.storySection} id="about">
          <div className={styles.storyCard}>
            <span>About</span>
            <h2>Designing for emotion without losing clarity.</h2>
            <p>
              My process starts with narrative: what a product should feel like, what it should communicate before a user reads a single word, and how motion can reinforce confidence rather than distract from it.
            </p>
            <p>
              I work across strategy, interface systems, and front-end implementation to bring that narrative into something tangible, resilient, and launch-ready.
            </p>
          </div>

          <div className={styles.skillsCard}>
            <span>Capabilities</span>
            <div className={styles.skillColumns}>
              {skillGroups.map((group, groupIndex) => (
                <ul key={groupIndex}>
                  {group.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              ))}
            </div>
            <blockquote>
              "Suriya brings cinematic taste to product design, then backs it up with systems thinking and execution discipline."
            </blockquote>
          </div>
        </section>

        <section className={styles.contactSection} id="contact">
          <div>
            <span>Contact</span>
            <h2>Looking for a portfolio that feels authored, not assembled?</h2>
          </div>
          <a className={styles.contactButton} href="mailto:hello@suriyarao.dev">hello@suriyarao.dev</a>
        </section>
      </main>
    </div>
  );
}
