import Link from "next/link";
import Image from "next/image";
import MSym from "@/components/MSym";
import ContactForm from "@/components/ContactForm";
import { Reveal, Stagger, Item } from "@/components/Motion";
import { company, services, industries, partnerLogos } from "@/lib/site";

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
          <Stagger className="max-w-2xl space-y-stack-md" stagger={0.12}>
            <Item>
              <div className="inline-flex items-center gap-2 rounded border border-accent/30 bg-accent/10 px-3 py-1 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                <span className="text-label-caps font-semibold uppercase tracking-[0.1em] text-accent">
                  Engineering Excellence Since 1985
                </span>
              </div>
            </Item>
            <Item>
              <h1 className="font-display text-[40px] font-bold leading-[1.05] tracking-tight text-white sm:text-[64px]">
                WE BUILD,
                <br />
                <span className="text-accent">YOU THRIVE</span>
              </h1>
            </Item>
            <Item>
              <p className="max-w-xl text-lg leading-relaxed text-svariant">
                Shah Industrial Corporation delivers mission-critical
                engineering solutions for India&apos;s largest mining, steel,
                and power operations. Precision-driven, field-tested.
              </p>
            </Item>
            <Item>
              <div className="flex flex-wrap gap-gutter pt-2">
                <Link href="/contact" className="btn-cta group">
                  Request a Consultation
                  <MSym name="arrow_forward" className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/products" className="btn-ghost-dark">
                  Explore Solutions
                </Link>
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

      {/* ===================== ABOUT ===================== */}
      <section className="bg-surface py-stack-lg">
        <div className="container-x grid grid-cols-1 items-center gap-stack-lg lg:grid-cols-2">
          {/* Real team photo */}
          <Reveal className="relative">
            <div className="absolute -left-4 -top-4 z-0 h-24 w-24 border-l-2 border-t-2 border-brand opacity-40" />
            <div className="relative z-10 h-[460px] w-full overflow-hidden rounded border border-outline">
              <Image
                src="/photos/site-2.jpg"
                alt="Shah Industrial Corporation team receiving industry awards"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 z-20 hidden rounded border border-white/10 bg-brand p-stack-md text-white shadow-xl md:block">
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
          </Reveal>
        </div>
      </section>

      {/* ===================== SERVICES BENTO ===================== */}
      <section id="solutions" className="bg-cad py-stack-lg">
        <div className="container-x">
          <Reveal className="mb-stack-lg text-center">
            <span className="eyebrow mb-stack-sm block">Our Solutions</span>
            <h2 className="font-display text-[32px] font-bold tracking-tight text-primary sm:text-display-lg">
              ONE STOP SOLUTION FOR INDUSTRY
            </h2>
          </Reveal>

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
        <div className="absolute right-0 top-0 h-full w-1/3 rotate-12 blueprint-pattern opacity-20" />
        <div className="container-x relative z-10">
          <Reveal className="mb-stack-lg flex flex-col items-start justify-between gap-gutter md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="eyebrow mb-stack-sm block">Industries Served</span>
              <h2 className="font-display text-[32px] font-bold tracking-tight text-primary sm:text-display-lg">
                Powering India&apos;s Core Industrial Infrastructure
              </h2>
            </div>
            <MSym name="settings" className="hidden text-[80px] text-outline md:block" />
          </Reveal>

          <Stagger className="grid grid-cols-2 gap-gutter md:grid-cols-4" stagger={0.08}>
            {industries.map((ind) => (
              <Item key={ind.name}>
                <div className="group cursor-default">
                  <div className="mb-4 h-1 bg-outline transition-colors group-hover:bg-accent" />
                  <h3 className="font-display text-headline-md font-semibold text-primary transition-colors group-hover:text-accent">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-muted">{ind.text}</p>
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

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="bg-surface py-stack-lg">
        <div className="container-x grid grid-cols-1 gap-stack-lg lg:grid-cols-5">
          <Reveal className="space-y-stack-md lg:col-span-2">
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
