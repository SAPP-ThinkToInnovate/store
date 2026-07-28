import React from 'react';
import styles from './CrmDashboard.module.css';

const metrics=[['Pipeline value','$8.4M','+18%'],['Win rate','34%','+6%'],['Active deals','148','+12'],['CSAT','4.8/5','+0.3']];
const funnel=[92,74,58,39];
const reps=[['Ava Stone','$1.8M','12 deals'],['Noah Reed','$1.4M','9 deals'],['Mia Chen','$1.2M','8 deals']];
const deals=[['Northstar Group','Enterprise plan','Proposal'],['Velora Health','Expansion upsell','Negotiation'],['Atlas Works','New logo','Qualified'],['Greenline AI','Renewal','Contract sent']];

export default function CrmDashboard(){
  return <div className={styles.page}>
    <div className={styles.haloA}/><div className={styles.haloB}/>
    <header className={styles.hero}>
      <div>
        <p className={styles.eyebrow}>Revenue operations hub</p>
        <h1>CRM intelligence built for fast-moving sales teams.</h1>
        <p className={styles.copy}>Track pipeline health, rep performance, deal momentum, and customer sentiment in one premium operations workspace.</p>
      </div>
      <aside className={styles.heroCard}><span>Forecast accuracy</span><strong>96%</strong><p>Quarter closing with strong coverage across strategic accounts.</p></aside>
    </header>
    <section className={styles.metrics}>{metrics.map(([label,value,delta])=><article key={label} className={styles.metric}><span>{label}</span><strong>{value}</strong><em>{delta}</em></article>)}</section>
    <section className={styles.grid}>
      <article className={styles.panel}>
        <div className={styles.head}><div><p>Pipeline funnel</p><h2>Stage conversion</h2></div><button>View report</button></div>
        <div className={styles.funnel}>{funnel.map((value,index)=><div key={index} className={styles.step} style={{width:value+'%'}}><span>{['Lead','Qualified','Proposal','Closed'][index]}</span><b>{value}%</b></div>)}</div>
      </article>
      <article className={styles.panel}>
        <div className={styles.head}><div><p>Top sellers</p><h2>Rep leaderboard</h2></div><button>Incentives</button></div>
        <div className={styles.list}>{reps.map(([name,value,meta])=><div key={name} className={styles.item}><div><strong>{name}</strong><p>{meta}</p></div><b>{value}</b></div>)}</div>
      </article>
      <article className={styles.panelWide}>
        <div className={styles.head}><div><p>Deal desk</p><h2>High-priority opportunities</h2></div><button>Assign owner</button></div>
        <div className={styles.table}>{deals.map(([name,type,status])=><div key={name} className={styles.row}><div><strong>{name}</strong><p>{type}</p></div><mark className={styles[status.toLowerCase().replace(/ /g,'')]}>{status}</mark></div>)}</div>
      </article>
    </section>
  </div>;
}
