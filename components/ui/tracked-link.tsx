"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/tracking";

type TrackedLinkProps = {
  children: ReactNode;
  className?: string;
  eventName: string;
  eventPayload?: Record<string, string>;
  href: string;
};

export function TrackedLink({
  children,
  className,
  eventName,
  eventPayload,
  href,
}: TrackedLinkProps) {
  const isInternal = href.startsWith("/");

  const handleClick = () => {
    trackEvent(eventName, eventPayload);
  };

  if (isInternal) {
    return (
      <Link href={href} onClick={handleClick} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
