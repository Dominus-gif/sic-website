"use client";

import { useState, useRef, useEffect } from "react";
import MSym from "@/components/MSym";

/**
 * Accessible, styled dropdown. Writes the chosen value into a hidden input so
 * it submits with the form exactly like a native <select name=...>.
 */
export default function Select({ name, options, defaultValue = "", placeholder = "Select…" }) {
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function choose(opt) {
    setValue(opt);
    setOpen(false);
  }

  function onKeyDown(e) {
    if (!open && (e.key === "Enter" || e.key === " " || e.key === "ArrowDown")) {
      e.preventDefault();
      setOpen(true);
      return;
    }
    if (!open) return;
    if (e.key === "Escape") setOpen(false);
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      choose(options[active]);
    }
  }

  return (
    <div className="relative" ref={ref}>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex h-12 w-full items-center justify-between gap-2 rounded border bg-cad px-3.5 text-left text-base transition-colors focus:outline-none focus:ring-2 focus:ring-brand/25 ${
          open ? "border-brand ring-2 ring-brand/25" : "border-outline"
        }`}
      >
        <span className={value ? "text-ink" : "text-steel/50"}>
          {value || placeholder}
        </span>
        <MSym
          name="expand_more"
          className={`shrink-0 text-xl text-steel transition-transform duration-200 ${open ? "rotate-180 text-brand" : ""}`}
        />
      </button>

      {open && (
        <ul
          ref={listRef}
          role="listbox"
          className="absolute z-40 mt-2 max-h-64 w-full animate-fade-up overflow-auto rounded-lg border border-outline bg-white py-1 shadow-[0_24px_50px_-20px_rgba(18,20,29,0.4)]"
        >
          {options.map((opt, i) => {
            const selected = value === opt;
            return (
              <li key={opt}>
                <button
                  type="button"
                  onClick={() => choose(opt)}
                  onMouseEnter={() => setActive(i)}
                  role="option"
                  aria-selected={selected}
                  className={`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm transition-colors ${
                    active === i ? "bg-cad" : ""
                  } ${selected ? "font-semibold text-brand" : "text-ink"}`}
                >
                  {opt}
                  {selected && <MSym name="check" className="text-base text-brand" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
