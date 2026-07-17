"use client";

import { useState } from "react";
import Link from "next/link";

/*
  NAVIGATION
  ------------------------
  Desktop: full horizontal list of all six links.
  Mobile (narrow screens): collapses into a hamburger menu.

  Labels use "type" (The Memoir, The Children's Series) rather than
  book titles, since a first-time visitor recognizes a category faster
  than an unfamiliar title. Jany's Praise uses its actual title since
  it's a single, nameable work with no ambiguity to resolve.
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

  return (
    <nav className="w-full border-b border-stone-200 bg-white relative z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-wide text-emerald-900">
          Jon Gergen
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-stone-700 hover:text-emerald-900 transition-colors font-sans text-sm tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-stone-800" />
          <span className="w-6 h-0.5 bg-stone-800" />
          <span className="w-6 h-0.5 bg-stone-800" />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col border-t border-stone-200 bg-white">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-6 py-3 text-stone-700 hover:bg-stone-50 font-sans text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
