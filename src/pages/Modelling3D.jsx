import { Link } from 'react-router-dom'
import './Modelling3D.css'

const projects = [
  {
    id: 1,
    category: 'Character Art',
    title: 'Forest Spirit Rig',
    year: '2024',
    desc: 'A fully rigged stylized character inspired by Indonesian forest folklore. Designed for animation — complete with facial shape keys, cloth simulation, and a 4K PBR texture set.',
    tags: ['Character', 'Rigged', 'Folklore', '4K Textures'],
    gradient: 'linear-gradient(135deg, #3d5c35, #8fad88, #b8f059)',
    icon: '🌿',
    wide: true,
  },
  {
    id: 2,
    category: 'Environment',
    title: 'Cozy Kitchen Set',
    year: '2024',
    desc: 'A fully furnished stylized kitchen environment — modular props optimized for real-time rendering. Perfect for game backgrounds or animated short films.',
    tags: ['Environment', 'Props', 'Game-Ready', 'Stylized'],
    gradient: 'linear-gradient(135deg, #f5e642, #f0c8b4, #e8dfc8)',
    icon: '🏠',
    wide: false,
  },
  {
    id: 3,
    category: 'Product Vis',
    title: 'Botanica Skincare Line',
    year: '2023',
    desc: 'Photorealistic product visualization for a natural skincare brand — 6 hero product shots with custom HDRI lighting, glass shader, and label displacement mapping.',
    tags: ['Product Vis', 'Photorealistic', 'Skincare', 'Lighting'],
    gradient: 'linear-gradient(135deg, #c8d5b9, #d4f5a0, #8fad88)',
    icon: '🧴',
    wide: false,
  },
  {
    id: 4,
    category: 'Environment',
    title: 'Moonlit Village',
    year: '2023',
    desc: 'A night-time village scene for a cozy game project — hand-painted textures, volumetric fog, and animated fireflies. Rendered in Cycles with 2.5-hour total render time.',
    tags: ['Environment', 'Night Scene', 'Hand-Painted', 'Cycles'],
    gradient: 'linear-gradient(135deg, #1a2e16, #3d5c35, #c8dff0)',
    icon: '🌙',
    wide: true,
  },
  {
    id: 5,
    category: 'Character Art',
    title: 'Dapur Kecil Mascot 3D',
    year: '2022',
    desc: 'Taking the 2D café mascot into three dimensions — modeled, textured, rigged, and animated for use in motion graphics campaigns and social media content.',
    tags: ['Character', 'Mascot', '2D→3D', 'Animation'],
    gradient: 'linear-gradient(135deg, #f5e642, #8fad88, #2d4a27)',
    icon: '☕',
    wide: false,
  },
  {
    id: 6,
    category: 'Stylized Art',
    title: 'Archipelago Dioramas',
    year: '2022',
    desc: 'A series of 5 miniature diorama-style 3D scenes depicting islands of the Indonesian archipelago — each contained in a snow-globe aesthetic sphere with tilt-shift rendering.',
    tags: ['Stylized', 'Diorama', 'Series', 'Indonesia'],
    gradient: 'linear-gradient(135deg, #c8dff0, #b8f059, #f5e642)',
    icon: '🏝️',
    wide: false,
  },
]

const software = [
  { name: 'Blender', level: 96, icon: '🔶' },
  { name: 'Substance Painter', level: 88, icon: '🎨' },
  { name: 'ZBrush', level: 80, icon: '🗿' },
  { name: 'Cinema 4D', level: 72, icon: '🎬' },
  { name: 'Unreal Engine 5', level: 70, icon: '⚡' },
  { name: 'KeyShot', level: 85, icon: '💡' },
]

const specialties = [
  { icon: '🧍', title: 'Character Modelling', desc: 'Stylized & semi-realistic characters with clean topology, ready for rigging and animation.' },
  { icon: '🌲', title: 'Environment Design', desc: 'Immersive game-ready environments — from cozy interiors to expansive outdoor scenes.' },
  { icon: '📦', title: 'Product Visualization', desc: 'Photorealistic renders for commercial use — skincare, electronics, food & beverage.' },
  { icon: '💎', title: 'Texturing & Shading', desc: 'PBR, hand-painted, and stylized shader work — Substance Painter, Blender Shader Editor.' },
]

export default function Modelling3D() {
  return (
    <div className="modelling-page">

      {/* ── HERO ── */}
      <section className="page-hero mod-hero">
        <div className="mod-hero__bg">
          <div className="mod-cube mod-cube--1" />
          <div className="mod-cube mod-cube--2" />
          <div className="mod-cube mod-cube--3" />
          <div className="mod-ring mod-ring--1" />
          <div className="mod-ring mod-ring--2" />
        </div>
        <div className="container">
          <div className="page-hero-tag">3D Modelling & Visualization</div>
          <h1 className="page-hero-title">Sculpting worlds<br /><em>from nothing.</em></h1>
          <p className="page-hero-sub">
            Every object, every environment, every character — built vertex by vertex
            until it breathes. Stylized, photorealistic, or somewhere in between.
          </p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <a href="#works" className="btn btn-primary">View 3D Works</a>
            <a href="mailto:zaitun@email.com" className="btn btn-outline">Get a Quote</a>
          </div>
        </div>
      </section>

      {/* ── SPECIALTIES ── */}
      <section className="section mod-spec-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Specializations</span>
            <h2 className="section-title">What I build in three dimensions.</h2>
          </div>
          <div className="spec-grid">
            {specialties.map((s, i) => (
              <div key={i} className="spec-card card">
                <div className="spec-card__icon">{s.icon}</div>
                <h3 className="spec-card__title">{s.title}</h3>
                <p className="spec-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="works" className="section mod-works-section">
        <div className="mod-works-bg" />
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">3D works I've crafted.</h2>
            <p className="section-subtitle">
              Characters, environments, and products — each project its own universe.
            </p>
          </div>

          <div className="mod-grid">
            {projects.map((p) => (
              <div key={p.id} className={`mod-card card ${p.wide ? 'mod-card--wide' : ''}`}>
                {/* 3D Preview Area */}
                <div className="mod-card__preview" style={{ background: p.gradient }}>
                  <div className="mod-card__scene">
                    <span className="mod-card__icon">{p.icon}</span>
                    <div className="mod-card__wireframe" />
                  </div>
                  <div className="mod-card__year">{p.year}</div>
                </div>
                <div className="mod-card__body">
                  <span className="mod-card__cat">{p.category}</span>
                  <h3 className="mod-card__title">{p.title}</h3>
                  <p className="mod-card__desc">{p.desc}</p>
                  <div className="mod-card__tags">
                    {p.tags.map(t => <span key={t} className="badge">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOFTWARE SKILLS ── */}
      <section className="section mod-skills-section">
        <div className="container mod-skills-inner">
          <div>
            <span className="section-tag">Software</span>
            <h2 className="section-title" style={{ textAlign:'left', marginBottom:'2.5rem' }}>
              Tools of<br /><em>the trade.</em>
            </h2>
            <div className="mod-skill-bars">
              {software.map(s => (
                <div key={s.name} className="mod-skill-bar">
                  <div className="mod-skill-bar__label">
                    <span>{s.icon} {s.name}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div className="mod-skill-bar__track">
                    <div
                      className="mod-skill-bar__fill"
                      style={{ width:`${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mod-workflow">
            <h3 className="mod-workflow__title">My Workflow</h3>
            <div className="workflow-steps">
              {[
                { emoji:'💡', step:'Concept', desc:'Sketches, reference gathering, scope definition' },
                { emoji:'🗿', step:'Blockout', desc:'Low-poly base mesh and primary silhouette' },
                { emoji:'🔲', step:'Modelling', desc:'Full topology, subdivision-ready geometry' },
                { emoji:'🎨', step:'Texturing', desc:'UV unwrap, PBR or stylized texture painting' },
                { emoji:'💡', step:'Lighting', desc:'Scene setup, HDRI or custom 3-point lighting' },
                { emoji:'✨', step:'Render', desc:'Final compositing and post-processing' },
              ].map((w, i) => (
                <div key={i} className="workflow-step card">
                  <span className="workflow-step__num">{String(i+1).padStart(2,'0')}</span>
                  <span className="workflow-step__emoji">{w.emoji}</span>
                  <div>
                    <strong className="workflow-step__title">{w.step}</strong>
                    <p className="workflow-step__desc">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RENDER STATS ── */}
      <section className="section mod-stats-section">
        <div className="mod-stats-inner">
          <div className="container">
            <div className="mod-stats-grid">
              {[
                { num:'50+', label:'3D Projects', icon:'🧊' },
                { num:'200+', label:'Models Created', icon:'🗿' },
                { num:'4K',   label:'Max Texture Res', icon:'🔲' },
                { num:'∞',    label:'Polygons of love', icon:'💚' },
              ].map(s => (
                <div key={s.label} className="mod-stat">
                  <span className="mod-stat__icon">{s.icon}</span>
                  <span className="mod-stat__num">{s.num}</span>
                  <span className="mod-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section mod-cta">
        <div className="container" style={{ textAlign:'center' }}>
          <span className="section-tag">Open for Commissions</span>
          <h2 className="section-title">
            Ready to build your<br /><em>next 3D world?</em>
          </h2>
          <p className="section-subtitle" style={{ marginBottom:'2rem' }}>
            Characters, products, environments — if you can imagine it, I can model it.
          </p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <a href="mailto:zaitun@email.com" className="btn btn-lime" style={{ fontSize:'1rem', padding:'0.9rem 2.5rem' }}>
              🧊 Start a Project
            </a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="btn btn-outline">
              View on Behance ↗
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
