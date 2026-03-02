"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const mainNavItems = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Unterstützen", href: "/unterstuetzen" },
  { label: "Jugendschutz", href: "/jugendschutz" },
  { label: "Team", href: "/team" },
  { label: "Was steht an", href: "/was-steht-an" },
  { label: "Dokumente", href: "/dokumente" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#1b5e20] bg-[#faf8f5]/95 backdrop-blur supports-[backdrop-filter]:bg-[#faf8f5]/95 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
          <Image
            src="/logo.jpeg"
            alt="Osnabrücker Otter Logo"
            width={48}
            height={48}
            className="rounded-full object-contain"
          />
          <Image
            src="/pfadfinder_logo.jpeg"
            alt="PEC Pfadfinder Logo"
            width={36}
            height={36}
            className="hidden object-contain sm:block"
          />
          <span className="text-xl font-semibold text-[#1b5e20]">
            PEC Osnabrücker Otter
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-4 md:flex lg:gap-6">
          <Link
            href="/#kontakt"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-[#1b5e20]"
          >
            Mitmachen
          </Link>
          <div className="h-4 w-px bg-zinc-300" />
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-[#1b5e20] ${pathname === item.href ? "text-[#1b5e20]" : "text-zinc-600"}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
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
            <li>
              <Link
                href="/#kontakt"
                className="block py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-[#1b5e20]"
                onClick={() => setMenuOpen(false)}
              >
                Mitmachen
              </Link>
            </li>
            {mainNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-[#1b5e20]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
