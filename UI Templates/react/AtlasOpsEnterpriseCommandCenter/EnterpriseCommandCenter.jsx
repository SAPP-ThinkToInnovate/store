import React from 'react';
import styles from './EnterpriseCommandCenter.module.css';

const metrics = [
  { label: 'Net revenue', value: '$842.9K', delta: '+12.4%', tone: 'positive' },
  { label: 'Active customers', value: '18,420', delta: '+8.1%', tone: 'positive' },
  { label: 'Fulfillment SLA', value: '98.7%', delta: '+1.6%', tone: 'positive' },
  { label: 'Refund exposure', value: '1.3%', delta: '-0.4%', tone: 'negative' }
];

const revenueSeries = [42, 48, 54, 51, 66, 72, 78, 74, 88, 94, 102, 110];

const orders = [
  { id: 'ORD-1042', customer: 'Northstar Labs', region: 'United States', value: '$18,240', status: 'Shipped' },
  { id: 'ORD-1038', customer: 'BluePeak Retail', region: 'Germany', value: '$12,880', status: 'Review' },
  { id: 'ORD-1036', customer: 'Helio Systems', region: 'Singapore', value: '$9,460', status: 'Paid' },
  { id: 'ORD-1031', customer: 'Aster Health', region: 'Canada', value: '$21,100', status: 'Processing' }
];

const tasks = [
  { title: 'Migration readiness', detail: '27 of 32 services compliant', progress: 84 },
  { title: 'Forecast accuracy', detail: 'Model uplift from last cycle', progress: 71 },
  { title: 'Q3 expansion plan', detail: 'Stakeholder approvals in flight', progress: 58 }
];

const team = [
  { name: 'Maya Chen', role: 'Revenue Operations', score: '94', accent: 'gold' },
  { name: 'Jordan Alvarez', role: 'Regional Fulfillment', score: '89', accent: 'cyan' },
  { name: 'Amira Patel', role: 'Customer Success', score: '91', accent: 'coral' }
];

const notifications = [
  { title: 'Enterprise renewal at risk', time: '5 min ago', level: 'high' },
  { title: 'New anomaly detected in EMEA orders', time: '22 min ago', level: 'medium' },
  { title: 'Warehouse utilization returned to target', time: '1 hr ago', level: 'low' }
];

function RevenueChart() {
  const width = 620;
  const height = 250;
  const padding = 22;
  const max = Math.max.apply(null, revenueSeries);
  const min = Math.min.apply(null, revenueSeries);
  const stepX = (width - padding * 2) / (revenueSeries.length - 1);
  const points = revenueSeries
    .map(function(point, index) {
      const x = padding + index * stepX;
      const y = height - padding - ((point - min) / (max - min || 1)) * (height - padding * 2);
      return x + ',' + y;
    })
    .join(' ');

  const area = points + ' ' + (width - padding) + ',' + (height - padding) + ' ' + padding + ',' + (height - padding);

  return (
    <div className={styles.chartCard}>
      <div className={styles.sectionHeader}>
        <div>
          <p className={styles.eyebrow}>Revenue trend</p>
          <h3>Performance over the last 12 months</h3>
        </div>
        <div className={styles.chartLegend}>
          <span><i className={styles.legendDot} />Actual revenue</span>
          <strong>$1.14M projected</strong>
        </div>
      </div>
      <svg viewBox="0 0 620 250" className={styles.chart} role="img" aria-label="Revenue trend chart">
        <defs>
          <linearGradient id="revenueArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(111, 214, 255, 0.48)" />
            <stop offset="100%" stopColor="rgba(111, 214, 255, 0.02)" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map(function(line) {
          const y = padding + ((height - padding * 2) / 3) * line;
          return <line key={line} x1={padding} y1={y} x2={width - padding} y2={y} className={styles.gridLine} />;
        })}
        <polygon points={area} fill="url(#revenueArea)" />
        <polyline points={points} fill="none" className={styles.chartStroke} />
        {revenueSeries.map(function(point, index) {
          const x = padding + index * stepX;
          const y = height - padding - ((point - min) / (max - min || 1)) * (height - padding * 2);
          return <circle key={point + '-' + index} cx={x} cy={y} r="5" className={styles.chartPoint} />;
        })}
      </svg>
      <div className={styles.chartMonths}>
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(function(month) {
          return <span key={month}>{month}</span>;
        })}
      </div>
    </div>
  );
}

function IconGrid() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z" />
    </svg>
  );
}

function IconReport() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 3h9l5 5v13H6zm8 1.5V9h4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 13h6M9 17h6M9 9h2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconPeople() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 19a4 4 0 0 0-8 0M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM18.5 19a3 3 0 0 0-2.4-2.94M17 4.8a3.4 3.4 0 0 1 0 6.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGear() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 1 0 12 8.5z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M19 12a7.3 7.3 0 0 0-.1-1.1l2-1.5-2-3.5-2.4 1a8.2 8.2 0 0 0-1.9-1.1L14.3 3h-4.6l-.3 2.8A8.2 8.2 0 0 0 7.5 6.9l-2.4-1-2 3.5 2 1.5A7.3 7.3 0 0 0 5 12c0 .37.03.73.1 1.08l-2 1.52 2 3.5 2.4-1c.58.46 1.22.83 1.9 1.1l.3 2.8h4.6l.3-2.8c.68-.27 1.32-.64 1.9-1.1l2.4 1 2-3.5-2-1.52c.07-.35.1-.71.1-1.08z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const navigation = [
  { label: 'Overview', icon: IconGrid, active: true },
  { label: 'Reports', icon: IconReport, active: false },
  { label: 'Teams', icon: IconPeople, active: false },
  { label: 'Settings', icon: IconGear, active: false }
];

function StatusBadge(props) {
  return <span className={styles['status' + props.status]}>{props.status}</span>;
}

export default function EnterpriseCommandCenter() {
  return (
    <div className={styles.appShell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandMark}>A</div>
          <div>
            <strong>Atlas Ops</strong>
            <span>Admin command center</span>
          </div>
        </div>

        <nav className={styles.nav}>
          {navigation.map(function(item) {
            const Icon = item.icon;
            return (
              <button key={item.label} className={item.active ? styles.navItemActive : styles.navItem}>
                <Icon />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className={styles.sidebarCard}>
          <p className={styles.eyebrow}>Quarter target</p>
          <h3>$4.8M booked</h3>
          <p>82% of regional goal achieved with pipeline quality trending up.</p>
          <div className={styles.goalBar}>
            <span style={{ width: '82%' }} />
          </div>
        </div>
      </aside>

      <main className={styles.mainPanel}>
        <header className={styles.topbar}>
          <div>
            <p className={styles.eyebrow}>Executive summary</p>
            <h1>Revenue operations dashboard</h1>
          </div>
          <div className={styles.topbarActions}>
            <label className={styles.search}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path d="m16 16 4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <input type="search" placeholder="Search customers, orders, alerts" aria-label="Search dashboard" />
            </label>
            <button className={styles.primaryButton}>Export report</button>
            <div className={styles.avatarCluster}>
              <span className={styles.avatarPrimary}>SC</span>
            </div>
          </div>
        </header>

        <section className={styles.metricsGrid}>
          {metrics.map(function(metric) {
            return (
              <article key={metric.label} className={styles.metricCard}>
                <p>{metric.label}</p>
                <strong>{metric.value}</strong>
                <span className={metric.tone === 'positive' ? styles.deltaPositive : styles.deltaNegative}>{metric.delta} vs last month</span>
              </article>
            );
          })}
        </section>

        <section className={styles.heroGrid}>
          <RevenueChart />

          <div className={styles.stackColumn}>
            <article className={styles.summaryCard}>
              <div className={styles.sectionHeader}>
                <div>
                  <p className={styles.eyebrow}>Task progress</p>
                  <h3>Operational milestones</h3>
                </div>
                <button className={styles.ghostButton}>View all</button>
              </div>
              <div className={styles.taskList}>
                {tasks.map(function(task) {
                  return (
                    <div key={task.title} className={styles.taskRow}>
                      <div>
                        <strong>{task.title}</strong>
                        <span>{task.detail}</span>
                      </div>
                      <div className={styles.progressMeta}>
                        <span>{task.progress}%</span>
                        <div className={styles.progressTrack}><i style={{ width: task.progress + '%' }} /></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>

            <article className={styles.summaryCard}>
              <div className={styles.sectionHeader}>
                <div>
                  <p className={styles.eyebrow}>Team pulse</p>
                  <h3>Regional leads</h3>
                </div>
                <span className={styles.livePill}>Live</span>
              </div>
              <div className={styles.teamList}>
                {team.map(function(member) {
                  return (
                    <div key={member.name} className={styles.teamRow}>
                      <div className={styles.teamIdentity}>
                        <span className={styles['avatar' + member.accent]}>{member.name.split(' ').map(function(part) { return part[0]; }).join('')}</span>
                        <div>
                          <strong>{member.name}</strong>
                          <span>{member.role}</span>
                        </div>
                      </div>
                      <div className={styles.scoreBubble}>{member.score}</div>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>
        </section>

        <section className={styles.lowerGrid}>
          <article className={styles.tableCard}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.eyebrow}>Recent orders</p>
                <h3>High-value transactions</h3>
              </div>
              <button className={styles.ghostButton}>Open pipeline</button>
            </div>
            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Customer</th>
                    <th>Region</th>
                    <th>Value</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(function(order) {
                    return (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.region}</td>
                        <td>{order.value}</td>
                        <td><StatusBadge status={order.status} /></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </article>

          <article className={styles.notificationCard}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.eyebrow}>Notifications</p>
                <h3>Priority queue</h3>
              </div>
              <span className={styles.badgeCount}>3</span>
            </div>
            <div className={styles.notificationList}>
              {notifications.map(function(note) {
                return (
                  <div key={note.title} className={styles.notificationRow}>
                    <span className={styles['level' + note.level]} />
                    <div>
                      <strong>{note.title}</strong>
                      <span>{note.time}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.insightPanel}>
              <p className={styles.eyebrow}>AI insight</p>
              <h4>Conversion velocity is strongest in enterprise renewals.</h4>
              <p>Recommend shifting two account specialists to EMEA in the next 48 hours to protect forecast coverage.</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
