import React from 'react';
import { LayoutProvider, useLayout } from './LayoutContext';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import styles from './Layout.module.css';

const LayoutShell = ({ children }) => {
  const { isSidebarOpen } = useLayout();

  return (
    <div className={styles.shell}>
      <Sidebar />
      <div className={`${styles.mainWrapper} ${isSidebarOpen ? styles.sidebarExpanded : styles.sidebarCollapsed}`}>
        <Header />
        <main className={styles.content}>
          <div className={styles.container}>{children}</div>
        </main>
      </div>
    </div>
  );
};

export const AppLayout = ({ children }) => (
  <LayoutProvider>
    <LayoutShell>{children}</LayoutShell>
  </LayoutProvider>
);