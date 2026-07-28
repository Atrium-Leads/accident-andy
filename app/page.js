"use client";

import { useState } from "react";

const Arrow = () => <span aria-hidden="true">→</span>;

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Accident Andy home">
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-road" />
      </span>
      <span>Accident <strong>Andy</strong></span>
    </a>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12.5 4.2 4.2L19 7" />
    </svg>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  const scrollToReview = () =>
    document.getElementById("case-review")?.scrollIntoView({ behavior: "smooth" });

  const faqs = [
    [
      "Does it cost anything?",
      "No. Checking your eligibility and being connected with an attorney is free.",
    ],
    [
      "Am I guaranteed a lawyer?",
      "No. Completing the questionnaire doesn’t guarantee you’ll be matched with an attorney or that you have a valid legal claim.",
    ],
    ["How long does it take?", "Most people finish in under two minutes."],
    [
      "Is my information secure?",
      "Yes. We use industry-standard security practices to help protect the information you provide.",
    ],
  ];

  return (
    <main id="top">
      <header className="site-header">
        <div className="container nav">
          <Brand />
          <div className="nav-actions">
            <span className="nav-note">Free case review</span>
            <button className="button button-small" onClick={scrollToReview}>
              Get Started <Arrow />
            </button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Get connected in minutes</div>
            <h1>Injured in a<br />Car Accident?</h1>
            <p className="hero-lead">
              Don’t spend hours calling law firms trying to figure out who can help.
            </p>
            <p className="hero-support">
              Answer a few quick questions, and Accident Andy can connect you with an
              attorney who may be able to review your case.
            </p>
            <div className="hero-cta">
              <button className="button button-large" onClick={scrollToReview}>
                Get Started <Arrow />
              </button>
              <div className="microcopy">
                <span className="shield">✓</span>
                <span>Free to check your eligibility.<br />No obligation.</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="A simple three-step case review process">
            <div className="sun-ring ring-one" />
            <div className="sun-ring ring-two" />
            <div className="route-line">
              <span className="route-dash dash-one" />
              <span className="route-dash dash-two" />
              <span className="route-dash dash-three" />
            </div>
            <div className="floating-tag tag-one">100% free to check</div>
            <div className="floating-tag tag-two">Takes about 2 minutes</div>
            <div className="review-card">
              <div className="review-top">
                <span className="tiny-brand"><span className="dot" /> Accident Andy</span>
                <span className="secure">Secure form</span>
              </div>
              <span className="step-label">Step 1 of 3</span>
              <div className="progress"><span /></div>
              <h2>Let’s start with the basics.</h2>
              <p>Were you injured in a car accident?</p>
              <div className="answer selected"><span>Yes</span><span>✓</span></div>
              <div className="answer"><span>No</span><span>○</span></div>
              <button className="card-next" onClick={scrollToReview}>Continue <Arrow /></button>
              <small>Your information stays private &amp; secure.</small>
            </div>
            <div className="case-badge">
              <span className="badge-check">✓</span>
              <span><strong>Case review</strong><small>No obligation</small></span>
            </div>
          </div>
        </div>
        <div className="trust-strip">
          <div className="container trust-inner">
            <span><CheckIcon /> Quick &amp; simple</span>
            <span><CheckIcon /> No upfront cost</span>
            <span><CheckIcon /> Nationwide network</span>
            <span><CheckIcon /> Secure &amp; confidential</span>
          </div>
        </div>
      </section>

      <section className="section how" id="how-it-works">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="kicker">A clear path forward</span>
              <h2>How It Works</h2>
            </div>
            <p>Three straightforward steps can help you understand your legal options.</p>
          </div>
          <div className="steps">
            {[
              ["01", "Tell Us About Your Accident", "Answer a few simple questions about your accident and injuries. It only takes a couple of minutes."],
              ["02", "We Review Your Information", "We’ll match your situation with a participating attorney or legal support service that handles cases like yours."],
              ["03", "Speak With a Lawyer", "If you’re matched, you’ll have the opportunity to discuss your case and learn about your legal options."],
            ].map(([num, title, text], index) => (
              <article className="step" key={num}>
                <div className="step-icon">
                  <span>{num}</span>
                  {index === 0 && <span className="icon-lines">≡</span>}
                  {index === 1 && <span className="icon-lines">⌕</span>}
                  {index === 2 && <span className="icon-lines">◡</span>}
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                {index < 2 && <div className="step-connector" aria-hidden="true">→</div>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section why">
        <div className="container why-grid">
          <div className="why-intro">
            <span className="kicker light">Built around you</span>
            <h2>Why Use<br />Accident Andy?</h2>
            <p>Finding the right legal help shouldn’t add more stress to an already difficult situation.</p>
            <button className="text-link" onClick={scrollToReview}>Start your free review <Arrow /></button>
          </div>
          <div className="benefit-grid">
            {[
              ["↗", "Fast", "Complete the questionnaire in just a few minutes."],
              ["$", "Free", "There’s no cost to see if you may qualify to speak with an attorney."],
              ["◎", "Nationwide", "We work with legal professionals serving clients across the United States."],
              ["✓", "Simple", "No searching through dozens of law firms. We help connect you with one that may be a good fit."],
            ].map(([icon, title, text]) => (
              <article className="benefit" key={title}>
                <span className="benefit-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section qualify">
        <div className="container qualify-grid">
          <div className="qualify-art" aria-hidden="true">
            <div className="road">
              <span className="lane lane-one" />
              <span className="lane lane-two" />
              <span className="lane lane-three" />
              <div className="car"><span /><i /><b /></div>
            </div>
            <div className="road-card">
              <span>It’s worth checking</span>
              <strong>Your situation may qualify.</strong>
            </div>
          </div>
          <div className="qualify-copy">
            <span className="kicker">See if you may qualify</span>
            <h2>You May Qualify If</h2>
            <ul>
              {[
                "You were injured in a car accident.",
                "The accident happened recently.",
                "You received medical treatment or experienced injuries.",
                "The accident wasn’t entirely your fault (in many cases).",
              ].map((item) => <li key={item}><span>✓</span>{item}</li>)}
            </ul>
            <p>Even if you’re unsure whether you have a case, it’s worth checking.</p>
            <button className="button" onClick={scrollToReview}>Check My Eligibility <Arrow /></button>
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="container faq-grid">
          <div className="section-heading">
            <span className="kicker">Questions, answered</span>
            <h2>Frequently Asked<br />Questions</h2>
            <p>What to know before you get started.</p>
          </div>
          <div className="accordion">
            {faqs.map(([question, answer], index) => (
              <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{question}</span><span>{openFaq === index ? "−" : "+"}</span>
                </button>
                <div className="faq-answer"><p>{answer}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" id="case-review">
        <div className="final-orbit orbit-one" />
        <div className="final-orbit orbit-two" />
        <div className="container final-inner">
          <span className="kicker light">Time may matter</span>
          <h2>Don’t Wait to Learn<br />Your Options</h2>
          <p>Evidence can disappear, memories fade, and deadlines may apply depending on your state.</p>
          <p>Find out whether you may qualify to speak with a car accident attorney today.</p>
          <a className="button button-light button-large" href="mailto:intake@accidentandy.com?subject=Free Case Review">
            Start Your Free Case Review <Arrow />
          </a>
          <small>Free to check. No obligation.</small>
        </div>
      </section>

      <footer>
        <div className="container footer-top">
          <Brand />
          <p>Helping people find a clearer path after an accident.</p>
          <a href="#top">Back to top ↑</a>
        </div>
        <div className="container disclaimer">
          Attorney advertising. Accident Andy is not a law firm and does not provide legal advice.
          We connect consumers with attorneys and legal support services. Submission of information
          does not create an attorney-client relationship.
        </div>
      </footer>
    </main>
  );
}
