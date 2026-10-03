import PageHero from '@/components/PageHero';

export default function TermsOfService() {
  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="Legal"
        title="Terms of"
        highlight="Service"
        desc="The rules of the road for using Scimbra. Please read these terms carefully — by using the app, you agree to them."
      />
      <div className="page-content">
        <div className="page-meta">LAST UPDATED: SEPTEMBER 1, 2026 · VERSION 3.1</div>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By downloading, installing, or using Scimbra (the "Service"), you agree to be
          bound by these Terms of Service ("Terms"). If you do not agree, do not use the Service.
          These Terms form a legally binding agreement between you and Scimbra ("we",
          "us", "our").
        </p>

        <h2>2. Eligibility</h2>
        <p>
          You must be at least 13 years old (16 in the EU) to use the Service. By using the
          Service, you represent and warrant that you meet this age requirement and are legally
          able to enter into a binding contract.
        </p>

        <h2>3. Your Account</h2>
        <ul>
          <li>You must provide accurate and complete information when creating an account.</li>
          <li>You are responsible for safeguarding your password and for all activity under your account.</li>
          <li>You must notify us immediately of any unauthorized use of your account.</li>
          <li>One account per person. Sharing accounts is prohibited.</li>
        </ul>

        <h2>4. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service for any illegal activity, including but not limited to hacking, fraud, or distribution of malware.</li>
          <li>Attempt to reverse engineer, decompile, or disassemble the app or its protocols.</li>
          <li>Use the Service to send spam, unsolicited communications, or to violate others' privacy.</li>
          <li>Interfere with or disrupt the Service, servers, or networks connected to the Service.</li>
          <li>Use automated tools (bots, scrapers) to access the Service without our written permission.</li>
          <li>Resell, sublicense, or redistribute the Service without authorization.</li>
          <li>Use the Service to circumvent geo-restrictions in violation of applicable laws or third-party terms.</li>
        </ul>

        <h2>5. Subscriptions and Payments</h2>
        <h3>5.1 Billing</h3>
        <ul>
          <li>Subscriptions are billed monthly or annually through Google Play or the App Store.</li>
          <li>Your subscription automatically renews unless cancelled at least 24 hours before the renewal date.</li>
          <li>You can cancel anytime through your respective app store settings.</li>
        </ul>
        <h3>5.2 Refund Policy</h3>
        <ul>
          <li>We offer a 7-day money-back guarantee on all paid plans — no questions asked.</li>
          <li>Refunds for purchases made through Google Play or the App Store are subject to their respective refund policies.</li>
          <li>Refund requests can be sent to <a href="mailto:billing@scimbra.com">billing@scimbra.com</a>.</li>
        </ul>

        <h2>6. Free Tier</h2>
        <p>
          We offer a free tier with limited features. We reserve the right to modify, restrict,
          or discontinue free tier features at any time without prior notice.
        </p>

        <h2>7. Intellectual Property</h2>
        <p>
          The Service, including its software, design, content, and trademarks, is owned by
          Scimbra and protected by intellectual property laws. Our core optimization
          protocols are open-source under the MIT license — see our <a href="https://github.com">GitHub</a> for details.
        </p>

        <h2>8. User Content</h2>
        <p>
          You retain ownership of any content you submit through the Service (e.g., support
          messages). You grant us a limited license to use your content solely for providing and
          improving the Service.
        </p>

        <h2>9. Disclaimers</h2>
        <p>
          The Service is provided "as is" and "as available" without warranties of any kind,
          express or implied. We do not guarantee that the Service will be uninterrupted,
          error-free, or secure. Network performance improvements vary by device, network, and
          location.
        </p>

        <h2>10. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Scimbra shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages, including loss of
          profits, data, or goodwill, arising from your use of or inability to use the Service.
        </p>

        <h2>11. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Scimbra from any claims, damages,
          losses, or expenses (including legal fees) arising from your violation of these Terms
          or your misuse of the Service.
        </p>

        <h2>12. Termination</h2>
        <p>
          We may suspend or terminate your account at any time for violation of these Terms.
          You may delete your account at any time through the app settings. Upon termination,
          all licenses granted to you cease immediately.
        </p>

        <h2>13. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of California, USA. Any disputes
          shall be resolved through binding arbitration in San Francisco, California.
        </p>

        <h2>14. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Material changes will be notified via
          email and in-app notification at least 30 days before taking effect. Continued use
          after changes take effect constitutes acceptance.
        </p>

        <h2>15. Contact</h2>
        <p>
          Questions about these Terms? Email <a href="mailto:legal@scimbra.com">legal@scimbra.com</a>
          or write to: Scimbra, 535 Mission Street, Suite 1400, San Francisco, CA 94105.
        </p>
      </div>
    </div>
  );
}
