import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqCategories = [
  {
    category: 'General',
    icon: '📱',
    items: [
      {
        question: 'What is Scimbra?',
        answer: 'Scimbra is an all-in-one network optimization app that boosts your internet speed, secures your connection with military-grade encryption, and routes your traffic through 120+ global nodes for the fastest, most stable connection possible.',
      },
      {
        question: 'Which devices and platforms are supported?',
        answer: 'Scimbra is available on Android (5.0 and above) and iOS (13 and above). We are also developing desktop versions for Windows, macOS, and Linux, planned for release in 2026.',
      },
      {
        question: 'Do I need to root or jailbreak my device?',
        answer: 'No. Scimbra works without rooting or jailbreaking your device. The app uses standard VPN APIs provided by Android and iOS to optimize your connection safely.',
      },
      {
        question: 'Is Scimbra free to use?',
        answer: 'Yes! Scimbra offers a free tier with basic speed optimization, 3 global nodes, and basic encryption. You can upgrade to Pro ($9.99/mo) or Premium ($19.99/mo) for advanced features like Game Mode, more nodes, and priority support.',
      },
    ],
  },
  {
    category: 'Speed & Performance',
    icon: '⚡',
    items: [
      {
        question: 'How much faster will my connection be?',
        answer: 'Results vary by network, but our users see an average speed improvement of 50–300%. The AI Boost Engine analyzes your connection in real time and applies optimizations tailored to your specific network conditions.',
      },
      {
        question: 'Will Scimbra reduce my ping for gaming?',
        answer: 'Yes. Our Game Mode prioritizes game traffic and routes it through the lowest-latency node available. Users typically see a 40–60% reduction in ping. Game Mode supports 200+ popular titles out of the box.',
      },
      {
        question: 'Does Scimbra work on all network types?',
        answer: 'Scimbra works on Wi-Fi, cellular (4G/5G), and mixed connections. The Signal Stabilizer feature can also automatically switch between Wi-Fi and cellular to maintain the strongest signal.',
      },
      {
        question: 'Can Scimbra help with slow public Wi-Fi?',
        answer: 'Absolutely. Scimbra is especially effective on congested public networks, where our routing engine bypasses throttling and congestion to deliver a faster, more stable connection.',
      },
    ],
  },
  {
    category: 'Security & Privacy',
    icon: '🔒',
    items: [
      {
        question: 'Is my data safe with Scimbra?',
        answer: 'Yes. We use AES-256-GCM encryption for all data in transit. We operate a zero-knowledge architecture — we do not log your browsing history, DNS queries, or the content of your network traffic. Your data is yours, period.',
      },
      {
        question: 'Does Scimbra keep logs of my activity?',
        answer: 'No. We do not log your traffic, DNS queries, or browsing history. We collect only anonymized, aggregated network metrics (ping, jitter, throughput) to improve our optimization algorithms. See our Privacy Policy for full details.',
      },
      {
        question: 'What is the kill switch feature?',
        answer: 'The kill switch instantly blocks all network traffic if your secure tunnel drops for any reason, preventing any data from leaking through an unencrypted connection. It is enabled by default — we recommend keeping it on.',
      },
      {
        question: 'Does Scimbra protect against DNS leaks?',
        answer: 'Yes. All DNS queries are routed through our encrypted tunnel and resolved by our privacy-first DNS servers. No third-party DNS, no logging, no leaks.',
      },
    ],
  },
  {
    category: 'Subscription & Billing',
    icon: '💳',
    items: [
      {
        question: 'How do I cancel my subscription?',
        answer: 'You can cancel anytime through the Google Play Store or Apple App Store settings. Your subscription remains active until the end of your current billing period — no early termination fees.',
      },
      {
        question: 'Do you offer refunds?',
        answer: 'Yes. We offer a 7-day money-back guarantee on all paid plans, no questions asked. Refund requests can be sent to billing@scimbra.com. Purchases made through Google Play or the App Store are also subject to their respective refund policies.',
      },
      {
        question: 'Can I switch between plans?',
        answer: 'Yes, you can upgrade or downgrade at any time. Upgrades take effect immediately, and downgrades take effect at the start of your next billing cycle. Price differences are prorated automatically.',
      },
      {
        question: 'Do you offer regional pricing?',
        answer: 'Yes! We offer adjusted pricing for 40+ countries to make Scimbra accessible worldwide. Regional prices are shown automatically based on your Google Play or App Store account region.',
      },
    ],
  },
  {
    category: 'Technical',
    icon: '🔧',
    items: [
      {
        question: 'How much battery does Scimbra use?',
        answer: 'Scimbra is optimized for minimal battery impact. On average, it uses less than 3% battery per hour of active use. The AI engine dynamically adjusts its optimization frequency to balance performance and battery life.',
      },
      {
        question: 'Can I use Scimbra on multiple devices?',
        answer: 'Free tier supports 1 device. Pro supports up to 3 devices, and Premium supports up to 5 devices simultaneously — all under one account.',
      },
      {
        question: 'Does Scimbra work in restrictive network environments?',
        answer: 'Scimbra is designed to work in most network environments. However, some highly restrictive corporate or national firewalls may block VPN traffic. We continuously update our stealth protocols to improve compatibility.',
      },
      {
        question: 'How often is the app updated?',
        answer: 'We release updates approximately every 2–4 weeks, including performance improvements, new features, and security patches. We recommend keeping the app updated to the latest version for the best experience.',
      },
    ],
  },
];

function FAQSection({ category, icon, items }: { category: string; icon: string; items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ marginBottom: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <span style={{ fontSize: '24px' }}>{icon}</span>
        <h2 style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: '24px',
          fontWeight: 700,
          color: '#fff',
          margin: 0,
        }}>{category}</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${isOpen ? 'rgba(0,194,255,0.3)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: '14px',
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                style={{
                  width: '100%',
                  padding: '18px 22px',
                  background: 'transparent',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#fff',
                }}>{item.question}</span>
                <ChevronDown
                  size={20}
                  color="#00C2FF"
                  style={{
                    flexShrink: 0,
                    marginLeft: '12px',
                    transition: 'transform 0.3s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              <div style={{
                maxHeight: isOpen ? '300px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
              }}>
                <p style={{
                  padding: '0 22px 20px',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                  margin: 0,
                }}>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="Support"
        title="Frequently Asked"
        highlight="Questions"
        desc="Find quick answers to the most common questions about Scimbra — from setup and pricing to security and performance. Can't find what you're looking for? Reach out to us anytime."
      />

      <div className="page-content">
        <div className="page-meta">20 QUESTIONS · 5 CATEGORIES · LAST UPDATED SEP 2026</div>

        {faqCategories.map((cat, i) => (
          <FAQSection key={i} category={cat.category} icon={cat.icon} items={cat.items} />
        ))}

        <div style={{
          marginTop: '48px',
          padding: '36px',
          background: 'linear-gradient(160deg, rgba(0,194,255,0.06), rgba(123,47,255,0.04))',
          border: '1px solid rgba(0,194,255,0.2)',
          borderRadius: '20px',
          textAlign: 'center',
        }}>
          <HelpCircle size={36} color="#00C2FF" style={{ margin: '0 auto 16px' }} />
          <h3 style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: '22px',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '8px',
          }}>
            Still Have Questions?
          </h3>
          <p style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.55)',
            marginBottom: '24px',
            maxWidth: '440px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Our support team is available 24/7 and typically responds within a few hours. We're here to help.
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 28px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #00C2FF, #7B2FFF)',
            color: '#fff',
            textDecoration: 'none',
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: '15px',
            fontWeight: 700,
            letterSpacing: '1px',
            boxShadow: '0 6px 24px rgba(0,194,255,0.3)',
          }}>
            Contact Support <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
