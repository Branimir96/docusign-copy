import { Trans } from '@lingui/react/macro';
import { Link } from 'react-router';

import { Button } from '@documenso/ui/primitives/button';

export default function SignatureDisclosure() {
  return (
    <div>
      <article className="prose max-w-4xl dark:prose-invert">
        <h1>
          <Trans>Electronic Signature Disclosure</Trans>
        </h1>

        <section>
          <h2>
            <Trans>Welcome</Trans>
          </h2>
          <p>
            <Trans>
              Thank you for using DokuHR to perform your electronic document signing. The purpose of
              this disclosure is to inform you about the process, legality, and your rights
              regarding the use of electronic signatures on our platform. By opting to use an
              electronic signature, you are agreeing to the terms and conditions outlined below.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>Legal Framework and Consent</Trans>
          </h2>
          <p>
            <Trans>
              By using our platform to affix your electronic signature to documents, you are
              consenting to do so under applicable electronic signature laws in your jurisdiction:
            </Trans>
          </p>

          <h3>
            <Trans>For European Union / Croatia:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>
                eIDAS Regulation (EU) No 910/2014 on electronic identification and trust services
              </Trans>
            </li>
            <li>
              <Trans>Croatian Electronic Signature Act (Zakon o elektroničkom potpisu)</Trans>
            </li>
            <li>
              <Trans>General Data Protection Regulation (GDPR) EU 2016/679</Trans>
            </li>
          </ul>

          <h3>
            <Trans>For United States:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>
                Electronic Signatures in Global and National Commerce Act (E-Sign Act, 15 U.S.C. §
                7001)
              </Trans>
            </li>
            <li>
              <Trans>Uniform Electronic Transactions Act (UETA)</Trans>
            </li>
          </ul>

          <h3>
            <Trans>For Other Jurisdictions:</Trans>
          </h3>
          <p>
            <Trans>
              Applicable electronic signature and data protection laws in your country or region.
            </Trans>
          </p>

          <p>
            <Trans>
              This action indicates your agreement to use electronic means to sign documents and
              receive notifications in accordance with the laws applicable to you.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>Types of Electronic Signatures</Trans>
          </h2>
          <p>
            <Trans>
              DokuHR provides <strong>Simple Electronic Signatures (SES)</strong> as defined under
              eIDAS Regulation and basic electronic signatures under the E-Sign Act.
            </Trans>
          </p>

          <h3>
            <Trans>What this means:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>
                Legally valid for most business transactions (contracts, NDAs, service agreements,
                employment documents, B2B agreements)
              </Trans>
            </li>
            <li>
              <Trans>Same legal weight as handwritten signatures for permitted transactions</Trans>
            </li>
            <li>
              <Trans>Includes audit trail with timestamp, IP address, and signing events</Trans>
            </li>
          </ul>

          <h3>
            <Trans>Not suitable for:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>
                Real estate transfers or property deeds (may require notarization or qualified
                signatures)
              </Trans>
            </li>
            <li>
              <Trans>Wills and testamentary documents</Trans>
            </li>
            <li>
              <Trans>Court documents requiring sworn statements</Trans>
            </li>
            <li>
              <Trans>Certain government filings and regulatory submissions</Trans>
            </li>
            <li>
              <Trans>
                Transactions explicitly requiring Qualified Electronic Signatures (QES) under EU law
              </Trans>
            </li>
            <li>
              <Trans>Documents requiring witness signatures or notarization under local law</Trans>
            </li>
          </ul>

          <p>
            <Trans>
              <strong>Important:</strong> If you are uncertain whether your transaction requires a
              higher-level signature type or additional legal formalities, please consult legal
              counsel in your jurisdiction before proceeding.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>Legality of Electronic Signatures</Trans>
          </h2>
          <p>
            <Trans>An electronic signature provided through DokuHR is legally binding under:</Trans>
          </p>
          <ul>
            <li>
              <Trans>eIDAS Regulation (for EU/EEA/Croatian users)</Trans>
            </li>
            <li>
              <Trans>E-Sign Act and UETA (for US users)</Trans>
            </li>
            <li>
              <Trans>Applicable laws in your jurisdiction</Trans>
            </li>
          </ul>

          <p>
            <Trans>
              Your electronic signature (created by typing your name, drawing with a mouse/stylus,
              or uploading an image) carries the same legal weight and enforceability as a
              handwritten signature for transactions where Simple Electronic Signatures are legally
              permitted.
            </Trans>
          </p>

          <h3>
            <Trans>Your electronic signature includes:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>Your typed/drawn/uploaded signature mark</Trans>
            </li>
            <li>
              <Trans>Precise timestamp of signing (date and time)</Trans>
            </li>
            <li>
              <Trans>IP address of the device used for signing</Trans>
            </li>
            <li>
              <Trans>Complete audit trail of document access and signing events</Trans>
            </li>
            <li>
              <Trans>Unique document identifier and version tracking</Trans>
            </li>
          </ul>

          <p>
            <Trans>
              This comprehensive evidence ensures legal validity, authenticity, and non-repudiation
              of your signature in accordance with applicable laws.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>System Requirements</Trans>
          </h2>
          <p>
            <Trans>To use our electronic signature service, you must have access to:</Trans>
          </p>
          <ul>
            <li>
              <Trans>A stable internet connection</Trans>
            </li>
            <li>
              <Trans>An active email account capable of receiving and opening emails</Trans>
            </li>
            <li>
              <Trans>
                A device (computer, tablet, or smartphone) capable of accessing, opening, and
                reading PDF documents
              </Trans>
            </li>
            <li>
              <Trans>
                A modern web browser (Chrome, Firefox, Safari, Edge - latest version recommended)
              </Trans>
            </li>
            <li>
              <Trans>JavaScript enabled in your browser</Trans>
            </li>
            <li>
              <Trans>Ability to print or download documents for your records (recommended)</Trans>
            </li>
          </ul>

          <p>
            <Trans>
              <strong>Note:</strong> Some features may have reduced functionality on older browsers
              or mobile devices. We recommend using a desktop or laptop computer for the best
              signing experience.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>Electronic Delivery of Documents</Trans>
          </h2>
          <p>
            <Trans>
              All documents related to the electronic signing process will be provided to you
              electronically through one or more of the following methods:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>
                Direct access through our platform at <strong>app.dokuhr.com</strong>
              </Trans>
            </li>
            <li>
              <Trans>Email notification with a secure link to access the document</Trans>
            </li>
            <li>
              <Trans>Download link provided after successful signing</Trans>
            </li>
          </ul>

          <p>
            <Trans>It is your responsibility to ensure that:</Trans>
          </p>
          <ul>
            <li>
              <Trans>Your email address is current and accurate</Trans>
            </li>
            <li>
              <Trans>
                You can receive and open emails from <strong>noreply@dokuhr.com</strong>
              </Trans>
            </li>
            <li>
              <Trans>
                Our emails are not blocked by spam filters (add us to your safe senders list)
              </Trans>
            </li>
            <li>
              <Trans>You check your email regularly for signing requests and notifications</Trans>
            </li>
          </ul>

          <p>
            <Trans>
              <strong>Important:</strong> Signing links may expire after a certain period (typically
              set by the document sender). Please sign documents promptly upon receiving the
              notification.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>Data Protection and Privacy</Trans>
          </h2>

          <h3>
            <Trans>For EU/EEA/Croatian Users (GDPR Compliance):</Trans>
          </h3>
          <p>
            <Trans>
              We process your personal data in accordance with the General Data Protection
              Regulation (GDPR) and Croatian data protection laws.
            </Trans>
          </p>

          <h4>
            <Trans>Data Roles:</Trans>
          </h4>
          <ul>
            <li>
              <Trans>
                <strong>Data Controller:</strong> The person or organization who sent you the
                document
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Data Processor:</strong> DokuHR (we process data on behalf of the sender)
              </Trans>
            </li>
          </ul>

          <h4>
            <Trans>Personal Data We Process:</Trans>
          </h4>
          <ul>
            <li>
              <Trans>Your name</Trans>
            </li>
            <li>
              <Trans>Your email address</Trans>
            </li>
            <li>
              <Trans>IP address of your device</Trans>
            </li>
            <li>
              <Trans>Your electronic signature (typed, drawn, or uploaded image)</Trans>
            </li>
            <li>
              <Trans>Device information (browser type, operating system)</Trans>
            </li>
            <li>
              <Trans>Timestamp of document access and signing</Trans>
            </li>
            <li>
              <Trans>Geolocation data (derived from IP address)</Trans>
            </li>
          </ul>

          <h4>
            <Trans>Purpose and Legal Basis:</Trans>
          </h4>
          <ul>
            <li>
              <Trans>
                <strong>Purpose:</strong> Providing electronic signature services, maintaining audit
                trails, legal compliance
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Legal Basis:</strong> Contract performance (GDPR Art. 6(1)(b)), legitimate
                interests (GDPR Art. 6(1)(f)), legal obligations (GDPR Art. 6(1)(c))
              </Trans>
            </li>
          </ul>

          <h4>
            <Trans>Data Retention:</Trans>
          </h4>
          <ul>
            <li>
              <Trans>
                Signed documents: Retained according to sender's settings (typically 7+ years for
                legal compliance)
              </Trans>
            </li>
            <li>
              <Trans>
                Audit trails: Retained for the legally required period (minimum 7 years in most
                jurisdictions)
              </Trans>
            </li>
            <li>
              <Trans>
                Email addresses: Retained while you have signing permissions or active documents
              </Trans>
            </li>
          </ul>

          <h4>
            <Trans>Your Rights Under GDPR:</Trans>
          </h4>
          <ul>
            <li>
              <Trans>
                <strong>Right to access:</strong> Request a copy of your personal data
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Right to rectification:</strong> Correct inaccurate personal data
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Right to erasure:</strong> Request deletion of your data (subject to legal
                retention requirements)
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Right to restriction:</strong> Limit how we process your data
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Right to data portability:</strong> Receive your data in a machine-readable
                format
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Right to object:</strong> Object to processing based on legitimate interests
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Right to withdraw consent:</strong> Where processing is based on consent
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Right to lodge a complaint:</strong> File a complaint with your national
                data protection authority
              </Trans>
            </li>
          </ul>

          <p>
            <Trans>
              To exercise your rights, contact the document sender or email us at
              <strong> support@dokuhr.com</strong>. For data protection inquiries, contact our Data
              Protection Officer at <strong>dpo@dokuhr.com</strong>.
            </Trans>
          </p>

          <p>
            <Trans>
              <strong>Supervisory Authority (Croatia):</strong>
              <br />
              Croatian Personal Data Protection Agency (Agencija za zaštitu osobnih podataka - AZOP)
              <br />
              Website:{' '}
              <a href="https://azop.hr" target="_blank" rel="noopener noreferrer">
                azop.hr
              </a>
            </Trans>
          </p>

          <h3>
            <Trans>For US Users:</Trans>
          </h3>
          <p>
            <Trans>
              We collect and use your information (name, email address, IP address, signature data)
              to provide the electronic signature service. Your information is handled in accordance
              with our Privacy Policy and applicable US privacy laws.
            </Trans>
          </p>

          <h3>
            <Trans>For All Users:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>
                Your signed documents and personal data are encrypted in transit using TLS/SSL
              </Trans>
            </li>
            <li>
              <Trans>Data is encrypted at rest in our secure databases</Trans>
            </li>
            <li>
              <Trans>We implement industry-standard security measures to protect your data</Trans>
            </li>
            <li>
              <Trans>
                We do not sell, rent, or share your personal data with third parties for their
                marketing purposes
              </Trans>
            </li>
            <li>
              <Trans>
                We only share data with service providers necessary to deliver our service (hosting,
                email delivery)
              </Trans>
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <Trans>Consent to Electronic Transactions</Trans>
          </h2>
          <p>
            <Trans>By using the electronic signature feature, you are consenting to:</Trans>
          </p>
          <ul>
            <li>
              <Trans>Conduct transactions electronically</Trans>
            </li>
            <li>
              <Trans>Receive all disclosures, notices, and communications electronically</Trans>
            </li>
            <li>
              <Trans>Use electronic signatures as legally binding</Trans>
            </li>
            <li>
              <Trans>Accept the terms outlined in the documents you are signing</Trans>
            </li>
            <li>
              <Trans>Receive document-related notifications via email</Trans>
            </li>
          </ul>

          <p>
            <Trans>
              You acknowledge that your electronic signature on documents is legally binding and
              that you accept full responsibility for the content and obligations of the documents
              you sign.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>Withdrawing Consent</Trans>
          </h2>
          <p>
            <Trans>
              You have the right to withdraw your consent to use electronic signatures at any time
              <strong> before completing the signing process</strong>.
            </Trans>
          </p>

          <h3>
            <Trans>How to Withdraw Consent:</Trans>
          </h3>
          <ol>
            <li>
              <Trans>
                <strong>Preferred method:</strong> Contact the sender of the document directly and
                request an alternative signing method (e.g., physical paper document)
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Alternative method:</strong> Email us at <strong>support@dokuhr.com</strong>{' '}
                with the document title and sender information
              </Trans>
            </li>
          </ol>

          <p>
            <Trans>
              <strong>Important:</strong> Be aware that withdrawing consent may:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>Delay the completion of the related transaction or service</Trans>
            </li>
            <li>
              <Trans>
                Require alternative arrangements for signing (paper documents, in-person signing,
                notarization)
              </Trans>
            </li>
            <li>
              <Trans>
                Prevent you from using our electronic signature services for this specific
                transaction
              </Trans>
            </li>
          </ul>

          <p>
            <Trans>
              Once you have completed signing a document, you cannot withdraw your signature. The
              signed document is legally binding from the moment you click "Sign" or "Complete."
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>Updating Your Information</Trans>
          </h2>
          <p>
            <Trans>
              It is crucial to keep your contact information, especially your email address, up to
              date with us and with the document sender.
            </Trans>
          </p>

          <p>
            <Trans>
              Please notify the document sender and/or us at <strong>support@dokuhr.com</strong>
              immediately if:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>Your email address changes</Trans>
            </li>
            <li>
              <Trans>You are no longer receiving our emails</Trans>
            </li>
            <li>
              <Trans>
                You change organizations or positions (if signing on behalf of a company)
              </Trans>
            </li>
            <li>
              <Trans>Any other contact information relevant to the signing process changes</Trans>
            </li>
          </ul>

          <p>
            <Trans>
              Failure to maintain current contact information may result in missed notifications,
              expired signing links, and delays in document completion.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>Retention of Documents and Audit Trails</Trans>
          </h2>
          <p>
            <Trans>
              After signing a document electronically, you will be provided the opportunity to:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>View the completed, signed document immediately</Trans>
            </li>
            <li>
              <Trans>Download a PDF copy of the signed document</Trans>
            </li>
            <li>
              <Trans>Print the signed document for your physical records</Trans>
            </li>
            <li>
              <Trans>Download the certificate of completion (audit trail)</Trans>
            </li>
          </ul>

          <h3>
            <Trans>We Strongly Recommend That You:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>
                Download and save a copy of the signed document{' '}
                <strong>immediately upon completion</strong>
              </Trans>
            </li>
            <li>
              <Trans>
                Store the document securely (encrypted storage, password-protected folders)
              </Trans>
            </li>
            <li>
              <Trans>
                Retain the document for the legally required period in your jurisdiction (typically
                3-10 years depending on document type)
              </Trans>
            </li>
            <li>
              <Trans>Keep the audit trail certificate together with the signed document</Trans>
            </li>
            <li>
              <Trans>Make backup copies of important signed documents</Trans>
            </li>
          </ul>

          <h3>
            <Trans>Document Retention by DokuHR:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>
                <strong>Signed documents:</strong> Retained according to the sender's account
                settings and legal requirements (typically 7+ years)
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Audit trails:</strong> Retained for legal compliance periods as required by
                law
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Access to copies:</strong> Available through the document sender's DokuHR
                account
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>Account closure:</strong> If the sender closes their account, direct access
                to documents through our platform may not be available
              </Trans>
            </li>
          </ul>

          <h3>
            <Trans>For EU/Croatian Users:</Trans>
          </h3>
          <p>
            <Trans>
              Under GDPR, you have the right to request a copy of your signed documents and
              associated data within the retention period. To request access, contact the document
              sender or email us at <strong>support@dokuhr.com</strong>. We will respond within 30
              days.
            </Trans>
          </p>

          <p>
            <Trans>
              <strong>Important:</strong> DokuHR acts as a processor. The document sender
              (controller) is primarily responsible for providing you with copies of signed
              documents. We recommend maintaining your own copies as we cannot guarantee indefinite
              availability of documents in our system.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>Jurisdiction and Governing Law</Trans>
          </h2>
          <p>
            <Trans>
              The legal validity of your electronic signature and the enforceability of signed
              documents are governed by the laws of the relevant jurisdiction:
            </Trans>
          </p>

          <h3>
            <Trans>Signature Validity:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>
                <strong>If you are located in the European Union or Croatia:</strong> eIDAS
                Regulation (EU) No 910/2014, Croatian Electronic Signature Act, and GDPR apply
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>If you are located in the United States:</strong> E-Sign Act (15 U.S.C. §
                7001), UETA, and applicable state laws apply
              </Trans>
            </li>
            <li>
              <Trans>
                <strong>If you are located elsewhere:</strong> Applicable electronic signature and
                data protection laws in your country or region apply
              </Trans>
            </li>
          </ul>

          <h3>
            <Trans>Document Enforceability:</Trans>
          </h3>
          <p>
            <Trans>
              The legal enforceability of the signed document itself (its terms, obligations, and
              remedies) is governed by the law specified in the document or, if not specified, by
              the law of the jurisdiction where the contracting parties are located or where the
              transaction is to be performed.
            </Trans>
          </p>

          <h3>
            <Trans>Disputes:</Trans>
          </h3>
          <p>
            <Trans>
              In case of disputes regarding the electronic signature process, authentication, or
              validity of the signature (not the content of the document), the dispute will be
              resolved according to:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>The laws of the jurisdiction where the document sender is located, or</Trans>
            </li>
            <li>
              <Trans>The laws mutually agreed upon by the parties, or</Trans>
            </li>
            <li>
              <Trans>The laws of the jurisdiction specified in the signed document</Trans>
            </li>
          </ul>

          <p>
            <Trans>
              <strong>Cross-Border Transactions:</strong> For transactions involving parties in
              different countries, the choice of law and jurisdiction should be clearly specified in
              the document being signed. Electronic signatures created through DokuHR are designed
              to meet the legal requirements of multiple jurisdictions, but parties should ensure
              their specific transaction complies with all applicable laws.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>Security and Authentication</Trans>
          </h2>
          <p>
            <Trans>
              DokuHR implements multiple layers of security to ensure the integrity and authenticity
              of electronic signatures:
            </Trans>
          </p>

          <h3>
            <Trans>Access Control:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>Unique, one-time signing links sent to your email address</Trans>
            </li>
            <li>
              <Trans>Links expire after a set period (typically 30-90 days, set by sender)</Trans>
            </li>
            <li>
              <Trans>Email verification required before signing</Trans>
            </li>
            <li>
              <Trans>Optional password protection for documents (if enabled by sender)</Trans>
            </li>
          </ul>

          <h3>
            <Trans>Data Security:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>256-bit SSL/TLS encryption for all data in transit</Trans>
            </li>
            <li>
              <Trans>AES-256 encryption for data at rest</Trans>
            </li>
            <li>
              <Trans>Secure cloud infrastructure with regular security audits</Trans>
            </li>
            <li>
              <Trans>Automated backups and disaster recovery procedures</Trans>
            </li>
          </ul>

          <h3>
            <Trans>Audit Trail:</Trans>
          </h3>
          <ul>
            <li>
              <Trans>Cryptographically sealed audit trail for each document</Trans>
            </li>
            <li>
              <Trans>Tamper-evident certificate of completion</Trans>
            </li>
            <li>
              <Trans>Timestamped record of all document access and signing events</Trans>
            </li>
            <li>
              <Trans>IP address logging for identity verification</Trans>
            </li>
          </ul>

          <p>
            <Trans>
              These security measures ensure that signed documents are protected from unauthorized
              access, tampering, and repudiation.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>Accessibility</Trans>
          </h2>
          <p>
            <Trans>
              DokuHR is committed to making our electronic signature service accessible to all
              users, including those with disabilities. Our platform strives to comply with:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</Trans>
            </li>
            <li>
              <Trans>Section 508 of the Rehabilitation Act (US)</Trans>
            </li>
            <li>
              <Trans>European Accessibility Act</Trans>
            </li>
          </ul>

          <p>
            <Trans>
              If you encounter accessibility barriers or need reasonable accommodations to use our
              service, please contact us at <strong>support@dokuhr.com</strong> and we will work
              with you to provide alternative arrangements.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>Acknowledgment and Consent</Trans>
          </h2>
          <p>
            <Trans>
              By proceeding to use the electronic signature service provided by DokuHR, you affirm
              that you:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>Have read and understood this disclosure in its entirety</Trans>
            </li>
            <li>
              <Trans>Consent to the use of electronic signatures and electronic transactions</Trans>
            </li>
            <li>
              <Trans>
                Understand the legal validity and binding nature of electronic signatures
              </Trans>
            </li>
            <li>
              <Trans>
                Acknowledge that electronic signatures have the same legal effect as handwritten
                signatures for permitted transactions
              </Trans>
            </li>
            <li>
              <Trans>Consent to electronic delivery of documents and communications</Trans>
            </li>
            <li>
              <Trans>Understand your rights regarding data protection (if in EU/EEA/Croatia)</Trans>
            </li>
            <li>
              <Trans>Agree to the applicable legal framework in your jurisdiction</Trans>
            </li>
            <li>
              <Trans>
                Have the authority to sign the document on behalf of yourself or your organization
              </Trans>
            </li>
            <li>
              <Trans>Meet the system requirements necessary to access and sign documents</Trans>
            </li>
            <li>
              <Trans>Will retain copies of signed documents as recommended</Trans>
            </li>
          </ul>

          <p>
            <Trans>
              <strong>
                If you do not agree to these terms or do not understand any part of this disclosure,
                please do not proceed with signing.
              </strong>{' '}
              Instead, contact the document sender to request alternative signing methods or
              additional explanation.
            </Trans>
          </p>

          <p>
            <Trans>
              By clicking "I Agree" or "Sign" or by taking any action to affix your electronic
              signature, you acknowledge that you have read, understood, and agree to be bound by
              this Electronic Signature Disclosure.
            </Trans>
          </p>
        </section>

        <section>
          <h2>
            <Trans>Contact Information</Trans>
          </h2>
          <p>
            <Trans>
              For questions regarding this disclosure, electronic signatures, data protection, or
              any related process, please contact us:
            </Trans>
          </p>

          <p>
            <Trans>
              <strong>General Inquiries:</strong>
              <br />
              Email: <a href="mailto:support@dokuhr.com">support@dokuhr.com</a>
              <br />
              Website:{' '}
              <a href="https://dokuhr.com" target="_blank" rel="noopener noreferrer">
                https://dokuhr.com
              </a>
            </Trans>
          </p>

          <p>
            <Trans>
              <strong>Data Protection Officer (GDPR Inquiries):</strong>
              <br />
              Email: <a href="mailto:dpo@dokuhr.com">dpo@dokuhr.com</a>
            </Trans>
          </p>

          <p>
            <Trans>
              <strong>Document-Specific Questions:</strong>
              <br />
              Please contact the document sender directly using the contact information provided in
              the signing invitation email.
            </Trans>
          </p>
        </section>

        <section>
          <p className="text-sm text-muted-foreground">
            <Trans>
              <strong>Last Updated:</strong> February 8, 2026
              <br />
              <strong>Version:</strong> 1.0
              <br />
              <strong>Applicable Jurisdictions:</strong> European Union, Croatia, United States, and
              other jurisdictions with electronic signature laws
            </Trans>
          </p>

          <p className="text-sm text-muted-foreground">
            <Trans>
              This disclosure may be updated from time to time to reflect changes in law,
              regulation, or our practices. We will notify you of material changes through our
              platform or via email. The "Last Updated" date above indicates when this disclosure
              was last revised.
            </Trans>
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
