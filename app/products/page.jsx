import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import MSym from "@/components/MSym";
import { Reveal, Stagger, Item } from "@/components/Motion";
import { services, partnerLogos } from "@/lib/site";

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
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-cad text-brand shadow-sm transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                      <MSym name={s.sym} className="text-3xl" />
                    </span>
                    <span className="font-mono text-2xl font-semibold text-outline transition-colors group-hover:text-accent">
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

                <div className="lg:col-span-7 lg:border-l lg:border-outline lg:pl-10">
                  <h3 className="text-label-caps font-semibold uppercase tracking-[0.1em] text-primary">
                    What we deliver
                  </h3>
                  <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li
                        key={p.text}
                        className="flex items-center gap-3 rounded-lg border border-outline/60 bg-cad px-3 py-2.5 transition-colors hover:border-brand/40"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-brand/10 text-brand">
                          <MSym name={p.sym} className="text-xl" />
                        </span>
                        <span className="text-sm text-ink">{p.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>
      </section>

      {/* Partners strip */}
      <section className="border-y border-outline bg-cad py-stack-lg">
        <div className="container-x text-center">
          <Reveal>
            <span className="eyebrow mb-stack-sm block">Powered by leading OEMs</span>
            <h2 className="font-display text-headline-lg font-bold text-primary">
              Genuine equipment, warranty-backed support
            </h2>
          </Reveal>
          <Stagger className="mt-8 flex flex-wrap items-center justify-center gap-4" stagger={0.07}>
            {partnerLogos.map((p) => (
              <Item key={p.name}>
                <div className="flex h-20 w-40 items-center justify-center rounded border border-outline bg-white px-5 py-3">
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

      {/* CTA */}
      <section className="bg-surface py-stack-lg text-center">
        <div className="container-x">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-[32px] font-bold tracking-tight text-primary text-balance sm:text-display-lg">
              Not sure which solution fits your plant?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Our engineers offer on-site plant audits and recommendations
              tailored to your process and production goals.
            </p>
            <div className="mt-stack-md flex flex-wrap items-center justify-center gap-gutter">
              <Link href="/contact" className="btn-cta">
                Request a Plant Audit
                <MSym name="arrow_forward" />
              </Link>
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
