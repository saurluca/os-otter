"use client";

import { useState } from "react";

const navItems = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Sei dabei!", href: "#sei-dabei" },
  { label: "Galerie", href: "#galerie" },
  { label: "Unterstützen", href: "#unterstuetzen" },
  { label: "Kindesschutz", href: "#grundlagen" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#1b5e20] bg-[#faf8f5]/95 backdrop-blur supports-[backdrop-filter]:bg-[#faf8f5]/95 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="text-xl font-semibold text-[#1b5e20] transition-colors hover:text-[#0d3d12]"
        >
          PEC Osnabrücker Otter
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-[#1b5e20]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Menü öffnen"
        >
          <span
            className={`h-0.5 w-6 bg-[#1b5e20] transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-[#1b5e20] transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-[#1b5e20] transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="border-t border-[#1b5e20]/30 bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-[#1b5e20]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
