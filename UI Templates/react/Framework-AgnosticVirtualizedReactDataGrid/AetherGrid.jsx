import React from 'react';
import { GridProvider, useGrid } from './GridContext';
import { GridHeader } from './GridHeader';
import { GridVirtualBody } from './GridVirtualBody';
import styles from './GridContainer.module.css';

const GridShell = () => {
  const { searchTerm, setSearchTerm, filteredData } = useGrid();

  return (
    <div className={styles.gridWrapper}>
      <div className={styles.searchToolbar}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Filter data node allocations instantly..."
          className={styles.searchInput}
        />
        <span style={{ marginLeft: '16px', fontSize: '13px', color: '#64748b' }}>
          Showing <strong>{filteredData.length}</strong> matrix entries
        </span>
      </div>
      
      <div style={{ position: 'relative' }}>
        <GridHeader />
        <GridVirtualBody />
      </div>
    </div>
  );
};

export default AetherGrid = () => (
  <GridProvider>
    <GridShell />
  </GridProvider>
);