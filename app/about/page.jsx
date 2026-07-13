import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import MSym from "@/components/MSym";
import { Reveal, Stagger, Item } from "@/components/Motion";
import { company, values, leadership, partnerLogos, stats } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description:
    "Founded by the Shah Brothers in Chhattisgarh, Shah Industrial Corporation has delivered mission-critical industrial solutions across India for over 30 years.",
};

const gallery = [
  { src: "/photos/team-2.jpg", alt: "SIC team receiving industry awards" },
  { src: "/photos/site-1.jpg", alt: "On-site industrial installation" },
  { src: "/photos/team-1.jpg", alt: "SIC technical seminar" },
  { src: "/photos/site-3.jpg", alt: "Plant equipment inspection" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Three decades of building your visions into reality"
        subtitle="From a niche product supplier to a pan-India provider of end-to-end industrial solutions — the Shah Industrial story is one of reliability, integrity, and long-term partnership."
      />

      {/* Story */}
      <section className="bg-surface py-stack-lg">
        <div className="container-x grid grid-cols-1 items-center gap-stack-lg lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="absolute -right-4 -top-4 z-0 h-24 w-24 border-r-2 border-t-2 border-accent opacity-40" />
            <div className="relative z-10 h-[440px] w-full overflow-hidden rounded border border-outline">
              <Image
                src="/photos/heavy-industry.jpg"
                alt="Heavy industrial machinery"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <span className="eyebrow mb-stack-sm block">Our Story</span>
            <h2 className="font-display text-[32px] font-bold tracking-tight text-primary">
              A trusted name in Indian heavy industry
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                Established over 30 years ago in Chhattisgarh by the Shah
                Brothers, Shah Industrial Corporation (SIC) began by supplying
                specialised industrial products to the region&apos;s mining and
                process plants.
              </p>
              <p>
                Over the decades we have evolved into a pan-India partner
                offering comprehensive, end-to-end solutions across bulk
                material handling, hydraulics, crushing, drives, and flow
                control — serving major mining, steel, cement, and power
                facilities.
              </p>
              <p>
                Today our work is defined by engineering excellence,
                operational reliability, and the long-term customer
                partnerships we have earned with some of India&apos;s largest
                industrial groups.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-outline bg-cad">
        <Stagger className="container-x grid grid-cols-2 gap-gutter py-stack-md lg:grid-cols-4">
          {stats.map((s) => (
            <Item key={s.label}>
              <div className="border-l-4 border-brand bg-white p-6">
                <div className="font-display text-display-lg font-bold text-brand">
                  {s.value}
                </div>
                <div className="mt-1 text-muted">{s.label}</div>
              </div>
            </Item>
          ))}
        </Stagger>
      </section>

      {/* On the ground gallery */}
      <section className="bg-surface py-stack-lg">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mb-stack-sm block">On The Ground</span>
            <h2 className="font-display text-[32px] font-bold tracking-tight text-primary sm:text-display-lg">
              Real teams, real installations
            </h2>
            <p className="mt-4 text-muted">
              From award ceremonies with our OEM partners to on-site
              commissioning, our people are where the work happens.
            </p>
          </Reveal>
          <Stagger className="mt-stack-lg grid grid-cols-2 gap-gutter lg:grid-cols-4" stagger={0.08}>
            {gallery.map((g) => (
              <Item key={g.src}>
                <div className="group relative h-64 overflow-hidden rounded border border-outline">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="border-y border-outline bg-cad">
        <Stagger className="container-x grid grid-cols-1 gap-gutter py-stack-lg md:grid-cols-2">
          <Item>
            <div className="h-full rounded-xl border border-outline bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded bg-accent/10 text-accent">
                <MSym name="visibility" />
              </span>
              <h3 className="mt-5 font-display text-headline-md font-semibold text-primary">
                Our Vision
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                To be India&apos;s most trusted partner for mission-critical
                industrial solutions that enhance plant reliability, safety, and
                efficiency.
              </p>
            </div>
          </Item>
          <Item>
            <div className="h-full rounded-xl border border-outline bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded bg-accent/10 text-accent">
                <MSym name="flag" />
              </span>
              <h3 className="mt-5 font-display text-headline-md font-semibold text-primary">
                Our Mission
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                To deliver high-performance products and lifecycle support that
                reduce downtime and total cost of ownership for every plant we
                serve.
              </p>
            </div>
          </Item>
        </Stagger>
      </section>

      {/* Values */}
      <section className="bg-surface py-stack-lg">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mb-stack-sm block">Core Values</span>
            <h2 className="font-display text-[32px] font-bold tracking-tight text-primary sm:text-display-lg">
              What we stand for
            </h2>
          </Reveal>
          <Stagger className="mt-stack-lg grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {values.map((v) => (
              <Item key={v.title}>
                <div className="card h-full">
                  <h3 className="font-display text-headline-md font-semibold text-primary">
                    {v.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{v.text}</p>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-outline bg-cad py-stack-lg">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mb-stack-sm block">Leadership</span>
            <h2 className="font-display text-[32px] font-bold tracking-tight text-primary sm:text-display-lg">
              The people behind SIC
            </h2>
          </Reveal>
          <Stagger className="mx-auto mt-stack-lg grid max-w-4xl grid-cols-1 gap-gutter sm:grid-cols-3" stagger={0.1}>
            {leadership.map((l) => (
              <Item key={l.name}>
                <div className="rounded-xl border border-outline bg-white p-8 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand font-display text-2xl font-bold text-white">
                    {l.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="mt-5 font-display text-headline-md font-semibold text-primary">
                    {l.name}
                  </h3>
                  <p className="mt-1 text-mono-data font-medium text-accent">{l.role}</p>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-surface py-stack-lg">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mb-stack-sm block">Trusted OEM Partners</span>
            <h2 className="font-display text-[32px] font-bold tracking-tight text-primary sm:text-display-lg">
              We represent the best in the business
            </h2>
            <p className="mt-4 text-muted">
              Our strategic partnerships with leading global OEMs let us deliver
              proven, warranty-backed technology to your plant.
            </p>
          </Reveal>
          <Stagger className="mt-10 flex flex-wrap items-center justify-center gap-4" stagger={0.07}>
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
          <Reveal className="mt-stack-md text-center" delay={0.1}>
            <Link href="/contact" className="btn-cta">
              Partner With Us
              <MSym name="arrow_forward" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
