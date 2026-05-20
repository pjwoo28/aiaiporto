import { Link } from 'react-router-dom'
import './Illustration.css'

const works = [
  {
    id: 1,
    category: 'Dummy',
    title: 'Solstice Zine Vol.3',
    desc: 'Cover and 8 interior spreads for an independent literary zine exploring the theme of seasonal longing. Soft watercolor textures with digital linework.',
    tags: ['Crayon', 'Cover Art'],
    palette: ['#c8d5b9', '#f0c8b4', '#b8f059', '#e8dfc8'],
    emoji: '📰',
  },
  {
    id: 2,
    category: "Children's Book",
    title: 'The Cloud Who Couldn\'t Rain',
    desc: 'Full illustration set (32 pages) for a children\'s picture book about a little cloud finding her own way. Warm, rounded characters with pastel gouache style.',
    tags: ["Children's Book", 'Character Design', 'Pastel', '32pp'],
    palette: ['#c8dff0', '#f5e642', '#f0c8b4', '#d4f5a0'],
    emoji: '☁️',
  },
  {
    id: 3,
    category: 'Branding',
    title: 'Dapur Kecil Café Identity',
    desc: 'Brand illustration system for a Jakarta café — mascot character, menu illustrations, packaging artwork, and seasonal campaign visuals across 20+ assets.',
    tags: ['Branding', 'Mascot', 'Packaging', 'Digital'],
    palette: ['#8fad88', '#f5e642', '#f0c8b4', '#2d4a27'],
    emoji: '☕',
  },
  {
    id: 4,
    category: 'Editorial',
    title: 'Nusantara Series',
    desc: 'A 12-piece series celebrating the landscapes and cultures of the Indonesian archipelago. Published in a regional travel magazine, now also available as fine art prints.',
    tags: ['Editorial', 'Series', 'Print', 'Culture'],
    palette: ['#5a7a52', '#b8f059', '#f5e642', '#e8dfc8'],
    emoji: '🌴',
  },
  {
    id: 5,
    category: 'Personal Work',
    title: 'Garden Hours',
    desc: 'A personal illustrated journal — 30 small illustrations made across one month, observing light, mood, and quiet domestic scenes. Exhibited at a local gallery.',
    tags: ['Personal', 'Journal', 'Exhibited', 'Observational'],
    palette: ['#c8d5b9', '#f0c8b4', '#e8dfc8', '#d4f5a0'],
    emoji: '🌿',
  },
  {
    id: 6,
    category: 'Game Art',
    title: 'Moonlit Hollow — Game UI',
    desc: 'Illustrated UI elements, world map, item iconography (200+ icons) and loading screen artwork for an indie cozy farming RPG. Matched the game\'s soft, nostalgic aesthetic.',
    tags: ['Game Art', 'UI', 'Icons', 'Indie'],
    palette: ['#c8dff0', '#b8f059', '#5a7a52', '#f5e642'],
    emoji: '🎮',
  },
]

const process = [
  { step: '01', title: 'Concept & Mood', desc: 'We talk about feel, reference, color direction. I build a mood board that captures the soul of the project.' },
  { step: '02', title: 'Rough Sketches', desc: 'Loose thumbnails exploring composition, character pose, and visual hierarchy — quick and iterative.' },
  { step: '03', title: 'Refined Linework', desc: 'Clean, intentional linework or underdrawing. The skeleton before color breathes life into it.' },
  { step: '04', title: 'Color & Texture', desc: 'Layering colors, light, and textured brushes until the illustration feels warm and inhabitable.' },
  { step: '05', title: 'Final Polish', desc: 'Adjustments, final feedback round, export for print or digital — delivered in full resolution.' },
]

const tools_ill = ['Procreate', 'Adobe Illustrator', 'Photoshop', 'Clip Studio Paint', 'Affinity Designer', 'Fresco']

export default function Illustration() {
  return (
    <div className="illustration-page">

      {/* ── HERO ── */}
      <section className="page-hero ill-hero">
        <div className="ill-hero__bg-shapes">
          <div className="ill-shape ill-shape--1" />
          <div className="ill-shape ill-shape--2" />
          <div className="ill-shape ill-shape--3" />
        </div>
        <div className="container">
          <div className="page-hero-tag">Illustration & Visual Art</div>
          <h1 className="page-hero-title">Stories told<br /><em>in color.</em></h1>
          <p className="page-hero-sub">
            Soft, narrative-driven illustrations where feeling comes before perfection —
            and every image has a small world living inside it.
          </p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <a href="#gallery" className="btn btn-primary">View Gallery</a>
            <a href="mailto:zaitun@email.com" className="btn btn-outline">Commission Work</a>
          </div>
        </div>
      </section>

      {/* ── STYLE SHOWCASE ── */}
      <section className="section ill-styles-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">My Style</span>
            <h2 className="section-title">Soft strokes. Warm palettes.<br /><em>Honest feeling.</em></h2>
          </div>
          <div className="style-chips">
            {[
              { label: 'Soft Crayon', emoji: '🎨' },
              { label: 'Textured Digital', emoji: '🌿' },
              { label: 'Cozy Character', emoji: '🧸' },
            ].map(s => (
              <div key={s.label} className="style-chip card">
                <span className="style-chip__emoji">{s.emoji}</span>
                <span className="style-chip__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="section ill-gallery-section">
        <div className="ill-gallery-bg" />
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">Selected illustrations & projects.</h2>
            <p className="section-subtitle">
              Each piece is a small quiet world — click to learn more.
            </p>
          </div>

          <div className="ill-gallery-grid">
            {works.map((w) => (
              <div key={w.id} className={`ill-card card ${w.id === 1 || w.id === 6 ? 'ill-card--wide' : ''}`}>
                {/* Simulated illustration preview */}
                <div className="ill-card__preview" style={{
                  background: `linear-gradient(135deg, ${w.palette[0]}, ${w.palette[1]}, ${w.palette[2]})`
                }}>
                  <span className="ill-card__preview-emoji">{w.emoji}</span>
                  <div className="ill-card__preview-dots">
                    {w.palette.map((c, i) => (
                      <span key={i} className="ill-card__dot" style={{ background: c }} />
                    ))}
                  </div>
                </div>
                <div className="ill-card__body">
                  <span className="ill-card__cat">{w.category}</span>
                  <h3 className="ill-card__title">{w.title}</h3>
                  <p className="ill-card__desc">{w.desc}</p>
                  <div className="ill-card__tags">
                    {w.tags.map(t => <span key={t} className="badge">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section ill-process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">My Process</span>
            <h2 className="section-title">How an idea becomes a world.</h2>
          </div>
          <div className="process-steps">
            {process.map((p, i) => (
              <div key={i} className="process-step card">
                <span className="process-step__num">{p.step}</span>
                <h4 className="process-step__title">{p.title}</h4>
                <p className="process-step__desc">{p.desc}</p>
                {i < process.length - 1 && <div className="process-step__arrow">↓</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="section ill-tools-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-header">
            <span className="section-tag">Toolkit</span>
            <h2 className="section-title">Tools I draw with.</h2>
          </div>
          <div className="ill-tools-row">
            {tools_ill.map(t => (
              <div key={t} className="ill-tool-badge card">
                🖌️ {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section ill-cta">
        <div className="ill-cta__inner container" style={{ textAlign:'center' }}>
          <span className="section-tag">Commission Open</span>
          <h2 className="section-title">Let's make something<br /><em>beautiful together.</em></h2>
          <p className="section-subtitle" style={{ marginBottom:'2rem' }}>
            
          </p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <a href="mailto:ludnizaitun@gmail.com" className="btn btn-lime" style={{ fontSize:'1rem', padding:'0.9rem 2.5rem' }}>
              🎨 Open a Commission
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
