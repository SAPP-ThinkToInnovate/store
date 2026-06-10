import React, { useState } from 'react';
import styles from './AuthSuite.module.css';

const views=['Login','Sign up','OTP','Forgot'];

export default function AuthSuite(){
  const [view,setView]=useState('Login');
  return <div className={styles.page}>
    <div className={styles.glowA}/><div className={styles.glowB}/>
    <section className={styles.shell}>
      <aside className={styles.brand}>
        <p className={styles.eyebrow}>Identity experience</p>
        <h1>Security-first auth flows with a premium consumer finish.</h1>
        <p className={styles.copy}>A single React template that showcases polished login, signup, OTP verification, and password recovery states for production apps.</p>
        <div className={styles.pills}>{views.map(item=><button key={item} className={view===item?styles.active:styles.pill} onClick={()=>setView(item)}>{item}</button>)}</div>
      </aside>
      <article className={styles.card}>
        <div className={styles.header}><span>{view==='OTP'?'Verify device':'Welcome back'}</span><strong>{view==='Sign up'?'Create your account':view==='Forgot'?'Recover access':view==='OTP'?'Enter security code':'Sign in securely'}</strong></div>
        {view==='Login'&&<><label><span>Email</span><input placeholder='you@company.com'/></label><label><span>Password</span><input type='password' placeholder='????????'/></label><div className={styles.row}><a>Use OTP instead</a><a onClick={()=>setView('Forgot')}>Forgot password?</a></div><button className={styles.primary}>Login</button></>}
        {view==='Sign up'&&<><label><span>Full name</span><input placeholder='Alex Morgan'/></label><label><span>Work email</span><input placeholder='alex@company.com'/></label><label><span>Password</span><input type='password' placeholder='Create a strong password'/></label><button className={styles.primary}>Create account</button></>}
        {view==='OTP'&&<><p className={styles.note}>We sent a 6-digit code to your verified device.</p><div className={styles.otp}>{[1,2,3,4,5,6].map(n=><input key={n} maxLength='1'/>)}</div><button className={styles.primary}>Verify</button></>}
        {view==='Forgot'&&<><p className={styles.note}>Enter your email and we will send a reset link.</p><label><span>Email</span><input placeholder='you@company.com'/></label><button className={styles.primary}>Send reset link</button></>}
        <p className={styles.foot}>{view==='Login'?'No account yet?':'Already have an account?'} <a onClick={()=>setView(view==='Login'?'Sign up':'Login')}>{view==='Login'?'Create one':'Back to login'}</a></p>
      </article>
    </section>
  </div>;
}
