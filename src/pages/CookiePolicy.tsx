import PageHero from '@/components/PageHero';

export default function CookiePolicy() {
  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="Legal"
        title="Cookie"
        highlight="Policy"
        desc="How and why Scimbra uses cookies and similar technologies — and how you can control them."
      />
      <div className="page-content">
        <div className="page-meta">LAST UPDATED: SEPTEMBER 1, 2026 · VERSION 2.0</div>

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device by websites and apps you visit. They
          are widely used to make services work more efficiently and to provide information to
          the service owners. Scimbra uses cookies and similar technologies (local
          storage, SDK identifiers) for the purposes described below.
        </p>

        <h2>2. Types of Cookies We Use</h2>
        <h3>2.1 Essential Cookies</h3>
        <p>
          These are necessary for the app to function. They enable core features like
          authentication, session management, and remembering your preferences. You cannot opt
          out of these without losing app functionality.
        </p>
        <ul>
          <li><strong>Session token:</strong> Keeps you logged in across app launches.</li>
          <li><strong>Settings cache:</strong> Remembers your boost mode, preferred node, and other preferences.</li>
          <li><strong>Security token:</strong> Protects against CSRF and replay attacks.</li>
        </ul>

        <h3>2.2 Analytics Cookies</h3>
        <p>
          These help us understand how the app is used so we can improve it. Data is aggregated
          and anonymized.
        </p>
        <ul>
          <li><strong>Usage metrics:</strong> Feature adoption, session length, crash reports.</li>
          <li><strong>Performance data:</strong> App launch time, API response times.</li>
        </ul>

        <h3>2.3 Functional Cookies</h3>
        <p>
          These enable enhanced functionality and personalization.
        </p>
        <ul>
          <li><strong>Language preference:</strong> Remembers your selected language.</li>
          <li><strong>Region preference:</strong> Suggests nearby nodes based on your last selection.</li>
        </ul>

        <h3>2.4 Third-Party Cookies</h3>
        <p>
          Some cookies are set by third-party services we use:
        </p>
        <ul>
          <li><strong>Google Play / App Store:</strong> For in-app purchases and subscription management.</li>
          <li><strong>Firebase:</strong> For push notifications and crash reporting.</li>
          <li><strong>Stripe:</strong> For payment processing (on our website only, not in-app).</li>
        </ul>

        <h2>3. How Long Cookies Are Stored</h2>
        <ul>
          <li><strong>Session cookies:</strong> Deleted when you close the app or log out.</li>
          <li><strong>Persistent cookies:</strong> Stored for up to 12 months, then automatically refreshed or deleted.</li>
          <li><strong>Third-party cookies:</strong> Subject to the respective third party's retention policy.</li>
        </ul>

        <h2>4. Managing Cookies</h2>
        <h3>4.1 In-App Settings</h3>
        <p>
          You can manage analytics and functional cookies in the app under Settings &gt; Privacy &gt;
          Data Collection. Essential cookies cannot be disabled.
        </p>
        <h3>4.2 Device Settings</h3>
        <p>
          You can also control cookies through your device's privacy settings:
        </p>
        <ul>
          <li><strong>iOS:</strong> Settings &gt; Privacy &amp; Security &gt; Tracking</li>
          <li><strong>Android:</strong> Settings &gt; Privacy &gt; Ads &gt; Opt out of Ads Personalization</li>
        </ul>
        <h3>4.3 Browser Settings</h3>
        <p>
          For our website, you can manage cookies through your browser settings. Most browsers
          allow you to refuse cookies or alert you when cookies are being sent. Note that
          disabling cookies may affect website functionality.
        </p>

        <h2>5. Do Not Track</h2>
        <p>
          We do not respond to "Do Not Track" signals from browsers, as we do not engage in
          cross-site tracking. Our analytics are first-party and limited to our own app and
          website.
        </p>

        <h2>6. Cookies and Advertising</h2>
        <p>
          We do <strong>not</strong> use cookies for targeted advertising. We do not share your
          cookie data with advertising networks. If we ever introduce advertising, we will
          update this policy and seek your consent first.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Material changes will be notified
          in-app at least 30 days before taking effect.
        </p>

        <h2>8. Contact</h2>
        <p>
          Questions about cookies? Email <a href="mailto:privacy@scimbra.com">privacy@scimbra.com</a>.
        </p>
      </div>
    </div>
  );
}
