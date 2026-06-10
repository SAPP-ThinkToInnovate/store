import React, { useMemo, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Bell, CreditCard, DollarSign, Filter, PieChart as PieChartIcon, Search, TrendingUp, Wallet } from 'lucide-react';
import { Area, AreaChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, BarChart, Bar } from 'recharts';
import styles from './FinanceDashboard.module.css';

const revenueSeries = [
  { month: 'Jan', income: 124000, spend: 86000 },
  { month: 'Feb', income: 138000, spend: 91000 },
  { month: 'Mar', income: 149000, spend: 96000 },
  { month: 'Apr', income: 161000, spend: 103000 },
  { month: 'May', income: 172000, spend: 107000 },
  { month: 'Jun', income: 186000, spend: 112000 }
];

const allocation = [
  { name: 'Equities', value: 42, color: '#0f766e' },
  { name: 'Bonds', value: 24, color: '#14b8a6' },
  { name: 'Crypto', value: 18, color: '#f59e0b' },
  { name: 'Cash', value: 16, color: '#1f2937' }
];

const transactions = [
  { title: 'Stripe settlement', tag: 'Income', amount: '+$24,300', status: 'Cleared' },
  { title: 'AWS infrastructure', tag: 'Expense', amount: '-$4,280', status: 'Scheduled' },
  { title: 'Vendor payroll', tag: 'Expense', amount: '-$18,600', status: 'Cleared' },
  { title: 'Enterprise renewal', tag: 'Income', amount: '+$42,900', status: 'Pending' }
];

const watchlist = [
  { symbol: 'NVDA', price: '$132.48', change: '+6.4%' },
  { symbol: 'MSFT', price: '$468.10', change: '+1.2%' },
  { symbol: 'BTC', price: '$68,220', change: '+3.7%' },
  { symbol: 'ETH', price: '$3,840', change: '-0.9%' }
];

function Money({ value }) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
}

export default function FinanceDashboard() {
  const [range, setRange] = useState('6M');

  const totals = useMemo(() => {
    const income = revenueSeries.reduce((sum, item) => sum + item.income, 0);
    const spend = revenueSeries.reduce((sum, item) => sum + item.spend, 0);
    return {
      income,
      spend,
      balance: income - spend
    };
  }, []);

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div>
          <p className={styles.brandEyebrow}>Northstar Capital</p>
          <h1 className={styles.brand}>Treasury OS</h1>
        </div>
        <nav className={styles.nav}>
          {['Overview', 'Treasury', 'Forecasting', 'Investments', 'Risk', 'Compliance'].map((item, index) => (
            <button key={item} className={index === 0 ? styles.navItemActive : styles.navItem}>
              {item}
            </button>
          ))}
        </nav>
        <div className={styles.sidebarCard}>
          <p className={styles.sidebarLabel}>Liquidity score</p>
          <h2>94 / 100</h2>
          <p className={styles.sidebarText}>Cash runway covers 18.4 months with current burn trajectory.</p>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div>
            <p className={styles.sectionEyebrow}>Enterprise finance cockpit</p>
            <h2 className={styles.heading}>Financial performance at a glance</h2>
          </div>
          <div className={styles.topbarActions}>
            <label className={styles.search}>
              <Search size={16} />
              <input placeholder="Search accounts, payments, holdings" />
            </label>
            <button className={styles.iconButton}><Bell size={18} /></button>
            <button className={styles.primaryButton}>Generate report</button>
          </div>
        </header>

        <section className={styles.hero}>
          <div className={styles.kpiGrid}>
            <article className={styles.kpiCard}>
              <div className={styles.kpiIcon}><Wallet size={18} /></div>
              <span className={styles.kpiLabel}>Net treasury balance</span>
              <strong>{Money({ value: totals.balance })}</strong>
              <span className={styles.kpiTrendPositive}><ArrowUpRight size={16} /> 8.6% vs last period</span>
            </article>
            <article className={styles.kpiCard}>
              <div className={styles.kpiIcon}><DollarSign size={18} /></div>
              <span className={styles.kpiLabel}>Gross income</span>
              <strong>{Money({ value: totals.income })}</strong>
              <span className={styles.kpiTrendPositive}><ArrowUpRight size={16} /> 14 high-value contracts</span>
            </article>
            <article className={styles.kpiCard}>
              <div className={styles.kpiIcon}><CreditCard size={18} /></div>
              <span className={styles.kpiLabel}>Operating spend</span>
              <strong>{Money({ value: totals.spend })}</strong>
              <span className={styles.kpiTrendNegative}><ArrowDownRight size={16} /> 3.1% above target</span>
            </article>
            <article className={styles.kpiCard}>
              <div className={styles.kpiIcon}><TrendingUp size={18} /></div>
              <span className={styles.kpiLabel}>Forecast confidence</span>
              <strong>97.2%</strong>
              <span className={styles.kpiTrendPositive}><ArrowUpRight size={16} /> ML model refreshed today</span>
            </article>
          </div>

          <article className={styles.revenuePanel}>
            <div className={styles.panelHeader}>
              <div>
                <p className={styles.panelEyebrow}>Cashflow</p>
                <h3>Income vs spend trajectory</h3>
              </div>
              <div className={styles.segmented}>
                {['1M', '3M', '6M', 'YTD'].map((option) => (
                  <button
                    key={option}
                    className={range === option ? styles.segmentActive : styles.segment}
                    onClick={() => setRange(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.chartWrap}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueSeries}>
                  <defs>
                    <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="spend" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.28} />
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} stroke="rgba(148, 163, 184, 0.16)" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis tickFormatter={(value) => '$' + value / 1000 + 'k'} tickLine={false} axisLine={false} />
                  <Tooltip formatter={(value) => Money({ value })} />
                  <Area type="monotone" dataKey="income" stroke="#14b8a6" strokeWidth={3} fill="url(#income)" />
                  <Area type="monotone" dataKey="spend" stroke="#f97316" strokeWidth={3} fill="url(#spend)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </article>
        </section>

        <section className={styles.contentGrid}>
          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <p className={styles.panelEyebrow}>Allocation</p>
                <h3>Portfolio mix</h3>
              </div>
              <button className={styles.ghostButton}><PieChartIcon size={16} /> Rebalance</button>
            </div>
            <div className={styles.donutSection}>
              <div className={styles.donutChart}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={allocation} innerRadius={58} outerRadius={92} dataKey="value" paddingAngle={4}>
                      {allocation.map((item) => (
                        <Cell key={item.name} fill={item.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => value + '%'} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className={styles.legend}>
                {allocation.map((item) => (
                  <div key={item.name} className={styles.legendItem}>
                    <span className={styles.legendDot} style={{ background: item.color }} />
                    <div>
                      <strong>{item.name}</strong>
                      <p>{item.value}% allocation</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <p className={styles.panelEyebrow}>Pipeline</p>
                <h3>Receivables velocity</h3>
              </div>
              <button className={styles.ghostButton}><Filter size={16} /> Filter</button>
            </div>
            <div className={styles.barWrap}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { name: '0-15d', value: 42 },
                  { name: '15-30d', value: 29 },
                  { name: '30-45d', value: 18 },
                  { name: '45+d', value: 11 }
                ]}>
                  <CartesianGrid vertical={false} stroke="rgba(148, 163, 184, 0.16)" />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip formatter={(value) => value + '%'} />
                  <Bar dataKey="value" radius={[10, 10, 0, 0]} fill="#0f766e" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>

          <article className={styles.panelWide}>
            <div className={styles.panelHeader}>
              <div>
                <p className={styles.panelEyebrow}>Activity</p>
                <h3>Recent transactions</h3>
              </div>
              <button className={styles.ghostButton}>Export CSV</button>
            </div>
            <div className={styles.table}>
              {transactions.map((item) => (
                <div key={item.title} className={styles.row}>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.tag}</p>
                  </div>
                  <span className={styles.amount}>{item.amount}</span>
                  <span className={item.status === 'Cleared' ? styles.statusClear : item.status === 'Pending' ? styles.statusPending : styles.statusScheduled}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <p className={styles.panelEyebrow}>Markets</p>
                <h3>Strategic watchlist</h3>
              </div>
            </div>
            <div className={styles.watchlist}>
              {watchlist.map((item) => (
                <div key={item.symbol} className={styles.watchItem}>
                  <div>
                    <strong>{item.symbol}</strong>
                    <p>{item.price}</p>
                  </div>
                  <span className={item.change.startsWith('-') ? styles.loss : styles.gain}>{item.change}</span>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
