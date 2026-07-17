"use client";

import { useState, useRef, useEffect } from "react";

/**
 * Circular avatar. Shows the photo if it loads; otherwise falls back to the
 * person's initials — so the leadership cards look right even before the real
 * founder photos are added to /public/team/.
 */
export default function Avatar({ src, name }) {
  const [failed, setFailed] = useState(!src);
  const ref = useRef(null);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  // Catch images that errored before hydration attached the onError handler.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  if (src && !failed) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        ref={ref}
        src={src}
        alt={name}
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
      />
    );
  }
  return (
    <span className="flex h-full w-full items-center justify-center font-display text-2xl font-bold text-white">
      {initials}
    </span>
  );
}
