import React from 'react';
import styles from './ProjectManagementDashboard.module.css';

const stats=[['Sprint progress','78%','On track'],['Open blockers','06','-3 today'],['Velocity','42 pts','+8%'],['Release health','Green','Stable']];
const lanes=[['Backlog',14],['In progress',9],['Review',5],['Done',22]];
const team=[['Design','82%'],['Frontend','68%'],['Backend','74%'],['QA','59%']];
const timeline=[['Mobile revamp','Today'],['API freeze','Thu'],['UAT signoff','Fri'],['Release','Mon']];

export default function ProjectManagementDashboard(){
  return <div className={styles.page}>
    <div className={styles.a}/><div className={styles.b}/>
    <header className={styles.hero}>
      <div>
        <p className={styles.eyebrow}>Delivery command center</p>
        <h1>Project visibility for teams shipping at scale.</h1>
        <p className={styles.copy}>A high-end project operations dashboard for sprint planning, workload balancing, milestone alignment, and risk control.</p>
      </div>
      <aside className={styles.heroCard}><span>Milestone confidence</span><strong>89%</strong><p>Cross-functional dependencies are trending within target.</p></aside>
    </header>
    <section className={styles.stats}>{stats.map(([l,v,d])=><article key={l} className={styles.stat}><span>{l}</span><strong>{v}</strong><em>{d}</em></article>)}</section>
    <section className={styles.grid}>
      <article className={styles.panel}>
        <div className={styles.head}><div><p>Workflow</p><h2>Board summary</h2></div><button>Open board</button></div>
        <div className={styles.list}>{lanes.map(([name,count],i)=><div key={name} className={styles.row}><div><strong>{name}</strong><p>{count} cards</p></div><i style={{width:[86,68,44,92][i]+'%'}}/></div>)}</div>
      </article>
      <article className={styles.panel}>
        <div className={styles.head}><div><p>Capacity</p><h2>Team workload</h2></div><button>Rebalance</button></div>
        <div className={styles.list}>{team.map(([name,value])=><div key={name} className={styles.row}><div><strong>{name}</strong><p>Utilization</p></div><b>{value}</b></div>)}</div>
      </article>
      <article className={styles.panelWide}>
        <div className={styles.head}><div><p>Timeline</p><h2>Upcoming milestones</h2></div><button>Share update</button></div>
        <div className={styles.timeline}>{timeline.map(([name,day])=><div key={name} className={styles.milestone}><span>{day}</span><strong>{name}</strong><p>Owner-ready handoff with automated status sync.</p></div>)}</div>
      </article>
    </section>
  </div>;
}
