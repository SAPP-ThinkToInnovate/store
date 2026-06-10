import { useState, useEffect, useRef } from "react";
import styles from "./LuminaryPortfolio.module.css";

const ROLES = ["Frontend Architect", "Creative Developer", "UI Visionary", "Full-Stack Builder"];
const SKILLS = [
  { name: "React & Next.js", pct: 95 },
  { name: "TypeScript", pct: 88 },
  { name: "Node.js", pct: 82 },
  { name: "UI / UX Design", pct: 78 },
  { name: "GraphQL", pct: 74 },
  { name: "Cloud & DevOps", pct: 70 },
];
const PROJECTS = [
  { title: "Nebula Dashboard", desc: "Real-time analytics platform with AI-powered insights and stunning data visualisations.", tags: ["React", "D3.js", "Python"], hue: 267 },
  { title: "Orbit Commerce", desc: "Full-stack e-commerce ecosystem with lightning-fast performance and seamless checkout flows.", tags: ["Next.js", "Stripe", "PostgreSQL"], hue: 340 },
  { title: "Solaris AI", desc: "Intelligent automation platform leveraging large language models for workflow optimisation.", tags: ["LLM", "FastAPI", "React"], hue: 199 },
  { title: "Prism Design System", desc: "Open-source UI library adopted by 200+ teams with full accessibility compliance.", tags: ["TypeScript", "Storybook", "CSS"], hue: 142 },
];
const XP = [
  { role: "Senior Frontend Engineer", co: "Veritas Labs", period: "2023 - Present", desc: "Led UI redesign cutting load times by 60% and lifting monthly retention by 22%." },
  { role: "Full Stack Developer", co: "Helix Digital", period: "2021 - 2023", desc: "Built scalable microservices and consumer React apps serving over one million active users." },
  { role: "UI Engineer", co: "Cascade Studio", period: "2019 - 2021", desc: "Crafted pixel-perfect design systems for fintech and health-tech SaaS clients." },
];

function useInView(t) {
  var threshold = t || 0.15;
  var ref = useRef(null);
  var _s = useState(false);
  var v = _s[0]; var setV = _s[1];
  useEffect(function() {
    var el = ref.current;
    if (!el) return;
    var io = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) { setV(true); io.disconnect(); }
    }, { threshold: threshold });
    io.observe(el);
    return function() { io.disconnect(); };
  }, [threshold]);
  return [ref, v];
}

function useTyper(words, spd, pause) {
  spd = spd || 78;
  pause = pause || 2200;
  var _t = useState(""); var txt = _t[0]; var setTxt = _t[1];
  var _wi = useState(0); var wi = _wi[0]; var setWi = _wi[1];
  var _ci = useState(0); var ci = _ci[0]; var setCi = _ci[1];
  var _d = useState(false); var del = _d[0]; var setDel = _d[1];
  useEffect(function() {
    var word = words[wi % words.length];
    if (!del && ci === word.length) {
      var id = setTimeout(function() { setDel(true); }, pause);
      return function() { clearTimeout(id); };
    }
    var id2 = setTimeout(function() {
      if (!del) { setTxt(word.slice(0, ci + 1)); setCi(function(c) { return c + 1; }); }
      else if (ci > 0) { setTxt(word.slice(0, ci - 1)); setCi(function(c) { return c - 1; }); }
      else { setDel(false); setWi(function(w) { return (w + 1) % words.length; }); }
    }, del ? spd / 2 : spd);
    return function() { clearTimeout(id2); };
  }, [ci, del, wi, words, spd, pause]);
  return txt;
}

function Cursor() {
  var dot = useRef(null);
  var ring = useRef(null);
  useEffect(function() {
    var pos = { x: -200, y: -200 };
    var tr = { x: -200, y: -200 };
    function mv(e) { pos.x = e.clientX; pos.y = e.clientY; }
    window.addEventListener("mousemove", mv);
    var raf;
    function loop() {
      tr.x += (pos.x - tr.x) * 0.14;
      tr.y += (pos.y - tr.y) * 0.14;
      if (dot.current) dot.current.style.transform = "translate(" + (pos.x - 5) + "px," + (pos.y - 5) + "px)";
      if (ring.current) ring.current.style.transform = "translate(" + (tr.x - 18) + "px," + (tr.y - 18) + "px)";
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    return function() { window.removeEventListener("mousemove", mv); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div ref={dot} className={styles.cursorDot} />
      <div ref={ring} className={styles.cursorRing} />
    </>
  );
}

function Nav() {
  var _s = useState(false); var solid = _s[0]; var setSolid = _s[1];
  var _o = useState(false); var open = _o[0]; var setOpen = _o[1];
  useEffect(function() {
    function fn() { setSolid(window.scrollY > 50); }
    window.addEventListener("scroll", fn, { passive: true });
    return function() { window.removeEventListener("scroll", fn); };
  }, []);
  var links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];
  return (
    <header className={styles.nav + (solid ? " " + styles.navSolid : "")}>
      <span className={styles.logo}>{"<AM />"}</span>
      <nav className={styles.menu + (open ? " " + styles.menuOpen : "")}>
        {links.map(function(l) {
          return <a key={l} href={"#" + l.toLowerCase()} onClick={function() { setOpen(false); }}>{l}</a>;
        })}
      </nav>
      <button className={styles.burger} onClick={function() { setOpen(function(o) { return !o; }); }} aria-label="Toggle navigation">
        <span className={open ? styles.b1o : ""} />
        <span className={open ? styles.b2o : ""} />
        <span className={open ? styles.b3o : ""} />
      </button>
    </header>
  );
}

function Hero() {
  var role = useTyper(ROLES);
  return (
    <section className={styles.hero} id="home">
      <div className={styles.orbs}>
        <div className={styles.orbA} />
        <div className={styles.orbB} />
        <div className={styles.orbC} />
      </div>
      <div className={styles.gridBg} />
      <div className={styles.heroBody}>
        <p className={styles.badge}><span className={styles.badgeDot} />Available for work</p>
        <h1 className={styles.heroName}>Alex Mercer</h1>
        <p className={styles.typeRow}>
          <span className={styles.typed}>{role}</span>
          <span className={styles.caret} />
        </p>
        <p className={styles.bio}>
          I craft immersive digital experiences where engineering precision meets design artistry.
          Let us build something extraordinary together.
        </p>
        <div className={styles.ctas}>
          <a href="#projects" className={styles.btnPrimary}>See my work</a>
          <a href="#contact" className={styles.btnOutline}>Get in touch</a>
        </div>
        <div className={styles.heroStats}>
          {[["6+", "Years exp."], ["80+", "Projects shipped"], ["200K+", "Users impacted"]].map(function(item) {
            return (
              <div key={item[1]} className={styles.stat}>
                <strong>{item[0]}</strong>
                <span>{item[1]}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.scrollHint}><div className={styles.scrollBall} /></div>
    </section>
  );
}

function About() {
  var _r = useInView(); var ref = _r[0]; var v = _r[1];
  return (
    <section className={styles.section} id="about">
      <div className={styles.aboutGrid + (v ? " " + styles.show : "")} ref={ref}>
        <div className={styles.avatarArea}>
          <div className={styles.ring}><div className={styles.avatar}>AM</div></div>
          <span className={styles.chip0}>Figma Pro</span>
          <span className={styles.chip1}>Open Source</span>
          <span className={styles.chip2}>Remote-first</span>
        </div>
        <div className={styles.aboutCopy}>
          <span className={styles.eyebrow}>About me</span>
          <h2>Turning ideas into living, breathing interfaces</h2>
          <p>I am a full-stack engineer with a passion for crafting experiences that feel intuitive and alive. Great software gets out of the way and lets users accomplish what they came to do.</p>
          <p>When not shipping products I contribute to open-source, mentor engineers, and explore the intersection of AI and creative tooling.</p>
          <div className={styles.pills}>
            {["Performance fanatic", "Accessibility advocate", "Design systems", "AI tooling"].map(function(t) {
              return <span key={t} className={styles.pill}>{t}</span>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  var _r = useInView(0.1); var ref = _r[0]; var v = _r[1];
  return (
    <section className={styles.darkStripe} id="skills">
      <div className={styles.sHead}>
        <span className={styles.eyebrow}>Expertise</span>
        <h2>Skills and technologies</h2>
      </div>
      <div className={styles.skillGrid} ref={ref}>
        {SKILLS.map(function(s, i) {
          return (
            <div key={s.name} className={styles.skillRow + (v ? " " + styles.skillIn : "")} style={{ "--d": (i * 0.09) + "s" }}>
              <div className={styles.skillMeta}><span>{s.name}</span><strong>{s.pct}%</strong></div>
              <div className={styles.track}><div className={styles.fill} style={{ "--w": s.pct + "%", "--d": (i * 0.09 + 0.3) + "s" }} /></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Projects() {
  var _r = useInView(0.05); var ref = _r[0]; var v = _r[1];
  return (
    <section className={styles.section} id="projects">
      <div className={styles.sHead}>
        <span className={styles.eyebrow}>Selected work</span>
        <h2>Projects I am proud of</h2>
      </div>
      <div className={styles.projGrid} ref={ref}>
        {PROJECTS.map(function(p, i) {
          var hue2 = (p.hue + 40) % 360;
          return (
            <article key={p.title} className={styles.card + (v ? " " + styles.cardIn : "")} style={{ "--d": (i * 0.11) + "s" }}>
              <div className={styles.banner} style={{ background: "linear-gradient(135deg,hsl(" + p.hue + ",70%,55%),hsl(" + hue2 + ",80%,65%))" }} />
              <div className={styles.cardBody}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className={styles.cardTags}>{p.tags.map(function(t) { return <span key={t}>{t}</span>; })}</div>
                <a href="#projects" className={styles.cardLink}>View case study</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  var _r = useInView(0.1); var ref = _r[0]; var v = _r[1];
  return (
    <section className={styles.darkStripe} id="experience">
      <div className={styles.sHead}>
        <span className={styles.eyebrow}>Journey</span>
        <h2>Work experience</h2>
      </div>
      <div className={styles.timeline} ref={ref}>
        {XP.map(function(e, i) {
          return (
            <div key={e.co} className={styles.tlItem + (v ? " " + styles.tlIn : "")} style={{ "--d": (i * 0.18) + "s" }}>
              <div className={styles.tlDot} />
              <div className={styles.tlCard}>
                <div className={styles.tlTop}>
                  <div><h3>{e.role}</h3><p className={styles.tlCo}>{e.co}</p></div>
                  <span className={styles.tlPeriod}>{e.period}</span>
                </div>
                <p>{e.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  var _r = useInView(); var ref = _r[0]; var v = _r[1];
  var _s = useState(false); var sent = _s[0]; var setSent = _s[1];
  return (
    <section className={styles.section} id="contact">
      <div className={styles.contactGrid + (v ? " " + styles.show : "")} ref={ref}>
        <div>
          <span className={styles.eyebrow}>Get in touch</span>
          <h2>Let us create something great</h2>
          <p>Whether it is a new product, a hard problem, or a great conversation, my inbox is always open.</p>
          <div className={styles.clinks}>
            {[["e", "hello@alexmercer.dev"], ["g", "github.com/alexmercer"], ["l", "linkedin.com/in/alexmercer"]].map(function(item) {
              return (
                <div key={item[1]} className={styles.clink}>
                  <span className={styles.clinkIcon}>{item[0]}</span>
                  <span>{item[1]}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.formBox}>
          {sent ? (
            <div className={styles.successBox}>
              <div className={styles.successMark}>done</div>
              <h3>Message sent!</h3>
              <p>I will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={function(e) { e.preventDefault(); setSent(true); }}>
              <div className={styles.row}>
                <div className={styles.fg}><label>Name</label><input type="text" placeholder="Your name" required /></div>
                <div className={styles.fg}><label>Email</label><input type="email" placeholder="your@email.com" required /></div>
              </div>
              <div className={styles.fg}><label>Subject</label><input type="text" placeholder="What is this about?" required /></div>
              <div className={styles.fg}><label>Message</label><textarea rows="5" placeholder="Tell me about your project..." required /></div>
              <button type="submit" className={styles.sendBtn}>Send message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default function LuminaryPortfolio() {
  return (
    <div className={styles.root}>
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer className={styles.footer}>
        <p>Designed and built by <strong>Alex Mercer</strong></p>
        <p>Crafted with passion in the browser</p>
      </footer>
    </div>
  );
}