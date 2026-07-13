import Link from "next/link";
import MSym from "@/components/MSym";
import ContactForm from "@/components/ContactForm";
import { company, services, industries, clients } from "@/lib/site";

const bento = services.slice(0, 5); // Transmission, Mining, Hydraulics, Drive, Conveyor

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <header className="relative flex min-h-[90vh] items-center overflow-hidden bg-obsidian">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2340] via-obsidian to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent" />
          <div className="absolute inset-0 blueprint-pattern-dark opacity-25" />
          <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-brand/20 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="container-x relative z-10 w-full">
          <div className="max-w-2xl space-y-stack-md">
            <div className="inline-flex items-center gap-2 rounded border border-accent/30 bg-accent/10 px-3 py-1">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              <span className="text-label-caps font-semibold uppercase tracking-[0.1em] text-accent">
                Engineering Excellence Since 1985
              </span>
            </div>

            <h1 className="font-display text-[40px] font-bold leading-[1.05] tracking-tight text-white sm:text-[64px]">
              WE BUILD,
              <br />
              <span className="text-accent">YOU THRIVE</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-svariant">
              Shah Industrial Corporation delivers mission-critical engineering
              solutions for India&apos;s largest mining, steel, and power
              operations. Precision-driven, field-tested.
            </p>

            <div className="flex flex-wrap gap-gutter pt-2">
              <Link href="/contact" className="btn-cta group">
                Request a Consultation
                <MSym name="arrow_forward" className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/products" className="btn-ghost-dark">
                Explore Solutions
              </Link>
            </div>

            {/* Spec bar */}
            <div className="flex flex-wrap gap-x-10 gap-y-3 border-t border-white/10 pt-6 font-mono text-mono-data text-white/70">
              <span>30+ YRS EXPERIENCE</span>
              <span>9 SOLUTION VERTICALS</span>
              <span>PAN-INDIA SERVICE</span>
            </div>
          </div>
        </div>
      </header>

      {/* ===================== ABOUT ===================== */}
      <section className="bg-surface py-stack-lg">
        <div className="container-x grid grid-cols-1 items-center gap-stack-lg lg:grid-cols-2">
          {/* Visual */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 z-0 h-24 w-24 border-l-2 border-t-2 border-brand opacity-40" />
            <div className="relative z-10 flex h-[440px] w-full items-center justify-center overflow-hidden rounded border border-outline bg-gradient-to-br from-[#1a2340] to-obsidian">
              <div className="absolute inset-0 blueprint-pattern-dark opacity-30" />
              <MSym name="engineering" className="relative text-[120px] text-white/20" fill />
            </div>
            <div className="absolute -bottom-8 -right-4 z-20 hidden rounded border border-white/10 bg-brand p-stack-md text-white shadow-xl md:block">
              <div className="font-display text-display-lg font-bold leading-none">3+</div>
              <div className="mt-2 text-label-caps font-semibold uppercase tracking-[0.1em] opacity-80">
                Decades of
                <br />
                Service Nationwide
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-stack-md">
            <span className="eyebrow">About SIC</span>
            <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight text-primary sm:text-display-lg">
              Building Your Visions,
              <br />
              Creating Reality
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Shah Industrial Corporation (SIC) is a trusted pan-India partner
              delivering integrated bulk material handling, hydraulic, crushing,
              and flow control solutions.
            </p>
            <div className="grid grid-cols-1 gap-gutter py-stack-sm sm:grid-cols-2">
              <div className="border-l-4 border-brand bg-cad p-4">
                <p className="font-bold text-primary">Pan-India Presence</p>
                <p className="text-muted">Serving clients across all major industrial hubs.</p>
              </div>
              <div className="border-l-4 border-brand bg-cad p-4">
                <p className="font-bold text-primary">Reliability First</p>
                <p className="text-muted">Engineering excellence built on integrity.</p>
              </div>
            </div>
            <p className="leading-relaxed text-muted">
              Founded in Chhattisgarh by the Shah Brothers, we have supported
              India&apos;s largest mining, steel, and power plants with
              field-proven products and on-site expertise.
            </p>
            <Link href="/about" className="btn-outline">
              Learn More About Our Journey
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES BENTO ===================== */}
      <section id="solutions" className="bg-cad py-stack-lg">
        <div className="container-x">
          <div className="mb-stack-lg text-center">
            <span className="eyebrow mb-stack-sm block">Our Solutions</span>
            <h2 className="font-display text-[32px] font-bold tracking-tight text-primary sm:text-display-lg">
              ONE STOP SOLUTION FOR INDUSTRY
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {/* Card 1 — large feature */}
            <div className="group relative h-[400px] overflow-hidden rounded border border-outline bg-obsidian md:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a2340] to-obsidian transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 blueprint-pattern-dark opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <MSym
                name={bento[0].sym}
                className="absolute right-8 top-8 text-[64px] text-white/15"
                fill
              />
              <div className="absolute bottom-0 left-0 p-stack-md text-white">
                <div className="mb-2 text-label-caps font-semibold uppercase tracking-[0.1em] text-accent">
                  {bento[0].label}
                </div>
                <h3 className="mb-2 font-display text-headline-md font-semibold">
                  {bento[0].title}
                </h3>
                <p className="max-w-md text-svariant opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {bento[0].summary}
                </p>
              </div>
            </div>

            {/* Card 2 — blue feature */}
            <div className="flex flex-col justify-between rounded border border-white/10 bg-brand p-stack-md text-white">
              <MSym name={bento[1].sym} className="text-[40px] text-accent" fill />
              <div>
                <h3 className="mb-stack-sm font-display text-headline-md font-semibold">
                  {bento[1].title}
                </h3>
                <p className="mb-stack-sm opacity-80">{bento[1].summary}</p>
                <Link
                  href="/products"
                  className="flex items-center gap-2 font-bold text-accent transition-all hover:gap-3"
                >
                  Explore <MSym name="chevron_right" />
                </Link>
              </div>
            </div>

            {/* Cards 3–5 — white bordered */}
            {bento.slice(2).map((s) => (
              <div
                key={s.slug}
                className="group rounded border border-outline bg-white p-stack-md transition-all hover:border-brand"
              >
                <div className="mb-stack-sm flex h-12 w-12 items-center justify-center rounded bg-cad text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <MSym name={s.sym} />
                </div>
                <h3 className="mb-2 font-display text-headline-md font-semibold text-primary">
                  {s.short} Solutions
                </h3>
                <p className="text-muted">{s.summary}</p>
              </div>
            ))}
          </div>

          <div className="mt-stack-md text-center">
            <Link href="/products" className="btn-primary">
              View All Nine Solutions
              <MSym name="arrow_forward" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRIES ===================== */}
      <section id="industries" className="relative overflow-hidden bg-surface py-stack-lg">
        <div className="absolute right-0 top-0 h-full w-1/3 rotate-12 blueprint-pattern opacity-20" />
        <div className="container-x relative z-10">
          <div className="mb-stack-lg flex flex-col items-start justify-between gap-gutter md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="eyebrow mb-stack-sm block">Industries Served</span>
              <h2 className="font-display text-[32px] font-bold tracking-tight text-primary sm:text-display-lg">
                Powering India&apos;s Core Industrial Infrastructure
              </h2>
            </div>
            <MSym name="settings" className="hidden text-[80px] text-outline md:block" />
          </div>

          <div className="grid grid-cols-2 gap-gutter md:grid-cols-4">
            {industries.map((ind) => (
              <div key={ind.name} className="group cursor-default">
                <div className="mb-4 h-1 bg-outline transition-colors group-hover:bg-accent" />
                <h3 className="font-display text-headline-md font-semibold text-primary transition-colors group-hover:text-accent">
                  {ind.name}
                </h3>
                <p className="mt-2 text-muted">{ind.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TRUST STRIP ===================== */}
      <section className="border-y border-white/5 bg-obsidian py-stack-md">
        <div className="container-x overflow-hidden">
          <p className="mb-8 text-center text-label-caps font-semibold uppercase tracking-[0.1em] text-white/60">
            Partnering With Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 opacity-60">
            {clients.map((c) => (
              <span
                key={c}
                className="font-display text-headline-md font-bold text-white transition-opacity hover:opacity-100"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="bg-surface py-stack-lg">
        <div className="container-x grid grid-cols-1 gap-stack-lg lg:grid-cols-5">
          <div className="space-y-stack-md lg:col-span-2">
            <span className="eyebrow">Get In Touch</span>
            <h2 className="font-display text-[32px] font-bold tracking-tight text-primary sm:text-display-lg">
              Start Your Next Engineering Journey
            </h2>
            <p className="text-lg text-muted">
              Our team is ready to provide expert guidance and high-performance
              solutions tailored to your operational needs.
            </p>
            <div className="space-y-4 pt-2">
              <ContactPoint sym="location_on" title="Regional Headquarters">
                {company.address}
              </ContactPoint>
              <ContactPoint sym="mail" title="Email Enquiries">
                <a href={`mailto:${company.email}`} className="hover:text-brand">
                  {company.email}
                </a>
              </ContactPoint>
              <ContactPoint sym="call" title="Call Us">
                <div className="flex flex-col">
                  {company.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="hover:text-brand">
                      {p}
                    </a>
                  ))}
                </div>
              </ContactPoint>
            </div>
          </div>

          <div className="rounded border border-outline bg-white p-8 shadow-sm lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPoint({ sym, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex items-center justify-center rounded bg-accent/10 p-2 text-accent">
        <MSym name={sym} />
      </span>
      <div>
        <p className="font-bold text-primary">{title}</p>
        <div className="text-muted">{children}</div>
      </div>
    </div>
  );
}
