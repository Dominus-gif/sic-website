import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import DownloadProfile from "@/components/DownloadProfile";
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
            <div className="relative z-10 h-[440px] w-full overflow-hidden rounded-xl border border-outline shadow-[0_30px_60px_-30px_rgba(18,20,29,0.35)]">
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
            <h2 className="font-display text-[24px] font-bold leading-[1.2] tracking-tight text-primary sm:text-[38px]">
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
            <blockquote className="mt-8 border-l-4 border-accent pl-6">
              <p className="font-serif text-2xl italic leading-snug text-primary sm:text-[28px]">
                &ldquo;Building your visions, creating reality.&rdquo;
              </p>
              <footer className="mt-3 font-ui text-label-caps font-semibold uppercase tracking-[0.1em] text-muted">
                The Shah Brothers — Founders
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-outline bg-cad">
        <Stagger className="container-x grid grid-cols-2 gap-4 py-stack-md sm:gap-gutter lg:grid-cols-4">
          {stats.map((s) => (
            <Item key={s.label} className="h-full">
              <div className="flex h-full flex-col justify-center border-l-4 border-brand bg-white p-5 sm:p-6">
                <div className="font-display text-[30px] font-bold leading-none tracking-tight text-brand [hyphens:none] sm:text-[38px]">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted sm:text-base">{s.label}</div>
              </div>
            </Item>
          ))}
        </Stagger>
      </section>

      {/* On the ground gallery */}
      <section className="bg-surface py-stack-lg">
        <div className="container-x">
          <SectionHeading
            eyebrow="On The Ground"
            title="Real teams, real installations"
            subtitle="From award ceremonies with our OEM partners to on-site commissioning, our people are where the work happens."
          />
          <Stagger className="mt-stack-lg grid grid-cols-2 gap-gutter lg:grid-cols-4" stagger={0.08}>
            {gallery.map((g) => (
              <Item key={g.src}>
                <div className="group relative h-64 overflow-hidden rounded-xl border border-outline">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
          <SectionHeading
            eyebrow="Core Values"
            title="What we stand for"
            subtitle="The principles that shape every product we supply and every service we deliver."
          />
          <Stagger className="mt-stack-lg grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3" stagger={0.09}>
            {values.map((v) => (
              <Item key={v.title} hover>
                <div className="group relative h-full overflow-hidden rounded-xl border border-outline bg-white p-8 transition-colors hover:border-brand hover:shadow-[0_20px_50px_-24px_rgba(26,79,149,0.35)]">
                  <span className="absolute left-0 top-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-brand/10 text-brand shadow-sm transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                    <MSym name={v.sym} className="text-3xl" />
                  </div>
                  <h3 className="mt-5 font-display text-headline-md font-semibold text-primary">
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
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind SIC"
            subtitle="Experienced founders and engineers driving reliability across India's heavy industry."
          />
          <Stagger className="mx-auto mt-stack-lg grid max-w-4xl grid-cols-1 gap-gutter sm:grid-cols-3" stagger={0.1}>
            {leadership.map((l) => (
              <Item key={l.name} hover className="h-full">
                <div className="flex h-full flex-col items-center rounded-xl border border-outline bg-white p-8 text-center transition-colors hover:border-brand">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand to-primary font-display text-2xl font-bold text-white shadow-sm">
                    {l.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-primary">
                    {l.name}
                  </h3>
                  <p className="mt-2 font-ui text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                    {l.role}
                  </p>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-surface py-stack-lg">
        <div className="container-x">
          <SectionHeading
            eyebrow="Trusted OEM Partners"
            title="We represent the best in the business"
            subtitle="Our strategic partnerships with leading global OEMs let us deliver proven, warranty-backed technology to your plant."
          />
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
          <Reveal className="mt-stack-md flex flex-wrap justify-center gap-3" delay={0.1}>
            <Link href="/contact" className="btn-cta">
              Partner With Us
              <MSym name="arrow_forward" />
            </Link>
            <DownloadProfile variant="outline" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
