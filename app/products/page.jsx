import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
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
      <section className="container-x py-20">
        <div className="grid gap-6">
          {services.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              className="group grid gap-8 rounded-3xl border border-white/10 bg-panel/40 p-8 transition-all hover:border-brand-400/40 lg:grid-cols-12 lg:p-10"
            >
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <span className="font-display text-sm font-semibold text-steel-500">
                    0{i + 1}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-white">
                  {s.title}
                </h2>
                <p className="mt-3 leading-relaxed text-steel-300">
                  {s.summary}
                </p>
              </div>

              <div className="lg:col-span-7 lg:border-l lg:border-white/10 lg:pl-10">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
                  What we deliver
                </h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-steel-200">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners strip */}
      <section className="border-y border-white/10 bg-surface/40">
        <div className="container-x py-16 text-center">
          <span className="eyebrow">Powered by leading OEMs</span>
          <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
            Genuine equipment, warranty-backed support
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {partners.map((p) => (
              <span
                key={p}
                className="rounded-full border border-white/10 bg-panel/50 px-6 py-3 font-display text-sm font-semibold text-steel-200"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
          Not sure which solution fits your plant?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-steel-300">
          Our engineers offer on-site plant audits and recommendations tailored
          to your process and production goals.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Request a plant audit
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/about" className="btn-ghost">
            Learn about SIC
          </Link>
        </div>
      </section>
    </>
  );
}
