import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__garden">
        <div className="footer__flowers">
          {['🌼','🌿','🌸','✦','🌼','🌿','✦','🌸','🌼'].map((f, i) => (
            <span key={i} className="footer__flower" style={{ animationDelay: `${i * 0.3}s` }}>
              {f}
            </span>
          ))}
        </div>
      </div>

      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-icon">✦</span>
            Zaitun<span>.L</span>
          </Link>
          <p className="footer__tagline">
            Crafting worlds through words, visuals & dimensions.
          </p>
        </div>

        <div className="footer__nav">
          <h4>Pages</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/translation">Translation</Link></li>
            <li><Link to="/illustration">Illustration</Link></li>
            <li><Link to="/3d-modelling">3D Modelling</Link></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Get in Touch</h4>
          <ul>
            <li><a href="mailto:ludnizaitun@gmail.com">Email</a></li>
            <li><a href="https://www.linkedin.com/in/zaitun-ludni-a21004307/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/zaitunludni/" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {year} Zaitun Ludni — all things made with quiet care 🌿</p>
      </div>
    </footer>
  )
}
