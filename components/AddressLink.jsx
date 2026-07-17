"use client";

import { company } from "@/lib/site";

const query = encodeURIComponent(company.address);
const googleUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
const appleUrl = `https://maps.apple.com/?q=${query}`;

/**
 * Opens the address in a map app. Apple Maps on Apple mobile devices
 * (iPhone/iPad), Google Maps everywhere else — including desktop (incl. Mac).
 * Default href is Google Maps so it works with SSR / no-JS.
 */
export default function AddressLink({ children, className = "" }) {
  function handleClick(e) {
    if (typeof navigator === "undefined") return;
    const ua = navigator.userAgent || "";
    const isAppleMobile =
      /iPhone|iPad|iPod/.test(ua) ||
      (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1); // iPadOS reports as Mac
    if (isAppleMobile) {
      e.preventDefault();
      window.open(appleUrl, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <a
      href={googleUrl}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${company.address} in maps`}
      className={className}
    >
      {children}
    </a>
  );
}
