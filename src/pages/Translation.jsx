/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import './Translation.css'

const projects = [
  {
    emoji: '📖',
    category: 'Literary Translation',
    title: '"The Vanishing Garden"',
    pair: 'Japanese → English',
    year: '2024',
    desc: 'A poetic novel by Yuki Haramoto exploring grief and memory in rural Japan. Required deep cultural adaptation of seasonal metaphors and classical Japanese literary forms.',
    tags: ['Novel', 'Literary', 'JP→EN', 'Cultural Adaptation'],
  },
  {
    emoji: '🎮',
    category: 'Game Localization',
    title: 'Moonlit Hollow',
    pair: 'English → Indonesian',
    year: '2024',
    desc: 'Full localization of a cozy farming RPG — 150,000+ words including UI strings, NPC dialogue, seasonal events, and in-game lore books with a natural, colloquial Indonesian voice.',
    tags: ['Game L10n', 'EN→ID', 'Dialogue', 'UI Strings'],
  },
  {
    emoji: '🎬',
    category: 'Subtitle Translation',
    title: 'Sakura House Documentary Series',
    pair: 'Japanese → Indonesian',
    year: '2023',
    desc: 'Subtitle adaptation for a 6-episode Netflix documentary. Timed subtitles, capturing speaking rhythm and regional Kansai dialect nuances in a readable Indonesian format.',
    tags: ['Subtitles', 'Documentary', 'JP→ID', 'Netflix'],
  },
  {
    emoji: '🌏',
    category: 'Technical Translation',
    title: 'Sustainable Architecture Handbook',
    pair: 'English → Indonesian',
    year: '2023',
    desc: 'Technical manual for Indonesian architects covering green building standards. Terminology glossary created with domain expert review for 80,000 words of precise technical content.',
    tags: ['Technical', 'EN→ID', 'Architecture', 'Glossary'],
  },
  {
    emoji: '✍️',
    category: 'Literary Translation',
    title: '"Small Hours" Poetry Collection',
    pair: 'Japanese → English',
    year: '2022',
    desc: 'A collection of 45 contemporary Japanese haiku and tanka poems. Each poem required balancing phonetic beauty with semantic accuracy — working closely with the poet on intent.',
    tags: ['Poetry', 'JP→EN', 'Haiku', 'Collaborative'],
  },
  {
    emoji: '📱',
    category: 'App Localization',
    title: 'Kokoro Wellness App',
    pair: 'Japanese → English & Indonesian',
    year: '2022',
    desc: 'Mental wellness app localized into two languages simultaneously. Sensitive copy about mindfulness and mental health required culturally appropriate tone shifts for each market.',
    tags: ['App L10n', 'Wellness', 'JP→EN/ID', 'Sensitive Copy'],
  },
]

const skills = [
  { label: 'English → Indonesian', level: 92 },
  { label: 'Indonesian → English', level: 90 },
    { label: 'Literary Translation', level: 96 },
  { label: 'Subtitle Adaptation', level: 85 },
  { label: 'Game Localization', level: 80 },
]

const tools = ['SDL Trados Studio', 'memoQ', 'Memsource', 'Smartcat', 'Aegisub', 'Notepad++', 'CAT Tools', 'TM Management']

export default function Translation() {
  return (
    <div className="translation-page">

      {/* ── HERO ── */}
      <section className="page-hero trans-hero">
        <div className="trans-hero__deco">
          {['語','言','葉','こ','と'].map((c, i) => (
            <span key={i} className="trans-hero__char" style={{ animationDelay: `${i * 0.5}s` }}>{c}</span>
          ))}
        </div>
        <div className="container">
          <div className="page-hero-tag">Translation & Localization</div>
          <h1 className="page-hero-title">Lost in<br /><em>Beautiful</em> Translation</h1>
          <p className="page-hero-sub">
            Words carry worlds. I move them carefully — preserving voice, culture, and
            feeling across three languages.
          </p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
          </div>
        </div>
      </section>

      {/* ── LANGUAGE PAIRS ── */}
      <section className="section">
        <div className="container">
          <div className="lang-pairs">
            {[
              { from:'English', to:'Bahasa Indonesia',   flag:'🇺🇸→🇮🇩', label:'EN → ID' },
              { from:'Bahasa Indonesia', to:'English',   flag:'🇮🇩→🇺🇸', label:'ID → EN' },
            ].map((lp) => (
              <div key={lp.label} className="lang-pair card">
                <div className="lang-pair__flag">{lp.flag}</div>
                <div className="lang-pair__text">
                  <span className="lang-pair__from">{lp.from}</span>
                  <span className="lang-pair__arrow">⟶</span>
                  <span className="lang-pair__to">{lp.to}</span>
                </div>
                <span className="badge">{lp.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="section trans-projects-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">Works I've translated with care.</h2>
            <p className="section-subtitle">
              From literary fiction to games — each project a different kind of world.
            </p>
          </div>

          <div className="trans-projects-grid">
            {projects.map((p, i) => (
              <div key={i} className="trans-project card">
                <div className="trans-project__header">
                  <span className="trans-project__emoji">{p.emoji}</span>
                  <div>
                    <span className="trans-project__cat">{p.category}</span>
                    <div className="trans-project__pair">{p.pair} · {p.year}</div>
                  </div>
                </div>
                <h3 className="trans-project__title">{p.title}</h3>
                <p className="trans-project__desc">{p.desc}</p>
                <div className="trans-project__tags">
                  {p.tags.map(t => <span key={t} className="badge">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section trans-skills-section">
        <div className="trans-skills-bg" />
        <div className="container trans-skills-inner">
          <div>
            <span className="section-tag">Expertise</span>
            <h2 className="section-title" style={{ textAlign:'left', marginBottom:'2.5rem' }}>
              Language mastery<br /><em>& specializations.</em>
            </h2>
            <div className="skill-bars">
              {skills.map(s => (
                <div key={s.label} className="skill-bar">
                  <div className="skill-bar__label">
                    <span>{s.label}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div className="skill-bar__track">
                    <div
                      className="skill-bar__fill"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="trans-tools">
            <h3 className="trans-tools__title">Tools & CAT Software</h3>
            <div className="trans-tools__grid">
              {tools.map(t => (
                <div key={t} className="tool-chip card">{t}</div>
              ))}
            </div>

            <div className="trans-certs">
              <h3 className="trans-tools__title" style={{ marginTop:'2rem' }}>Certifications</h3>
              {[
                '📜 TOEFL 510 — English Language Proficiency',
                '🎓 JLPT N5 — Japanese Language Proficiency',
              ].map(c => (
                <div key={c} className="cert-item card">{c}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section trans-cta">
        <div className="container" style={{ textAlign:'center' }}>
          <span className="section-tag">Let's Work Together</span>
          <h2 className="section-title">Have something to translate?</h2>
          <p className="section-subtitle" style={{ marginBottom:'2rem' }}>
            Every great story deserves to live in more than one language.
          </p>
          <a href="mailto:ludnizaitun@gmail.com" className="btn btn-lime" style={{ fontSize:'1rem', padding:'0.9rem 2.5rem' }}>
            📬 Get a Free Quote
          </a>
        </div>
      </section>

    </div>
  )
}
