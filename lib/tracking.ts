type TrackingPayload = Record<string, string> | undefined;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, string>>;
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, payload?: TrackingPayload) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer?.push({ event: name, ...payload });
  window.gtag?.("event", name, payload ?? {});
  window.fbq?.("trackCustom", name, payload ?? {});
}
