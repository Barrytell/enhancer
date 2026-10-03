import PageHero from '@/components/PageHero';

export default function GDPR() {
  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="Legal"
        title="GDPR"
        highlight="Compliance"
        desc="Your rights under the General Data Protection Regulation — and exactly how Scimbra honors them."
      />
      <div className="page-content">
        <div className="page-meta">LAST UPDATED: SEPTEMBER 1, 2026 · VERSION 3.1</div>

        <h2>1. Overview</h2>
        <p>
          The General Data Protection Regulation (GDPR) is EU Regulation 2016/679 that governs
          the processing of personal data of individuals within the European Economic Area
          (EEA). Scimbra is fully committed to GDPR compliance. This page explains
          your rights and how we implement them.
        </p>

        <h2>2. Legal Basis for Processing</h2>
        <p>We process your personal data under the following legal bases:</p>
        <ul>
          <li><strong>Consent (Art. 6(1)(a)):</strong> For analytics, marketing communications, and non-essential cookies. You can withdraw consent at any time.</li>
          <li><strong>Contract (Art. 6(1)(b)):</strong> For providing the Service you subscribed to, including network optimization and routing.</li>
          <li><strong>Legal obligation (Art. 6(1)(c)):</strong> For tax records, financial compliance, and responding to lawful government requests.</li>
          <li><strong>Legitimate interests (Art. 6(1)(f)):</strong> For fraud prevention, security monitoring, and improving our Service — always balanced against your rights.</li>
        </ul>

        <h2>3. Your Rights Under GDPR</h2>
        <h3>3.1 Right to Access (Art. 15)</h3>
        <p>
          You can request a copy of all personal data we hold about you, including information
          about how it's processed and with whom it's shared. We provide this in a
          machine-readable format within 30 days.
        </p>
        <h3>3.2 Right to Rectification (Art. 16)</h3>
        <p>
          You can request correction of inaccurate or incomplete personal data. We respond
          within 30 days, or inform you if we need more time.
        </p>
        <h3>3.3 Right to Erasure (Art. 17)</h3>
        <p>
          Also known as the "right to be forgotten." You can request deletion of your personal
          data when:
        </p>
        <ul>
          <li>The data is no longer necessary for the purpose it was collected.</li>
          <li>You withdraw consent and no other legal basis applies.</li>
          <li>You object to processing and there are no overriding legitimate grounds.</li>
          <li>The data was unlawfully processed.</li>
        </ul>
        <p>
          Note: We may retain certain data where required by law (e.g., financial records for
          tax compliance).
        </p>
        <h3>3.4 Right to Restriction (Art. 18)</h3>
        <p>
          You can request that we limit processing of your data — for example, while we verify
          accuracy or investigate an objection. During restriction, we store but do not process
          your data (except for storage purposes).
        </p>
        <h3>3.5 Right to Data Portability (Art. 20)</h3>
        <p>
          You can receive your personal data in a structured, commonly used, machine-readable
          format and transmit it to another service provider. This applies to data you provided
          and that is processed by automated means based on consent or contract.
        </p>
        <h3>3.6 Right to Object (Art. 21)</h3>
        <p>
          You can object to processing based on legitimate interests. We will stop processing
          unless we demonstrate compelling legitimate grounds that override your interests.
        </p>
        <h3>3.7 Right to Withdraw Consent (Art. 7(3))</h3>
        <p>
          You can withdraw consent at any time — in-app under Settings &gt; Privacy, or by
          emailing us. Withdrawal does not affect the lawfulness of processing before
          withdrawal.
        </p>
        <h3>3.8 Right to Lodge a Complaint (Art. 77)</h3>
        <p>
          You have the right to lodge a complaint with your local Data Protection Authority
          (DPA). We encourage you to contact us first so we can address your concern directly.
        </p>

        <h2>4. How to Exercise Your Rights</h2>
        <p>
          Email <a href="mailto:privacy@scimbra.com">privacy@scimbra.com</a> with
          "GDPR Request" in the subject line. Include your account email so we can verify your
          identity. We respond within 30 days. For complex requests, we may extend this by 60
          days and will inform you of the extension.
        </p>

        <h2>5. Data Protection Officer</h2>
        <p>
          Our Data Protection Officer (DPO) is available for any questions about GDPR or your
          privacy rights:
        </p>
        <ul>
          <li>Email: <a href="mailto:dpo@scimbra.com">dpo@scimbra.com</a></li>
          <li>Mail: Data Protection Officer, Scimbra, 535 Mission Street, Suite 1400, San Francisco, CA 94105</li>
        </ul>

        <h2>6. International Data Transfers</h2>
        <p>
          Your data may be transferred outside the EEA. We ensure appropriate safeguards
          through Standard Contractual Clauses (SCCs) approved by the European Commission, and
          supplementary measures where needed. A copy of our SCCs is available on request.
        </p>

        <h2>7. Data Breach Notification</h2>
        <p>
          In the event of a personal data breach that poses a risk to your rights and freedoms,
          we will notify the relevant DPA within 72 hours of becoming aware of the breach, and
          notify affected users without undue delay.
        </p>

        <h2>8. Privacy by Design</h2>
        <p>
          We implement privacy by design and by default (Art. 25). Data minimization is built
          into our architecture — we collect only what's necessary for the Service to function.
          Anonymized and aggregated data is used wherever possible.
        </p>

        <h2>9. Automated Decision-Making</h2>
        <p>
          Our AI Boost Engine processes network metrics (not personal data) to optimize your
          connection. We do not engage in automated decision-making that produces legal or
          similarly significant effects about you (Art. 22).
        </p>
      </div>
    </div>
  );
}
