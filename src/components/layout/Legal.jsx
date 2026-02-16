export default function Legal() {
  return (
    <div className="abt-bg bg-size text-black">
      <div className="max-w-4xl mx-10 pt-10 " >
        <h1 className="text-4xl font-bold bg-black p-6 text-white mb-4">
          SpringWorks Privacy Policy & Terms of Use
        </h1>

        <p className="mb-10 text-sm text-gray-600">
          Effective Date: [Insert Date]
        </p>

        {/* 1. Introduction */}
        <Section title="1. Introduction">
          <p>
            SpringWorks (“SpringWorks”, “we”, “our”, “us”) is committed to protecting your privacy and maintaining a safe, professional environment for all members and visitors.
          </p>
          <p className="mt-4">
            This document outlines how we collect and use personal data and the terms governing use of our facilities, website, and services.
          </p>
        </Section>

        {/* Privacy Policy */}
        <h2 className="text-2xl font-semibold mt-12 mb-6 bg-black p-6 text-white">
          Privacy Policy
        </h2>

        <Section title="2. Information We Collect">
          <ul className="list-disc pl-6 space-y-2">
            <li>Name</li>
            <li>Address</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business information (where relevant)</li>
            <li>Payment details (processed securely via third-party providers)</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="list-disc pl-6 space-y-2">
            <li>Process memberships and payments</li>
            <li>Communicate updates and operational information</li>
            <li>Provide access to facilities and services</li>
            <li>Improve our services and user experience</li>
            <li>Meet legal and regulatory obligations</li>
          </ul>
          <p className="mt-4">
            We do not sell or share personal data with third parties for marketing purposes.
          </p>
        </Section>

        <Section title="4. Data Security">
          <p>
            We take reasonable technical and organisational measures to protect your data. Payment transactions are processed through secure third-party providers.
          </p>
        </Section>

        <Section title="5. Your Rights">
          <p className="mb-3">
            Under UK GDPR, you have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your data</li>
            <li>Request correction</li>
            <li>Request deletion (where applicable)</li>
            <li>Withdraw consent where processing is consent-based</li>
          </ul>
          <p className="mt-4">
            Requests can be made via email at: david@springworks.studio
          </p>
        </Section>

        {/* Terms & Conditions */}
        <h2 className="text-2xl font-semibold mt-12 mb-6 bg-black p-6 text-white">
          Terms & Conditions
        </h2>

        <Section title="6. Membership">
          <p>
            Membership provides access according to the tier selected. Access to certain equipment, workshops, and facilities may require additional booking or fees.
          </p>
          <p className="mt-4">
            Membership fees are non-refundable unless otherwise agreed in writing.
          </p>
          <p className="mt-4">
            SpringWorks reserves the right to amend membership benefits where operationally necessary.
          </p>
        </Section>

        <Section title="7. Payments">
          <p>
            All memberships and purchases must be paid in advance via approved payment methods.
          </p>
          <p className="mt-4">
            Late or failed payments may result in suspension of access.
          </p>
        </Section>

        <Section title="8. Code of Conduct & Use of Facilities">
          <p>
            SpringWorks operates on mutual respect, professionalism, and safety.
          </p>

          <p className="mt-4">All members and visitors must:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Treat staff, members, and visitors with respect at all times</li>
            <li>Use appropriate language and behaviour within the premises</li>
            <li>Follow all health & safety and operational guidelines</li>
            <li>Treat facilities, equipment, and materials responsibly</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 bg-black p-6 text-white">
            Zero Tolerance Policy
          </h3>

          <p className="mt-3">
            Abusive language, threatening behaviour, harassment, discrimination, or any form of aggression toward staff or other members will not be tolerated under any circumstances.
          </p>

          <p className="mt-4">
            SpringWorks reserves the absolute right to:
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Immediately revoke membership</li>
            <li>Remove individuals from the premises</li>
            <li>Permanently bar individuals from returning</li>
          </ul>

          <p className="mt-4">
            No warnings are required in cases of serious misconduct.
          </p>

          <p className="mt-4">
            This policy exists to protect the integrity, safety, and professional standard of the SpringWorks environment.
          </p>
        </Section>

        <Section title="9. Liability">
          <p>
            Members use facilities and equipment at their own risk. SpringWorks is not liable for personal belongings lost or damaged on site.
          </p>
          <p className="mt-4">
            We are not responsible for business outcomes, sales performance, or commercial success of members.
          </p>
        </Section>

        <Section title="10. Intellectual Property">
          <p>
            Members retain ownership of their work.
          </p>
          <p className="mt-4">
            SpringWorks may request permission to showcase work for promotional purposes.
          </p>
        </Section>

        <Section title="11. Amendments">
          <p>
            SpringWorks reserves the right to update these policies. Updated versions will be published on the website.
          </p>
        </Section>

        <Section title="12. Contact Information">
          <p>
            SpringWorks<br />
            246 Flemington Street<br />
            Springburn<br />
            Glasgow<br />
            G21 4BY
          </p>

          <p className="mt-4">
            Registered Office:<br />
            10 Alloway Quadrant<br />
            Kirkintilloch<br />
            G66 2PF
          </p>

          <p className="mt-4">
            Company Number: SC847718
          </p>

          <p className="mt-4">
            Email: david@springworks.studio<br />
            Website: www.springworks.studio
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-4 bg-black p-6 text-white">
        {title}
      </h2>
      <div className="space-y-4 text-gray-800">
        {children}
      </div>
    </div>
  );
}