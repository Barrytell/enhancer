import PageHero from '@/components/PageHero';

export default function PrivacyPolicy() {
  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        highlight="Policy"
        desc="Your privacy is not a feature — it's a fundamental right. This policy explains what data we collect, how we use it, and the controls you have."
      />
      <div className="page-content">
        <div className="page-meta">LAST UPDATED: SEPTEMBER 1, 2026 · VERSION 3.1</div>

        <h2>1. Introduction</h2>
        <p>
          Scimbra ("we", "us", "our") is committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you use our mobile application and related services (collectively, the
          "Service"). We encourage you to read this policy carefully.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>2.1 Information You Provide</h3>
        <ul>
          <li><strong>Account information:</strong> email address, password (hashed), and display name when you create an account.</li>
          <li><strong>Subscription information:</strong> payment method (processed by our payment providers — we never store full card numbers), billing address, and transaction history.</li>
          <li><strong>Support communications:</strong> messages, emails, and chat transcripts when you contact us.</li>
        </ul>
        <h3>2.2 Information Collected Automatically</h3>
        <ul>
          <li><strong>Device information:</strong> device model, OS version, app version, and unique device identifier (randomized, reset on logout).</li>
          <li><strong>Network metrics:</strong> aggregated and anonymized ping, jitter, throughput, and packet loss statistics — used solely to improve our optimization algorithms.</li>
          <li><strong>Usage data:</strong> features used, session duration, and crash reports — to improve app stability and user experience.</li>
        </ul>
        <h3>2.3 What We Do NOT Collect</h3>
        <ul>
          <li>We do <strong>not</strong> log your browsing history, DNS queries, or the content of your network traffic.</li>
          <li>We do <strong>not</strong> track your location beyond country/region level (needed for node selection).</li>
          <li>We do <strong>not</strong> sell your data to third parties — ever.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain the Service, including network optimization and routing.</li>
          <li>To process payments and manage your subscription.</li>
          <li>To respond to support requests and provide customer service.</li>
          <li>To improve our AI Boost Engine and overall app performance.</li>
          <li>To send service notifications (e.g., security alerts, major updates).</li>
          <li>To detect, prevent, and address fraud, abuse, and security issues.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2>4. Data Sharing</h2>
        <p>
          We share your information only in the following limited circumstances:
        </p>
        <ul>
          <li><strong>Service providers:</strong> Payment processing (Stripe), crash reporting (Sentry), and push notifications (Firebase). Each is contractually bound to protect your data.</li>
          <li><strong>Legal compliance:</strong> When required by law, court order, or government request, we disclose only what is legally required.</li>
          <li><strong>Business transfers:</strong> In the event of a merger or acquisition, data may be transferred subject to this policy.</li>
        </ul>

        <h2>5. Data Retention</h2>
        <p>
          We retain your data only as long as necessary to provide the Service. Account data is
          kept until you delete your account. Anonymized network metrics are retained for up to
          24 months for algorithm improvement. Support transcripts are kept for 12 months.
        </p>

        <h2>6. Your Rights</h2>
        <p>Depending on your jurisdiction, you have the right to:</p>
        <ul>
          <li><strong>Access</strong> — request a copy of your personal data.</li>
          <li><strong>Rectify</strong> — correct inaccurate or incomplete data.</li>
          <li><strong>Erasure</strong> — request deletion of your data ("right to be forgotten").</li>
          <li><strong>Restrict</strong> — limit how we process your data.</li>
          <li><strong>Portability</strong> — receive your data in a machine-readable format.</li>
          <li><strong>Object</strong> — opt out of certain processing activities.</li>
          <li><strong>Withdraw consent</strong> — at any time, without affecting prior processing.</li>
        </ul>
        <p>
          To exercise these rights, email <a href="mailto:privacy@scimbra.com">privacy@scimbra.com</a>.
          We respond within 30 days.
        </p>

        <h2>7. Data Security</h2>
        <p>
          We use AES-256-GCM encryption for data in transit and at rest. Access to personal data
          is restricted to authorized personnel on a need-to-know basis. We undergo annual
          third-party security audits. See our <a href="/security">Security page</a> for details.
        </p>

        <h2>8. Children's Privacy</h2>
        <p>
          Our Service is not directed to children under 13 (or 16 in the EU). We do not
          knowingly collect personal data from children. If you believe a child has provided us
          data, contact us and we will delete it immediately.
        </p>

        <h2>9. International Data Transfers</h2>
        <p>
          Your data may be processed in countries other than your own. We ensure appropriate
          safeguards are in place, including Standard Contractual Clauses for EU/UK data
          transfers.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Material changes will be notified via
          email and in-app notification at least 30 days before taking effect.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          Questions about this policy? Email <a href="mailto:privacy@scimbra.com">privacy@scimbra.com</a>
          or write to: Scimbra, 535 Mission Street, Suite 1400, San Francisco, CA 94105.
        </p>
      </div>
    </div>
  );
}
