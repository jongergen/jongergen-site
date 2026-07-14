import Link from "next/link";

export default function ChapterCard({
  eyebrow,
  title,
  description,
  href,
  cta,
  gilt = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  gilt?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group flex items-stretch gap-5 rounded-sm bg-paper-dim/60 p-6 transition-colors hover:bg-paper-dim sm:p-8"
    >
      <span className={`ribbon ${gilt ? "ribbon-gilt" : ""}`} aria-hidden="true" />
      <span className="flex flex-col">
        <span className="font-utility text-xs uppercase tracking-[0.15em] text-ink-faint">
          {eyebrow}
        </span>
        <span className="mt-2 font-display text-2xl text-ink sm:text-3xl">
          {title}
        </span>
        <span className="mt-3 max-w-prose font-body text-base text-ink-muted">
          {description}
        </span>
        <span className="mt-5 font-utility text-sm font-medium text-cloth group-hover:underline">
          {cta} &rarr;
        </span>
      </span>
    </Link>
  );
}
