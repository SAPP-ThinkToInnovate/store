import React from 'react';
import styles from './AnalyticsDashboard.module.css';

const stats=[['Active users','182K','+14%'],['Conversion','6.8%','+1.2%'],['Retention d30','58%','+4%'],['Experiment uplift','12.6%','Winner']];
const bars=[48,63,59,74,82,88,94];
const channels=[['Organic','34%'],['Paid social','26%'],['Email','18%'],['Partners','22%']];
const insights=[['New onboarding flow','Lifted activation by 12.6%'],['Mobile checkout drop','Recovered 8.4% after patch'],['Referral spike','Greening CAC trend in APAC']];

export default function AnalyticsDashboard(){
  return <div className={styles.page}>
    <div className={styles.ringA}/><div className={styles.ringB}/>
    <header className={styles.hero}>
      <div>
        <p className={styles.eyebrow}>Growth analytics suite</p>
        <h1>Clarity across acquisition, behavior, and revenue outcomes.</h1>
        <p className={styles.copy}>A premium analytics dashboard for performance teams tracking user growth, attribution quality, retention health, and experiment impact.</p>
      </div>
      <aside className={styles.heroCard}><span>Signal confidence</span><strong>97%</strong><p>Models are aligned across warehouse and product telemetry.</p></aside>
    </header>
    <section className={styles.stats}>{stats.map(([l,v,d])=><article key={l} className={styles.stat}><span>{l}</span><strong>{v}</strong><em>{d}</em></article>)}</section>
    <section className={styles.grid}>
      <article className={styles.panel}>
        <div className={styles.head}><div><p>Trendline</p><h2>Weekly growth index</h2></div><button>Compare</button></div>
        <div className={styles.chart}>{bars.map((v,i)=><div key={i} className={styles.bar}><span style={{height:v+'%'}}/><label>{['M','T','W','T','F','S','S'][i]}</label></div>)}</div>
      </article>
      <article className={styles.panel}>
        <div className={styles.head}><div><p>Attribution</p><h2>Channel mix</h2></div><button>Budget view</button></div>
        <div className={styles.list}>{channels.map(([n,v],i)=><div key={n} className={styles.row}><div><strong>{n}</strong><p>Share of conversions</p></div><i style={{width:[72,54,38,46][i]+'%'}}/><b>{v}</b></div>)}</div>
      </article>
      <article className={styles.panelWide}>
        <div className={styles.head}><div><p>Insights</p><h2>Priority learnings</h2></div><button>Create brief</button></div>
        <div className={styles.cards}>{insights.map(([t,d])=><div key={t} className={styles.card}><strong>{t}</strong><p>{d}</p></div>)}</div>
      </article>
    </section>
  </div>;
}
