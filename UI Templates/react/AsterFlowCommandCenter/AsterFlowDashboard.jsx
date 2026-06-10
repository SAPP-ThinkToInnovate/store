import styles from "./AsterFlowDashboard.module.css";

const metrics = [
  {
    label: "Net revenue",
    value: "$128.4K",
    delta: "+12.8%",
    tone: "up",
    blurb: "vs last month",
  },
  {
    label: "Active customers",
    value: "18,240",
    delta: "+4.2%",
    tone: "up",
    blurb: "7 day retention improving",
  },
  {
    label: "Churn risk",
    value: "2.1%",
    delta: "-0.6%",
    tone: "down",
    blurb: "highest drop in 14 weeks",
  },
  {
    label: "Conversion rate",
    value: "6.84%",
    delta: "+0.9%",
    tone: "up",
    blurb: "from qualified visits",
  },
];

const trendPoints = [32, 38, 36, 52, 49, 61, 66, 72, 68, 81, 87, 92];
const channelMix = [
  { label: "Product", value: 46 },
  { label: "Sales", value: 31 },
  { label: "Partners", value: 15 },
  { label: "Other", value: 8 },
];
const activities = [
  {
    title: "Enterprise renewal confirmed",
    detail: "Northstar Labs expanded to 420 seats",
    amount: "+$18,400",
    time: "12m ago",
  },
  {
    title: "Usage spike detected",
    detail: "API traffic crossed the weekly forecast by 16%",
    amount: "+3.1M events",
    time: "48m ago",
  },
  {
    title: "At-risk account flagged",
    detail: "Aquila Retail has declining team activity",
    amount: "Needs follow-up",
    time: "1h ago",
  },
  {
    title: "Campaign launch",
    detail: "Lifecycle nurture sequence is now live",
    amount: "+842 leads",
    time: "3h ago",
  },
];

function Sparkline() {
  const max = Math.max(...trendPoints);
  const min = Math.min(...trendPoints);
  const width = 640;
  const height = 220;
  const step = width / (trendPoints.length - 1);

  const coordinates = trendPoints
    .map((point, index) => {
      const x = index * step;
      const normalized = (point - min) / (max - min || 1);
      const y = height - normalized * (height - 24) - 12;
      return `${x},${y}`;
    })
    .join(" ");

  const area = `0,${height} ${coordinates} ${width},${height}`;

  return (
    <div className={styles.chartShell}>
      <div className={styles.chartHeader}>
        <div>
          <p className={styles.eyebrow}>Revenue momentum</p>
          <h2>Quarterly run-rate is outpacing forecast</h2>
        </div>
        <div className={styles.chartBadge}>+18.4% QoQ</div>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className={styles.chart} role="img" aria-label="Revenue trend chart">
        <defs>
          <linearGradient id="asterArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(90, 193, 255, 0.55)" />
            <stop offset="100%" stopColor="rgba(90, 193, 255, 0.04)" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((row) => (
          <line
            key={row}
            x1="0"
            x2={width}
            y1={24 + row * 48}
            y2={24 + row * 48}
            className={styles.gridLine}
          />
        ))}
        <polygon points={area} fill="url(#asterArea)" />
        <polyline points={coordinates} className={styles.trendLine} />
        {trendPoints.map((point, index) => {
          const normalized = (point - min) / (max - min || 1);
          const cx = index * step;
          const cy = height - normalized * (height - 24) - 12;
          return <circle key={point + index} cx={cx} cy={cy} r="5.5" className={styles.trendPoint} />;
        })}
      </svg>
      <div className={styles.chartFooter}>
        <div>
          <span className={styles.footerLabel}>Peak day</span>
          <strong>Wed, 92k sessions</strong>
        </div>
        <div>
          <span className={styles.footerLabel}>Pipeline coverage</span>
          <strong>3.4x against target</strong>
        </div>
      </div>
    </div>
  );
}

export default function AsterFlowDashboard() {
  return (
    <div className={styles.app}>
      <aside className={styles.sidebar}>
        <div>
          <div className={styles.brandMark}>AF</div>
          <div className={styles.brandBlock}>
            <p className={styles.eyebrow}>Aster Flow</p>
            <h1>Command Center</h1>
          </div>
        </div>
        <nav className={styles.nav}>
          <a className={styles.activeNav} href="#overview">Overview</a>
          <a href="#performance">Performance</a>
          <a href="#customers">Customers</a>
          <a href="#activity">Activity</a>
        </nav>
        <div className={styles.sidebarCard}>
          <p className={styles.eyebrow}>Forecast confidence</p>
          <strong>86%</strong>
          <span>Healthy expansion across product-led and outbound channels.</span>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div>
            <p className={styles.eyebrow}>Executive dashboard</p>
            <h2>Growth signals across revenue, retention, and activation</h2>
          </div>
          <div className={styles.topbarActions}>
            <button className={styles.ghostButton} type="button">Export</button>
            <button className={styles.primaryButton} type="button">Create report</button>
          </div>
        </header>

        <section className={styles.metricsGrid} id="overview">
          {metrics.map((metric) => (
            <article key={metric.label} className={styles.metricCard}>
              <div className={styles.metricRow}>
                <span>{metric.label}</span>
                <span className={metric.tone === "down" ? styles.deltaDown : styles.deltaUp}>{metric.delta}</span>
              </div>
              <strong>{metric.value}</strong>
              <p>{metric.blurb}</p>
            </article>
          ))}
        </section>

        <section className={styles.featureGrid} id="performance">
          <Sparkline />

          <div className={styles.mixCard}>
            <div className={styles.chartHeader}>
              <div>
                <p className={styles.eyebrow}>Acquisition mix</p>
                <h2>Channel contribution</h2>
              </div>
            </div>
            <div className={styles.mixBars}>
              {channelMix.map((item) => (
                <div key={item.label} className={styles.mixRow}>
                  <div className={styles.mixMeta}>
                    <span>{item.label}</span>
                    <strong>{item.value}%</strong>
                  </div>
                  <div className={styles.mixTrack}>
                    <div className={styles.mixFill} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.mixSummary}>
              <div>
                <span className={styles.footerLabel}>Fastest growth</span>
                <strong>Partners +22%</strong>
              </div>
              <div>
                <span className={styles.footerLabel}>Efficiency</span>
                <strong>CAC payback 7.8 months</strong>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.activitySection} id="activity">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Operational pulse</p>
              <h2>Recent activity</h2>
            </div>
            <span className={styles.livePill}>Live stream</span>
          </div>
          <div className={styles.activityList}>
            {activities.map((item) => (
              <article key={item.title} className={styles.activityItem}>
                <div className={styles.activityDot} />
                <div className={styles.activityText}>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
                <div className={styles.activityMeta}>
                  <strong>{item.amount}</strong>
                  <span>{item.time}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}