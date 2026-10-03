import { Link } from 'react-router-dom';
import { Zap, Smartphone, Apple } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <div className="nav-logo-icon">
          <Zap size={18} color="#00C2FF" />
        </div>
        <div className="nav-logo-text">
          SCIMBRA
          <span>BOOST · SECURE · CONNECT</span>
        </div>
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="nav-cta">
        <a href="#" className="btn-nav-ghost" style={{ textDecoration: 'none' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Apple size={16} /> iOS
          </span>
        </a>
        <a href="#" className="btn-nav-solid" style={{ textDecoration: 'none' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Smartphone size={16} /> Android
          </span>
        </a>
      </div>
    </nav>
  );
}
