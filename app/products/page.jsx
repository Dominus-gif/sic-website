import Link from "next/link";
import PageHero from "@/components/PageHero";
import MSym from "@/components/MSym";
import { services, partners } from "@/lib/site";

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
        <div className="container-x space-y-gutter">
          {services.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              className="group grid grid-cols-1 gap-8 rounded-xl border border-outline bg-white p-8 transition-all hover:border-brand lg:grid-cols-12 lg:p-10"
            >
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-cad text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <MSym name={s.sym} className="text-3xl" />
                  </span>
                  <span className="font-mono text-mono-data text-outline">
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
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <MSym name="check" className="text-base" />
                      </span>
                      <span className="text-ink">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners strip */}
      <section className="border-y border-outline bg-cad py-stack-lg">
        <div className="container-x text-center">
          <span className="eyebrow mb-stack-sm block">Powered by leading OEMs</span>
          <h2 className="font-display text-headline-lg font-bold text-primary">
            Genuine equipment, warranty-backed support
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {partners.map((p) => (
              <span
                key={p}
                className="rounded border border-outline bg-white px-6 py-3 font-display font-semibold text-primary"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-stack-lg text-center">
        <div className="container-x">
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
        </div>
      </section>
    </>
  );
}
