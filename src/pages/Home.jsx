import { Link } from 'react-router-dom'
import './Home.css'

const roles = [
  {
    icon: '🌐',
    title: 'Translation',
    path: '/translation',
    desc: 'Bridging languages with cultural nuance — Japanese, English & Indonesian localization for books, games, and media.',
    tags: ['EN→ID', 'ID→EN', 'Literary', 'Subtitle'],
    color: 'role--blue',
  },
  {
    icon: '🎨',
    title: 'Illustration',
    path: '/illustration',
    desc: 'Soft, narrative-driven illustrations for editorial, children\'s books, and branding — where story meets visual poetry.',
    tags: ['Editorial', 'Children\'s Book', 'Character Design', 'Digital Art'],
    color: 'role--pink',
  },
  {
    icon: '🧊',
    title: '3D Modelling',
    path: '/3d-modelling',
    desc: 'Sculpting imagination into dimension — stylized characters, organic environments, and product visualizations.',
    tags: ['Blender', 'Stylized', 'Character', 'Environment'],
    color: 'role--green',
  },
]

const works = [
  { emoji: '📖', label: 'Novel', title: '"The Vanishing Garden"', note: 'JP→EN Literary Translation' },
  { emoji: '🎮', label: 'Game', title: 'Moonlit Hollow', note: 'Full game localization' },
  { emoji: '🖼️', label: 'Print', title: 'Solstice Zine Vol.3', note: 'Cover + inside illustration' },
  { emoji: '🧸', label: '3D', title: 'Cozy Kitchen Set', note: 'Blender stylized props' },
  { emoji: '✍️', label: 'Editorial', title: 'Nusantara Series', note: '12-piece illustration set' },
  { emoji: '🌿', label: '3D', title: 'Forest Spirit Rig', note: 'Character + animation-ready' },
]

export default function Home() {
  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg-blobs">
          <div className="blob blob--1" />
          <div className="blob blob--2" />
          <div className="blob blob--3" />
        </div>

        <div className="container hero__content">
          <div className="hero__text fade-up">
            <span className="hero__greeting">hello, I'm</span>
            <h1 className="hero__name display-title">
              Zaitun<br />
              <em>Ludni</em>
            </h1>
            <p className="hero__role-line">
              <span className="role-pill">Translation</span>
              <span className="role-sep">·</span>
              <span className="role-pill">Illustration</span>
              <span className="role-sep">·</span>
              <span className="role-pill">3D Modelling</span>
            </p>
            <p className="hero__desc fade-up delay-2">
              A multidisciplinary creative who lives at the intersection of
              language, art, and dimension — crafting work that feels
              <em> soft, intentional, and alive.</em>
            </p>
            <div className="hero__cta fade-up delay-3">
              <Link to="/illustration" className="btn btn-primary">
                Explore Portfolio ↓
              </Link>
              <a href="mailto:ludnizaitun@gmail.com" className="btn btn-outline">
                Say Hello 🌿
              </a>
            </div>
          </div>

          <div className="hero__visual fade-up delay-2">
            <div className="hero__avatar-wrap">
              <div className="hero__avatar">
                <div className="hero__avatar-bg" />
                <div className="hero__avatar-initials">ZL</div>
                <div className="hero__floating-tag tag--top">✦ Available for work</div>
                <div className="hero__floating-tag tag--bottom">🌿 Based in Indonesia</div>
              </div>
              <div className="hero__orbit">
                {['🌐','🎨','🧊','✦'].map((e, i) => (
                  <span key={i} className={`hero__orbit-item orbit-${i+1}`}>{e}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hero__scroll-hint">
          <span>scroll gently ↓</span>
        </div>
      </section>

      {/* ── ROLES / SERVICES ── */}
      <section className="section roles-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What I Do</span>
            <h2 className="section-title">Three worlds, one garden.</h2>
            <p className="section-subtitle">
              Each discipline is its own little ecosystem — explore them below.
            </p>
          </div>

          <div className="roles-grid">
            {roles.map((r) => (
              <Link to={r.path} key={r.title} className={`role-card card ${r.color}`}>
                <div className="role-card__icon">{r.icon}</div>
                <h3 className="role-card__title">{r.title}</h3>
                <p className="role-card__desc">{r.desc}</p>
                <div className="role-card__tags">
                  {r.tags.map(t => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
                <span className="role-card__arrow">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED WORKS ── */}
      <section className="section works-section">
        <div className="works-section__bg" />
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Selected Works</span>
            <h2 className="section-title">A few things I'm proud of.</h2>
          </div>

          <div className="works-grid">
            {works.map((w, i) => (
              <div key={i} className="work-item card">
                <div className="work-item__emoji">{w.emoji}</div>
                <div className="work-item__info">
                  <span className="work-item__label">{w.label}</span>
                  <h4 className="work-item__title">{w.title}</h4>
                  <p className="work-item__note">{w.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section about-section">
        <div className="container about-inner">
          <div className="about-text">
            <span className="section-tag">About Me</span>
            <h2 className="section-title" style={{ textAlign:'left', marginBottom:'1.5rem' }}>
              A quiet creative<br />in a loud world.
            </h2>
            <p>
              I'm Zaitun Ludni — a creative practitioner from Indonesia with a love for things that
              feel <em>handcrafted and considered.</em> Whether I'm untangling a Japanese sentence,
              painting a character into existence, or sculpting a cozy 3D world, I bring the
              same energy: slow, intentional, and full of care.
            </p>
            <br />
            <p>
              I believe good work leaves traces — a warmth in the reader, a second glance at a
              poster, a world worth exploring. That's what I'm always reaching for.
            </p>
            <div style={{ marginTop:'2rem', display:'flex', gap:'1rem', flexWrap:'wrap' }}>
              <a href="mailto:ludnizaitun@gmail.com" className="btn btn-primary">Work With Me</a>
              <Link to="/illustration" className="btn btn-outline">View Portfolio</Link>
            </div>
          </div>

          <div className="about-stats">
            {[
              { num: '5+',  label: 'Years of Practice' },
              { num: '30+', label: 'Projects Completed' },
              { num: '3',   label: 'Creative Disciplines' },
              { num: '12+', label: 'Happy Clients' },
            ].map(s => (
              <div key={s.label} className="stat-card card">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section id="contact" className="section contact-section">
        <div className="contact-inner">
          <div className="contact-flowers">
            {['🌼','🌿','✦','🌸','🌼'].map((f,i) => (
              <span key={i} style={{ animationDelay:`${i*0.4}s` }} className="c-flower">{f}</span>
            ))}
          </div>
          <span className="section-tag">Let's Collaborate</span>
          <h2 className="contact-title display-title">Plant something<br /><em>together.</em></h2>
          <p className="contact-sub">
            Open to freelance projects, commissions, and conversations that feel meaningful.
          </p>
          <a href="mailto:ludnizaitun@gmail.com" className="btn btn-lime" style={{ fontSize:'1rem', padding:'0.9rem 2.5rem' }}>
            📬 Send a Message
          </a>
        </div>
      </section>

    </div>
  )
}
