import Image from "next/image";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <div className="inline-flex items-center gap-3">
      <Image
        src="/brand/favicon.svg"
        alt=""
        width={compact ? 34 : 40}
        height={compact ? 34 : 40}
        aria-hidden="true"
        className="h-auto w-8 shrink-0 sm:w-9"
      />
      <div className="leading-none">
        <p className="font-display text-[1.55rem] tracking-[-0.04em] text-foreground sm:text-[1.7rem]">
          La Maison
        </p>
        <p className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-brand/80 sm:text-[0.62rem]">
          Estética &amp; Belleza
        </p>
      </div>
    </div>
  );
}
