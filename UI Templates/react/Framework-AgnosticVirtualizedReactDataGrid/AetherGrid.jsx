import React from 'react';
import { GridProvider, useGrid } from './GridContext';
import { GridHeader } from './GridHeader';
import { GridVirtualBody } from './GridVirtualBody';
import styles from './GridContainer.module.css';

const GridShell = () => {
  const { searchTerm, setSearchTerm, filteredData } = useGrid();

  return (
    <div className={styles.gridWrapper}>
      {/* Enhanced Custom Header Toolbar */}
      <div className={styles.searchToolbar}>
        <div className={styles.searchGroup}>
          <svg className={styles.searchIcon} width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search systems, resources, indices..."
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.metaCounter}>
          Database Inventory: <strong>{filteredData.length}</strong> allocations logged
        </div>
      </div>
      
      <div style={{ position: 'relative' }}>
        <GridHeader />
        <GridVirtualBody />
      </div>
    </div>
  );
};

export const AetherGrid = () => (
  <GridProvider>
    <GridShell />
  </GridProvider>
);
