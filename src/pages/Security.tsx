import PageHero from '@/components/PageHero';
import { Lock, ShieldCheck, KeyRound, Eye, FileCheck, Bug, Server, Zap } from 'lucide-react';

export default function Security() {
  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="Security"
        title="Security at"
        highlight="Scimbra"
        desc="Security is not a feature we add on — it's the foundation we build on. Here's how we protect your data, your connection, and your privacy."
      />
      <div className="page-content">
        <div className="page-meta">LAST AUDITED: JULY 2026 · SOC 2 TYPE II · ISO 27001</div>

        <h2>Our Security Philosophy</h2>
        <p>
          We operate on three principles: <strong>encrypt everything</strong>,
          <strong> minimize data</strong>, and <strong>assume breach</strong>. Every decision —
          from architecture to feature design — is filtered through these principles.
        </p>

        <div className="security-grid">
          <div className="security-card">
            <div className="security-card-icon fci-blue"><Lock size={24} color="#00C2FF" /></div>
            <h3 className="security-card-title">Encryption Everywhere</h3>
            <p className="security-card-desc">
              AES-256-GCM for data in transit. AES-256 for data at rest. WireGuard protocol for
              maximum speed without compromising security. Keys are rotated every 90 days.
            </p>
          </div>
          <div className="security-card">
            <div className="security-card-icon fci-green"><KeyRound size={24} color="#00E676" /></div>
            <h3 className="security-card-title">Zero-Knowledge Architecture</h3>
            <p className="security-card-desc">
              We don't log your traffic, DNS queries, or browsing history. Your network activity
              is encrypted end-to-end and invisible to us — by design, not by promise.
            </p>
          </div>
          <div className="security-card">
            <div className="security-card-icon fci-purple"><ShieldCheck size={24} color="#C77DFF" /></div>
            <h3 className="security-card-title">Kill Switch</h3>
            <p className="security-card-desc">
              If your secure tunnel drops for any reason, the kill switch instantly blocks all
              network traffic, preventing data leaks. No exceptions, no fallback to unencrypted.
            </p>
          </div>
          <div className="security-card">
            <div className="security-card-icon fci-blue"><Server size={24} color="#00C2FF" /></div>
            <h3 className="security-card-title">Hardened Infrastructure</h3>
            <p className="security-card-desc">
              All servers run on dedicated hardware with disk encryption, minimal attack
              surface, and no shared tenancy. Access requires hardware keys + MFA + VPN.
            </p>
          </div>
          <div className="security-card">
            <div className="security-card-icon fci-green"><Eye size={24} color="#00E676" /></div>
            <h3 className="security-card-title">DNS Leak Protection</h3>
            <p className="security-card-desc">
              All DNS queries are routed through our encrypted tunnel and resolved by our
              privacy-first DNS servers. No third-party DNS, no logging, no leaks.
            </p>
          </div>
          <div className="security-card">
            <div className="security-card-icon fci-purple"><Bug size={24} color="#C77DFF" /></div>
            <h3 className="security-card-title">Bug Bounty Program</h3>
            <p className="security-card-desc">
              We run a public bug bounty program with rewards up to $25,000 for critical
              vulnerabilities. See our <a href="https://github.com">security page on GitHub</a> for scope and rules.
            </p>
          </div>
        </div>

        <h2>Compliance & Certifications</h2>
        <ul>
          <li><strong>SOC 2 Type II</strong> — Audited annually by an independent third party. Latest report available under NDA.</li>
          <li><strong>ISO 27001</strong> — Certified for information security management systems.</li>
          <li><strong>GDPR Compliant</strong> — Full compliance with EU data protection regulations. See our <a href="/gdpr">GDPR page</a>.</li>
          <li><strong>CCPA Compliant</strong> — Compliant with California Consumer Privacy Act.</li>
          <li><strong>Open Source Protocols</strong> — Our core optimization protocols are open-source (MIT) and peer-reviewed.</li>
        </ul>

        <h2>Incident Response</h2>
        <p>
          We maintain a 24/7 incident response capability. In the event of a security incident:
        </p>
        <ul>
          <li>Our on-call team is paged within 5 minutes of detection.</li>
          <li>Affected users are notified within 72 hours of confirmation.</li>
          <li>Regulatory authorities are notified as required by law.</li>
          <li>A post-mortem is published publicly within 30 days of resolution.</li>
        </ul>

        <h2>Responsible Disclosure</h2>
        <p>
          Found a vulnerability? We want to hear from you. Email
          <a href="mailto:security@scimbra.com"> security@scimbra.com</a> with
          details. We respond within 48 hours and work with you on responsible disclosure. We
          do not pursue legal action against good-faith security research.
        </p>

        <h2>Security Best Practices for Users</h2>
        <ul>
          <li>Use a strong, unique password for your Scimbra account.</li>
          <li>Enable two-factor authentication (available in Settings &gt; Security).</li>
          <li>Keep the app updated to the latest version for security patches.</li>
          <li>Use the kill switch feature — it's on by default, don't turn it off.</li>
          <li>Avoid using the Service on rooted or jailbroken devices, which may compromise security.</li>
        </ul>

        <div style={{
          marginTop: '40px',
          padding: '32px',
          background: 'linear-gradient(160deg, rgba(0,194,255,0.06), rgba(123,47,255,0.04))',
          border: '1px solid rgba(0,194,255,0.2)',
          borderRadius: '20px',
          textAlign: 'center',
        }}>
          <FileCheck size={36} color="#00C2FF" style={{ margin: '0 auto 16px' }} />
          <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
            Need Our Security Documents?
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', marginBottom: '20px' }}>
            SOC 2 reports, penetration test summaries, and compliance certificates available under NDA.
          </p>
          <a href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '12px 24px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #00C2FF, #7B2FFF)',
            color: '#fff', textDecoration: 'none',
            fontFamily: "'Rajdhani', sans-serif", fontSize: '14px', fontWeight: 700, letterSpacing: '1px',
          }}>
            <Zap size={16} /> Request Documents
          </a>
        </div>
      </div>
    </div>
  );
}
