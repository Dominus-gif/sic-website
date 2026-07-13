import WhatsappIcon from "@/components/WhatsappIcon";
import { company } from "@/lib/site";

export default function WhatsAppButton() {
  const number = company.phones[0].replace(/[^0-9]/g, "");
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-[60] flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-2xl ring-4 ring-[#25D366]/20 transition-all hover:scale-110 active:scale-95 sm:bottom-margin-desktop sm:right-margin-desktop"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsappIcon className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-4 hidden whitespace-nowrap rounded bg-white px-4 py-2 text-label-caps font-semibold uppercase tracking-[0.08em] text-primary opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
        WhatsApp Us
      </span>
    </a>
  );
}
