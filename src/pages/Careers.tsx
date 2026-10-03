import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import { MapPin, Clock, ArrowRight, Heart, Coffee, Plane, GraduationCap } from 'lucide-react';

const positions = [
  {
    tag: 'ENGINEERING',
    tagClass: 'tag-blue',
    title: 'Senior Network Engineer',
    location: 'San Francisco, CA (Remote OK)',
    type: 'Full-Time',
    salary: '$160k – $210k',
    desc: 'Design and build the next generation of our AI Boost Engine. You\'ll work on low-level network optimization, protocol development, and our global node infrastructure.',
  },
  {
    tag: 'ENGINEERING',
    tagClass: 'tag-blue',
    title: 'iOS Engineer',
    location: 'Remote (Global)',
    type: 'Full-Time',
    salary: '$130k – $180k',
    desc: 'Lead iOS development for Scimbra. Deep experience with Swift, NetworkExtension framework, and VPN protocols required.',
  },
  {
    tag: 'DESIGN',
    tagClass: 'tag-purple',
    title: 'Product Designer',
    location: 'San Francisco, CA',
    type: 'Full-Time',
    salary: '$120k – $160k',
    desc: 'Shape the user experience of Scimbra across mobile and upcoming desktop platforms. You\'ll own end-to-end design from research to high-fidelity prototypes.',
  },
  {
    tag: 'ENGINEERING',
    tagClass: 'tag-blue',
    title: 'Backend Engineer (Go)',
    location: 'Remote (EU/US)',
    type: 'Full-Time',
    salary: '$140k – $190k',
    desc: 'Build and scale our global node management system. Go, Kubernetes, and distributed systems experience essential.',
  },
  {
    tag: 'SECURITY',
    tagClass: 'tag-green',
    title: 'Security Researcher',
    location: 'Remote (Global)',
    type: 'Full-Time',
    salary: '$150k – $200k',
    desc: 'Lead penetration testing, vulnerability research, and security audits of our infrastructure and apps. Help us stay ahead of threats.',
  },
  {
    tag: 'GROWTH',
    tagClass: 'tag-purple',
    title: 'Growth Marketing Manager',
    location: 'San Francisco, CA (Hybrid)',
    type: 'Full-Time',
    salary: '$100k – $140k',
    desc: 'Drive user acquisition across organic and paid channels. You\'ll own our ASO strategy, content marketing, and community growth initiatives.',
  },
];

const benefits = [
  { icon: <Heart size={22} color="#00C2FF" />, title: 'Full Health Coverage', desc: 'Medical, dental, and vision for you and your dependents — 100% premium covered.' },
  { icon: <Coffee size={22} color="#00E676" />, title: 'Flexible Work', desc: 'Remote-first culture with optional office access. Work from wherever you do your best.' },
  { icon: <Plane size={22} color="#C77DFF" />, title: 'Unlimited PTO', desc: 'Take the time you need. 20-day minimum encouraged, no approval needed for trips under 2 weeks.' },
  { icon: <GraduationCap size={22} color="#00C2FF" />, title: 'Learning Budget', desc: '$3,000/year for courses, conferences, and books. Plus a book budget for your home library.' },
];

export default function Careers() {
  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="Careers"
        title="Help Us Make the Internet"
        highlight="Faster for Everyone"
        desc="We're a small, passionate team building tools that millions of people rely on every day. If you care about speed, security, and user experience — we want you."
      />

      <div className="page-content">
        <div className="page-meta">6 OPEN POSITIONS · HIRING GLOBALLY</div>

        <h2>Why Join Us?</h2>
        <p>
          We're a remote-first team of 42 people spread across 8 countries. We move fast, ship
          often, and measure everything. You won't be a cog in a machine — you'll have real
          ownership, real impact, and a direct line to millions of users.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', margin: '32px 0' }}>
          {benefits.map((b, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '24px 22px',
              display: 'flex',
              gap: '14px',
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'rgba(255,255,255,0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>{b.icon}</div>
              <div>
                <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{b.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2>Open Positions</h2>
        <p>Browse our current openings. Don't see a perfect fit? Email us anyway — we're always looking for exceptional people.</p>

        <div className="careers-grid">
          {positions.map((pos, i) => (
            <div className="career-card" key={i}>
              <span className={`career-card-tag ${pos.tagClass}`}>{pos.tag}</span>
              <h3 className="career-card-title">{pos.title}</h3>
              <div className="career-card-meta">
                <span><MapPin size={12} /> {pos.location}</span>
                <span><Clock size={12} /> {pos.type}</span>
                <span style={{ color: '#00C2FF' }}>{pos.salary}</span>
              </div>
              <p className="career-card-desc">{pos.desc}</p>
              <Link to="/contact" className="career-card-btn" style={{ textDecoration: 'none' }}>
                Apply Now <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '48px',
          padding: '32px',
          background: 'linear-gradient(160deg, rgba(0,194,255,0.06), rgba(123,47,255,0.04))',
          border: '1px solid rgba(0,194,255,0.2)',
          borderRadius: '20px',
        }}>
          <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
            Don't see the right role?
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', marginBottom: '20px' }}>
            Send us your resume and tell us how you'd make Scimbra better.
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '12px 24px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #00C2FF, #7B2FFF)',
            color: '#fff', textDecoration: 'none',
            fontFamily: "'Rajdhani', sans-serif", fontSize: '14px', fontWeight: 700, letterSpacing: '1px',
          }}>
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
