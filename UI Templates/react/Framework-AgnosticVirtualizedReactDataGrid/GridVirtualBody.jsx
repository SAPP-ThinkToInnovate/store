import React from 'react';
import { useGrid } from './GridContext';
import styles from './GridContainer.module.css';
import cellStyles from './GridCells.module.css';

export const GridVirtualBody = () => {
  const { filteredData, columns, scrollTop, setScrollTop, rowHeight, viewportHeight } = useGrid();

  const totalHeight = filteredData.length * rowHeight;

  // Compute indices mathematically based on top position
  const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - 2);
  const endIndex = Math.min(filteredData.length - 1, Math.floor((scrollTop + viewportHeight) / rowHeight) + 2);

  const visibleRows = filteredData.slice(startIndex, endIndex + 1);
  const offsetY = startIndex * rowHeight;

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div className={styles.scrollContainer} style={{ height: viewportHeight }} onScroll={handleScroll}>
      {/* Absolute spacer pushes container scrollbars to accurate mock dimension sizes */}
      <div className={styles.totalHeightSpacer} style={{ height: totalHeight }} />
      
      <div className={styles.transformCanvas} style={{ transform: `translateY(${offsetY}px)` }}>
        {visibleRows.map((row) => (
          <div key={row.id} className={cellStyles.row} style={{ height: rowHeight }}>
            {columns.map((col) => (
              <div key={col.id} className={cellStyles.cell}>
                {col.id === 'status' ? (
                  <span className={`${cellStyles.badge} ${cellStyles[row[col.id]]}`}>
                    {row[col.id]}
                  </span>
                ) : (
                  row[col.id]
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};