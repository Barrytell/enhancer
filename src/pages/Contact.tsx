import { useState } from 'react';
import PageHero from '@/components/PageHero';
import { Mail, MapPin, MessageSquare, Phone, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="Contact"
        title="Get in Touch with"
        highlight="Scimbra"
        desc="Questions, feedback, partnership ideas, or just want to say hi? We read every message and respond within 24 hours."
      />

      <div className="page-content">
        <div className="page-meta">RESPONSE TIME: WITHIN 24 HOURS · MON–FRI</div>

        <div className="contact-grid">
          <div className="contact-info-card">
            <div className="contact-info-item">
              <div className="contact-info-icon fci-blue"><Mail size={20} color="#00C2FF" /></div>
              <div>
                <div className="contact-info-label">Email</div>
                <div className="contact-info-value">support@scimbra.com</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon fci-green"><Phone size={20} color="#00E676" /></div>
              <div>
                <div className="contact-info-label">Phone</div>
                <div className="contact-info-value">+1 (415) 555-0142<br />Mon–Fri, 9am–6pm PT</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon fci-purple"><MapPin size={20} color="#C77DFF" /></div>
              <div>
                <div className="contact-info-label">Office</div>
                <div className="contact-info-value">535 Mission Street, Suite 1400<br />San Francisco, CA 94105</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon fci-blue"><MessageSquare size={20} color="#00C2FF" /></div>
              <div>
                <div className="contact-info-label">Live Chat</div>
                <div className="contact-info-value">Available 24/7 in the app<br />Premium members get instant priority</div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <CheckCircle size={48} color="#00E676" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="contact-form-group">
                  <label className="contact-form-label">Name</label>
                  <input type="text" className="contact-form-input" placeholder="Your name" required />
                </div>
                <div className="contact-form-group">
                  <label className="contact-form-label">Email</label>
                  <input type="email" className="contact-form-input" placeholder="you@example.com" required />
                </div>
                <div className="contact-form-group">
                  <label className="contact-form-label">Topic</label>
                  <select className="contact-form-select" required>
                    <option value="">Select a topic</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press Inquiry</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="contact-form-group">
                  <label className="contact-form-label">Message</label>
                  <textarea className="contact-form-textarea" placeholder="Tell us what's on your mind..." required />
                </div>
                <button type="submit" className="contact-form-btn">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    Send Message <Send size={16} />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
