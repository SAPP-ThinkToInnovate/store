import React, { createContext, useContext, useState, useMemo } from 'react';

const GridContext = createContext(undefined);

// Generate dummy high-density performance test-dataset 
const generateData = () => {
  return Array.from({ length: 5000 }).map((_, idx) => ({
    id: `row-${idx}`,
    uuid: `NX-${10000 + idx}`,
    title: `Data Node Operational Matrix Parameter ${idx}`,
    metric: (Math.random() * 100).toFixed(2),
    status: idx % 3 === 0 ? 'Active' : idx % 3 === 1 ? 'Staged' : 'Deprecated'
  }));
};

const INITIAL_COLUMNS = [
  { id: 'uuid', label: 'System UUID' },
  { id: 'title', label: 'Resource Identifier string' },
  { id: 'metric', label: 'Performance Load' },
  { id: 'status', label: 'Lifecycle Status' }
];

export const GridProvider = ({ children }) => {
  const [columns, setColumns] = useState(INITIAL_COLUMNS);
  const [searchTerm, setSearchTerm] = useState('');
  const [draggedColId, setDraggedColId] = useState(null);
  const [scrollTop, setScrollTop] = useState(0);

  const rawData = useMemo(() => generateData(), []);

  // Filter pipeline tracking
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return rawData;
    const lower = searchTerm.toLowerCase();
    return rawData.filter(row => 
      row.title.toLowerCase().includes(lower) || 
      row.uuid.toLowerCase().includes(lower) ||
      row.status.toLowerCase().includes(lower)
    );
  }, [rawData, searchTerm]);

  // Handle HTML5 Drag and Drop column indexes
  const handleColumnMove = (targetColId) => {
    if (!draggedColId || draggedColId === targetColId) return;
    
    const dragIdx = columns.findIndex(c => c.id === draggedColId);
    const targetIdx = columns.findIndex(c => c.id === targetColId);
    
    const nextCols = [...columns];
    const [removed] = nextCols.splice(dragIdx, 1);
    nextCols.splice(targetIdx, 0, removed);
    
    setColumns(nextCols);
  };

  return (
    <GridContext.Provider value={{
      columns, draggedColId, setDraggedColId, handleColumnMove,
      searchTerm, setSearchTerm, filteredData,
      scrollTop, setScrollTop, rowHeight: 48, viewportHeight: 400
    }}>
      {children}
    </GridContext.Provider>
  );
};

export const useGrid = () => {
  const context = useContext(GridContext);
  if (!context) throw new Error('useGrid must be used within a GridProvider');
  return context;
};