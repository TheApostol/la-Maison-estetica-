"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/tracking";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setIsOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(246,213,231,0.4))] text-foreground shadow-[var(--shadow-soft)]"
      >
        <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
        <span className="relative h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-0.5 w-5 bg-current ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-40 bg-foreground/35 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            id="mobile-nav-panel"
            className="absolute right-4 top-20 w-[min(22rem,calc(100vw-2rem))] rounded-[2rem] border border-brand/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,213,231,0.18))] p-6 shadow-[var(--shadow-soft)]"
            onClick={(event) => event.stopPropagation()}
          >
            <nav aria-label="Navegación móvil" className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-foreground hover:bg-brand-soft/70 hover:text-brand"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent("whatsapp_click", { placement: "mobile_menu" });
                setIsOpen(false);
              }}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-3 font-semibold text-white shadow-[0_18px_32px_-18px_rgba(193,23,122,0.8)] hover:bg-brand-hover"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
