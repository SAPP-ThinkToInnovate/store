import React from 'react';
import { useLayout } from './LayoutContext';
import styles from './Sidebar.module.css';

const navItems = [
  { label: 'Dashboard', active: true, svgPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { label: 'Analytics', svgPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { label: 'Team', svgPath: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
  { label: 'Settings', svgPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }
];

export const Sidebar = () => {
  const { isSidebarOpen, isMobileOpen, toggleMobile } = useLayout();

  const SidebarContent = () => (
    <div className={styles.innerContent}>
      <div>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <div className={styles.logo}>Ω</div>
            <span className={`${styles.brandName} ${!isSidebarOpen ? styles.hiddenText : ''}`}>NexusApp</span>
          </div>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item, index) => (
            <button key={index} className={`${styles.navLink} ${item.active ? styles.activeLink : ''}`}>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={item.svgPath} />
              </svg>
              <span className={!isSidebarOpen ? styles.hiddenText : ''}>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
      
      {isSidebarOpen && (
        <div className={styles.widget}>
          <p className={styles.widgetTitle}>Storage Status</p>
          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop view */}
      <aside className={`${styles.asideDesktop} ${isSidebarOpen ? styles.expanded : styles.collapsed}`}>
        <SidebarContent />
      </aside>

      {/* Mobile Drawer view */}
      {isMobileOpen && <div onClick={toggleMobile} className={styles.overlay} />}
      <aside className={`${styles.asideMobile} ${isMobileOpen ? styles.open : styles.closed}`}>
        <SidebarContent />
      </aside>
    </>
  );
};
