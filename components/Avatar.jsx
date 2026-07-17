"use client";

import { useState, useRef, useEffect } from "react";

/**
 * Portrait image with an initials fallback — used for the leadership cards.
 * `position` controls the object-position focal point (e.g. "center 32%") so
 * environmental desk photos keep the face in frame.
 */
export default function Avatar({ src, name, position = "center 30%" }) {
  const [failed, setFailed] = useState(!src);
  const ref = useRef(null);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

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
        style={{ objectPosition: position }}
        className="h-full w-full object-cover"
      />
    );
  }
  return (
    <span className="flex h-full w-full items-center justify-center font-display text-4xl font-bold text-white">
      {initials}
    </span>
  );
}
