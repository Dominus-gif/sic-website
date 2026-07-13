import MSym from "@/components/MSym";
import { company } from "@/lib/site";

export default function WhatsAppButton() {
  const number = company.phones[0].replace(/[^0-9]/g, "");
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-margin-desktop right-margin-desktop z-[60] flex items-center justify-center rounded-full bg-accent p-4 text-white shadow-2xl transition-all hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MSym name="chat" className="text-3xl" fill />
      <span className="absolute right-full mr-4 whitespace-nowrap rounded bg-white px-4 py-2 text-label-caps font-semibold uppercase tracking-[0.08em] text-primary opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        WhatsApp Us
      </span>
    </a>
  );
}
