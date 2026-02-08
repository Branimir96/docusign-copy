import { Trans } from '@lingui/react/macro';
import { Link } from 'react-router';

import { Button } from '@documenso/ui/primitives/button';

export default function PrivacyPolicy() {
  return (
    <div>
      <article className="prose max-w-4xl dark:prose-invert">
        <h1>
          <Trans>Privacy Policy</Trans>
        </h1>

        <div className="text-muted-foreground">
          <p>
            <strong>
              <Trans>Effective Date:</Trans>
            </strong>{' '}
            <Trans>February 8, 2026</Trans>
          </p>
          <p>
            <strong>
              <Trans>Last Updated:</Trans>
            </strong>{' '}
            <Trans>February 8, 2026</Trans>
          </p>
        </div>

        <p>
          <Trans>
            DokuHR ("we," "us," or "our") is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your personal information
            when you use our electronic signature platform and services (collectively, the
            "Service").
          </Trans>
        </p>

        <p>
          <Trans>
            Please read this Privacy Policy carefully. By accessing or using our Service, you
            acknowledge that you have read, understood, and agree to be bound by this Privacy
            Policy. If you do not agree with our policies and practices, please do not use our
            Service.
          </Trans>
        </p>

        <section>
          <h2>
            <Trans>1. Who We Are</Trans>
          </h2>
          <p>
            <Trans>
              DokuHR is an electronic signature platform that enables individuals and organizations
              to send, sign, and manage documents electronically.
            </Trans>
          </p>

          <h3>
            <Trans>Contact Information:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>
                <strong>Service Name:</strong> DokuHR
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Website:</strong>{' '}
                <a href="https://dokuhr.com" target="_blank" rel="noopener noreferrer">
                  https://dokuhr.com
                </a>
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Application:</strong>{' '}
                <a href="https://app.dokuhr.com" target="_blank" rel="noopener noreferrer">
                  https://app.dokuhr.com
                </a>
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Email:</strong> <a href="mailto:support@dokuhr.com">support@dokuhr.com</a>
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Data Protection Officer:</strong>{' '}
                <a href="mailto:dpo@dokuhr.com">dpo@dokuhr.com</a>
              </Trans>
            </li>
          </ul>

          <h3>
            <Trans>Data Controller and Processor Roles:</Trans>
          </h3>
          <p>
            <Trans>When you use DokuHR:</Trans>
          </p>
          <ul>
            <li>
              <Trans>
                <strong>If you send documents:</strong> You are the data controller for the personal
                data of recipients. DokuHR acts as your data processor.
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>If you sign documents:</strong> The person/organization who sent you the
                document is the data controller. DokuHR processes data on their behalf.
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>For your account data:</strong> DokuHR is the data controller.
              </Trans>
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <Trans>2. Information We Collect</Trans>
          </h2>
          <p>
            <Trans>
              We collect several types of information from and about users of our Service.
            </Trans>
          </p>

          <h3>
            <Trans>2.1 Information You Provide Directly</Trans>
          </h3>

          <h4>
            <Trans>Account Registration:</Trans>
          </h4>
          <ul>
            <li>
              <Trans>Full name</Trans>
            </li>
            <li>
              <Trans>Email address</Trans>
            </li>
            <li>
              <Trans>Password (encrypted and hashed)</Trans>
            </li>
            <li>
              <Trans>Organization name (optional)</Trans>
            </li>
            <li>
              <Trans>Job title or role (optional)</Trans>
            </li>
            <li>
              <Trans>Phone number (optional)</Trans>
            </li>
          </ul>

          <h4>
            <Trans>Document Signing:</Trans>
          </h4>
          <ul>
            <li>
              <Trans>Your electronic signature (typed, drawn, or uploaded image)</Trans>
            </li>
            <li>
              <Trans>Initials</Trans>
            </li>
            <li>
              <Trans>Date stamps</Trans>
            </li>
            <li>
              <Trans>Text field responses</Trans>
            </li>
            <li>
              <Trans>Email address (if not registered)</Trans>
            </li>
            <li>
              <Trans>Name (if not registered)</Trans>
            </li>
          </ul>

          <h4>
            <Trans>Communications:</Trans>
          </h4>
          <ul>
            <li>
              <Trans>Messages sent through our support system</Trans>
            </li>
            <li>
              <Trans>Feedback and survey responses</Trans>
            </li>
            <li>
              <Trans>Communications with our team</Trans>
            </li>
          </ul>

          <h4>
            <Trans>Payment Information (if applicable):</Trans>
          </h4>
          <ul>
            <li>
              <Trans>Billing name and address</Trans>
            </li>
            <li>
              <Trans>
                Payment method details (processed by our payment processor; we do not store full
                credit card numbers)
              </Trans>
            </li>
            <li>
              <Trans>Transaction history</Trans>
            </li>
          </ul>

          <h3>
            <Trans>2.2 Information Collected Automatically</Trans>
          </h3>

          <h4>
            <Trans>Usage Data:</Trans>
          </h4>
          <ul>
            <li>
              <Trans>IP address</Trans>
            </li>
            <li>
              <Trans>Browser type and version</Trans>
            </li>
            <li>
              <Trans>Operating system</Trans>
            </li>
            <li>
              <Trans>Device information (type, model, manufacturer)</Trans>
            </li>
            <li>
              <Trans>Pages visited and features used</Trans>
            </li>
            <li>
              <Trans>Time and date of access</Trans>
            </li>
            <li>
              <Trans>Time spent on pages</Trans>
            </li>
            <li>
              <Trans>Referring website or source</Trans>
            </li>
            <li>
              <Trans>Clickstream data</Trans>
            </li>
          </ul>

          <h4>
            <Trans>Geolocation Data:</Trans>
          </h4>
          <ul>
            <li>
              <Trans>Approximate location derived from IP address (city/country level)</Trans>
            </li>
            <li>
              <Trans>Time zone information</Trans>
            </li>
          </ul>

          <h4>
            <Trans>Cookies and Tracking Technologies:</Trans>
          </h4>
          <p>
            <Trans>
              We use cookies and similar tracking technologies to track activity on our Service and
              store certain information. See Section 11 for detailed information about our use of
              cookies.
            </Trans>
          </p>

          <h3>
            <Trans>2.3 Information from Third Parties</Trans>
          </h3>
          <ul>
            <li>
              <Trans>
                <strong>Payment processors:</strong> Transaction confirmation and payment status
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Email service providers:</strong> Email delivery status, open rates, click
                rates
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Authentication providers:</strong> If you sign in using Google, Microsoft,
                or other OAuth providers
              </Trans>
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <Trans>3. How We Use Your Information</Trans>
          </h2>
          <p>
            <Trans>
              We use the information we collect for various purposes related to providing and
              improving our Service.
            </Trans>
          </p>

          <h3>
            <Trans>
              3.1 Service Provision (Legal Basis: Contract Performance - GDPR Art. 6(1)(b))
            </Trans>
          </h3>
          <ul>
            <li>
              <Trans>Create and manage your account</Trans>
            </li>
            <li>
              <Trans>Process and facilitate document signing</Trans>
            </li>
            <li>
              <Trans>Send documents and signing invitations via email</Trans>
            </li>
            <li>
              <Trans>Generate and maintain audit trails</Trans>
            </li>
            <li>
              <Trans>Provide customer support and respond to inquiries</Trans>
            </li>
            <li>
              <Trans>Process payments and manage subscriptions</Trans>
            </li>
            <li>
              <Trans>Authenticate your identity and prevent unauthorized access</Trans>
            </li>
          </ul>

          <h3>
            <Trans>
              3.2 Service Improvement (Legal Basis: Legitimate Interests - GDPR Art. 6(1)(f))
            </Trans>
          </h3>
          <ul>
            <li>
              <Trans>Analyze usage patterns to improve functionality and user experience</Trans>
            </li>
            <li>
              <Trans>Develop new features and services</Trans>
            </li>
            <li>
              <Trans>Conduct research and analytics</Trans>
            </li>
            <li>
              <Trans>Monitor and analyze trends, usage, and activities</Trans>
            </li>
            <li>
              <Trans>Detect and fix technical issues and bugs</Trans>
            </li>
          </ul>

          <h3>
            <Trans>
              3.3 Legal and Security (Legal Basis: Legal Obligations - GDPR Art. 6(1)(c) and
              Legitimate Interests - GDPR Art. 6(1)(f))
            </Trans>
          </h3>
          <ul>
            <li>
              <Trans>Comply with legal obligations and regulatory requirements</Trans>
            </li>
            <li>
              <Trans>Enforce our terms, conditions, and policies</Trans>
            </li>
            <li>
              <Trans>Protect against fraud, abuse, and security threats</Trans>
            </li>
            <li>
              <Trans>Respond to legal requests from authorities</Trans>
            </li>
            <li>
              <Trans>Establish, exercise, or defend legal claims</Trans>
            </li>
            <li>
              <Trans>Maintain audit trails for legal compliance</Trans>
            </li>
          </ul>

          <h3>
            <Trans>
              3.4 Communications (Legal Basis: Contract Performance and Legitimate Interests)
            </Trans>
          </h3>
          <ul>
            <li>
              <Trans>
                Send transactional emails (signing requests, document completion notifications,
                password resets)
              </Trans>
            </li>
            <li>
              <Trans>Provide customer support communications</Trans>
            </li>
            <li>
              <Trans>Send important service updates and security alerts</Trans>
            </li>
            <li>
              <Trans>
                Send optional marketing communications (with your consent; opt-out available)
              </Trans>
            </li>
          </ul>

          <h3>
            <Trans>3.5 We Do NOT Use Your Information For:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>Selling or renting your personal data to third parties</Trans>
            </li>
            <li>
              <Trans>Targeted advertising or ad networks</Trans>
            </li>
            <li>
              <Trans>Sharing with data brokers</Trans>
            </li>
            <li>
              <Trans>Purposes unrelated to providing our Service</Trans>
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <Trans>4. Legal Basis for Processing (GDPR)</Trans>
          </h2>
          <p>
            <Trans>
              If you are located in the European Economic Area (EEA), United Kingdom, or
              Switzerland, we process your personal data based on the following legal grounds:
            </Trans>
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th>
                    <Trans>Processing Activity</Trans>
                  </th>
                  <th>
                    <Trans>Legal Basis</Trans>
                  </th>
                  <th>
                    <Trans>GDPR Article</Trans>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Trans>Account creation and management</Trans>
                  </td>
                  <td>
                    <Trans>Contract performance</Trans>
                  </td>
                  <td>Art. 6(1)(b)</td>
                </tr>
                <tr>
                  <td>
                    <Trans>Document signing and processing</Trans>
                  </td>
                  <td>
                    <Trans>Contract performance</Trans>
                  </td>
                  <td>Art. 6(1)(b)</td>
                </tr>
                <tr>
                  <td>
                    <Trans>Email notifications (transactional)</Trans>
                  </td>
                  <td>
                    <Trans>Contract performance</Trans>
                  </td>
                  <td>Art. 6(1)(b)</td>
                </tr>
                <tr>
                  <td>
                    <Trans>Audit trail creation and retention</Trans>
                  </td>
                  <td>
                    <Trans>Legal obligations</Trans>
                  </td>
                  <td>Art. 6(1)(c)</td>
                </tr>
                <tr>
                  <td>
                    <Trans>Fraud prevention and security</Trans>
                  </td>
                  <td>
                    <Trans>Legitimate interests</Trans>
                  </td>
                  <td>Art. 6(1)(f)</td>
                </tr>
                <tr>
                  <td>
                    <Trans>Service improvement and analytics</Trans>
                  </td>
                  <td>
                    <Trans>Legitimate interests</Trans>
                  </td>
                  <td>Art. 6(1)(f)</td>
                </tr>
                <tr>
                  <td>
                    <Trans>Marketing communications</Trans>
                  </td>
                  <td>
                    <Trans>Consent (opt-in)</Trans>
                  </td>
                  <td>Art. 6(1)(a)</td>
                </tr>
                <tr>
                  <td>
                    <Trans>Compliance with legal requests</Trans>
                  </td>
                  <td>
                    <Trans>Legal obligations</Trans>
                  </td>
                  <td>Art. 6(1)(c)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <Trans>
              Our legitimate interests include: preventing fraud and abuse, improving our Service,
              ensuring security, and conducting business operations. We have assessed that these
              interests do not override your fundamental rights and freedoms.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>5. How We Share Your Information</Trans>
          </h2>
          <p>
            <Trans>
              We do not sell, rent, or trade your personal information. We may share your
              information only in the following limited circumstances:
            </Trans>
          </p>

          <h3>
            <Trans>5.1 With Service Providers</Trans>
          </h3>
          <p>
            <Trans>
              We share information with third-party service providers who perform services on our
              behalf, including:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>
                <strong>Hosting providers:</strong> Railway (cloud infrastructure and database
                hosting)
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Email delivery:</strong> Resend (transactional email sending)
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Payment processing:</strong> Stripe or similar payment processors (if
                applicable)
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Analytics:</strong> Minimal analytics for service improvement (no
                third-party advertising networks)
              </Trans>
            </li>
          </ul>
          <p>
            <Trans>
              These service providers have access to your personal information only to perform
              specific tasks on our behalf and are obligated to protect your information and not use
              it for other purposes. We have data processing agreements in place with all service
              providers handling personal data.
            </Trans>
          </p>

          <h3>
            <Trans>5.2 With Document Senders and Recipients</Trans>
          </h3>
          <ul>
            <li>
              <Trans>
                When you sign a document, the completed document and signing information is shared
                with the document sender
              </Trans>
            </li>
            <li>
              <Trans>
                When you send a document, recipient email addresses and signing status are visible
                to you
              </Trans>
            </li>
            <li>
              <Trans>Audit trails are accessible to both senders and authorized recipients</Trans>
            </li>
          </ul>

          <h3>
            <Trans>5.3 For Legal Reasons</Trans>
          </h3>
          <p>
            <Trans>
              We may disclose your information if required to do so by law or in response to:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>Court orders, subpoenas, or other legal processes</Trans>
            </li>
            <li>
              <Trans>Requests from law enforcement or government authorities</Trans>
            </li>
            <li>
              <Trans>Legal obligations to comply with applicable laws and regulations</Trans>
            </li>
            <li>
              <Trans>Situations involving potential threats to safety or security</Trans>
            </li>
            <li>
              <Trans>Protection of our rights, property, or safety</Trans>
            </li>
          </ul>

          <h3>
            <Trans>5.4 Business Transfers</Trans>
          </h3>
          <p>
            <Trans>
              If DokuHR is involved in a merger, acquisition, asset sale, or bankruptcy, your
              information may be transferred as part of that transaction. We will provide notice and
              obtain consent where required before your personal information is transferred and
              becomes subject to a different privacy policy.
            </Trans>
          </p>

          <h3>
            <Trans>5.5 With Your Consent</Trans>
          </h3>
          <p>
            <Trans>
              We may share your information for other purposes with your explicit consent.
            </Trans>
          </p>

          <h3>
            <Trans>5.6 Aggregated and Anonymized Data</Trans>
          </h3>
          <p>
            <Trans>
              We may share aggregated, anonymized data that cannot identify you personally (e.g.,
              "80% of documents are signed within 24 hours") for research, marketing, or other
              purposes.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>6. International Data Transfers</Trans>
          </h2>

          <h3>
            <Trans>For EU/EEA/Croatian Users:</Trans>
          </h3>
          <p>
            <Trans>
              Your personal data is primarily stored and processed within the European Union:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>
                <strong>Primary hosting:</strong> Railway servers located in EU data centers
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Database:</strong> PostgreSQL databases hosted within the EU
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Email delivery:</strong> Resend (may process data in the US with appropriate
                safeguards)
              </Trans>
            </li>
          </ul>

          <p>
            <Trans>
              When we transfer personal data outside the EEA, we ensure appropriate safeguards are
              in place, including:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>EU Standard Contractual Clauses (SCCs) with service providers</Trans>
            </li>
            <li>
              <Trans>Adequacy decisions by the European Commission</Trans>
            </li>
            <li>
              <Trans>Other legally approved transfer mechanisms under GDPR Art. 46</Trans>
            </li>
          </ul>

          <p>
            <Trans>
              For information about specific data transfers and safeguards, contact our Data
              Protection Officer at <a href="mailto:dpo@dokuhr.com">dpo@dokuhr.com</a>.
            </Trans>
          </p>

          <h3>
            <Trans>For US Users:</Trans>
          </h3>
          <p>
            <Trans>
              Your data may be processed and stored in the United States or other countries where
              our service providers operate. By using our Service, you consent to the transfer of
              your information to these countries.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>7. Data Retention</Trans>
          </h2>
          <p>
            <Trans>
              We retain your personal information for as long as necessary to fulfill the purposes
              outlined in this Privacy Policy, unless a longer retention period is required or
              permitted by law.
            </Trans>
          </p>

          <h3>
            <Trans>Retention Periods:</Trans>
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th>
                    <Trans>Data Type</Trans>
                  </th>
                  <th>
                    <Trans>Retention Period</Trans>
                  </th>
                  <th>
                    <Trans>Reason</Trans>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Trans>Account information</Trans>
                  </td>
                  <td>
                    <Trans>While account is active + 30 days after deletion</Trans>
                  </td>
                  <td>
                    <Trans>Service provision, recovery period</Trans>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Trans>Signed documents</Trans>
                  </td>
                  <td>
                    <Trans>7+ years (configurable by sender)</Trans>
                  </td>
                  <td>
                    <Trans>Legal compliance, audit requirements</Trans>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Trans>Audit trails</Trans>
                  </td>
                  <td>
                    <Trans>Minimum 7 years</Trans>
                  </td>
                  <td>
                    <Trans>Legal compliance, non-repudiation</Trans>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Trans>Email addresses (recipients)</Trans>
                  </td>
                  <td>
                    <Trans>While associated documents are retained</Trans>
                  </td>
                  <td>
                    <Trans>Document access, notifications</Trans>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Trans>Payment information</Trans>
                  </td>
                  <td>
                    <Trans>7 years after last transaction</Trans>
                  </td>
                  <td>
                    <Trans>Tax and accounting requirements</Trans>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Trans>Usage logs and analytics</Trans>
                  </td>
                  <td>
                    <Trans>12-24 months</Trans>
                  </td>
                  <td>
                    <Trans>Service improvement, security</Trans>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Trans>Support communications</Trans>
                  </td>
                  <td>
                    <Trans>3 years</Trans>
                  </td>
                  <td>
                    <Trans>Customer service, legal defense</Trans>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Trans>Marketing consent records</Trans>
                  </td>
                  <td>
                    <Trans>While consent is active + 3 years</Trans>
                  </td>
                  <td>
                    <Trans>Compliance demonstration</Trans>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>
            <Trans>Deletion Upon Request:</Trans>
          </h3>
          <p>
            <Trans>
              You may request deletion of your personal data at any time (subject to legal retention
              requirements). See Section 8 for information about exercising your rights.
            </Trans>
          </p>

          <h3>
            <Trans>Automatic Deletion:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>Expired signing links are deleted after 90 days of inactivity</Trans>
            </li>
            <li>
              <Trans>Draft documents are deleted after 180 days of inactivity</Trans>
            </li>
            <li>
              <Trans>
                Inactive accounts may be deleted after 24 months of no activity (with advance
                notice)
              </Trans>
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <Trans>8. Your Privacy Rights</Trans>
          </h2>

          <h3>
            <Trans>8.1 Rights Under GDPR (EU/EEA/Croatian Users)</Trans>
          </h3>
          <p>
            <Trans>
              If you are located in the EU, EEA, UK, or Switzerland, you have the following rights:
            </Trans>
          </p>

          <h4>
            <Trans>1. Right to Access (Art. 15)</Trans>
          </h4>
          <p>
            <Trans>
              You have the right to request a copy of the personal data we hold about you, including
              information about how we process it.
            </Trans>
          </p>

          <h4>
            <Trans>2. Right to Rectification (Art. 16)</Trans>
          </h4>
          <p>
            <Trans>You have the right to correct inaccurate or incomplete personal data.</Trans>
          </p>

          <h4>
            <Trans>3. Right to Erasure / "Right to be Forgotten" (Art. 17)</Trans>
          </h4>
          <p>
            <Trans>You have the right to request deletion of your personal data when:</Trans>
          </p>
          <ul>
            <li>
              <Trans>The data is no longer necessary for the purposes it was collected</Trans>
            </li>
            <li>
              <Trans>You withdraw consent (where processing was based on consent)</Trans>
            </li>
            <li>
              <Trans>You object to processing and there are no overriding legitimate grounds</Trans>
            </li>
            <li>
              <Trans>The data was unlawfully processed</Trans>
            </li>
            <li>
              <Trans>Deletion is required for compliance with a legal obligation</Trans>
            </li>
          </ul>
          <p>
            <Trans>
              <strong>Note:</strong> This right is not absolute. We may be required to retain
              certain data for legal compliance (e.g., audit trails for signed documents must be
              retained for 7+ years).
            </Trans>
          </p>

          <h4>
            <Trans>4. Right to Restriction of Processing (Art. 18)</Trans>
          </h4>
          <p>
            <Trans>You have the right to request that we limit how we use your data when:</Trans>
          </p>
          <ul>
            <li>
              <Trans>You contest the accuracy of the data</Trans>
            </li>
            <li>
              <Trans>Processing is unlawful but you don't want the data deleted</Trans>
            </li>
            <li>
              <Trans>We no longer need the data but you need it for legal claims</Trans>
            </li>
            <li>
              <Trans>You have objected to processing and verification is pending</Trans>
            </li>
          </ul>

          <h4>
            <Trans>5. Right to Data Portability (Art. 20)</Trans>
          </h4>
          <p>
            <Trans>
              You have the right to receive your personal data in a structured, commonly used,
              machine-readable format and to transmit it to another controller.
            </Trans>
          </p>

          <h4>
            <Trans>6. Right to Object (Art. 21)</Trans>
          </h4>
          <p>
            <Trans>
              You have the right to object to processing based on legitimate interests or for direct
              marketing purposes.
            </Trans>
          </p>

          <h4>
            <Trans>7. Right to Withdraw Consent (Art. 7)</Trans>
          </h4>
          <p>
            <Trans>
              Where processing is based on consent, you have the right to withdraw your consent at
              any time. Withdrawal does not affect the lawfulness of processing before withdrawal.
            </Trans>
          </p>

          <h4>
            <Trans>8. Right to Lodge a Complaint</Trans>
          </h4>
          <p>
            <Trans>
              You have the right to lodge a complaint with a supervisory authority, particularly in
              the EU member state of your habitual residence, place of work, or place of the alleged
              infringement.
            </Trans>
          </p>
          <p>
            <Trans>
              <strong>For Croatian users:</strong>
              <br />
              Croatian Personal Data Protection Agency (Agencija za zaštitu osobnih podataka - AZOP)
              <br />
              Selska cesta 136, 10000 Zagreb, Croatia
              <br />
              Website:{' '}
              <a href="https://azop.hr" target="_blank" rel="noopener noreferrer">
                azop.hr
              </a>
              <br />
              Email: azop@azop.hr
              <br />
              Phone: +385 1 4609 000
            </Trans>
          </p>

          <h3>
            <Trans>8.2 Rights Under US State Laws</Trans>
          </h3>
          <p>
            <Trans>
              Depending on your state of residence, you may have additional rights under state
              privacy laws (e.g., California Consumer Privacy Act - CCPA, Virginia Consumer Data
              Protection Act - VCDPA):
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>Right to know what personal information is collected</Trans>
            </li>
            <li>
              <Trans>Right to know whether personal information is sold or shared</Trans>
            </li>
            <li>
              <Trans>
                Right to opt-out of the sale of personal information (note: we do not sell personal
                information)
              </Trans>
            </li>
            <li>
              <Trans>Right to delete personal information</Trans>
            </li>
            <li>
              <Trans>Right to correct inaccurate personal information</Trans>
            </li>
            <li>
              <Trans>Right to non-discrimination for exercising privacy rights</Trans>
            </li>
          </ul>

          <h3>
            <Trans>8.3 How to Exercise Your Rights</Trans>
          </h3>
          <p>
            <Trans>To exercise any of your privacy rights:</Trans>
          </p>
          <ol>
            <li>
              <Trans>
                <strong>Email us:</strong> <a href="mailto:dpo@dokuhr.com">dpo@dokuhr.com</a> or{' '}
                <a href="mailto:support@dokuhr.com">support@dokuhr.com</a>
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Specify:</strong> Which right you wish to exercise and what personal data
                you're referring to
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Verify your identity:</strong> We may ask for information to verify your
                identity before processing your request
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Response time:</strong> We will respond within 30 days (GDPR) or as required
                by applicable law
              </Trans>
            </li>
          </ol>

          <p>
            <Trans>
              <strong>For document-related requests:</strong> If your request relates to a specific
              signed document, please contact the document sender first, as they are the data
              controller for that data.
            </Trans>
          </p>

          <h3>
            <Trans>8.4 No Fee (Usually)</Trans>
          </h3>
          <p>
            <Trans>
              Exercising your privacy rights is generally free. However, we may charge a reasonable
              fee if your request is clearly unfounded, repetitive, or excessive, or we may refuse
              to act on the request in such cases.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>9. Data Security</Trans>
          </h2>
          <p>
            <Trans>
              We implement appropriate technical and organizational measures to protect your
              personal data against unauthorized or unlawful processing, accidental loss,
              destruction, or damage.
            </Trans>
          </p>

          <h3>
            <Trans>9.1 Technical Security Measures:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>
                <strong>Encryption in transit:</strong> 256-bit SSL/TLS encryption for all data
                transmitted over the internet
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Encryption at rest:</strong> AES-256 encryption for data stored in our
                databases
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Secure authentication:</strong> Bcrypt password hashing, secure session
                management
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Access controls:</strong> Role-based access control (RBAC), principle of
                least privilege
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Network security:</strong> Firewalls, intrusion detection systems, regular
                security audits
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Secure infrastructure:</strong> Cloud hosting with SOC 2 compliance
                (Railway)
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Regular backups:</strong> Automated daily backups with encryption
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Vulnerability management:</strong> Regular security patches and updates
              </Trans>
            </li>
          </ul>

          <h3>
            <Trans>9.2 Organizational Security Measures:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>Staff training on data protection and security</Trans>
            </li>
            <li>
              <Trans>Confidentiality agreements with employees and contractors</Trans>
            </li>
            <li>
              <Trans>Data processing agreements with all third-party processors</Trans>
            </li>
            <li>
              <Trans>Regular security audits and penetration testing</Trans>
            </li>
            <li>
              <Trans>Incident response plan for data breaches</Trans>
            </li>
            <li>
              <Trans>Access logs and monitoring</Trans>
            </li>
          </ul>

          <h3>
            <Trans>9.3 Your Responsibility:</Trans>
          </h3>
          <p>
            <Trans>
              While we take security seriously, you also play a role in protecting your data:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>Use a strong, unique password for your DokuHR account</Trans>
            </li>
            <li>
              <Trans>Enable two-factor authentication if available</Trans>
            </li>
            <li>
              <Trans>Keep your password confidential and do not share your account</Trans>
            </li>
            <li>
              <Trans>Log out after using shared or public computers</Trans>
            </li>
            <li>
              <Trans>Report any suspicious activity or unauthorized access immediately</Trans>
            </li>
          </ul>

          <h3>
            <Trans>9.4 Data Breach Notification:</Trans>
          </h3>
          <p>
            <Trans>
              In the event of a personal data breach that is likely to result in a risk to your
              rights and freedoms, we will:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>
                Notify the relevant supervisory authority within 72 hours (GDPR requirement)
              </Trans>
            </li>
            <li>
              <Trans>
                Notify affected individuals without undue delay if the breach poses a high risk
              </Trans>
            </li>
            <li>
              <Trans>
                Provide information about the nature of the breach, potential consequences, and
                mitigation measures
              </Trans>
            </li>
            <li>
              <Trans>Document all breaches, regardless of notification requirement</Trans>
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <Trans>10. Children's Privacy</Trans>
          </h2>
          <p>
            <Trans>
              Our Service is not intended for individuals under the age of 18 (or the applicable age
              of majority in your jurisdiction). We do not knowingly collect personal information
              from children.
            </Trans>
          </p>

          <p>
            <Trans>If you are under 18, please do not:</Trans>
          </p>
          <ul>
            <li>
              <Trans>Create an account on DokuHR</Trans>
            </li>
            <li>
              <Trans>Provide any personal information through our Service</Trans>
            </li>
            <li>
              <Trans>Sign documents without parental or guardian consent</Trans>
            </li>
          </ul>

          <p>
            <Trans>
              If we become aware that we have collected personal information from a child without
              appropriate parental consent, we will take steps to delete that information as quickly
              as possible.
            </Trans>
          </p>

          <p>
            <Trans>
              If you are a parent or guardian and believe your child has provided us with personal
              information, please contact us at{' '}
              <a href="mailto:support@dokuhr.com">support@dokuhr.com</a> immediately.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>11. Cookies and Tracking Technologies</Trans>
          </h2>
          <p>
            <Trans>
              We use cookies and similar tracking technologies to track activity on our Service and
              store certain information.
            </Trans>
          </p>

          <h3>
            <Trans>11.1 What Are Cookies?</Trans>
          </h3>
          <p>
            <Trans>
              Cookies are small text files stored on your device (computer, tablet, smartphone) when
              you visit a website. They help websites remember information about your visit.
            </Trans>
          </p>

          <h3>
            <Trans>11.2 Types of Cookies We Use:</Trans>
          </h3>

          <h4>
            <Trans>Essential/Necessary Cookies (Cannot be disabled):</Trans>
          </h4>
          <p>
            <Trans>
              These cookies are strictly necessary for the Service to function and cannot be
              switched off in our systems.
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>
                <strong>Authentication cookies:</strong> Keep you logged in as you navigate the
                platform
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Security cookies:</strong> Protect against cross-site request forgery (CSRF)
                attacks
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Session cookies:</strong> Maintain your session and preferences during your
                visit
              </Trans>
            </li>
          </ul>

          <h4>
            <Trans>Functional Cookies (Can be disabled):</Trans>
          </h4>
          <p>
            <Trans>These cookies enable enhanced functionality and personalization.</Trans>
          </p>
          <ul>
            <li>
              <Trans>
                <strong>Preference cookies:</strong> Remember your settings (language, timezone,
                date format)
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Interface cookies:</strong> Remember your UI preferences
              </Trans>
            </li>
          </ul>

          <h4>
            <Trans>Analytics Cookies (Can be disabled):</Trans>
          </h4>
          <p>
            <Trans>These cookies help us understand how visitors interact with our Service.</Trans>
          </p>
          <ul>
            <li>
              <Trans>
                <strong>Usage analytics:</strong> Track which features are used most frequently
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Performance monitoring:</strong> Identify and fix technical issues
              </Trans>
            </li>
          </ul>

          <p>
            <Trans>
              <strong>Note:</strong> We do NOT use:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>Advertising/marketing cookies</Trans>
            </li>
            <li>
              <Trans>Third-party advertising networks</Trans>
            </li>
            <li>
              <Trans>
                Social media tracking pixels (except if you explicitly use social login)
              </Trans>
            </li>
            <li>
              <Trans>Cookies to track you across other websites</Trans>
            </li>
          </ul>

          <h3>
            <Trans>11.3 Cookie Duration:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>
                <strong>Session cookies:</strong> Deleted when you close your browser
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Persistent cookies:</strong> Remain on your device for a set period
                (typically 1-12 months) or until you delete them
              </Trans>
            </li>
          </ul>

          <h3>
            <Trans>11.4 Managing Cookies:</Trans>
          </h3>
          <p>
            <Trans>You can control cookies through:</Trans>
          </p>
          <ul>
            <li>
              <Trans>
                <strong>Browser settings:</strong> Most browsers allow you to refuse or delete
                cookies. Check your browser's help section.
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Our cookie banner:</strong> When you first visit, you can accept or reject
                non-essential cookies
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Your account settings:</strong> Manage preferences for functional cookies
              </Trans>
            </li>
          </ul>

          <p>
            <Trans>
              <strong>Note:</strong> Disabling essential cookies may prevent you from using certain
              features of the Service, including signing in and signing documents.
            </Trans>
          </p>

          <h3>
            <Trans>11.5 Do Not Track (DNT):</Trans>
          </h3>
          <p>
            <Trans>
              Some browsers have a "Do Not Track" feature that lets you tell websites you do not
              want your online activities tracked. We respect DNT signals and will not track users
              who have DNT enabled in their browser.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>12. Third-Party Links and Services</Trans>
          </h2>
          <p>
            <Trans>
              Our Service may contain links to third-party websites, applications, or services that
              are not operated by us (e.g., if you integrate DokuHR with other tools).
            </Trans>
          </p>

          <p>
            <Trans>
              <strong>Important:</strong> We have no control over and assume no responsibility for
              the content, privacy policies, or practices of any third-party sites or services. We
              strongly advise you to review the privacy policy of every site you visit.
            </Trans>
          </p>

          <h3>
            <Trans>Third-Party Services We Use:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>
                <strong>Railway:</strong> Cloud hosting and infrastructure
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Resend:</strong> Email delivery service
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Stripe:</strong> Payment processing (if applicable)
              </Trans>
            </li>
          </ul>

          <p>
            <Trans>
              If you access third-party services through DokuHR (e.g., through integrations), your
              use of those services is governed by their privacy policies, not ours.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>13. Marketing Communications</Trans>
          </h2>
          <p>
            <Trans>
              We may send you marketing communications about DokuHR features, updates, promotions,
              and related information.
            </Trans>
          </p>

          <h3>
            <Trans>13.1 Types of Marketing Communications:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>Product updates and new features</Trans>
            </li>
            <li>
              <Trans>Educational content (guides, best practices, tips)</Trans>
            </li>
            <li>
              <Trans>Special offers and promotions</Trans>
            </li>
            <li>
              <Trans>Webinars and events</Trans>
            </li>
            <li>
              <Trans>Newsletters</Trans>
            </li>
          </ul>

          <h3>
            <Trans>13.2 Opt-In and Opt-Out:</Trans>
          </h3>
          <p>
            <Trans>
              <strong>For EU/EEA/Croatian users:</strong> Marketing communications require your
              explicit consent (opt-in). You will not receive marketing emails unless you have
              checked the box to receive them.
            </Trans>
          </p>
          <p>
            <Trans>
              <strong>For US users:</strong> You may receive marketing communications if you have a
              business relationship with us, with the ability to opt-out at any time.
            </Trans>
          </p>

          <h3>
            <Trans>13.3 How to Unsubscribe:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>Click the "Unsubscribe" link at the bottom of any marketing email</Trans>
            </li>
            <li>
              <Trans>Update your email preferences in your account settings</Trans>
            </li>
            <li>
              <Trans>
                Email us at <a href="mailto:support@dokuhr.com">support@dokuhr.com</a> with your
                request
              </Trans>
            </li>
          </ul>

          <p>
            <Trans>
              <strong>Note:</strong> Even if you opt-out of marketing communications, you will still
              receive transactional emails necessary for the Service (e.g., signing notifications,
              password resets, security alerts). These cannot be disabled as they are essential to
              the Service.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>14. Changes to This Privacy Policy</Trans>
          </h2>
          <p>
            <Trans>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, legal requirements, or for other operational, legal, or regulatory reasons.
            </Trans>
          </p>

          <h3>
            <Trans>14.1 How We Notify You:</Trans>
          </h3>
          <p>
            <Trans>When we make material changes to this Privacy Policy, we will:</Trans>
          </p>
          <ul>
            <li>
              <Trans>Update the "Last Updated" date at the top of this policy</Trans>
            </li>
            <li>
              <Trans>Notify you via email (if you have an account)</Trans>
            </li>
            <li>
              <Trans>Display a prominent notice on our Service</Trans>
            </li>
            <li>
              <Trans>
                For significant changes affecting your rights, we may request your renewed consent
                where required by law
              </Trans>
            </li>
          </ul>

          <h3>
            <Trans>14.2 Your Responsibility:</Trans>
          </h3>
          <p>
            <Trans>
              We encourage you to review this Privacy Policy periodically to stay informed about how
              we protect your information. Your continued use of the Service after we post changes
              constitutes your acceptance of the updated policy.
            </Trans>
          </p>

          <h3>
            <Trans>14.3 Previous Versions:</Trans>
          </h3>
          <p>
            <Trans>
              You can request previous versions of this Privacy Policy by contacting us at{' '}
              <a href="mailto:dpo@dokuhr.com">dpo@dokuhr.com</a>.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>15. Contact Us</Trans>
          </h2>
          <p>
            <Trans>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our
              data practices, please contact us:
            </Trans>
          </p>

          <h3>
            <Trans>General Inquiries:</Trans>
          </h3>
          <p>
            <Trans>
              Email: <a href="mailto:support@dokuhr.com">support@dokuhr.com</a>
              <br />
              Website:{' '}
              <a href="https://dokuhr.com" target="_blank" rel="noopener noreferrer">
                https://dokuhr.com
              </a>
            </Trans>
          </p>

          <h3>
            <Trans>Data Protection Officer (DPO):</Trans>
          </h3>
          <p>
            <Trans>
              Email: <a href="mailto:dpo@dokuhr.com">dpo@dokuhr.com</a>
              <br />
              For: GDPR inquiries, privacy rights requests, data protection questions
            </Trans>
          </p>

          <h3>
            <Trans>Privacy Rights Requests:</Trans>
          </h3>
          <p>
            <Trans>
              To exercise your privacy rights (access, deletion, rectification, etc.), email:
              <br />
              <a href="mailto:dpo@dokuhr.com">dpo@dokuhr.com</a>
            </Trans>
          </p>

          <h3>
            <Trans>Data Breach Reports:</Trans>
          </h3>
          <p>
            <Trans>
              If you believe your account has been compromised or you suspect a data breach:
              <br />
              Email: <a href="mailto:security@dokuhr.com">security@dokuhr.com</a>
              <br />
              We will investigate and respond promptly.
            </Trans>
          </p>

          <p>
            <Trans>
              <strong>Response Time:</strong> We aim to respond to all inquiries within 48 hours
              (business days). Privacy rights requests will be handled within the timeframes
              required by applicable law (typically 30 days under GDPR).
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>16. Specific Jurisdictions</Trans>
          </h2>

          <h3>
            <Trans>16.1 California Residents (CCPA/CPRA)</Trans>
          </h3>
          <p>
            <Trans>
              If you are a California resident, you have specific rights under the California
              Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>
                <strong>Right to Know:</strong> Request information about personal information
                collected, used, disclosed, or sold
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Right to Delete:</strong> Request deletion of your personal information
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Right to Opt-Out:</strong> Opt-out of the sale or sharing of personal
                information (note: we do not sell or share personal information)
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Right to Correct:</strong> Request correction of inaccurate personal
                information
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Right to Limit:</strong> Limit the use of sensitive personal information
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Right to Non-Discrimination:</strong> Not receive discriminatory treatment
                for exercising your rights
              </Trans>
            </li>
          </ul>
          <p>
            <Trans>
              To exercise these rights, email <a href="mailto:dpo@dokuhr.com">dpo@dokuhr.com</a>.
            </Trans>
          </p>
          <p>
            <Trans>
              <strong>Shine the Light Law:</strong> California residents may request information
              about disclosure of personal information to third parties for their direct marketing
              purposes. We do not share personal information with third parties for their direct
              marketing purposes.
            </Trans>
          </p>

          <h3>
            <Trans>16.2 Nevada Residents</Trans>
          </h3>
          <p>
            <Trans>
              Nevada residents have the right to opt-out of the sale of certain personal
              information. We do not sell personal information as defined by Nevada law. If you have
              questions, email <a href="mailto:dpo@dokuhr.com">dpo@dokuhr.com</a>.
            </Trans>
          </p>

          <h3>
            <Trans>16.3 EEA, UK, and Swiss Residents</Trans>
          </h3>
          <p>
            <Trans>
              If you are located in the European Economic Area, United Kingdom, or Switzerland, you
              have the rights described in Section 8.1, including the right to lodge a complaint
              with your local data protection authority.
            </Trans>
          </p>

          <h3>
            <Trans>16.4 Croatian Residents</Trans>
          </h3>
          <p>
            <Trans>
              As a Croatian resident, you have all the rights under GDPR, and you can exercise them
              directly with us or lodge a complaint with:
            </Trans>
          </p>
          <p>
            <Trans>
              <strong>Agencija za zaštitu osobnih podataka (AZOP)</strong>
              <br />
              Selska cesta 136
              <br />
              10000 Zagreb, Croatia
              <br />
              Website:{' '}
              <a href="https://azop.hr" target="_blank" rel="noopener noreferrer">
                azop.hr
              </a>
              <br />
              Email: azop@azop.hr
              <br />
              Phone: +385 1 4609 000
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>17. Acknowledgment</Trans>
          </h2>
          <p>
            <Trans>
              By using DokuHR, you acknowledge that you have read and understood this Privacy Policy
              and agree to its terms. If you do not agree with this Privacy Policy, please do not
              use our Service.
            </Trans>
          </p>

          <p className="text-sm text-muted-foreground">
            <Trans>
              <strong>This Privacy Policy was last updated on February 8, 2026.</strong>
            </Trans>
          </p>

          <p className="text-sm text-muted-foreground">
            <Trans>Version 1.0 | Effective Date: February 8, 2026</Trans>
          </p>
        </section>
      </article>

      <div className="mt-8">
        <Button asChild>
          <Link to="/">
            <Trans>Back home</Trans>
          </Link>
        </Button>
      </div>
    </div>
  );
}
