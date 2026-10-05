"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/*
  NAVIGATION
  ------------------------
  Desktop: full horizontal list of all six links.
  Mobile/tablet: collapses into a hamburger menu.

  The name uses the site's display font (Fraunces) with a small
  "Author" line beneath it. Colors and fonts use the same design
  tokens as the rest of the site (ink, cloth, font-display, etc.).

  The current page's link is marked with a small cloth-green
  underline, echoing the ribbon-bookmark motif.
*/

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/memoir", label: "The Memoir" },
  { href: "/childrens-series", label: "The Children's Series" },
  { href: "/janys-praise", label: "Jany's Praise" },
  { href: "/musings", label: "Musings" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="relative z-50 w-full border-b border-ink/10 bg-paper">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        {/* Name + tagline */}
        <Link href="/" className="group flex flex-col">
          <span className="font-display text-2xl leading-none text-ink sm:text-3xl">
            Jon Gergen
          </span>
          <span className="mt-1.5 font-utility text-xs tracking-[0.12em] text-ink-faint">
            Author
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-b-2 pb-1 font-utility text-[15px] font-medium transition-colors ${
                    active
                      ? "border-cloth text-cloth"
                      : "border-transparent text-ink hover:text-cloth"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger button */}
        <button
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="h-0.5 w-6 bg-ink" />
          <span className="h-0.5 w-6 bg-ink" />
          <span className="h-0.5 w-6 bg-ink" />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="flex flex-col border-t border-ink/10 bg-paper lg:hidden">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`block border-l-4 px-6 py-3 font-utility text-base font-medium ${
                    active
                      ? "border-cloth text-cloth"
                      : "border-transparent text-ink hover:bg-paper-dim/40"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
