"use client";

import { useState } from "react";

const CTA_URL = "https://help.accidentandy.com/lp5";

const SEVERITY = [
  { id: "minor", label: "Minor", detail: "Soft-tissue injury (sprains, whiplash, bruising). Recovered within a few weeks.", low: 1.5, high: 2 },
  { id: "moderate", label: "Moderate", detail: "Several months of treatment such as physical therapy or chiropractic care.", low: 2, high: 3 },
  { id: "serious", label: "Serious", detail: "Broken bones, injections, surgery, or a long recovery.", low: 3, high: 4 },
  { id: "severe", label: "Severe or permanent", detail: "Permanent impairment, disability, or a life-changing injury.", low: 4, high: 5 },
];

const FAULT = [
  { value: 0, label: "Not at fault" },
  { value: 0.25, label: "Partly (about 25%)" },
  { value: 0.5, label: "About half" },
  { value: 0.75, label: "Mostly me" },
];

const FIELDS = [
  { id: "medical", label: "Medical bills so far", hint: "ER, doctor, imaging, therapy, prescriptions" },
  { id: "future", label: "Expected future medical costs", hint: "Ongoing treatment your doctor has recommended" },
  { id: "wages", label: "Lost wages", hint: "Pay you missed because of the injury" },
  { id: "other", label: "Other out-of-pocket costs", hint: "Rental car, mileage to appointments, medical equipment" },
];

const money = (n) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const parse = (s) => Number(String(s).replace(/[^0-9.]/g, "")) || 0;
const roundTo = (n) => Math.round(n / 100) * 100;

export default function InjuryCalculator() {
  const [values, setValues] = useState({ medical: "", future: "", wages: "", other: "" });
  const [severity, setSeverity] = useState("moderate");
  const [fault, setFault] = useState(0);

  const nums = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, parse(v)]));
  const medicalTotal = nums.medical + nums.future;
  const economic = medicalTotal + nums.wages + nums.other;
  const sev = SEVERITY.find((s) => s.id === severity);
  const painLow = medicalTotal * sev.low;
  const painHigh = medicalTotal * sev.high;
  const keep = 1 - fault;
  const low = roundTo((economic + painLow) * keep);
  const high = roundTo((economic + painHigh) * keep);
  const hasData = economic > 0;

  const onMoney = (id) => (e) => {
    const digits = e.target.value.replace(/[^0-9]/g, "").slice(0, 9);
    setValues((v) => ({ ...v, [id]: digits ? Number(digits).toLocaleString("en-US") : "" }));
  };

  return (
    <div className="calc">
      <form className="calc-form" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend><span>1</span> Your costs</legend>
          {FIELDS.map((f) => (
            <label className="calc-field" key={f.id}>
              <span className="calc-label">{f.label}</span>
              <span className="calc-hint">{f.hint}</span>
              <span className="calc-money">
                <span aria-hidden="true">$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="0"
                  value={values[f.id]}
                  onChange={onMoney(f.id)}
                />
              </span>
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend><span>2</span> How serious is the injury?</legend>
          <div className="calc-options">
            {SEVERITY.map((s) => (
              <label className={`calc-option ${severity === s.id ? "selected" : ""}`} key={s.id}>
                <input
                  type="radio"
                  name="severity"
                  value={s.id}
                  checked={severity === s.id}
                  onChange={() => setSeverity(s.id)}
                />
                <strong>{s.label}</strong>
                <small>{s.detail}</small>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend><span>3</span> Who was at fault?</legend>
          <div className="calc-pills">
            {FAULT.map((f) => (
              <label className={`calc-pill ${fault === f.value ? "selected" : ""}`} key={f.value}>
                <input
                  type="radio"
                  name="fault"
                  value={f.value}
                  checked={fault === f.value}
                  onChange={() => setFault(f.value)}
                />
                {f.label}
              </label>
            ))}
          </div>
        </fieldset>
      </form>

      <aside className="calc-result" aria-live="polite">
        <span className="calc-result-label">Estimated claim range</span>
        {hasData ? (
          <>
            <strong className="calc-range">
              {money(low)} <span>–</span> {money(high)}
            </strong>
            <dl className="calc-breakdown">
              <div><dt>Medical costs</dt><dd>{money(medicalTotal)}</dd></div>
              <div><dt>Lost wages &amp; other costs</dt><dd>{money(nums.wages + nums.other)}</dd></div>
              <div>
                <dt>Pain &amp; suffering ({sev.low}×–{sev.high}× medical)</dt>
                <dd>{money(roundTo(painLow))} – {money(roundTo(painHigh))}</dd>
              </div>
              {fault > 0 && (
                <div><dt>Reduced for your share of fault</dt><dd>−{fault * 100}%</dd></div>
              )}
            </dl>
            {fault > 0.5 && (
              <p className="calc-warning">
                In many states, being more than 50% at fault can prevent you from recovering anything.
                A few states bar recovery if you were even slightly at fault.
              </p>
            )}
          </>
        ) : (
          <p className="calc-empty">Enter your costs to see an estimated range.</p>
        )}
        <a className="button calc-cta" href={CTA_URL}>
          Get a Free Case Review <span aria-hidden="true">→</span>
        </a>
        <p className="calc-note">
          This is a rough educational estimate, not a settlement offer, guarantee, or legal advice.
          Real outcomes depend on evidence, state law, and the insurance coverage available.
        </p>
      </aside>
    </div>
  );
}
