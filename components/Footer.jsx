import Link from "next/link";
import MSym from "@/components/MSym";
import { company, services } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-obsidian text-white">
      <div className="container-x grid grid-cols-1 gap-gutter py-stack-lg md:grid-cols-4">
        {/* Brand */}
        <div className="space-y-stack-sm">
          <div className="font-display text-headline-md font-bold text-white">
            SIC
          </div>
          <p className="max-w-xs text-white/70">
            {company.name}. Engineering Excellence Since 1985.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href={`mailto:${company.email}`}
              className="flex h-10 w-10 items-center justify-center rounded border border-white/20 transition-colors hover:bg-accent"
              aria-label="Email us"
            >
              <MSym name="share" />
            </a>
          </div>
        </div>

        {/* Solutions */}
        <div className="space-y-stack-sm">
          <p className="text-label-caps font-semibold uppercase tracking-[0.1em] text-accent">
            Solutions
          </p>
          <ul className="space-y-2.5 text-white/70">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link
                  href="/products"
                  className="group flex items-center gap-2.5 transition-colors hover:text-accent"
                >
                  <MSym
                    name={s.sym}
                    className="text-lg text-white/40 transition-colors group-hover:text-accent"
                  />
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-stack-sm">
          <p className="text-label-caps font-semibold uppercase tracking-[0.1em] text-accent">
            Resources
          </p>
          <ul className="space-y-2.5 text-white/70">
            <li>
              <Link href="/about" className="group flex items-center gap-2.5 transition-colors hover:text-accent">
                <MSym name="business" className="text-lg text-white/40 transition-colors group-hover:text-accent" />
                Company Profile
              </Link>
            </li>
            <li>
              <Link href="/products" className="group flex items-center gap-2.5 transition-colors hover:text-accent">
                <MSym name="precision_manufacturing" className="text-lg text-white/40 transition-colors group-hover:text-accent" />
                Our Solutions
              </Link>
            </li>
            <li>
              <Link href="/about" className="group flex items-center gap-2.5 transition-colors hover:text-accent">
                <MSym name="health_and_safety" className="text-lg text-white/40 transition-colors group-hover:text-accent" />
                Safety Protocols
              </Link>
            </li>
            <li>
              <Link href="/products" className="group flex items-center gap-2.5 transition-colors hover:text-accent">
                <MSym name="verified" className="text-lg text-white/40 transition-colors group-hover:text-accent" />
                ISO Certificates
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-stack-sm">
          <p className="text-label-caps font-semibold uppercase tracking-[0.1em] text-accent">
            Contact Info
          </p>
          <p className="text-white/70">
            Arihant Complex, Ground Floor,
            <br />
            Station Road, Raipur (C.G.)
          </p>
          <div className="space-y-1 font-mono text-mono-data text-white/80">
            {company.phones.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p>{company.email}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-label-caps uppercase tracking-[0.08em] text-white/60 md:flex-row">
          <p>&copy; {year} {company.name}. All Rights Reserved.</p>
          <div className="flex gap-gutter">
            <Link href="/privacy" className="hover:text-accent">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-accent">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
