import Link from "next/link";
import logo from "../../img/logo-horizontal.png";
import InjuryCalculator from "../components/InjuryCalculator";

const CTA_URL = "https://help.accidentandy.com/lp1";

export const metadata = {
  title: "Car Accident Injury Settlement Calculator | Accident Andy",
  description:
    "Estimate what your car accident injury claim could be worth. Free calculator using medical bills, lost wages, injury severity, and fault.",
};

const factors = [
  ["Raises a claim", [
    "Clear evidence the other driver was at fault",
    "Prompt, consistent medical treatment",
    "Documented lost income",
    "Injuries that affect daily life or work long-term",
    "A commercial vehicle or rideshare driver was involved",
  ]],
  ["Lowers a claim", [
    "Gaps or delays in medical treatment",
    "Sharing some of the fault",
    "Pre-existing injuries to the same area",
    "Low insurance policy limits",
    "Waiting too long and missing a filing deadline",
  ]],
];

export default function InjuryCalculatorPage() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="container nav">
          <Link className="brand" href="/" aria-label="Accident Andy home">
            <img className="brand-logo" src={logo.src} alt="Accident Andy" width={logo.width} height={logo.height} />
          </Link>
          <div className="nav-actions">
            <Link className="nav-link" href="/">Home</Link>
            <a className="button button-small" href={CTA_URL}>
              Get Started <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </header>

      <section className="legal-hero">
        <div className="hero-grid-bg" />
        <div className="container legal-hero-inner">
          <span className="kicker">Free tool</span>
          <h1>Injury Claim Calculator</h1>
          <p className="calc-intro">
            Get a rough idea of what a car accident injury claim could be worth, using the same basic
            method insurance adjusters and attorneys often start with.
          </p>
        </div>
      </section>

      <section className="container calc-section">
        <InjuryCalculator />
      </section>

      <section className="container legal-content calc-explainer">
        <h2>How this calculator works</h2>
        <p>
          Injury claims are usually made up of two parts. <strong>Economic damages</strong> are the costs
          you can add up: medical bills, future treatment, lost wages, and other out-of-pocket expenses.
          <strong> Non-economic damages</strong> cover pain, suffering, and how the injury affects your life.
        </p>
        <p>
          A common starting point for non-economic damages is the <strong>multiplier method</strong>: your
          medical costs multiplied by a number, usually between 1.5 and 5, based on how serious the injury
          is. The total is then reduced by your share of fault in states that follow comparative negligence.
        </p>

        <div className="calc-factors">
          {factors.map(([title, items]) => (
            <div key={title}>
              <h3>{title}</h3>
              <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>

        <h2>Why your real number may be different</h2>
        <p>
          No calculator can predict an actual settlement. Insurance policy limits often cap how much is
          available, state laws differ on fault and deadlines, and the strength of your evidence matters.
          An attorney can review the details of your situation and explain your options.
        </p>
        <p>
          <a href={CTA_URL}>See if you may qualify for a free case review →</a>
        </p>
      </section>

      <footer>
        <div className="container disclaimer">
          Attorney advertising. Accident Andy is not a law firm and does not provide legal advice.
          Calculator results are estimates for educational purposes only.
          <nav className="legal-links" aria-label="Legal">
            <Link href="/terms-of-service/">Terms of Service</Link>
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/sponsors/">Sponsors</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
