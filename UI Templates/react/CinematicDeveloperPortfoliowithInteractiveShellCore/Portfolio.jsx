import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from './portfolioData';
import styles from './Portfolio.module.css';

export default Portfolio = () => {
  const { profile, metrics, projects, terminal } = portfolioData;

  // Shell engine processing state management
  const [inputVal, setInputVal] = useState('');
  const [terminalLines, setTerminalLines] = useState(terminal.welcomeMessage);
  
  const terminalBodyRef = useRef(null);

  // Auto-scroll terminal frame viewports on line addition lines
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalLines]);

  const handleCommandExecution = (e) => {
    if (e.key !== 'Enter') return;

    const command = inputVal.trim().toLowerCase();
    const nextLines = [...terminalLines, `guest@aethershell:~$ ${inputVal}`];

    if (command === 'clear') {
      setTerminalLines([]);
    } else if (terminal.commands[command]) {
      nextLines.push(terminal.commands[command]);
      setTerminalLines(nextLines);
    } else if (command !== '') {
      nextLines.push(`bash: command not found: ${command}. Try typing 'help'.`);
      setTerminalLines(nextLines);
    }

    setInputVal('');
  };

  return (
    <div className={styles.viewportContainer}>
      <div className={styles.canvasGrid}>
        
        {/* HERO FEATURE HEADER BOX */}
        <section className={styles.heroSection}>
          <div className={styles.heroLeft}>
            {profile.availableForHire && (
              <div className={styles.hireBadge}>
                <div className={styles.pulseDot} />
                Active & Available for System Design Architecture
              </div>
            )}
            <h1 className={styles.nameHeader}>{profile.name}</h1>
            <p className={styles.titleHeader}>{profile.title}</p>
            <p className={styles.descText}>{profile.subtitle}</p>
            
            <div className={styles.metricGroup}>
              {metrics.map((m, idx) => (
                <div key={idx} className={styles.metricNode}>
                  <span className={styles.metricValue}>{m.value}</span>
                  <span className={styles.metricLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.avatarFrame}>
            <img src={profile.avatarUrl} alt={profile.name} className={styles.avatarImage} />
          </div>
        </section>

        {/* INTERACTIVE CORE INTERFACE TERMINAL BOX */}
        <section className={styles.terminalCard}>
          <div className={styles.terminalHeader}>
            <div className={styles.windowControls}>
              <div className={`${styles.dot} ${styles.dotRed}`} />
              <div className={`${styles.dot} ${styles.dotYellow}`} />
              <div className={`${styles.dot} ${styles.dotGreen}`} />
            </div>
            <span className={styles.terminalTitle}>diagnostics@node:~</span>
            <div style={{ width: 44 }} />
          </div>

          <div className={styles.terminalBody} ref={terminalBodyRef}>
            {terminalLines.map((line, i) => (
              <div key={i} className={styles.historyRow}>{line}</div>
            ))}
            
            <div className={styles.promptRow}>
              <span className={styles.promptSign}>guest@aethershell:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleCommandExecution}
                className={styles.terminalInput}
                autoFocus
                placeholder="type commands here..."
              />
            </div>
          </div>
        </section>

        {/* PROJECT GRID SHEET SECTION */}
        <section>
          <h2 className={styles.sectionTitle}>Featured Operational Assets</h2>
          <div className={styles.projectGrid}>
            {projects.map((p) => (
              <div key={p.id} className={styles.projectCard}>
                <div className={styles.imageFrame}>
                  <img src={p.image} alt={p.title} className={styles.projectImage} />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.projectCategory}>{p.category}</span>
                  <h3 className={styles.projectTitle}>{p.title}</h3>
                  <p className={styles.projectDesc}>{p.description}</p>
                  
                  <div className={styles.tagArray}>
                    {p.tags.map((t, idx) => (
                      <span key={idx} className={styles.tagPill}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};