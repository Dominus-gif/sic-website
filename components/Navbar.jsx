"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import MSym from "@/components/MSym";
import { nav } from "@/lib/site";

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
      <div className="container-x flex h-20 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition-colors duration-200 ${
                isActive(item.href)
                  ? "border-b-2 border-accent pb-1 font-semibold text-primary"
                  : "text-muted hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded bg-brand px-6 py-2.5 font-semibold text-white transition-all hover:bg-primary hover:shadow-lg active:scale-95"
          >
            Request Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="p-2 text-primary md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <MSym name={open ? "close" : "menu"} className="text-3xl" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-outline bg-surface transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
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
          <li className="pt-2">
            <Link href="/contact" className="btn-primary w-full">
              Request Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
