// Material Symbols Outlined glyph. `name` is the ligature (e.g. "arrow_forward").
export default function MSym({ name, className = "", style, fill = false }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: fill
          ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
          : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        ...style,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
