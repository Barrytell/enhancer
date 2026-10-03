import { Link } from 'react-router-dom';
import {
  Gauge, ShieldCheck, Wifi, Zap, Activity, Globe,
  Smartphone, Apple, Download, Check, X, Star,
  ArrowRight, Lock, Headphones, RefreshCw,
} from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <div className="hero-orb orb-3" />
        <div className="scan-line" />

        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              v4.2 — Now with AI Boost Engine
            </div>
            <h1 className="hero-title">
              Boost Your Speed.
              <span className="line-blue">Secure Your Connection.</span>
              <span className="line-purple">Connect to the World.</span>
            </h1>
            <p className="hero-desc">
              Scimbra is the <strong>all-in-one network optimization app</strong> that
              fine-tunes your connection in real time. Reduce lag by up to <strong>60%</strong>,
              stabilize your signal, and route through <strong>120+ global nodes</strong> — all
              from a single tap.
            </p>
            <div className="hero-btns">
              <a href="#" className="btn-download btn-android">
                <Smartphone size={22} />
                <span>
                  <span className="btn-sub">GET IT ON</span>
                  <span className="btn-main">Google Play</span>
                </span>
              </a>
              <a href="#" className="btn-download btn-ios">
                <Apple size={22} />
                <span>
                  <span className="btn-sub">Download on the</span>
                  <span className="btn-main">App Store</span>
                </span>
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hs-num">2.5<span>M</span></div>
                <div className="hs-lbl">Active Users</div>
              </div>
              <div className="hero-stat-divider" />
              <div>
                <div className="hs-num">120<span>+</span></div>
                <div className="hs-lbl">Global Nodes</div>
              </div>
              <div className="hero-stat-divider" />
              <div>
                <div className="hs-num">60<span>%</span></div>
                <div className="hs-lbl">Avg Lag Cut</div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="phone-showcase">
              <div className="phone-float">
                <div className="mock-phone">
                  <div className="mock-notch" />
                  <div className="mock-screen">
                    <div className="mock-status">
                      <span>9:41</span>
                      <span>5G • 98%</span>
                    </div>
                    <div className="mock-speed-card">
                      <div className="mock-ring">
                        <div>
                          <div className="mock-speed-num">247</div>
                          <div className="mock-speed-unit">MB/S</div>
                        </div>
                      </div>
                      <div className="mock-boost-tag">
                        <span className="mock-boost-dot" /> BOOSTED +185%
                      </div>
                    </div>
                    <div className="mock-stats-row">
                      <div className="mock-stat-mini">
                        <div className="msm-val">12ms</div>
                        <div className="msm-lbl">PING</div>
                      </div>
                      <div className="mock-stat-mini">
                        <div className="msm-val">0.3%</div>
                        <div className="msm-lbl">LOSS</div>
                      </div>
                      <div className="mock-stat-mini">
                        <div className="msm-val">98%</div>
                        <div className="msm-lbl">STAB</div>
                      </div>
                    </div>
                    <div className="mock-qa-row">
                      <div className="mock-qa-btn">
                        <Gauge size={14} color="#00C2FF" />
                        <div className="mock-qa-lbl">Boost</div>
                      </div>
                      <div className="mock-qa-btn">
                        <ShieldCheck size={14} color="#00E676" />
                        <div className="mock-qa-lbl">Secure</div>
                      </div>
                      <div className="mock-qa-btn">
                        <Wifi size={14} color="#7B2FFF" />
                        <div className="mock-qa-lbl">Route</div>
                      </div>
                      <div className="mock-qa-btn">
                        <Activity size={14} color="#FFD700" />
                        <div className="mock-qa-lbl">Monitor</div>
                      </div>
                    </div>
                    <div className="mock-bottom-nav">
                      <div className="mbn-item active">
                        <span className="mbn-icon"><Gauge size={14} /></span>
                        Home
                      </div>
                      <div className="mbn-item">
                        <span className="mbn-icon"><Globe size={14} /></span>
                        Nodes
                      </div>
                      <div className="mbn-item">
                        <span className="mbn-icon"><Activity size={14} /></span>
                        Stats
                      </div>
                      <div className="mbn-item">
                        <span className="mbn-icon"><ShieldCheck size={14} /></span>
                        Settings
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="phone-glow" />

              <div className="float-card fc-left">
                <div className="fc-icon"><Zap size={14} color="#00E676" /></div>
                <div className="fc-title">Latency</div>
                <div className="fc-sub">Reduced by</div>
                <div className="fc-val" style={{ color: '#00E676' }}>−62%</div>
              </div>
              <div className="float-card fc-right">
                <div className="fc-icon"><ShieldCheck size={14} color="#00C2FF" /></div>
                <div className="fc-title">Encryption</div>
                <div className="fc-sub">AES-256-GCM</div>
                <div className="fc-val" style={{ color: '#00C2FF' }}>Active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="section-inner">
          <div className="section-eyebrow">Core Features</div>
          <h2 className="section-title">Everything You Need to <span>Enhance Your Network</span></h2>
          <p className="section-desc">
            Four powerful modules working together to give you the fastest, most stable, and most
            secure connection possible — on any network, anywhere.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="fc-card-icon fci-blue"><Gauge size={24} color="#00C2FF" /></div>
              <h3 className="fc-card-title">AI Speed Boost</h3>
              <p className="fc-card-desc">
                Our proprietary AI engine analyzes your connection in real time and applies
                dynamic optimizations — tweaking MTU, DNS, and TCP window sizes to squeeze every
                bit of speed from your network.
              </p>
              <span className="fc-card-tag tag-blue">CORE</span>
            </div>

            <div className="feature-card">
              <div className="fc-card-icon fci-green"><ShieldCheck size={24} color="#00E676" /></div>
              <h3 className="fc-card-title">Secure Tunnel</h3>
              <p className="fc-card-desc">
                Military-grade AES-256-GCM encryption protects every packet. DNS leak protection,
                kill switch, and split tunneling come standard. Your data stays yours — always.
              </p>
              <span className="fc-card-tag tag-green">SECURITY</span>
            </div>

            <div className="feature-card">
              <div className="fc-card-icon fci-purple"><Globe size={24} color="#C77DFF" /></div>
              <h3 className="fc-card-title">Global Routing</h3>
              <p className="fc-card-desc">
                Connect through 120+ nodes across 60 countries. Smart routing automatically
                selects the fastest path, reducing lag and bypassing congestion — perfect for
                gaming and streaming.
              </p>
              <span className="fc-card-tag tag-purple">NETWORK</span>
            </div>

            <div className="feature-card">
              <div className="fc-card-icon fci-blue"><Activity size={24} color="#00C2FF" /></div>
              <h3 className="fc-card-title">Live Monitor</h3>
              <p className="fc-card-desc">
                Real-time dashboard showing ping, jitter, packet loss, and throughput. Historical
                charts, per-app usage, and alerts keep you informed and in control at all times.
              </p>
              <span className="fc-card-tag tag-blue">ANALYTICS</span>
            </div>

            <div className="feature-card">
              <div className="fc-card-icon fci-green"><Zap size={24} color="#00E676" /></div>
              <h3 className="fc-card-title">Game Mode</h3>
              <p className="fc-card-desc">
                One-tap optimization for 200+ popular games. Prioritize game traffic, block
                background downloads, and lock to the lowest-latency node for a competitive edge.
              </p>
              <span className="fc-card-tag tag-green">GAMING</span>
            </div>

            <div className="feature-card">
              <div className="fc-card-icon fci-purple"><Wifi size={24} color="#C77DFF" /></div>
              <h3 className="fc-card-title">Signal Stabilizer</h3>
              <p className="fc-card-desc">
                Automatically switches between Wi-Fi and cellular to maintain the strongest signal.
                Predictive algorithms prevent drops before they happen, keeping you connected
                seamlessly.
              </p>
              <span className="fc-card-tag tag-purple">RELIABILITY</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="hiw-section">
        <div className="section-inner">
          <div className="section-eyebrow">How It Works</div>
          <h2 className="section-title">Three Steps to a <span>Faster Network</span></h2>
          <p className="section-desc">
            No technical knowledge required. Scimbra does the heavy lifting — you just
            tap and go.
          </p>

          <div className="hiw-steps">
            <div className="hiw-step">
              <div className="step-num">1</div>
              <h3 className="step-title">Download & Install</h3>
              <p className="step-desc">
                Grab Scimbra from the Google Play Store or Apple App Store. Install
                takes under 30 seconds and requires no root or jailbreak.
              </p>
            </div>
            <div className="hiw-step">
              <div className="step-num">2</div>
              <h3 className="step-title">Tap to Boost</h3>
              <p className="step-desc">
                Open the app and tap the big boost button. Our AI engine instantly analyzes your
                network and applies the optimal configuration for your current connection.
              </p>
            </div>
            <div className="hiw-step">
              <div className="step-num">3</div>
              <h3 className="step-title">Enjoy the Speed</h3>
              <p className="step-desc">
                That's it. Scimbra runs quietly in the background, continuously
                optimizing and protecting your connection. You'll feel the difference instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section">
        <div className="section-inner">
          <div className="section-eyebrow">Pricing Plans</div>
          <h2 className="section-title">Choose Your <span>Speed Tier</span></h2>
          <p className="section-desc">
            Start free, upgrade when you're ready. Every plan includes a 7-day money-back
            guarantee — no questions asked.
          </p>

          <div className="pricing-grid">
            <div className="pricing-card pc-free">
              <div className="pc-name">Free</div>
              <div className="pc-price">
                <span className="pc-dollar">$</span>
                <span className="pc-amount">0</span>
                <span className="pc-period">/ month</span>
              </div>
              <p className="pc-desc">Perfect for trying out the basics</p>
              <div className="pc-divider" />
              <ul className="pc-features">
                <li className="pc-feature"><Check size={14} className="pf-check" /> Speed boost up to 50%</li>
                <li className="pc-feature"><Check size={14} className="pf-check" /> 3 global nodes</li>
                <li className="pc-feature"><Check size={14} className="pf-check" /> Basic encryption</li>
                <li className="pc-feature"><X size={14} className="pf-x" /> <span className="pf-text-dim">Game Mode</span></li>
                <li className="pc-feature"><X size={14} className="pf-x" /> <span className="pf-text-dim">Live Monitor</span></li>
                <li className="pc-feature"><X size={14} className="pf-x" /> <span className="pf-text-dim">Priority Support</span></li>
              </ul>
              <button className="pc-btn pcb-outline">Get Started Free</button>
            </div>

            <div className="pricing-card pc-pro">
              <span className="pc-popular">MOST POPULAR</span>
              <div className="pc-name">Pro</div>
              <div className="pc-price">
                <span className="pc-dollar">$</span>
                <span className="pc-amount">9.99</span>
                <span className="pc-period">/ month</span>
              </div>
              <p className="pc-desc">For gamers and power users</p>
              <div className="pc-divider" />
              <ul className="pc-features">
                <li className="pc-feature"><Check size={14} className="pf-check" /> Speed boost up to 150%</li>
                <li className="pc-feature"><Check size={14} className="pf-check" /> 60+ global nodes</li>
                <li className="pc-feature"><Check size={14} className="pf-check" /> AES-256 encryption</li>
                <li className="pc-feature"><Check size={14} className="pf-check" /> Game Mode (200+ games)</li>
                <li className="pc-feature"><Check size={14} className="pf-check" /> Live Monitor</li>
                <li className="pc-feature"><X size={14} className="pf-x" /> <span className="pf-text-dim">Priority Support</span></li>
              </ul>
              <button className="pc-btn pcb-primary">Start 7-Day Trial</button>
            </div>

            <div className="pricing-card pc-premium">
              <div className="pc-name">Premium</div>
              <div className="pc-price">
                <span className="pc-dollar">$</span>
                <span className="pc-amount">19.99</span>
                <span className="pc-period">/ month</span>
              </div>
              <p className="pc-desc">Maximum speed, maximum security</p>
              <div className="pc-divider" />
              <ul className="pc-features">
                <li className="pc-feature"><Check size={14} className="pf-check" /> Speed boost up to 300%</li>
                <li className="pc-feature"><Check size={14} className="pf-check" /> All 120+ global nodes</li>
                <li className="pc-feature"><Check size={14} className="pf-check" /> AES-256 + WireGuard</li>
                <li className="pc-feature"><Check size={14} className="pf-check" /> Game Mode + Custom Profiles</li>
                <li className="pc-feature"><Check size={14} className="pf-check" /> Advanced Live Monitor</li>
                <li className="pc-feature"><Check size={14} className="pf-check" /> 24/7 Priority Support</li>
              </ul>
              <button className="pc-btn pcb-purple">Go Premium</button>
            </div>
          </div>

          <p className="pc-region-note">
            <strong>Regional pricing available</strong> — prices adjusted for local markets in
            40+ countries. Cancel anytime, no hidden fees.
          </p>
        </div>
      </section>

      {/* GLOBAL COVERAGE */}
      <section className="global-section">
        <div className="section-inner">
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Global Coverage</div>
          <h2 className="section-title">120+ Nodes Across <span>60 Countries</span></h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Wherever you are, there's a fast node nearby. Our network spans six continents with
            premium-tier bandwidth and redundant connections.
          </p>

          <div className="region-cards">
            <div className="region-card">
              <div className="region-flag">🌎</div>
              <div className="region-name">North America</div>
              <div className="region-methods">USA · Canada · Mexico</div>
              <div className="region-count">28 NODES</div>
            </div>
            <div className="region-card">
              <div className="region-flag">🌍</div>
              <div className="region-name">Europe</div>
              <div className="region-methods">UK · DE · FR · NL · SE</div>
              <div className="region-count">34 NODES</div>
            </div>
            <div className="region-card">
              <div className="region-flag">🌏</div>
              <div className="region-name">Asia Pacific</div>
              <div className="region-methods">JP · SG · KR · AU · IN</div>
              <div className="region-count">30 NODES</div>
            </div>
            <div className="region-card">
              <div className="region-flag">🌍</div>
              <div className="region-name">South America</div>
              <div className="region-methods">BR · AR · CL · CO</div>
              <div className="region-count">14 NODES</div>
            </div>
            <div className="region-card">
              <div className="region-flag">🌍</div>
              <div className="region-name">Middle East</div>
              <div className="region-methods">AE · IL · TR · SA</div>
              <div className="region-count">8 NODES</div>
            </div>
            <div className="region-card">
              <div className="region-flag">🌍</div>
              <div className="region-name">Africa</div>
              <div className="region-methods">ZA · NG · KE · EG</div>
              <div className="region-count">6 NODES</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="section-inner">
          <div className="section-eyebrow">User Reviews</div>
          <h2 className="section-title">Loved by <span>2.5 Million Users</span></h2>
          <p className="section-desc">
            Don't take our word for it. Here's what real users say about Scimbra.
          </p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="tc-quote">"</div>
              <p className="tc-text">
                I went from 80ms to 28ms ping in Valorant overnight. The Game Mode is absolutely
                insane — it feels like cheating but it's just good optimization.
              </p>
              <div className="tc-stars">★★★★★</div>
              <div className="tc-user">
                <div className="tc-avatar av-1">MK</div>
                <div>
                  <div className="tc-name">Marcus K.</div>
                  <div className="tc-location">Berlin, Germany</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="tc-quote">"</div>
              <p className="tc-text">
                Living in a rural area with spotty internet, Scimbra's signal stabilizer
                is a lifesaver. My Zoom calls don't drop anymore. Worth every penny.
              </p>
              <div className="tc-stars">★★★★★</div>
              <div className="tc-user">
                <div className="tc-avatar av-2">SL</div>
                <div>
                  <div className="tc-name">Sarah L.</div>
                  <div className="tc-location">Wyoming, USA</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="tc-quote">"</div>
              <p className="tc-text">
                The global routing is incredible. I travel for work and no matter what country I'm
                in, I get a fast, secure connection instantly. The encryption gives me peace of
                mind on public Wi-Fi.
              </p>
              <div className="tc-stars">★★★★★</div>
              <div className="tc-user">
                <div className="tc-avatar av-3">RT</div>
                <div>
                  <div className="tc-name">Raj T.</div>
                  <div className="tc-location">Singapore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-inner">
          <h2 className="cta-title">Ready to Enhance<br />Your Network?</h2>
          <p className="cta-desc">
            Join 2.5 million users who boost, secure, and connect faster every day. Download
            Scimbra now and feel the difference in 30 seconds.
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn-download btn-android">
              <Smartphone size={22} />
              <span>
                <span className="btn-sub">GET IT ON</span>
                <span className="btn-main">Google Play</span>
              </span>
            </a>
            <a href="#" className="btn-download btn-ios">
              <Apple size={22} />
              <span>
                <span className="btn-sub">Download on the</span>
                <span className="btn-main">App Store</span>
              </span>
            </a>
          </div>
          <div className="cta-trust">
            <div className="trust-item"><Download size={14} color="#00C2FF" /> 2.5M+ Downloads</div>
            <div className="trust-item"><Star size={14} color="#FFD700" /> 4.8 / 5 Rating</div>
            <div className="trust-item"><Lock size={14} color="#00E676" /> AES-256 Encrypted</div>
            <div className="trust-item"><RefreshCw size={14} color="#7B2FFF" /> 7-Day Guarantee</div>
            <div className="trust-item"><Headphones size={14} color="#00C2FF" /> 24/7 Support</div>
          </div>
        </div>
      </section>
    </>
  );
}
