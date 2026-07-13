"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import MSym from "@/components/MSym";
import WhatsappIcon from "@/components/WhatsappIcon";
import { nav, company } from "@/lib/site";

const primaryPhone = company.phones[0]; // "+91-9301131247"
const telHref = `tel:${primaryPhone.replace(/[^+\d]/g, "")}`;
const waHref = `https://wa.me/${primaryPhone.replace(/[^\d]/g, "")}`;
const phoneDisplay = primaryPhone.replace("-", " ");

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-outline bg-surface/95 backdrop-blur transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-5 lg:flex">
          <ul className="flex items-center gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`whitespace-nowrap font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "border-b-2 border-accent pb-1 font-semibold text-primary"
                      : "text-muted hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <span className="h-8 w-px bg-outline" />

          {/* Contact cluster */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="whitespace-nowrap rounded bg-brand px-5 py-2.5 font-semibold text-white transition-all hover:bg-primary hover:shadow-lg active:scale-95"
            >
              Request Quote
            </Link>

            {/* WhatsApp */}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded bg-[#25D366] px-3 py-2.5 font-semibold text-white shadow-sm transition-all hover:brightness-95 active:scale-95"
              aria-label="Chat with us on WhatsApp"
            >
              <WhatsappIcon className="h-5 w-5" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            {/* Click-to-call */}
            <a
              href={telHref}
              className="hidden items-center gap-2 xl:flex"
              aria-label={`Call ${phoneDisplay}`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
                <MSym name="call" className="text-lg" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                  Call / WhatsApp
                </span>
                <span className="text-sm font-bold text-primary">
                  {phoneDisplay}
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded bg-[#25D366] text-white"
            aria-label="Chat with us on WhatsApp"
          >
            <WhatsappIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded text-primary"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <MSym name={open ? "close" : "menu"} className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-outline bg-surface transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block rounded px-4 py-3 font-medium ${
                  isActive(item.href)
                    ? "bg-cad text-primary"
                    : "text-muted hover:bg-cad hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className="mt-2 grid grid-cols-2 gap-2">
            <Link href="/contact" className="btn-primary">
              Request Quote
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn flex items-center justify-center gap-2 rounded bg-[#25D366] text-white"
            >
              <WhatsappIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </li>

          {/* Click-to-call */}
          <li className="mt-2">
            <a
              href={telHref}
              className="flex items-center gap-3 rounded border border-outline bg-cad px-4 py-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                <MSym name="call" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                  Call / WhatsApp
                </span>
                <span className="text-base font-bold text-primary">
                  {phoneDisplay}
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
