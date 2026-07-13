import Link from "next/link";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import { company, nav, services } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-surface">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel-300">
            {company.motto}. A trusted pan-India partner delivering integrated
            industrial solutions for over three decades.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            {company.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-steel-300 transition-colors hover:text-brand-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Solutions</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href="/products"
                  className="text-steel-300 transition-colors hover:text-brand-300"
                >
                  {s.title.replace(" Solutions", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Get in Touch</h4>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
              <span className="text-steel-300">{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
              <span className="flex flex-col text-steel-300">
                {company.phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="hover:text-brand-300">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
              <a
                href={`mailto:${company.email}`}
                className="text-steel-300 hover:text-brand-300"
              >
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-steel-400 sm:flex-row">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-brand-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-300">
              Terms &amp; Conditions
            </Link>
            <Link href="/contact" className="hover:text-brand-300">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
