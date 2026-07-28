import Link from "next/link";
import logo from "../../img/logo.png";

export default function LegalPage({ title, updated, children }) {
  return (
    <main id="top" className="legal-page">
      <header className="site-header">
        <div className="container nav">
          <Link className="brand" href="/" aria-label="Accident Andy home">
            <img className="brand-logo" src={logo.src} alt="" aria-hidden="true" />
            <span>Accident <strong>Andy</strong></span>
          </Link>
          <Link className="legal-home-link" href="/">Back to home</Link>
        </div>
      </header>

      <section className="legal-hero">
        <div className="hero-grid-bg" />
        <div className="container legal-hero-inner">
          <span className="kicker">Accident Andy</span>
          <h1>{title}</h1>
          <p>Last Updated: {updated}</p>
        </div>
      </section>

      <article className="container legal-content">{children}</article>

      <footer>
        <div className="container legal-footer">
          <span>© 2026 Accident Andy</span>
          <nav className="legal-links" aria-label="Legal">
            <Link href="/terms-of-service/">Terms of Service</Link>
            <Link href="/privacy-policy/">Privacy Policy</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
