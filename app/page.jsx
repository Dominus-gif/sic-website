import Link from "next/link";
import Image from "next/image";
import MSym from "@/components/MSym";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import DownloadProfile from "@/components/DownloadProfile";
import AddressLink from "@/components/AddressLink";
import Counter from "@/components/Counter";
import { Reveal, Stagger, Item } from "@/components/Motion";
import {
  company,
  services,
  industries,
  partnerLogos,
  customerLogos,
  stats,
} from "@/lib/site";

const bento = services.slice(0, 5);

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <header className="relative flex min-h-[86vh] items-center overflow-hidden bg-obsidian">
        {/* Photo background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/hero-industrial.jpg"
            alt="Industrial processing plant at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-obsidian/50" />
          <div className="absolute inset-0 blueprint-pattern-dark opacity-15" />
          <div className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-brand/15 blur-[150px]" />
        </div>

        <div className="container-x relative z-10 w-full">
          <Stagger className="max-w-2xl space-y-5 sm:space-y-7" stagger={0.12}>
            <Item>
              <span className="inline-flex items-center gap-3 font-ui text-label-caps font-semibold uppercase tracking-[0.14em] text-accent">
                <span className="h-px w-8 bg-accent" />
                Integrated Industrial Solutions
              </span>
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
                className="font-display text-[30px] font-bold leading-none tracking-tight text-white [hyphens:none] sm:text-5xl"
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
            <div className="absolute -bottom-8 -right-4 z-20 hidden overflow-hidden rounded-xl bg-gradient-to-br from-brand to-primary p-6 text-white shadow-2xl ring-1 ring-white/15 md:block">
              <div className="absolute right-0 top-0 h-16 w-16 -translate-y-6 translate-x-6 rounded-full bg-accent/30 blur-2xl" />
              <div className="relative flex items-baseline gap-1.5">
                <span className="font-display text-6xl font-extrabold leading-none tracking-tight">
                  30
                </span>
                <span className="font-display text-3xl font-extrabold leading-none text-accent">
                  +
                </span>
                <span className="ml-0.5 font-display text-xl font-bold text-accent">
                  Yrs
                </span>
              </div>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-accent" />
              <div className="relative mt-2 text-label-caps font-semibold uppercase tracking-[0.14em] text-white/85">
                Of engineering
                <br />
                service nationwide
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
            {/* Large feature */}
            <Item className="md:col-span-2">
              <SolutionCard s={bento[0]} big sizes="(max-width: 768px) 100vw, 66vw" />
            </Item>
            {/* Remaining verticals — same image + text style */}
            {bento.slice(1).map((s, i) => (
              <Item key={s.slug} className={i === 0 ? "md:h-full" : ""}>
                <SolutionCard s={s} tall={i === 0} />
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
                    <span className="mb-3 h-1 w-10 rounded-full bg-accent transition-all duration-300 group-hover:w-16" />
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
          <Stagger className="grid grid-cols-1 gap-gutter md:grid-cols-2" stagger={0.12}>
            {customerLogos.map((src, i) => (
              <Item key={src} hover>
                <div className="overflow-hidden rounded-xl border border-outline bg-white p-6 shadow-sm transition-all hover:border-brand hover:shadow-md sm:p-8">
                  <Image
                    src={src}
                    alt={`Shah Industrial Corporation customers ${i + 1}`}
                    width={768}
                    height={i === 0 ? 385 : 457}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </Item>
            ))}
          </Stagger>
          <Reveal className="mt-8 text-center text-sm text-muted" as="p">
            …and many more mining, steel, cement and power plants across India.
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
                <AddressLink className="transition-colors hover:text-brand">
                  {company.address}
                </AddressLink>
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

          <Reveal delay={0.1} className="lg:col-span-3 lg:h-full">
            <div className="flex h-full flex-col rounded-xl border border-outline bg-white p-8 shadow-sm">
              <ContactForm />
            </div>
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

// Unified solution card — full-bleed image with a dark gradient and text.
function SolutionCard({ s, big = false, tall = false, sizes = "(max-width: 768px) 100vw, 33vw" }) {
  const height = big
    ? "h-[320px] md:h-[400px]"
    : tall
      ? "h-[300px] md:h-full md:min-h-[400px]"
      : "h-[300px] md:h-[320px]";
  return (
    <div className={`group relative overflow-hidden rounded border border-outline ${height}`}>
      <Image
        src={s.img}
        alt={s.title}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/10" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <div className="mb-1.5 text-label-caps font-semibold uppercase tracking-[0.1em] text-accent">
          {s.label}
        </div>
        <h3 className={`font-display font-semibold ${big ? "text-2xl" : "text-lg"}`}>
          {s.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-white/85">{s.summary}</p>
      </div>
    </div>
  );
}
