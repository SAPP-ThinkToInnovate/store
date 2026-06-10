import React from 'react';
import styles from './FinanceDashboard.module.css';

const stats=[['Treasury balance','$4.82M','+12.4%'],['Monthly inflow','$1.18M','+8.1%'],['Risk exposure','2.1%','-0.6%'],['Forecast confidence','92%','+4.8%']];
const flow=[54,68,63,78,84,91];
const books=[['Operating','1.82M'],['Reserve','1.14M'],['Growth','980K'],['Payroll','880K']];
const activity=[['Enterprise renewal','+$42,900','Cleared'],['Cloud infrastructure','-$4,280','Scheduled'],['Payroll batch','-$18,600','Ready'],['Card settlement','+$24,300','Pending']];

export default function FinanceDashboard(){
  return <div className={styles.page}>
    <div className={styles.glowA}/><div className={styles.glowB}/>
    <section className={styles.hero}>
      <div>
        <p className={styles.eyebrow}>Finance command center</p>
        <h1>Modern treasury intelligence for high-growth teams.</h1>
        <p className={styles.copy}>A production-grade finance dashboard with executive KPIs, runway tracking, allocation visibility, and live transaction monitoring.</p>
      </div>
      <div className={styles.heroCard}>
        <span>Liquidity health</span><strong>94 / 100</strong><p>18.4 months of runway at current burn.</p>
      </div>
    </section>
    <section className={styles.stats}>
      {stats.map(([label,value,delta])=><article key={label} className={styles.stat}><span>{label}</span><strong>{value}</strong><em>{delta}</em></article>)}
    </section>
    <section className={styles.grid}>
      <article className={styles.panel}>
        <div className={styles.head}><div><p>Cashflow</p><h2>6 month trend</h2></div><button>Export</button></div>
        <div className={styles.chart}>
          {flow.map((value,index)=><div key={index} className={styles.col}><span style={{height:value+'%'}}/><label>{['Jan','Feb','Mar','Apr','May','Jun'][index]}</label></div>)}
        </div>
      </article>
      <article className={styles.panel}>
        <div className={styles.head}><div><p>Allocation</p><h2>Capital buckets</h2></div><button>Review</button></div>
        <div className={styles.stack}>
          {books.map(([label,value],index)=><div key={label} className={styles.book}><div><strong>{label}</strong><p>{value}</p></div><i style={{width:[72,58,49,44][index]+'%'}}/></div>)}
        </div>
      </article>
      <article className={styles.panelWide}>
        <div className={styles.head}><div><p>Transactions</p><h2>Priority activity</h2></div><button>Approve batch</button></div>
        <div className={styles.table}>
          {activity.map(([title,amount,status])=><div key={title} className={styles.row}><div><strong>{title}</strong><p>Automated treasury workflow</p></div><b>{amount}</b><mark className={styles[status.toLowerCase()]}>{status}</mark></div>)}
        </div>
      </article>
    </section>
  </div>;
}
