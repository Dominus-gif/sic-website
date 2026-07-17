import Link from "next/link";
import Image from "next/image";
import MSym from "@/components/MSym";
import WhatsappIcon from "@/components/WhatsappIcon";
import DownloadProfile from "@/components/DownloadProfile";
import { company, services, nav } from "@/lib/site";

const waHref = `https://wa.me/${company.phones[0].replace(/[^\d]/g, "")}`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-obsidian text-white">
      <div className="h-1 w-full bg-gradient-to-r from-brand via-accent to-brand" />

      <div className="container-x grid grid-cols-1 gap-10 py-stack-lg md:grid-cols-12">
        {/* Brand */}
        <div className="space-y-5 md:col-span-5">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo-mark.png"
              alt="Shah Industrial Corporation logo"
              width={72}
              height={44}
              className="h-11 w-auto object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Shah Industrial
              </span>
              <span className="mt-0.5 text-label-caps font-semibold uppercase tracking-[0.14em] text-accent">
                Corporation
              </span>
            </span>
          </div>
          <p className="max-w-sm leading-relaxed text-white/70">
            {company.motto}. A trusted pan-India partner delivering integrated
            industrial solutions for mission-critical operations since 1985.
          </p>
          <DownloadProfile variant="dark" />
        </div>

        {/* Explore */}
        <div className="space-y-4 md:col-span-3">
          <p className="text-label-caps font-semibold uppercase tracking-[0.1em] text-accent">
            Explore
          </p>
          <ul className="space-y-2.5 text-white/70">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="pt-2 text-label-caps font-semibold uppercase tracking-[0.1em] text-accent">
            Solutions
          </p>
          <ul className="space-y-2 text-sm text-white/60">
            {services.slice(0, 4).map((s) => (
              <li key={s.slug}>
                <Link href="/products" className="transition-colors hover:text-accent">
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4 md:col-span-4">
          <p className="text-label-caps font-semibold uppercase tracking-[0.1em] text-accent">
            Get in Touch
          </p>
          <div className="flex items-start gap-3 text-white/70">
            <MSym name="location_on" className="mt-0.5 shrink-0 text-accent" />
            <span>{company.address}</span>
          </div>
          <div className="flex items-start gap-3">
            <MSym name="call" className="mt-0.5 shrink-0 text-accent" />
            <div className="space-y-1 font-mono text-mono-data text-white/80">
              {company.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/[^+\d]/g, "")}`}
                  className="block transition-colors hover:text-accent"
                >
                  {p}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MSym name="mail" className="mt-0.5 shrink-0 text-accent" />
            <a
              href={`mailto:${company.email}`}
              className="break-all text-white/80 transition-colors hover:text-accent"
            >
              {company.email}
            </a>
          </div>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
          >
            <WhatsappIcon className="h-5 w-5" />
            Message us on WhatsApp
          </a>
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
