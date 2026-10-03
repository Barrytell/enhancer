import { Link } from 'react-router-dom';
import { Zap, Twitter, Github, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Zap size={18} color="#00C2FF" />
              </div>
              <div className="footer-logo-text">
                SCIMBRA
                <span>BOOST · SECURE · CONNECT</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              The all-in-one network optimization app. Scimbra boosts your speed, secures your connection, and connects you to the world — faster.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="Twitter"><Twitter size={15} color="#555" /></a>
              <a href="#" className="social-link" aria-label="GitHub"><Github size={15} color="#555" /></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><Linkedin size={15} color="#555" /></a>
              <a href="#" className="social-link" aria-label="YouTube"><Youtube size={15} color="#555" /></a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Product</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
              <li><Link to="/gdpr">GDPR</Link></li>
              <li><Link to="/security">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Support</h4>
            <ul className="footer-links">
              <li><Link to="/contact">Help Center</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/security">Security Center</Link></li>
              <li><Link to="/privacy-policy">Data Requests</Link></li>
              <li><Link to="/gdpr">Privacy Rights</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Scimbra. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms-of-service">Terms</Link>
            <Link to="/cookie-policy">Cookies</Link>
            <Link to="/gdpr">GDPR</Link>
            <Link to="/security">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
