"use client";

import { useState } from "react";
import MSym from "@/components/MSym";
import { company, services } from "@/lib/site";

const fieldBase =
  "w-full rounded border border-outline bg-cad px-3.5 text-base text-ink transition-colors placeholder:text-steel/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25";
const inputClass = `${fieldBase} h-12`;
const textareaClass = `${fieldBase} min-h-[132px] resize-y py-3`;
const labelClass =
  "font-ui text-label-caps font-semibold uppercase tracking-[0.1em] text-muted";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Website enquiry — ${data.get("interest")}`
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get(
        "phone"
      )}\nInterested in: ${data.get("interest")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-gutter md:grid-cols-2">
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
        <select name="interest" defaultValue={services[1].title} className={inputClass}>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="General enquiry">General enquiry</option>
        </select>
      </div>
      <div className="space-y-2 md:col-span-2">
        <label className={labelClass}>Message</label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Describe your industrial requirements..."
          className={textareaClass}
        />
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded bg-brand py-4 font-bold text-white transition-colors hover:bg-primary"
        >
          Send Request <MSym name="send" />
        </button>
        {status === "sent" && (
          <p className="mt-3 text-mono-data text-brand">
            Opening your email client — if nothing happens, email us at{" "}
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
