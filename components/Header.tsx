


import Link from "next/link";

const bookLinks = [
  { href: "/memoir", label: "The Lummi Tabernacle Choir", kind: "Memoir" },
  { href: "/childrens-series", label: "Gene Drives", kind: "Children's series" },
  { href: "/janys-praise", label: "Jany's Praise", kind: "Novel in progress" },
];

export default function Header() {
  return (
    <header className="border-b border-ink/10">
      <div className="mx-auto flex max-w-page flex-col items-start gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-8">
        <Link
          href="/"
          className="font-display text-3xl font-semibold tracking-tight text-cloth sm:text-4xl"
        >
          Jon Gergen
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 font-utility text-base font-medium text-ink sm:gap-x-8 sm:text-lg">
            <li>
              <details className="group relative">
                <summary className="cursor-pointer list-none transition-colors hover:text-cloth [&::-webkit-details-marker]:hidden">
                  Books
                  <span className="ml-1 inline-block text-xs transition-transform group-open:rotate-180">
                    &#9662;
                  </span>
                </summary>
                <ul className="absolute left-0 top-full z-10 mt-3 min-w-[300px] rounded-sm border border-ink/10 bg-paper py-2 shadow-sm">
                  {bookLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block px-4 py-2 transition-colors hover:bg-paper-dim hover:text-cloth"
                      >
                        <span className="block">{link.label}</span>
                        <span className="block text-sm font-normal text-ink-faint">
                          {link.kind}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <Link href="/musings" className="transition-colors hover:text-cloth">
                Musings
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:text-cloth">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-cloth">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
