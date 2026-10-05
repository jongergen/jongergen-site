
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const bookLinks = [
  { href: "/memoir", label: "The Lummi Tabernacle Choir", kind: "Memoir" },
  { href: "/childrens-series", label: "Gene Drives", kind: "Children's series" },
  { href: "/janys-praise", label: "Jany's Praise", kind: "Novel in progress" },
];

const pageLinks = [
  { href: "/musings", label: "Musings" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const booksMenu = useRef<HTMLDetailsElement>(null);

  // Close the Books dropdown whenever the page changes
  useEffect(() => {
    if (booksMenu.current) booksMenu.current.open = false;
  }, [pathname]);

  const isActive = (href: string) => pathname.startsWith(href);
  const onBookPage = bookLinks.some((link) => isActive(link.href));

  // Underline marker for the page you're on
  const linkClass = (active: boolean) =>
    `border-b-2 pb-1 transition-colors hover:text-cloth ${
      active ? "border-cloth text-cloth" : "border-transparent"
    }`;

  return (
    <header className="border-b border-ink/10">
      <div className="mx-auto flex max-w-page flex-col items-start gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-10">
        <Link href="/" className="flex flex-col">
          <span className="font-display text-4xl font-semibold tracking-tight text-cloth sm:text-5xl lg:text-6xl">
            Jon Gergen
          </span>
          <span className="mt-1.5 font-utility text-base tracking-[0.12em] text-ink-muted">
            Author
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 font-utility text-lg font-medium text-ink sm:gap-x-10 sm:text-xl">
            <li>
              <details ref={booksMenu} className="group relative">
                <summary
                  className={`cursor-pointer list-none [&::-webkit-details-marker]:hidden ${linkClass(
                    onBookPage
                  )}`}
                >
                  Books
                  <span className="ml-1 inline-block align-middle text-sm transition-transform group-open:rotate-180">
                    &#9662;
                  </span>
                </summary>
                <ul className="absolute left-0 top-full z-10 mt-3 min-w-[300px] rounded-sm border border-ink/10 bg-paper py-2 shadow-sm">
                  {bookLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          aria-current={active ? "page" : undefined}
                          className={`block border-l-4 px-4 py-2 transition-colors hover:bg-paper-dim hover:text-cloth ${
                            active ? "border-cloth text-cloth" : "border-transparent"
                          }`}
                        >
                          <span className="block">{link.label}</span>
                          <span className="block text-sm font-normal text-ink-faint">
                            {link.kind}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </details>
            </li>
            {pageLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={linkClass(active)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
