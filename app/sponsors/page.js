import LegalPage from "../components/LegalPage";

export const metadata = {
  title: "Sponsors | Accident Andy",
  description: "Advertising disclosure and partner network for Accident Andy.",
};

export default function Sponsors() {
  const partners = [
    "1800TheLaw2",
    "AdMediary, LLC",
    "Advertise4Sales Inc",
    "Duke Digital Group",
    "Email Agency, Inc.",
    "EverContractor LLC",
    "FadiLaw Marketing, LLC",
    "Inbounds LLC",
    "IM Solutions, LLC",
    "Goldwater Law Firm",
    "Leads.net LLC",
    "Legal Support Services",
    "Legenex LLC",
    "Los Defensores",
    "Quintessa Marketing",
  ];

  return (
    <LegalPage title="Sponsors" updated="August 1, 2026">
      <p>
        Accident Andy is an advertising and marketing service and is not a
        law firm or lawyer referral service. We help connect individuals
        with participating independent attorneys and law firms in our
        network. Accident Andy does not offer legal advice, legal
        representation, or make recommendations regarding legal providers.
        Contacting us or submitting your information through this website
        does not establish an attorney-client relationship. Any legal
        matter is unique, and past outcomes do not guarantee future
        results.
      </p>
      <h2>Our Partners</h2>
      <p>
        {partners.map((partner, i) => (
          <span key={partner}>
            {partner}
            {i < partners.length - 1 && <br />}
          </span>
        ))}
      </p>
    </LegalPage>
  );
}
