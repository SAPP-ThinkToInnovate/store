import React, { useState } from 'react';
import { useGrid } from './GridContext';
import styles from './GridContainer.module.css';
import cellStyles from './GridCells.module.css';

export const GridHeader = () => {
  const { columns, draggedColId, setDraggedColId, handleColumnMove } = useGrid();
  const [dragOverId, setDragOverId] = useState(null);

  return (
    <div className={styles.stickyHeaderRow}>
      {columns.map((col) => {
        const isDragging = col.id === draggedColId;
        const isDragOver = col.id === dragOverId && !isDragging;

        return (
          <div
            key={col.id}
            draggable
            onDragStart={() => setDraggedColId(col.id)}
            onDragEnd={() => { setDraggedColId(null); setDragOverId(null); }}
            onDragOver={(e) => { e.preventDefault(); setDragOverId(col.id); }}
            onDragLeave={() => setDragOverId(null)}
            onDrop={() => { handleColumnMove(col.id); setDragOverId(null); }}
            className={`
              ${cellStyles.headerCell} 
              ${isDragging ? cellStyles.dragging : ''} 
              ${isDragOver ? cellStyles.dragOver : ''}
            `}
          >
            {col.label}
          </div>
        );
      })}
    </div>
  );
};
