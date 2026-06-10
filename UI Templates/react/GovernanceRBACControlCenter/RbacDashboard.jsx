import React from 'react';
import styles from './RbacDashboard.module.css';

const roles=[['Admin','Full system control'],['Manager','Team and workflow governance'],['Analyst','Read and export access'],['Guest','Limited workspace visibility']];
const matrix=[['Billing','Admin, Manager'],['Users','Admin'],['Reports','Admin, Manager, Analyst'],['Settings','Admin']];
const audits=[['Privilege escalated','2 mins ago'],['New role assigned','18 mins ago'],['Policy updated','1 hour ago']];

export default function RbacDashboard(){
  return <div className={styles.page}>
    <div className={styles.blurA}/><div className={styles.blurB}/>
    <header className={styles.hero}>
      <div>
        <p className={styles.eyebrow}>Access governance</p>
        <h1>Role-based control with enterprise-grade clarity.</h1>
        <p className={styles.copy}>A production-ready RBAC interface for security teams managing roles, permission scopes, policy changes, and audit events.</p>
      </div>
      <aside className={styles.heroCard}><span>Policy coverage</span><strong>99.2%</strong><p>All critical modules are mapped to explicit access rules.</p></aside>
    </header>
    <section className={styles.grid}>
      <article className={styles.panel}>
        <div className={styles.head}><div><p>Roles</p><h2>Access archetypes</h2></div><button>Add role</button></div>
        <div className={styles.list}>{roles.map(([name,desc])=><div key={name} className={styles.card}><strong>{name}</strong><p>{desc}</p></div>)}</div>
      </article>
      <article className={styles.panel}>
        <div className={styles.head}><div><p>Permissions</p><h2>Module matrix</h2></div><button>Sync policy</button></div>
        <div className={styles.table}>{matrix.map(([name,scope])=><div key={name} className={styles.row}><div><strong>{name}</strong><p>Assigned roles</p></div><b>{scope}</b></div>)}</div>
      </article>
      <article className={styles.panelWide}>
        <div className={styles.head}><div><p>Audit log</p><h2>Recent events</h2></div><button>Export log</button></div>
        <div className={styles.audit}>{audits.map(([name,time])=><div key={name} className={styles.event}><span>{time}</span><strong>{name}</strong><p>Tracked with immutable governance metadata.</p></div>)}</div>
      </article>
    </section>
  </div>;
}
