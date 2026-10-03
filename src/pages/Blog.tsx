import PageHero from '@/components/PageHero';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    tag: 'PRODUCT',
    tagClass: 'tag-blue',
    icon: '🚀',
    bg: 'linear-gradient(135deg, rgba(0,194,255,0.1), rgba(0,194,255,0.03))',
    title: 'Introducing AI Boost Engine v4.2',
    excerpt: 'Our biggest update yet. The new AI Boost Engine analyzes your network 10x faster and applies optimizations in real time, delivering up to 300% speed improvements.',
    author: 'Marcus Chen',
    date: 'Sep 10, 2026',
    readTime: '5 min',
  },
  {
    tag: 'SECURITY',
    tagClass: 'tag-green',
    icon: '🔐',
    bg: 'linear-gradient(135deg, rgba(0,230,118,0.1), rgba(0,230,118,0.03))',
    title: 'How AES-256 Encryption Actually Works',
    excerpt: 'A deep dive into the encryption standard that protects your data. We break down the math, the implementation, and why it matters for your privacy.',
    author: 'Sarah Lin',
    date: 'Sep 5, 2026',
    readTime: '8 min',
  },
  {
    tag: 'NETWORK',
    tagClass: 'tag-purple',
    icon: '🌐',
    bg: 'linear-gradient(135deg, rgba(123,47,255,0.1), rgba(123,47,255,0.03))',
    title: 'Why Your Ping Is High (And How to Fix It)',
    excerpt: 'High ping isn\'t just about distance. We explain the five hidden causes of latency and how Scimbra\'s routing engine addresses each one.',
    author: 'Raj Patel',
    date: 'Aug 28, 2026',
    readTime: '6 min',
  },
  {
    tag: 'GAMING',
    tagClass: 'tag-blue',
    icon: '🎮',
    bg: 'linear-gradient(135deg, rgba(0,194,255,0.1), rgba(0,194,255,0.03))',
    title: 'Game Mode: Optimizing for 200+ Titles',
    excerpt: 'How we built per-game optimization profiles that prioritize the right traffic for each title — from Valorant to Minecraft to Call of Duty.',
    author: 'Marcus Chen',
    date: 'Aug 20, 2026',
    readTime: '7 min',
  },
  {
    tag: 'PRODUCT',
    tagClass: 'tag-green',
    icon: '📊',
    bg: 'linear-gradient(135deg, rgba(0,230,118,0.1), rgba(0,230,118,0.03))',
    title: 'New: Advanced Live Monitor Dashboard',
    excerpt: 'Track ping, jitter, packet loss, and throughput in real time with beautiful charts. Set custom alerts and export historical data as CSV.',
    author: 'Lisa Wang',
    date: 'Aug 12, 2026',
    readTime: '4 min',
  },
  {
    tag: 'COMPANY',
    tagClass: 'tag-purple',
    icon: '🏆',
    bg: 'linear-gradient(135deg, rgba(123,47,255,0.1), rgba(123,47,255,0.03))',
    title: 'Scimbra Hits 2.5M Users',
    excerpt: 'A milestone worth celebrating. We reflect on our journey from a side project to a global network optimization platform serving millions.',
    author: 'Team NE',
    date: 'Aug 1, 2026',
    readTime: '3 min',
  },
];

export default function Blog() {
  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="Blog"
        title="Insights from the"
        highlight="Network Team"
        desc="Product updates, engineering deep dives, security insights, and tips to get the most out of your network. New posts every week."
      />

      <div className="page-content">
        <div className="page-meta">LATEST POSTS · UPDATED WEEKLY</div>

        <div className="blog-grid">
          {posts.map((post, i) => (
            <div className="blog-card" key={i}>
              <div className="blog-card-img" style={{ background: post.bg }}>
                {post.icon}
              </div>
              <div className="blog-card-body">
                <span className={`blog-card-tag ${post.tagClass}`}>{post.tag}</span>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-meta">
                  <span>{post.author}</span>
                  <span><Calendar size={11} /> {post.date}</span>
                  <span><Clock size={11} /> {post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #00C2FF, #7B2FFF)',
              border: 'none',
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '1px',
              color: '#fff',
              cursor: 'pointer',
              boxShadow: '0 6px 24px rgba(0,194,255,0.3)',
            }}
          >
            Load More Posts <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
