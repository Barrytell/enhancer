import PageHero from '@/components/PageHero';
import { Target, Heart, Shield, Users, Rocket, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="About Us"
        title="We Make the Internet"
        highlight="Faster for Everyone"
        desc="Scimbra was born from a simple frustration: why should a fast internet connection be a luxury? We believe everyone deserves a fast, stable, and secure network — and we built the tools to make it happen."
      />

      <div className="page-content">
        <div className="page-meta">FOUNDED 2019 · SAN FRANCISCO · 42 TEAM MEMBERS</div>

        <h2>Our Story</h2>
        <p>
          In 2019, our founder — a former network engineer at a major telecom — was tired of
          watching friends struggle with laggy games, dropped video calls, and sluggish
          downloads despite paying for "high-speed" internet. The problem wasn't the bandwidth;
          it was how devices negotiated with the network.
        </p>
        <p>
          So he built a prototype: a lightweight app that applied the same optimizations
          telecom engineers used on the server side, but directly on the user's device. The
          results were staggering — <strong>up to 300% speed improvements</strong> on some
          networks. Scimbra was born.
        </p>
        <p>
          Today, we're a team of 42 engineers, designers, and network specialists spread across
          8 countries, serving over <strong>2.5 million active users</strong> worldwide. Our
          mission remains the same: make every connection faster, more stable, and more secure —
          for everyone, everywhere.
        </p>

        <div className="about-stats">
          <div className="about-stat">
            <div className="about-stat-num">2.5M</div>
            <div className="about-stat-label">ACTIVE USERS</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-num">120+</div>
            <div className="about-stat-label">GLOBAL NODES</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-num">60</div>
            <div className="about-stat-label">COUNTRIES</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-num">42</div>
            <div className="about-stat-label">TEAM MEMBERS</div>
          </div>
        </div>

        <h2>Our Values</h2>
        <p>
          These aren't just words on a wall — they're the principles that guide every decision
          we make, from product design to infrastructure investment.
        </p>

        <div className="about-values-grid">
          <div className="about-value-card">
            <div className="about-value-icon fci-blue"><Target size={26} color="#00C2FF" /></div>
            <h3 className="about-value-title">User First</h3>
            <p className="about-value-desc">
              Every feature starts with a simple question: does this make the user's network
              better? If not, we don't build it.
            </p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon fci-green"><Shield size={26} color="#00E676" /></div>
            <h3 className="about-value-title">Privacy by Design</h3>
            <p className="about-value-desc">
              We don't log, track, or sell your data. Your network traffic is yours. Our
              encryption is on by default, not an opt-in.
            </p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon fci-purple"><Rocket size={26} color="#C77DFF" /></div>
            <h3 className="about-value-title">Relentless Speed</h3>
            <p className="about-value-desc">
              We benchmark every release against the last. If it's not faster, it doesn't ship.
              Speed is our identity.
            </p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon fci-blue"><Heart size={26} color="#00C2FF" /></div>
            <h3 className="about-value-title">Accessibility</h3>
            <p className="about-value-desc">
              Fast internet shouldn't be a luxury. We offer regional pricing and a robust free
              tier so everyone can benefit.
            </p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon fci-green"><Users size={26} color="#00E676" /></div>
            <h3 className="about-value-title">Community Driven</h3>
            <p className="about-value-desc">
              Our roadmap is shaped by user feedback. We read every review, ticket, and forum
              post — and we respond.
            </p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon fci-purple"><Award size={26} color="#C77DFF" /></div>
            <h3 className="about-value-title">Transparency</h3>
            <p className="about-value-desc">
              We publish quarterly transparency reports, open-source our core protocols, and
              welcome independent security audits.
            </p>
          </div>
        </div>

        <h2>Our Technology</h2>
        <p>
          Scimbra combines three technologies that, together, create an unmatched
          network optimization experience:
        </p>
        <ul>
          <li><strong>AI Boost Engine</strong> — A machine-learning model trained on 500 million
          network sessions that predicts and applies the optimal TCP/IP configuration for your
          specific connection in real time.</li>
          <li><strong>Global Node Network</strong> — 120+ premium-tier servers across 60
          countries, with smart routing that selects the fastest path based on live latency
          data, not just geographic distance.</li>
          <li><strong>Dual-Layer Encryption</strong> — AES-256-GCM for maximum compatibility
          and WireGuard for maximum speed, automatically selected based on your device and
          network conditions.</li>
        </ul>

        <h2>Looking Ahead</h2>
        <p>
          We're just getting started. In 2026, we're launching Scimbra for Desktop
          (Windows, macOS, Linux), expanding to 200+ global nodes, and introducing a
          developer API so other apps can benefit from our optimization engine.
        </p>
        <p>
          The internet is the most important tool of our era. We're committed to making it
          faster and safer for everyone — one connection at a time.
        </p>
      </div>
    </div>
  );
}
