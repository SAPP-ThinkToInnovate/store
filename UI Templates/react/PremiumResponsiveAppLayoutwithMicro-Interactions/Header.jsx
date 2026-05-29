import React from 'react';
import { useLayout } from './LayoutContext';
import styles from './Layout.module.css';

export const Header = () => {
  const { toggleSidebar, toggleMobile } = useLayout();

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button onClick={toggleMobile} className={`${styles.iconBtn} ${styles.mobileOnly}`}>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <button onClick={toggleSidebar} className={`${styles.iconBtn} ${styles.desktopOnly}`}>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        
        <div className={styles.searchWrapper}>
          <svg className={styles.searchIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input type="text" placeholder="Search..." className={styles.searchInput} />
        </div>
      </div>

      <div className={styles.headerRight}>
        <button className={styles.iconBtn}>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </button>
        
        <div className={styles.profileZone}>
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar" className={styles.avatar} />
          <div className={styles.profileMeta}>
            <p className={styles.profileName}>Alex Morgan</p>
            <p className={styles.profileRole}>Lead Designer</p>
          </div>
        </div>
      </div>
    </header>
  );
};
