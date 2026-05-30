import React, { useState } from 'react';
import { homeData } from './homeData';
import styles from './BytesHome.module.css';

export default BytesHome = () => {
  const { resident, systemMetrics, rooms: initialRooms, quickSwitches: initialSwitches } = homeData;

  // React State Primaries for Real-time Control loops
  const [rooms, setRooms] = useState(initialRooms);
  const [switches, setSwitches] = useState(initialSwitches);

  // Dynamic Room Temperature Control Slider handlers
  const handleTempAdjust = (roomId, nextValue) => {
    setRooms(prevRooms =>
      prevRooms.map(room =>
        room.id === roomId ? { ...room, temperature: parseInt(nextValue, 10) } : room
      )
    );
  };

  // Toggle Switch Engine Logic
  const handleSwitchToggle = (switchId) => {
    setSwitches(prevSwitches =>
      prevSwitches.map(sw =>
        sw.id === switchId ? { ...sw, active: !sw.active } : sw
      )
    );
  };

  // Aggregated Value Calculation (Computed on every state shift loop)
  const activeGridLoadCount = switches.filter(s => s.active).length;

  return (
    <div className={styles.dashboardViewport}>
      <div className={styles.layoutContainer}>
        
        {/* --- BIOMETRIC PANEL PROFILE STATUS SIDEBAR --- */}
        <aside className={styles.biometricPanel}>
          <div className={styles.profileCard}>
            <div className={styles.avatarRing}>
              <img src={resident.avatarUrl} alt={resident.name} className={styles.avatarImg} />
            </div>
            <h2 className={styles.userName}>{resident.name}</h2>
            <span className={styles.clearanceBadge}>{resident.securityClearance}</span>
            <p style={{ fontSize: '13px', color: '#64748b', marginTop: '12px' }}>{resident.homeName}</p>
          </div>

          <div className={styles.telemetryList}>
            <div className={styles.telemetryNode}>
              <div className={styles.telLabel}>Mesh Gateway Status</div>
              <div className={styles.telValue} style={{ color: '#10b981' }}>{systemMetrics.meshStatus}</div>
            </div>
            <div className={styles.telemetryNode}>
              <div className={styles.telLabel}>Active Processing Nodes</div>
              <div className={styles.telValue}>{systemMetrics.activeNodes} Nodes Online</div>
            </div>
            <div className={styles.telemetryNode}>
              <div className={styles.telLabel}>Aggregated Operational Loads</div>
              <div className={styles.telValue}>{activeGridLoadCount} Core Systems Powered</div>
            </div>
          </div>
        </aside>

        {/* --- MAIN INTERACTIVE CONTROL CANVAS MATRICES --- */}
        <main className={styles.matrixCanvas}>
          
          {/* ROOM MATRIX SECTION */}
          <section>
            <h3 className={styles.sectionTitle}>Environmental Room Vectors</h3>
            <div className={styles.roomGrid}>
              {rooms.map((room) => (
                <div key={room.id} className={styles.roomCard}>
                  <div className={styles.roomHeader}>
                    <div>
                      <h4 className={styles.roomName}>{room.name}</h4>
                      <span className={styles.hvacModeBadge}>HVAC: {room.hvacMode}</span>
                    </div>
                    <span style={{ fontSize: '18px' }}>{room.isSecured ? '🔒' : '🔓'}</span>
                  </div>

                  <div className={styles.climateKnobArea}>
                    <div className={styles.tempReadout}>{room.temperature}°C</div>
                    <input
                      type="range"
                      min="15"
                      max="30"
                      value={room.temperature}
                      onChange={(e) => handleTempAdjust(room.id, e.target.value)}
                      className={styles.tempSlider}
                    />
                  </div>

                  <div className={styles.statRow}>
                    <span>Relative Humidity</span>
                    <span style={{ color: '#fff', fontWeight: '500' }}>{room.humidity}%</span>
                  </div>
                  <div className={styles.statRow}>
                    <span>Luminous Intensity</span>
                    <span style={{ color: '#fff', fontWeight: '500' }}>{room.lightLevel} lx</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* QUANTUM HARDWARE QUICK SWITCHES SECTION */}
          <section>
            <h3 className={styles.sectionTitle}>Core Infrastructure Allocations</h3>
            <div className={styles.switchGrid}>
              {switches.map((sw) => (
                <div
                  key={sw.id}
                  onClick={() => handleSwitchToggle(sw.id)}
                  className={sw.active ? styles.switchCardActive : styles.switchCard}
                >
                  <div>
                    <div className={styles.switchLabel}>{sw.label}</div>
                    <div className={styles.switchZone}>{sw.zone}</div>
                  </div>
                  
                  <div className={sw.active ? styles.toggleTrackActive : styles.toggleTrack}>
                    <div className={styles.toggleHandle} />
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>

      </div>
    </div>
  );
};