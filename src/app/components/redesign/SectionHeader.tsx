import { Reveal } from "./Reveal";

export function SectionHeader({
  index,
  title,
  subtitle,
  description,
}: {
  index: string;
  title: string;
  subtitle?: string;
  description?: string;
}) {
  return (
    <Reveal>
      <div className="grid grid-cols-12 gap-y-6 md:gap-6 items-baseline pb-12 md:pb-20 border-b hairline">
        <div className="col-span-12 md:col-span-4 flex items-baseline gap-4">
          <span
            className="font-mono-ui text-xs tracking-[0.2em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            {index}
          </span>
          <span
            className="font-mono-ui text-xs tracking-[0.2em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            {subtitle}
          </span>
        </div>
        <div className="col-span-12 md:col-span-8">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.02em]">
            {title}
          </h2>
          {description && (
            <p
              className="mt-6 max-w-xl text-base md:text-lg"
              style={{ color: "var(--muted)" }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  );
}
