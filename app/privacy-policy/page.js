import LegalPage from "../components/LegalPage";

export const metadata = {
  title: "Privacy Policy | Accident Andy",
  description: "Privacy Policy for Accident Andy.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="May 28, 2026">
      <p>Welcome to Accident Andy. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or submit information through our forms.</p>

      <h2>Information We Collect</h2>
      <p>When you use our website, we may collect information including:</p>
      <ul>
        <li>Name</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>ZIP code</li>
        <li>Accident-related information you voluntarily provide</li>
        <li>Device and browser information</li>
        <li>IP address and usage data</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We may use your information to:</p>
      <ul>
        <li>Contact you regarding your inquiry</li>
        <li>Connect you with attorneys, law firms, or service providers</li>
        <li>Improve our website and marketing efforts</li>
        <li>Send updates or communications related to your request</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>Sharing of Information</h2>
      <p>By submitting your information, you agree that we may share your information with third parties including attorneys, law firms, marketing partners, or service providers for the purpose of evaluating your potential claim or providing related services.</p>
      <p>We do not sell your personal information for unrelated third-party marketing purposes.</p>

      <h2>TCPA Consent</h2>
      <p>By submitting a form on this website, you agree to be contacted by phone call, text message, or email, including through automated technology, regarding your inquiry. Consent is not required as a condition of purchase.</p>

      <h2>Cookies &amp; Tracking Technologies</h2>
      <p>We may use cookies, Meta Pixel, Google Analytics, and similar tracking technologies to improve user experience and advertising performance.</p>

      <h2>Data Security</h2>
      <p>We use reasonable safeguards to help protect your personal information. However, no method of transmission over the internet is completely secure.</p>

      <h2>Third-Party Websites</h2>
      <p>This website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.</p>

      <h2>Children’s Privacy</h2>
      <p>This website is not intended for individuals under 18 years of age.</p>

      <h2>Your Rights</h2>
      <p>Depending on your state of residence, you may have rights regarding access to, deletion of, or correction of your personal information.</p>
      <p>To request assistance, contact us at:</p>
      <p><a href="mailto:hello@accidentandy.com">hello@accidentandy.com</a></p>

      <h2>No Legal Advice</h2>
      <p>Accident Andy is not a law firm and does not provide legal advice. Any information submitted through this website may be shared with independent attorneys or law firms.</p>

      <h2>Changes to This Policy</h2>
      <p>We may update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date.</p>

      <h2>Contact Us</h2>
      <p>If you have questions about this Privacy Policy, contact:</p>
      <address>
        Accident Andy<br />
        30 N Gould St Ste R<br />
        Sheridan, WY 82801<br />
        <a href="mailto:hello@accidentandy.com">hello@accidentandy.com</a>
      </address>
    </LegalPage>
  );
}
