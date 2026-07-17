import Link from "next/link";
import Image from "next/image";
import MSym from "@/components/MSym";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import DownloadProfile from "@/components/DownloadProfile";
import Counter from "@/components/Counter";
import { Reveal, Stagger, Item } from "@/components/Motion";
import {
  company,
  services,
  industries,
  partnerLogos,
  customers,
  stats,
} from "@/lib/site";

const bento = services.slice(0, 5);

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <header className="relative flex min-h-[92vh] items-center overflow-hidden bg-obsidian">
        {/* Photo background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/mining-bulldozer.jpg"
            alt="Heavy mining equipment on an industrial site"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/85 to-obsidian/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/60" />
          <div className="absolute inset-0 blueprint-pattern-dark opacity-20" />
          <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-brand/20 blur-[140px]" />
        </div>

        <div className="container-x relative z-10 w-full">
          <Stagger className="max-w-2xl space-y-5 sm:space-y-7" stagger={0.12}>
            <Item>
              <div className="inline-flex items-center gap-2 rounded border border-accent/30 bg-accent/10 px-3 py-1 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                <span className="text-label-caps font-semibold uppercase tracking-[0.1em] text-accent">
                  Engineering Excellence Since 1985
                </span>
              </div>
            </Item>
            <Item>
              <h1 className="font-display text-[34px] font-bold leading-[1.12] tracking-tight text-white sm:text-[56px] sm:font-extrabold sm:leading-[1.05] sm:tracking-[-0.02em] lg:text-[64px]">
                WE BUILD,
                <br />
                <span className="text-accent">YOU THRIVE</span>
              </h1>
            </Item>
            <Item>
              <p className="font-display text-base font-medium text-white/85 sm:text-xl sm:font-semibold">
                Building Your Visions, Creating Reality.
              </p>
            </Item>
            <Item>
              <p className="max-w-xl text-[15px] leading-relaxed text-svariant sm:text-lg">
                Shah Industrial Corporation (SIC) is a trusted pan-India
                partner delivering integrated bulk material handling, hydraulic,
                crushing, and flow control solutions for mission-critical
                industrial operations.
              </p>
            </Item>
            <Item>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/contact" className="btn-cta group">
                  Request a Consultation
                  <MSym name="arrow_forward" className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/products" className="btn-ghost-dark">
                  Explore Solutions
                </Link>
                <DownloadProfile variant="dark" label="Company Profile" />
              </div>
            </Item>
            <Item>
              <div className="flex flex-wrap gap-x-10 gap-y-3 border-t border-white/10 pt-6 font-mono text-mono-data text-white/70">
                <span>30+ YRS EXPERIENCE</span>
                <span>9 SOLUTION VERTICALS</span>
                <span>PAN-INDIA SERVICE</span>
              </div>
            </Item>
          </Stagger>
        </div>
      </header>

      {/* ===================== STATS BAND ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-brand to-primary">
        <div className="pointer-events-none absolute inset-0 blueprint-pattern-dark opacity-20" />
        <Stagger className="container-x relative grid grid-cols-2 gap-8 py-12 lg:grid-cols-4" stagger={0.12}>
          {stats.map((s) => (
            <Item key={s.label} className="text-center lg:text-left">
              <Counter
                value={s.value}
                className="font-display text-4xl font-bold text-white sm:text-5xl"
              />
              <div className="mt-2 font-ui text-sm font-medium uppercase tracking-[0.08em] text-white/70">
                {s.label}
              </div>
            </Item>
          ))}
        </Stagger>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section className="bg-surface py-stack-lg">
        <div className="container-x grid grid-cols-1 items-center gap-stack-lg lg:grid-cols-2">
          {/* Real team photo */}
          <Reveal className="relative">
            <div className="relative z-10 h-[460px] w-full overflow-hidden rounded-xl border border-outline shadow-[0_30px_60px_-30px_rgba(18,20,29,0.35)]">
              <Image
                src="/photos/site-2.jpg"
                alt="Shah Industrial Corporation team receiving industry awards"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 z-20 hidden rounded-lg border border-white/10 bg-brand p-stack-md text-white shadow-xl md:block">
              <div className="font-display text-display-lg font-bold leading-none">3+</div>
              <div className="mt-2 text-label-caps font-semibold uppercase tracking-[0.1em] opacity-80">
                Decades of
                <br />
                Service Nationwide
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={0.1} className="space-y-stack-md">
            <span className="eyebrow">About SIC</span>
            <h2 className="font-display text-[24px] font-bold leading-[1.2] tracking-tight text-primary sm:text-[38px]">
              Building Your Visions,
              <br />
              Creating Reality
            </h2>
            <p className="text-[15px] leading-relaxed text-muted sm:text-lg">
              For more than three decades, SIC has supported India&apos;s
              largest mining, steel, cement, and power plants with reliable
              products, engineered solutions, and dependable on-site services.
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
              Founded in Chhattisgarh by the Shah Brothers and now serving
              customers across India, SIC has built its reputation on
              engineering excellence, operational reliability, and long-term
              customer partnerships. Today the company is broadening into the
              services domain with end-to-end solutions — expanding its
              footprint across multiple states and pioneering new opportunities
              for growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="btn-outline">
                Learn More About Our Journey
              </Link>
              <DownloadProfile variant="primary" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== SERVICES BENTO ===================== */}
      <section id="solutions" className="bg-cad py-stack-lg">
        <div className="container-x">
          <SectionHeading
            className="mb-stack-lg"
            eyebrow="Our Solutions"
            title="One-stop solution for industry"
            subtitle="Nine integrated verticals, engineered, supplied, installed and supported by one accountable partner."
          />

          <Stagger className="grid grid-cols-1 gap-gutter md:grid-cols-3" stagger={0.09}>
            {/* Card 1 — large feature with photo */}
            <Item className="md:col-span-2">
              <div className="group relative h-[400px] overflow-hidden rounded border border-outline">
                <Image
                  src="/photos/industrial-plant.jpg"
                  alt="Industrial power transmission and material handling plant"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
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
            </Item>

            {/* Card 2 — blue feature */}
            <Item>
              <div className="flex h-full flex-col justify-between rounded border border-white/10 bg-brand p-stack-md text-white">
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
            </Item>

            {/* Cards 3–5 */}
            {bento.slice(2).map((s) => (
              <Item key={s.slug}>
                <div className="group h-full rounded border border-outline bg-white p-stack-md transition-all hover:border-brand hover:shadow-sm">
                  <div className="mb-stack-sm flex h-12 w-12 items-center justify-center rounded bg-cad text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <MSym name={s.sym} />
                  </div>
                  <h3 className="mb-2 font-display text-headline-md font-semibold text-primary">
                    {s.short} Solutions
                  </h3>
                  <p className="text-muted">{s.summary}</p>
                </div>
              </Item>
            ))}
          </Stagger>

          <Reveal className="mt-stack-md text-center" delay={0.1}>
            <Link href="/products" className="btn-primary">
              View All Nine Solutions
              <MSym name="arrow_forward" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===================== INDUSTRIES ===================== */}
      <section id="industries" className="relative overflow-hidden bg-surface py-stack-lg">
        <div className="pointer-events-none absolute inset-0 blueprint-pattern opacity-20 [mask-image:radial-gradient(ellipse_70%_60%_at_100%_0%,#000,transparent_70%)]" />
        <div className="container-x relative z-10">
          <SectionHeading
            className="mb-stack-lg"
            eyebrow="Industries Served"
            title="Powering India's core industrial infrastructure"
            subtitle="For three decades we have kept the plants that keep the country running — where reliability is never optional."
          />

          <Stagger className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {industries.map((ind, i) => (
              <Item key={ind.name} hover>
                <div className="group relative h-80 overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={ind.img}
                    alt={`${ind.name} industry`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/10 transition-colors duration-300 group-hover:from-brand/95 group-hover:via-brand/40" />
                  <span className="absolute left-0 top-0 z-10 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                  <span className="absolute right-5 top-5 z-10 font-mono text-mono-data text-white/40">
                    0{i + 1}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col p-6">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                      <MSym name={ind.sym} className="text-2xl" fill />
                    </span>
                    <h3 className="font-display text-headline-md font-bold text-white">
                      {ind.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/85">
                      {ind.text}
                    </p>
                  </div>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===================== PARTNERS (real logos) ===================== */}
      <section className="border-y border-white/5 bg-obsidian py-stack-md">
        <div className="container-x">
          <Reveal className="mb-8 text-center text-label-caps font-semibold uppercase tracking-[0.1em] text-white/60" as="p">
            Partnering With Industry Leaders
          </Reveal>
          <Stagger className="flex flex-wrap items-center justify-center gap-4 md:gap-6" stagger={0.07}>
            {partnerLogos.map((p) => (
              <Item key={p.name}>
                <div className="flex h-20 w-40 items-center justify-center rounded border border-white/10 bg-white px-5 py-3 transition-transform hover:scale-105">
                  <Image
                    src={p.src}
                    alt={`${p.name} logo`}
                    width={130}
                    height={52}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===================== CUSTOMERS ===================== */}
      <section className="bg-surface py-stack-lg">
        <div className="container-x">
          <SectionHeading
            className="mb-stack-lg"
            eyebrow="Trusted By"
            title="Serving India's leading industrial groups"
            subtitle="Our products and services keep mission-critical plants running across the mining, steel, cement and power sectors."
          />
          <Stagger
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            stagger={0.06}
          >
            {customers.map((name) => (
              <Item key={name} hover>
                <div className="group flex h-24 items-center justify-center rounded-xl border border-outline bg-cad px-4 text-center transition-all hover:border-brand hover:bg-white hover:shadow-[0_20px_40px_-24px_rgba(26,79,149,0.4)]">
                  <span className="font-display text-lg font-bold text-steel transition-colors group-hover:text-primary">
                    {name}
                  </span>
                </div>
              </Item>
            ))}
          </Stagger>
          <Reveal className="mt-8 text-center text-sm text-muted" as="p">
            …and many more plants across India.
          </Reveal>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="bg-surface py-stack-lg">
        <div className="container-x grid grid-cols-1 gap-stack-lg lg:grid-cols-5">
          <Reveal className="space-y-stack-md lg:col-span-2">
            <span className="eyebrow">Get In Touch</span>
            <h2 className="font-display text-[24px] font-bold leading-[1.2] tracking-tight text-primary sm:text-[38px]">
              Start Your Next Engineering Journey
            </h2>
            <p className="text-[15px] text-muted sm:text-lg">
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
          </Reveal>

          <Reveal delay={0.1} className="rounded border border-outline bg-white p-8 shadow-sm lg:col-span-3">
            <ContactForm />
          </Reveal>
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
