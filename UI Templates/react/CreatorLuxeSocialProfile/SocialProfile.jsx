import React from 'react';
import styles from './SocialProfile.module.css';

const stats=[['Followers','2.8M'],['Engagement','9.4%'],['Collaborations','38'],['Reach','18.2M']];
const highlights=['Studio','Travel','Process','Drops'];
const posts=['Campaign launch','Behind the scenes','Audience Q&A','New collection','Brand film','Workspace tour'];

export default function SocialProfile(){
  return <div className={styles.page}>
    <div className={styles.orbA}/><div className={styles.orbB}/>
    <section className={styles.hero}>
      <div className={styles.banner}/>
      <div className={styles.profile}>
        <div className={styles.avatar}>AM</div>
        <div>
          <p className={styles.eyebrow}>Creator profile</p>
          <h1>Alex Morgan</h1>
          <p className={styles.bio}>Design-led founder sharing visual systems, product storytelling, and culture-forward digital launches.</p>
        </div>
        <button>Follow</button>
      </div>
    </section>
    <section className={styles.stats}>{stats.map(([l,v])=><article key={l} className={styles.stat}><span>{l}</span><strong>{v}</strong></article>)}</section>
    <section className={styles.grid}>
      <article className={styles.panel}>
        <div className={styles.head}><div><p>Highlights</p><h2>Story capsules</h2></div></div>
        <div className={styles.rings}>{highlights.map(item=><div key={item} className={styles.ring}><i/>{item}</div>)}</div>
      </article>
      <article className={styles.panel}>
        <div className={styles.head}><div><p>Community</p><h2>Profile signals</h2></div></div>
        <div className={styles.list}><div className={styles.item}><strong>Brand affinity</strong><p>Luxury tech, culture, travel</p></div><div className={styles.item}><strong>Audience</strong><p>58% founders, 24% designers, 18% operators</p></div><div className={styles.item}><strong>Response time</strong><p>Usually within 2 hours</p></div></div>
      </article>
      <article className={styles.panelWide}>
        <div className={styles.head}><div><p>Media</p><h2>Featured content</h2></div><button>Contact</button></div>
        <div className={styles.gallery}>{posts.map((item,index)=><div key={item} className={styles.tile}><span>0{index+1}</span><strong>{item}</strong></div>)}</div>
      </article>
    </section>
  </div>;
}
