import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import MSym from "@/components/MSym";
import SectionHeading from "@/components/SectionHeading";
import DownloadProfile from "@/components/DownloadProfile";
import { Reveal, Stagger, Item } from "@/components/Motion";
import { services, elecon, oemPartners } from "@/lib/site";

export const metadata = {
  title: "Product & Services",
  description:
    "Explore Shah Industrial Corporation's nine solution verticals: power transmission, mining, hydraulics, drives, conveyor spillage control, wear protection, instrumentation, pneumatics, and weighing.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product & Services"
        title="Integrated solutions across nine industrial verticals"
        subtitle="We engineer, supply, install, and support the equipment that keeps mining, steel, cement, and power plants running — backed by world-class OEM partners including Elecon, FLSmidth, Emerson, KSB MIL, and Vautid Germany."
      />

      {/* Services detail */}
      <section className="bg-surface py-stack-lg">
        <Stagger className="container-x space-y-gutter" stagger={0.08}>
          {services.map((s, i) => (
            <Item key={s.slug} hover x={i % 2 === 0 ? -36 : 36}>
              <div
                id={s.slug}
                className="group grid grid-cols-1 gap-8 rounded-xl border border-outline bg-white p-8 transition-colors hover:border-brand hover:shadow-[0_20px_50px_-24px_rgba(26,79,149,0.35)] lg:grid-cols-12 lg:p-10"
              >
                <div className="lg:col-span-5">
                  <div className="relative h-48 overflow-hidden rounded-lg border border-outline">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/55 via-obsidian/10 to-transparent" />
                    <span className="absolute bottom-3 right-4 font-mono text-3xl font-bold text-white/85">
                      0{i + 1}
                    </span>
                  </div>
                  <span className="mt-5 block text-label-caps font-semibold uppercase tracking-[0.1em] text-accent">
                    {s.label}
                  </span>
                  <h2 className="mt-2 font-display text-headline-md font-bold text-primary">
                    {s.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">{s.summary}</p>
                </div>

                <div className="lg:col-span-7 lg:self-center lg:border-l lg:border-outline lg:pl-10">
                  <h3 className="flex items-center gap-2 text-label-caps font-semibold uppercase tracking-[0.14em] text-accent">
                    <span className="h-px w-6 bg-accent" />
                    What we deliver
                  </h3>
                  <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li
                        key={p.text}
                        className="group/item flex items-center gap-3.5 border-b border-outline/50 py-3.5 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-brand group-hover/item:text-white">
                          <MSym name={p.sym} className="text-lg" />
                        </span>
                        <span className="text-sm font-medium text-ink transition-colors group-hover/item:text-primary">
                          {p.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>
      </section>

      {/* ===================== OEM PARTNERS ===================== */}
      <section id="oem-partners" className="border-y border-outline bg-cad py-stack-lg">
        <div className="container-x">
          <SectionHeading
            eyebrow="OEM Partners"
            title="World-class technology, delivered in India"
            subtitle="We represent leading global OEMs — backed by genuine spares, warranties, and on-site engineering support."
          />

          {/* Featured: Elecon */}
          <Reveal className="mt-stack-lg overflow-hidden rounded-xl border border-outline bg-white shadow-[0_30px_60px_-40px_rgba(18,20,29,0.4)]">
            <div className="grid grid-cols-1 gap-10 p-8 lg:grid-cols-12 lg:p-10">
              <div className="lg:col-span-4">
                <div className="flex h-14 items-center">
                  <Image
                    src={elecon.logo}
                    alt="Elecon logo"
                    width={160}
                    height={56}
                    className="h-11 w-auto object-contain"
                  />
                </div>
                <span className="mt-6 block text-label-caps font-semibold uppercase tracking-[0.1em] text-accent">
                  {elecon.focus}
                </span>
                <h3 className="mt-2 font-display text-headline-md font-bold text-primary">
                  The complete Elecon range
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{elecon.intro}</p>
                <Link href="/contact" className="btn-cta mt-6">
                  Enquire about Elecon
                  <MSym name="arrow_forward" />
                </Link>
              </div>

              <div className="lg:col-span-8">
                <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3" stagger={0.06}>
                  {elecon.categories.map((c) => (
                    <Item key={c.name} hover>
                      <div className="group h-full overflow-hidden rounded-lg border border-outline bg-cad transition-colors hover:border-brand">
                        <div className="relative h-28 overflow-hidden bg-white">
                          <Image
                            src={c.img}
                            alt={c.name}
                            fill
                            sizes="(max-width: 640px) 45vw, 200px"
                            className="object-contain p-3 transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <p className="px-3 py-3 text-center text-sm font-semibold leading-snug text-primary">
                          {c.name}
                        </p>
                      </div>
                    </Item>
                  ))}
                </Stagger>
              </div>
            </div>
          </Reveal>

          {/* Other OEM partners */}
          <Stagger className="mt-gutter grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {oemPartners
              .filter((p) => p.name !== "Elecon")
              .map((p) => (
                <Item key={p.name} hover>
                  <div className="group h-full rounded-xl border border-outline bg-white p-6 transition-colors hover:border-brand hover:shadow-[0_20px_50px_-24px_rgba(26,79,149,0.35)]">
                    <div className="flex h-12 items-center">
                      {p.logo ? (
                        <Image
                          src={p.logo}
                          alt={`${p.name} logo`}
                          width={150}
                          height={48}
                          className="max-h-11 w-auto object-contain"
                        />
                      ) : (
                        <span className="font-display text-xl font-bold text-primary">
                          {p.name}
                        </span>
                      )}
                    </div>
                    <span className="mt-5 block text-label-caps font-semibold uppercase tracking-[0.1em] text-accent">
                      {p.focus}
                    </span>
                    <p className="mt-2 leading-relaxed text-muted">{p.desc}</p>
                  </div>
                </Item>
              ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-stack-lg text-center">
        <div className="container-x">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-[24px] font-bold leading-[1.2] tracking-tight text-primary text-balance sm:text-[38px]">
              Not sure which solution fits your plant?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Our engineers offer on-site plant audits and recommendations
              tailored to your process and production goals.
            </p>
            <div className="mt-stack-md flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn-cta">
                Request a Plant Audit
                <MSym name="arrow_forward" />
              </Link>
              <DownloadProfile variant="outline" />
              <Link href="/about" className="btn-outline">
                Learn About SIC
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
