"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { company, services } from "@/lib/site";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const interest = data.get("interest");
    const message = data.get("message");

    const subject = encodeURIComponent(`Website enquiry — ${interest}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\n\n${message}`
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required placeholder="Your name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+91-"
        />
        <div>
          <label className="mb-2 block text-sm font-medium text-steel-200">
            Area of interest
          </label>
          <select
            name="interest"
            defaultValue={services[0].title}
            className="w-full rounded-xl border border-white/15 bg-ink/60 px-4 py-3 text-sm text-white focus:border-brand-400/60 focus:outline-none"
          >
            {services.map((s) => (
              <option key={s.slug} value={s.title} className="bg-ink">
                {s.title}
              </option>
            ))}
            <option value="General enquiry" className="bg-ink">
              General enquiry
            </option>
          </select>
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-steel-200">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us about your plant, application, and challenge…"
          className="w-full rounded-xl border border-white/15 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-steel-500 focus:border-brand-400/60 focus:outline-none"
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send enquiry
        <Icon name="arrow" className="h-4 w-4" />
      </button>

      {status === "sent" && (
        <p className="text-sm text-brand-300">
          Opening your email client — if nothing happens, email us directly at{" "}
          <a href={`mailto:${company.email}`} className="underline">
            {company.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", required, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-steel-200">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-steel-500 focus:border-brand-400/60 focus:outline-none"
      />
    </div>
  );
}
