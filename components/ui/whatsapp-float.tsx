import { siteConfig } from "@/content/site";
import { TrackedLink } from "./tracked-link";

export function WhatsAppFloat() {
  return (
    <TrackedLink
      href={siteConfig.whatsappUrl}
      eventName="whatsapp_click"
      eventPayload={{ placement: "floating_button" }}
      className="fixed bottom-4 right-4 z-20 inline-flex items-center gap-2 rounded-full bg-wa px-3 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(37,211,102,0.9)] hover:bg-wa-hover sm:bottom-6 sm:right-6 sm:px-4"
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/18">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M.06 24 1.73 17.9A11.58 11.58 0 0 1 0 11.95C0 5.35 5.37 0 11.98 0a11.93 11.93 0 0 1 8.48 3.52A11.84 11.84 0 0 1 24 12c0 6.6-5.37 11.98-11.97 11.98a11.9 11.9 0 0 1-5.73-1.46L.06 24Zm6.54-3.78a9.9 9.9 0 0 0 5.39 1.6c5.48 0 9.93-4.44 9.93-9.92 0-5.47-4.45-9.92-9.93-9.92A9.93 9.93 0 0 0 2.07 11.9a9.8 9.8 0 0 0 1.52 5.24l-.98 3.58 3.99-1.5Zm11.36-5.48c-.08-.13-.28-.2-.58-.35-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.89-.78-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.51-.67-.52l-.57-.01c-.2 0-.52.08-.8.38-.27.3-1.05 1.02-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.13 4.54.72.31 1.28.49 1.72.63.72.22 1.37.2 1.9.12.58-.09 1.78-.72 2.03-1.43.25-.7.25-1.3.18-1.43Z" />
        </svg>
      </span>
      <span className="sr-only sm:not-sr-only">WhatsApp</span>
    </TrackedLink>
  );
}
