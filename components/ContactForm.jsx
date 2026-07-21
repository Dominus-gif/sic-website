"use client";

import { useState } from "react";
import MSym from "@/components/MSym";
import Select from "@/components/Select";
import { company, services } from "@/lib/site";

const interestOptions = [...services.map((s) => s.title), "General enquiry"];

/**
 * Enquiries are sent through Web3Forms (https://web3forms.com) — a free service
 * that emails every submission and keeps a copy in its dashboard.
 *
 * SETUP (2 minutes, no coding):
 *  1. Go to https://web3forms.com and enter shahfirst31@gmail.com
 *  2. Web3Forms emails you an Access Key — paste it below.
 * Until a real key is set, the form falls back to opening the mail app.
 */
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

const fieldBase =
  "w-full rounded border border-outline bg-cad px-3.5 text-base text-ink transition-colors placeholder:text-steel/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25";
const inputClass = `${fieldBase} h-12`;
const labelClass =
  "font-ui text-label-caps font-semibold uppercase tracking-[0.1em] text-muted";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error | mailto

  function mailtoFallback(data) {
    const subject = encodeURIComponent(`Website enquiry — ${data.interest}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nInterested in: ${data.interest}\n\n${data.message}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.botcheck) return; // honeypot

    if (WEB3FORMS_ACCESS_KEY.startsWith("YOUR_")) {
      mailtoFallback(data);
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New website enquiry — ${data.interest}`,
          from_name: "SIC Website Enquiry",
          name: data.name,
          email: data.email,
          phone: data.phone,
          interested_in: data.interest,
          message: data.message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
          <MSym name="check_circle" className="text-4xl" fill />
        </span>
        <h3 className="mt-5 font-display text-headline-md font-bold text-primary">
          Thank you — enquiry received
        </h3>
        <p className="mt-2 max-w-sm text-muted">
          Our team will get back to you shortly. For urgent needs, call{" "}
          <a href={`tel:${company.phones[0].replace(/[^+\d]/g, "")}`} className="font-semibold text-brand">
            {company.phones[0]}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline mt-6"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-1 flex-col gap-gutter">
      {/* Honeypot (spam trap) */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
        <div className="space-y-2">
          <label className={labelClass}>Full Name</label>
          <input name="name" type="text" required placeholder="John Doe" className={inputClass} />
        </div>
        <div className="space-y-2">
          <label className={labelClass}>Email Address</label>
          <input name="email" type="email" required placeholder="john@company.com" className={inputClass} />
        </div>
        <div className="space-y-2">
          <label className={labelClass}>Phone</label>
          <input name="phone" type="tel" placeholder="+91-" className={inputClass} />
        </div>
        <div className="space-y-2">
          <label className={labelClass}>Interested In</label>
          <Select
            name="interest"
            options={interestOptions}
            defaultValue={services[1].title}
            placeholder="Choose a solution…"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col space-y-2">
        <label className={labelClass}>Message</label>
        <textarea
          name="message"
          required
          placeholder="Describe your industrial requirements..."
          className={`${fieldBase} min-h-[132px] flex-1 resize-y py-3`}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex w-full items-center justify-center gap-2 rounded bg-brand py-4 font-display font-bold text-white transition-colors hover:bg-primary disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send Request"}
          <MSym name="send" />
        </button>
        {status === "error" && (
          <p className="mt-3 text-mono-data text-red-600">
            Something went wrong. Please email us at{" "}
            <a href={`mailto:${company.email}`} className="underline">
              {company.email}
            </a>
            .
          </p>
        )}
        {status === "mailto" && (
          <p className="mt-3 text-mono-data text-brand">
            Opening your email app — if nothing happens, email us at{" "}
            <a href={`mailto:${company.email}`} className="underline">
              {company.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
