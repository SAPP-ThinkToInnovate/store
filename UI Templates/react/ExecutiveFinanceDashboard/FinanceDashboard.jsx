import React from "react";
import { ArrowUpRight, BadgeDollarSign, CreditCard, PiggyBank, ShieldCheck, Wallet } from "lucide-react";
import { Area, AreaChart, CartesianGrid, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import styles from "./FinanceDashboard.module.css";

const cashflow = [
  { month: "Jan", inflow: 124000, outflow: 82000 },
  { month: "Feb", inflow: 138000, outflow: 91000 },
  { month: "Mar", inflow: 149000, outflow: 96000 },
  { month: "Apr", inflow: 161000, outflow: 101000 },
  { month: "May", inflow: 172000, outflow: 109000 },
  { month: "Jun", inflow: 185000, outflow: 116000 }
];

const allocation = [
  { name: "Operations", value: 34, color: "#0f766e" },
  { name: "Growth", value: 28, color: "#f59e0b" },
  { name: "Payroll", value: 23, color: "#1d4ed8" },
  { name: "Reserve", value: 15, color: "#7c3aed" }
];

const cards = [
  { label: "Net liquidity", value: "$4.82M", delta: "+12.4%", icon: Wallet },
  { label: "Runway", value: "19 months", delta: "+2.1 months", icon: PiggyBank },
  { label: "Collection rate", value: "96.8%", delta: "+4.6%", icon: CreditCard },
  { label: "Risk score", value: "Low", delta: "-18 bps", icon: ShieldCheck }
];

const payments = [
  { vendor: "Aster Capital", status: "Cleared", amount: "$82,400", eta: "Today" },
  { vendor: "Vertex Systems", status: "Review", amount: "$31,280", eta: "2 hrs" },
  { vendor: "Northwind Ops", status: "Scheduled", amount: "$18,920", eta: "Tomorrow" }
];

export default function FinanceDashboard() {
  return (
    <div className={styles.shell}>
      <div className={styles.backdropA} />
      <div className={styles.backdropB} />
      <header className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Treasury command center</p>
          <h1>Finance performance with cash visibility at a glance.</h1>
          <p className={styles.subcopy}>Monitor liquidity, control exposure, and move from reporting to action with a board-ready operations cockpit.</p>
        </div>
        <div className={styles.heroCard}>
          <div className={styles.heroMetric}>
            <span>Revenue forecast confidence</span>
            <strong>92%</strong>
          </div>
          <div className={styles.heroDivider} />
          <div className={styles.heroMetric}>
            <span>Unreconciled exceptions</span>
            <strong>07</strong>
          </div>
        </div>
      </header>

      <section className={styles.statsGrid}>
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.label} className={styles.statCard}>
              <div className={styles.iconWrap}><Icon size={18} /></div>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
              <p><ArrowUpRight size={14} /> {card.delta}</p>
            </article>
          );
        })}
      </section>

      <section className={styles.mainGrid}>
        <article className={styles.chartPanel}>
          <div className={styles.panelHeader}>
            <div>
              <p>Cashflow runway</p>
              <h2>Inflow vs. outflow</h2>
            </div>
            <button type="button">Quarterly view</button>
          </div>
          <div className={styles.chartWrap}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cashflow}>
                <defs>
                  <linearGradient id="inflow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0f766e" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="#0f766e" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="outflow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1d4ed8" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#1d4ed8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(148, 163, 184, 0.15)" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "#0f172acc", border: "1px solid rgba(148,163,184,0.2)", borderRadius: 16 }} />
                <Area type="monotone" dataKey="inflow" stroke="#34d399" strokeWidth={3} fill="url(#inflow)" />
                <Area type="monotone" dataKey="outflow" stroke="#60a5fa" strokeWidth={3} fill="url(#outflow)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className={styles.sidePanel}>
          <div className={styles.panelHeader}>
            <div>
              <p>Capital allocation</p>
              <h2>Budget mix</h2>
            </div>
            <BadgeDollarSign size={18} />
          </div>
          <div className={styles.pieWrap}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={allocation} dataKey="value" innerRadius={54} outerRadius={82} paddingAngle={3}>
                  {allocation.map((entry) => (
                    <cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: "#0f172acc", border: "1px solid rgba(148,163,184,0.2)", borderRadius: 16 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className={styles.legend}>
            {allocation.map((item) => (
              <div key={item.name} className={styles.legendRow}>
                <span><i style={{ background: item.color }} />{item.name}</span>
                <strong>{item.value}%</strong>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className={styles.tablePanel}>
        <div className={styles.panelHeader}>
          <div>
            <p>Priority disbursements</p>
            <h2>Payment queue</h2>
          </div>
          <button type="button">Approve batch</button>
        </div>
        <div className={styles.table}>
          {payments.map((payment) => (
            <div key={payment.vendor} className={styles.row}>
              <div>
                <strong>{payment.vendor}</strong>
                <span>{payment.eta}</span>
              </div>
              <span className={styles.status}>{payment.status}</span>
              <strong>{payment.amount}</strong>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
