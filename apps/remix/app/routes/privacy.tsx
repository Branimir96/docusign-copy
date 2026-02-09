import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: 'Privacy Policy - DokuHR' },
    {
      name: 'description',
      content:
        'Privacy Policy for DokuHR electronic signature platform. Learn how we collect, use, and protect your personal data.',
    },
  ];
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Privacy Policy</h1>

        <div className="not-prose mb-8 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm">
            <strong>Effective Date:</strong> February 8, 2026
          </p>
          <p className="text-sm">
            <strong>Last Updated:</strong> February 8, 2026
          </p>
        </div>

        <p className="lead">
          DokuHR ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your personal information when you
          use our electronic signature platform and services (collectively, the "Service").
        </p>

        <p>
          Please read this Privacy Policy carefully. By accessing or using our Service, you
          acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
          If you do not agree with our policies and practices, please do not use our Service.
        </p>

        <h2>1. Who We Are</h2>
        <p>
          DokuHR is an electronic signature platform that enables individuals and organizations to
          send, sign, and manage documents electronically.
        </p>

        <h3>Contact Information:</h3>
        <ul>
          <li>
            <strong>Service Name:</strong> DokuHR
          </li>
          <li>
            <strong>Website:</strong>{' '}
            <a href="https://dokuhr.com" target="_blank" rel="noopener noreferrer">
              https://dokuhr.com
            </a>
          </li>
          <li>
            <strong>Application:</strong>{' '}
            <a href="https://app.dokuhr.com" target="_blank" rel="noopener noreferrer">
              https://app.dokuhr.com
            </a>
          </li>
          <li>
            <strong>Email:</strong> <a href="mailto:support@dokuhr.com">support@dokuhr.com</a>
          </li>
          <li>
            <strong>Data Protection Officer:</strong>{' '}
            <a href="mailto:dpo@dokuhr.com">dpo@dokuhr.com</a>
          </li>
        </ul>

        <h3>Data Controller and Processor Roles:</h3>
        <p>When you use DokuHR:</p>
        <ul>
          <li>
            <strong>If you send documents:</strong> You are the data controller for the personal
            data of recipients. DokuHR acts as your data processor.
          </li>
          <li>
            <strong>If you sign documents:</strong> The person/organization who sent you the
            document is the data controller. DokuHR processes data on their behalf.
          </li>
          <li>
            <strong>For your account data:</strong> DokuHR is the data controller.
          </li>
        </ul>

        <h2>2. Information We Collect</h2>
        <p>We collect several types of information from and about users of our Service.</p>

        <h3>2.1 Information You Provide Directly</h3>

        <h4>Account Registration:</h4>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Password (encrypted and hashed)</li>
          <li>Organization name (optional)</li>
          <li>Job title or role (optional)</li>
          <li>Phone number (optional)</li>
        </ul>

        <h4>Document Signing:</h4>
        <ul>
          <li>Your electronic signature (typed, drawn, or uploaded image)</li>
          <li>Initials</li>
          <li>Date stamps</li>
          <li>Text field responses</li>
          <li>Email address (if not registered)</li>
          <li>Name (if not registered)</li>
        </ul>

        <h4>Communications:</h4>
        <ul>
          <li>Messages sent through our support system</li>
          <li>Feedback and survey responses</li>
          <li>Communications with our team</li>
        </ul>

        <h4>Payment Information (if applicable):</h4>
        <ul>
          <li>Billing name and address</li>
          <li>
            Payment method details (processed by our payment processor; we do not store full credit
            card numbers)
          </li>
          <li>Transaction history</li>
        </ul>

        <h3>2.2 Information Collected Automatically</h3>

        <h4>Usage Data:</h4>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Device information (type, model, manufacturer)</li>
          <li>Pages visited and features used</li>
          <li>Time and date of access</li>
          <li>Time spent on pages</li>
          <li>Referring website or source</li>
          <li>Clickstream data</li>
        </ul>

        <h4>Geolocation Data:</h4>
        <ul>
          <li>Approximate location derived from IP address (city/country level)</li>
          <li>Time zone information</li>
        </ul>

        <h4>Cookies and Tracking Technologies:</h4>
        <p>
          We use cookies and similar tracking technologies to track activity on our Service and
          store certain information. See Section 11 for detailed information about our use of
          cookies.
        </p>

        <h3>2.3 Information from Third Parties</h3>
        <ul>
          <li>
            <strong>Payment processors:</strong> Transaction confirmation and payment status
          </li>
          <li>
            <strong>Email service providers:</strong> Email delivery status, open rates, click rates
          </li>
          <li>
            <strong>Authentication providers:</strong> If you sign in using Google, Microsoft, or
            other OAuth providers
          </li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>
          We use the information we collect for various purposes related to providing and improving
          our Service.
        </p>

        <h3>3.1 Service Provision (Legal Basis: Contract Performance - GDPR Art. 6(1)(b))</h3>
        <ul>
          <li>Create and manage your account</li>
          <li>Process and facilitate document signing</li>
          <li>Send documents and signing invitations via email</li>
          <li>Generate and maintain audit trails</li>
          <li>Provide customer support and respond to inquiries</li>
          <li>Process payments and manage subscriptions</li>
          <li>Authenticate your identity and prevent unauthorized access</li>
        </ul>

        <h3>3.2 Service Improvement (Legal Basis: Legitimate Interests - GDPR Art. 6(1)(f))</h3>
        <ul>
          <li>Analyze usage patterns to improve functionality and user experience</li>
          <li>Develop new features and services</li>
          <li>Conduct research and analytics</li>
          <li>Monitor and analyze trends, usage, and activities</li>
          <li>Detect and fix technical issues and bugs</li>
        </ul>

        <h3>
          3.3 Legal and Security (Legal Basis: Legal Obligations - GDPR Art. 6(1)(c) and Legitimate
          Interests - GDPR Art. 6(1)(f))
        </h3>
        <ul>
          <li>Comply with legal obligations and regulatory requirements</li>
          <li>Enforce our terms, conditions, and policies</li>
          <li>Protect against fraud, abuse, and security threats</li>
          <li>Respond to legal requests from authorities</li>
          <li>Establish, exercise, or defend legal claims</li>
          <li>Maintain audit trails for legal compliance</li>
        </ul>

        <h3>3.4 Communications (Legal Basis: Contract Performance and Legitimate Interests)</h3>
        <ul>
          <li>
            Send transactional emails (signing requests, document completion notifications, password
            resets)
          </li>
          <li>Provide customer support communications</li>
          <li>Send important service updates and security alerts</li>
          <li>Send optional marketing communications (with your consent; opt-out available)</li>
        </ul>

        <h3>3.5 We Do NOT Use Your Information For:</h3>
        <ul>
          <li>❌ Selling or renting your personal data to third parties</li>
          <li>❌ Targeted advertising or ad networks</li>
          <li>❌ Sharing with data brokers</li>
          <li>❌ Purposes unrelated to providing our Service</li>
        </ul>

        <h2>4. Legal Basis for Processing (GDPR)</h2>
        <p>
          If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, we
          process your personal data based on the following legal grounds:
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Processing Activity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Legal Basis
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  GDPR Article
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Account creation and management
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Contract performance
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Art. 6(1)(b)
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Document signing and processing
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Contract performance
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Art. 6(1)(b)
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Email notifications (transactional)
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Contract performance
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Art. 6(1)(b)
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Audit trail creation and retention
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Legal obligations
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Art. 6(1)(c)
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Fraud prevention and security
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Legitimate interests
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Art. 6(1)(f)
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Service improvement and analytics
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Legitimate interests
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Art. 6(1)(f)
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Marketing communications
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Consent (opt-in)
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Art. 6(1)(a)
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Compliance with legal requests
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Legal obligations
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Art. 6(1)(c)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Our legitimate interests include: preventing fraud and abuse, improving our Service,
          ensuring security, and conducting business operations. We have assessed that these
          interests do not override your fundamental rights and freedoms.
        </p>

        <h2>5. How We Share Your Information</h2>
        <p>
          We do not sell, rent, or trade your personal information. We may share your information
          only in the following limited circumstances:
        </p>

        <h3>5.1 With Service Providers</h3>
        <p>
          We share information with third-party service providers who perform services on our
          behalf, including:
        </p>
        <ul>
          <li>
            <strong>Hosting providers:</strong> Railway (cloud infrastructure and database hosting)
          </li>
          <li>
            <strong>Email delivery:</strong> Resend (transactional email sending)
          </li>
          <li>
            <strong>Payment processing:</strong> Stripe or similar payment processors (if
            applicable)
          </li>
          <li>
            <strong>Analytics:</strong> Minimal analytics for service improvement (no third-party
            advertising networks)
          </li>
        </ul>
        <p>
          These service providers have access to your personal information only to perform specific
          tasks on our behalf and are obligated to protect your information and not use it for other
          purposes. We have data processing agreements in place with all service providers handling
          personal data.
        </p>

        <h3>5.2 With Document Senders and Recipients</h3>
        <ul>
          <li>
            When you sign a document, the completed document and signing information is shared with
            the document sender
          </li>
          <li>
            When you send a document, recipient email addresses and signing status are visible to
            you
          </li>
          <li>Audit trails are accessible to both senders and authorized recipients</li>
        </ul>

        <h3>5.3 For Legal Reasons</h3>
        <p>We may disclose your information if required to do so by law or in response to:</p>
        <ul>
          <li>Court orders, subpoenas, or other legal processes</li>
          <li>Requests from law enforcement or government authorities</li>
          <li>Legal obligations to comply with applicable laws and regulations</li>
          <li>Situations involving potential threats to safety or security</li>
          <li>Protection of our rights, property, or safety</li>
        </ul>

        <h3>5.4 Business Transfers</h3>
        <p>
          If DokuHR is involved in a merger, acquisition, asset sale, or bankruptcy, your
          information may be transferred as part of that transaction. We will provide notice and
          obtain consent where required before your personal information is transferred and becomes
          subject to a different privacy policy.
        </p>

        <h3>5.5 With Your Consent</h3>
        <p>We may share your information for other purposes with your explicit consent.</p>

        <h3>5.6 Aggregated and Anonymized Data</h3>
        <p>
          We may share aggregated, anonymized data that cannot identify you personally (e.g., "80%
          of documents are signed within 24 hours") for research, marketing, or other purposes.
        </p>

        <h2>6. International Data Transfers</h2>

        <h3>For EU/EEA/Croatian Users:</h3>
        <p>Your personal data is primarily stored and processed within the European Union:</p>
        <ul>
          <li>
            <strong>Primary hosting:</strong> Railway servers located in EU data centers
          </li>
          <li>
            <strong>Database:</strong> PostgreSQL databases hosted within the EU
          </li>
          <li>
            <strong>Email delivery:</strong> Resend (may process data in the US with appropriate
            safeguards)
          </li>
        </ul>

        <p>
          When we transfer personal data outside the EEA, we ensure appropriate safeguards are in
          place, including:
        </p>
        <ul>
          <li>EU Standard Contractual Clauses (SCCs) with service providers</li>
          <li>Adequacy decisions by the European Commission</li>
          <li>Other legally approved transfer mechanisms under GDPR Art. 46</li>
        </ul>

        <p>
          For information about specific data transfers and safeguards, contact our Data Protection
          Officer at <a href="mailto:dpo@dokuhr.com">dpo@dokuhr.com</a>.
        </p>

        <h3>For US Users:</h3>
        <p>
          Your data may be processed and stored in the United States or other countries where our
          service providers operate. By using our Service, you consent to the transfer of your
          information to these countries.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          We retain your personal information for as long as necessary to fulfill the purposes
          outlined in this Privacy Policy, unless a longer retention period is required or permitted
          by law.
        </p>

        <h3>Retention Periods:</h3>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Data Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Retention Period
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Reason
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Account information
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  While account is active + 30 days after deletion
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Service provision, recovery period
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Signed documents
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  7+ years (configurable by sender)
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Legal compliance, audit requirements
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Audit trails</td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Minimum 7 years
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Legal compliance, non-repudiation
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Email addresses (recipients)
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  While associated documents are retained
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Document access, notifications
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Payment information
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  7 years after last transaction
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Tax and accounting requirements
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Usage logs and analytics
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">12-24 months</td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Service improvement, security
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Support communications
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">3 years</td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Customer service, legal defense
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Marketing consent records
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  While consent is active + 3 years
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  Compliance demonstration
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Deletion Upon Request:</h3>
        <p>
          You may request deletion of your personal data at any time (subject to legal retention
          requirements). See Section 8 for information about exercising your rights.
        </p>

        <h3>Automatic Deletion:</h3>
        <ul>
          <li>Expired signing links are deleted after 90 days of inactivity</li>
          <li>Draft documents are deleted after 180 days of inactivity</li>
          <li>
            Inactive accounts may be deleted after 24 months of no activity (with advance notice)
          </li>
        </ul>

        {/* Continue with remaining sections... I'll provide sections 8-17 in the next part due to length */}

        <h2>8. Your Privacy Rights</h2>

        <h3>8.1 Rights Under GDPR (EU/EEA/Croatian Users)</h3>
        <p>If you are located in the EU, EEA, UK, or Switzerland, you have the following rights:</p>

        <h4>1. Right to Access (Art. 15)</h4>
        <p>
          You have the right to request a copy of the personal data we hold about you, including
          information about how we process it.
        </p>

        <h4>2. Right to Rectification (Art. 16)</h4>
        <p>You have the right to correct inaccurate or incomplete personal data.</p>

        <h4>3. Right to Erasure / "Right to be Forgotten" (Art. 17)</h4>
        <p>You have the right to request deletion of your personal data when:</p>
        <ul>
          <li>The data is no longer necessary for the purposes it was collected</li>
          <li>You withdraw consent (where processing was based on consent)</li>
          <li>You object to processing and there are no overriding legitimate grounds</li>
          <li>The data was unlawfully processed</li>
          <li>Deletion is required for compliance with a legal obligation</li>
        </ul>
        <p>
          <strong>Note:</strong> This right is not absolute. We may be required to retain certain
          data for legal compliance (e.g., audit trails for signed documents must be retained for 7+
          years).
        </p>

        <h4>4. Right to Restriction of Processing (Art. 18)</h4>
        <p>You have the right to request that we limit how we use your data when:</p>
        <ul>
          <li>You contest the accuracy of the data</li>
          <li>Processing is unlawful but you don't want the data deleted</li>
          <li>We no longer need the data but you need it for legal claims</li>
          <li>You have objected to processing and verification is pending</li>
        </ul>

        <h4>5. Right to Data Portability (Art. 20)</h4>
        <p>
          You have the right to receive your personal data in a structured, commonly used,
          machine-readable format and to transmit it to another controller.
        </p>

        <h4>6. Right to Object (Art. 21)</h4>
        <p>
          You have the right to object to processing based on legitimate interests or for direct
          marketing purposes.
        </p>

        <h4>7. Right to Withdraw Consent (Art. 7)</h4>
        <p>
          Where processing is based on consent, you have the right to withdraw your consent at any
          time. Withdrawal does not affect the lawfulness of processing before withdrawal.
        </p>

        <h4>8. Right to Lodge a Complaint</h4>
        <p>
          You have the right to lodge a complaint with a supervisory authority, particularly in the
          EU member state of your habitual residence, place of work, or place of the alleged
          infringement.
        </p>
        <p>
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
        </p>

        <h3>8.2 Rights Under US State Laws</h3>
        <p>
          Depending on your state of residence, you may have additional rights under state privacy
          laws (e.g., California Consumer Privacy Act - CCPA, Virginia Consumer Data Protection Act
          - VCDPA):
        </p>
        <ul>
          <li>Right to know what personal information is collected</li>
          <li>Right to know whether personal information is sold or shared</li>
          <li>
            Right to opt-out of the sale of personal information (note: we do not sell personal
            information)
          </li>
          <li>Right to delete personal information</li>
          <li>Right to correct inaccurate personal information</li>
          <li>Right to non-discrimination for exercising privacy rights</li>
        </ul>

        <h3>8.3 How to Exercise Your Rights</h3>
        <p>To exercise any of your privacy rights:</p>
        <ol>
          <li>
            <strong>Email us:</strong> <a href="mailto:dpo@dokuhr.com">dpo@dokuhr.com</a> or{' '}
            <a href="mailto:support@dokuhr.com">support@dokuhr.com</a>
          </li>
          <li>
            <strong>Specify:</strong> Which right you wish to exercise and what personal data you're
            referring to
          </li>
          <li>
            <strong>Verify your identity:</strong> We may ask for information to verify your
            identity before processing your request
          </li>
          <li>
            <strong>Response time:</strong> We will respond within 30 days (GDPR) or as required by
            applicable law
          </li>
        </ol>

        <p>
          <strong>For document-related requests:</strong> If your request relates to a specific
          signed document, please contact the document sender first, as they are the data controller
          for that data.
        </p>

        <h3>8.4 No Fee (Usually)</h3>
        <p>
          Exercising your privacy rights is generally free. However, we may charge a reasonable fee
          if your request is clearly unfounded, repetitive, or excessive, or we may refuse to act on
          the request in such cases.
        </p>

        <h2>9. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal
          data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
        </p>

        <h3>9.1 Technical Security Measures:</h3>
        <ul>
          <li>
            <strong>Encryption in transit:</strong> 256-bit SSL/TLS encryption for all data
            transmitted over the internet
          </li>
          <li>
            <strong>Encryption at rest:</strong> AES-256 encryption for data stored in our databases
          </li>
          <li>
            <strong>Secure authentication:</strong> Bcrypt password hashing, secure session
            management
          </li>
          <li>
            <strong>Access controls:</strong> Role-based access control (RBAC), principle of least
            privilege
          </li>
          <li>
            <strong>Network security:</strong> Firewalls, intrusion detection systems, regular
            security audits
          </li>
          <li>
            <strong>Secure infrastructure:</strong> Cloud hosting with SOC 2 compliance (Railway)
          </li>
          <li>
            <strong>Regular backups:</strong> Automated daily backups with encryption
          </li>
          <li>
            <strong>Vulnerability management:</strong> Regular security patches and updates
          </li>
        </ul>

        <h3>9.2 Organizational Security Measures:</h3>
        <ul>
          <li>Staff training on data protection and security</li>
          <li>Confidentiality agreements with employees and contractors</li>
          <li>Data processing agreements with all third-party processors</li>
          <li>Regular security audits and penetration testing</li>
          <li>Incident response plan for data breaches</li>
          <li>Access logs and monitoring</li>
        </ul>

        <h3>9.3 Your Responsibility:</h3>
        <p>While we take security seriously, you also play a role in protecting your data:</p>
        <ul>
          <li>Use a strong, unique password for your DokuHR account</li>
          <li>Enable two-factor authentication if available</li>
          <li>Keep your password confidential and do not share your account</li>
          <li>Log out after using shared or public computers</li>
          <li>Report any suspicious activity or unauthorized access immediately</li>
        </ul>

        <h3>9.4 Data Breach Notification:</h3>
        <p>
          In the event of a personal data breach that is likely to result in a risk to your rights
          and freedoms, we will:
        </p>
        <ul>
          <li>Notify the relevant supervisory authority within 72 hours (GDPR requirement)</li>
          <li>Notify affected individuals without undue delay if the breach poses a high risk</li>
          <li>
            Provide information about the nature of the breach, potential consequences, and
            mitigation measures
          </li>
          <li>Document all breaches, regardless of notification requirement</li>
        </ul>

        <h2>10. Children's Privacy</h2>
        <p>
          Our Service is not intended for individuals under the age of 18 (or the applicable age of
          majority in your jurisdiction). We do not knowingly collect personal information from
          children.
        </p>

        <p>If you are under 18, please do not:</p>
        <ul>
          <li>Create an account on DokuHR</li>
          <li>Provide any personal information through our Service</li>
          <li>Sign documents without parental or guardian consent</li>
        </ul>

        <p>
          If we become aware that we have collected personal information from a child without
          appropriate parental consent, we will take steps to delete that information as quickly as
          possible.
        </p>

        <p>
          If you are a parent or guardian and believe your child has provided us with personal
          information, please contact us at{' '}
          <a href="mailto:support@dokuhr.com">support@dokuhr.com</a>
          immediately.
        </p>

        <h2>11. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to track activity on our Service and
          store certain information.
        </p>

        <h3>11.1 What Are Cookies?</h3>
        <p>
          Cookies are small text files stored on your device (computer, tablet, smartphone) when you
          visit a website. They help websites remember information about your visit.
        </p>

        <h3>11.2 Types of Cookies We Use:</h3>

        <h4>Essential/Necessary Cookies (Cannot be disabled):</h4>
        <p>
          These cookies are strictly necessary for the Service to function and cannot be switched
          off in our systems.
        </p>
        <ul>
          <li>
            <strong>Authentication cookies:</strong> Keep you logged in as you navigate the platform
          </li>
          <li>
            <strong>Security cookies:</strong> Protect against cross-site request forgery (CSRF)
            attacks
          </li>
          <li>
            <strong>Session cookies:</strong> Maintain your session and preferences during your
            visit
          </li>
        </ul>

        <h4>Functional Cookies (Can be disabled):</h4>
        <p>These cookies enable enhanced functionality and personalization.</p>
        <ul>
          <li>
            <strong>Preference cookies:</strong> Remember your settings (language, timezone, date
            format)
          </li>
          <li>
            <strong>Interface cookies:</strong> Remember your UI preferences
          </li>
        </ul>

        <h4>Analytics Cookies (Can be disabled):</h4>
        <p>These cookies help us understand how visitors interact with our Service.</p>
        <ul>
          <li>
            <strong>Usage analytics:</strong> Track which features are used most frequently
          </li>
          <li>
            <strong>Performance monitoring:</strong> Identify and fix technical issues
          </li>
        </ul>

        <p>
          <strong>Note:</strong> We do NOT use:
        </p>
        <ul>
          <li>❌ Advertising/marketing cookies</li>
          <li>❌ Third-party advertising networks</li>
          <li>❌ Social media tracking pixels (except if you explicitly use social login)</li>
          <li>❌ Cookies to track you across other websites</li>
        </ul>

        <h3>11.3 Cookie Duration:</h3>
        <ul>
          <li>
            <strong>Session cookies:</strong> Deleted when you close your browser
          </li>
          <li>
            <strong>Persistent cookies:</strong> Remain on your device for a set period (typically
            1-12 months) or until you delete them
          </li>
        </ul>

        <h3>11.4 Managing Cookies:</h3>
        <p>You can control cookies through:</p>
        <ul>
          <li>
            <strong>Browser settings:</strong> Most browsers allow you to refuse or delete cookies.
            Check your browser's help section.
          </li>
          <li>
            <strong>Our cookie banner:</strong> When you first visit, you can accept or reject
            non-essential cookies
          </li>
          <li>
            <strong>Your account settings:</strong> Manage preferences for functional cookies
          </li>
        </ul>

        <p>
          <strong>Note:</strong> Disabling essential cookies may prevent you from using certain
          features of the Service, including signing in and signing documents.
        </p>

        <h3>11.5 Do Not Track (DNT):</h3>
        <p>
          Some browsers have a "Do Not Track" feature that lets you tell websites you do not want
          your online activities tracked. We respect DNT signals and will not track users who have
          DNT enabled in their browser.
        </p>

        <h2>12. Third-Party Links and Services</h2>
        <p>
          Our Service may contain links to third-party websites, applications, or services that are
          not operated by us (e.g., if you integrate DokuHR with other tools).
        </p>

        <p>
          <strong>Important:</strong> We have no control over and assume no responsibility for the
          content, privacy policies, or practices of any third-party sites or services. We strongly
          advise you to review the privacy policy of every site you visit.
        </p>

        <h3>Third-Party Services We Use:</h3>
        <ul>
          <li>
            <strong>Railway:</strong> Cloud hosting and infrastructure (
            <a href="https://railway.app/legal/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            )
          </li>
          <li>
            <strong>Resend:</strong> Email delivery service (
            <a
              href="https://resend.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            )
          </li>
          <li>
            <strong>Stripe:</strong> Payment processing (if applicable) (
            <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            )
          </li>
        </ul>

        <p>
          If you access third-party services through DokuHR (e.g., through integrations), your use
          of those services is governed by their privacy policies, not ours.
        </p>

        <h2>13. Marketing Communications</h2>
        <p>
          We may send you marketing communications about DokuHR features, updates, promotions, and
          related information.
        </p>

        <h3>13.1 Types of Marketing Communications:</h3>
        <ul>
          <li>Product updates and new features</li>
          <li>Educational content (guides, best practices, tips)</li>
          <li>Special offers and promotions</li>
          <li>Webinars and events</li>
          <li>Newsletters</li>
        </ul>

        <h3>13.2 Opt-In and Opt-Out:</h3>
        <p>
          <strong>For EU/EEA/Croatian users:</strong> Marketing communications require your explicit
          consent (opt-in). You will not receive marketing emails unless you have checked the box to
          receive them.
        </p>
        <p>
          <strong>For US users:</strong> You may receive marketing communications if you have a
          business relationship with us, with the ability to opt-out at any time.
        </p>

        <h3>13.3 How to Unsubscribe:</h3>
        <ul>
          <li>Click the "Unsubscribe" link at the bottom of any marketing email</li>
          <li>Update your email preferences in your account settings</li>
          <li>
            Email us at <a href="mailto:support@dokuhr.com">support@dokuhr.com</a> with your request
          </li>
        </ul>

        <p>
          <strong>Note:</strong> Even if you opt-out of marketing communications, you will still
          receive transactional emails necessary for the Service (e.g., signing notifications,
          password resets, security alerts). These cannot be disabled as they are essential to the
          Service.
        </p>

        <h2>14. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices,
          legal requirements, or for other operational, legal, or regulatory reasons.
        </p>

        <h3>14.1 How We Notify You:</h3>
        <p>When we make material changes to this Privacy Policy, we will:</p>
        <ul>
          <li>Update the "Last Updated" date at the top of this policy</li>
          <li>Notify you via email (if you have an account)</li>
          <li>Display a prominent notice on our Service</li>
          <li>
            For significant changes affecting your rights, we may request your renewed consent where
            required by law
          </li>
        </ul>

        <h3>14.2 Your Responsibility:</h3>
        <p>
          We encourage you to review this Privacy Policy periodically to stay informed about how we
          protect your information. Your continued use of the Service after we post changes
          constitutes your acceptance of the updated policy.
        </p>

        <h3>14.3 Previous Versions:</h3>
        <p>
          You can request previous versions of this Privacy Policy by contacting us at
          <a href="mailto:dpo@dokuhr.com">dpo@dokuhr.com</a>.
        </p>

        <h2>15. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data
          practices, please contact us:
        </p>

        <div className="not-prose rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
            General Inquiries:
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Email:{' '}
            <a
              href="mailto:support@dokuhr.com"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              support@dokuhr.com
            </a>
            <br />
            Website:{' '}
            <a
              href="https://dokuhr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              https://dokuhr.com
            </a>
          </p>

          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Data Protection Officer (DPO):
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Email:{' '}
            <a
              href="mailto:dpo@dokuhr.com"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              dpo@dokuhr.com
            </a>
            <br />
            For: GDPR inquiries, privacy rights requests, data protection questions
          </p>

          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Privacy Rights Requests:
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            To exercise your privacy rights (access, deletion, rectification, etc.), email:
            <br />
            <a
              href="mailto:dpo@dokuhr.com"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              dpo@dokuhr.com
            </a>
          </p>

          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Data Breach Reports:
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            If you believe your account has been compromised or you suspect a data breach:
            <br />
            Email:{' '}
            <a
              href="mailto:security@dokuhr.com"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              security@dokuhr.com
            </a>
            <br />
            We will investigate and respond promptly.
          </p>
        </div>

        <p className="mt-6">
          <strong>Response Time:</strong> We aim to respond to all inquiries within 48 hours
          (business days). Privacy rights requests will be handled within the timeframes required by
          applicable law (typically 30 days under GDPR).
        </p>

        <h2>16. Specific Jurisdictions</h2>

        <h3>16.1 California Residents (CCPA/CPRA)</h3>
        <p>
          If you are a California resident, you have specific rights under the California Consumer
          Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
        </p>
        <ul>
          <li>
            <strong>Right to Know:</strong> Request information about personal information
            collected, used, disclosed, or sold
          </li>
          <li>
            <strong>Right to Delete:</strong> Request deletion of your personal information
          </li>
          <li>
            <strong>Right to Opt-Out:</strong> Opt-out of the sale or sharing of personal
            information (note: we do not sell or share personal information)
          </li>
          <li>
            <strong>Right to Correct:</strong> Request correction of inaccurate personal information
          </li>
          <li>
            <strong>Right to Limit:</strong> Limit the use of sensitive personal information
          </li>
          <li>
            <strong>Right to Non-Discrimination:</strong> Not receive discriminatory treatment for
            exercising your rights
          </li>
        </ul>
        <p>
          To exercise these rights, email <a href="mailto:dpo@dokuhr.com">dpo@dokuhr.com</a>.
        </p>
        <p>
          <strong>Shine the Light Law:</strong> California residents may request information about
          disclosure of personal information to third parties for their direct marketing purposes.
          We do not share personal information with third parties for their direct marketing
          purposes.
        </p>

        <h3>16.2 Nevada Residents</h3>
        <p>
          Nevada residents have the right to opt-out of the sale of certain personal information. We
          do not sell personal information as defined by Nevada law. If you have questions, email{' '}
          <a href="mailto:dpo@dokuhr.com">dpo@dokuhr.com</a>.
        </p>

        <h3>16.3 EEA, UK, and Swiss Residents</h3>
        <p>
          If you are located in the European Economic Area, United Kingdom, or Switzerland, you have
          the rights described in Section 8.1, including the right to lodge a complaint with your
          local data protection authority.
        </p>

        <h3>16.4 Croatian Residents</h3>
        <p>
          As a Croatian resident, you have all the rights under GDPR, and you can exercise them
          directly with us or lodge a complaint with:
        </p>
        <p>
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
        </p>

        <h2>17. Acknowledgment</h2>
        <p>
          By using DokuHR, you acknowledge that you have read and understood this Privacy Policy and
          agree to its terms. If you do not agree with this Privacy Policy, please do not use our
          Service.
        </p>

        <div className="not-prose mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            This Privacy Policy was last updated on February 8, 2026.
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Version 1.0 | Effective Date: February 8, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
