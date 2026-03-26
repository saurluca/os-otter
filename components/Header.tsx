"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const ueberUnsItems = [
  { label: "Team", href: "/ueber-uns#team" },
  { label: "Entstehung", href: "/ueber-uns#entstehung" },
  { label: "Zugehörigkeit", href: "/ueber-uns#zugehoerigkeit" },
];

const mainNavItems = [
  { label: "Unterstützen", href: "/unterstuetzen" },
  { label: "Schutzkonzept", href: "/jugendschutz" },
  { label: "Was steht an", href: "/was-steht-an" },
  { label: "Dokumente", href: "/dokumente" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ueberUnsOpen, setUeberUnsOpen] = useState(false);
  const ueberUnsRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isUeberUnsActive = pathname === "/ueber-uns";

  useEffect(() => {
    if (!ueberUnsOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ueberUnsRef.current && !ueberUnsRef.current.contains(e.target as Node)) {
        setUeberUnsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [ueberUnsOpen]);

  return (
    <header className="fixed top-0 z-50 w-full border-b-2 border-[#1b5e20] bg-[#faf8f5]/95 backdrop-blur supports-[backdrop-filter]:bg-[#faf8f5]/95 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-90">
          <Image
            src="/pfadfinder_logo.jpeg"
            alt="PEC Pfadfinder Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-center gap-4">
          <Link href="/" className="hidden text-xl font-semibold text-[#1b5e20] hover:opacity-90 sm:block">
            PEC Osnabrücker Otter
          </Link>
          {/* Desktop navigation */}
          <nav className="hidden items-center gap-4 md:flex lg:gap-6">
            <Link
              href="/#kontakt"
              className="whitespace-nowrap text-sm font-medium text-zinc-600 transition-colors hover:text-[#1b5e20]"
            >
              Mitmachen
            </Link>
            <div className="h-4 w-px bg-zinc-300" />
            {/* Über uns dropdown */}
            <div className="relative" ref={ueberUnsRef}>
              <button
                type="button"
                onClick={() => setUeberUnsOpen(!ueberUnsOpen)}
                className={`flex items-center gap-1 whitespace-nowrap text-sm font-medium transition-colors hover:text-[#1b5e20] ${isUeberUnsActive ? "text-[#1b5e20]" : "text-zinc-600"}`}
                aria-expanded={ueberUnsOpen}
                aria-haspopup="true"
              >
                Über uns
                <span className={`text-xs transition-transform duration-200 ${ueberUnsOpen ? "rotate-180" : ""}`}>▼</span>
              </button>
              {ueberUnsOpen && (
                <div className="absolute left-0 top-full z-50 mt-1 min-w-[160px] rounded-md border border-zinc-200 bg-white py-1 shadow-lg">
                  {ueberUnsItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-zinc-600 transition-colors hover:bg-[#1b5e20]/10 hover:text-[#1b5e20]"
                      onClick={() => setUeberUnsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-[#1b5e20] ${pathname === item.href ? "text-[#1b5e20]" : "text-zinc-600"}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link href="/" className="transition-opacity hover:opacity-90">
            <Image
              src="/logo.jpeg"
              alt="Osnabrücker Otter Logo"
              width={40}
              height={40}
              className="rounded-full object-contain"
            />
          </Link>
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
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="border-t border-[#1b5e20]/30 bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/#kontakt"
                className="block py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-[#1b5e20]"www
                onClick={() => setMenuOpen(false)}
              >
                Mitmachen
              </Link>
            </li>
            <li className="pt-1">
              <span className="block py-1 text-xs font-semibold uppercase tracking-wide text-zinc-400">Über uns</span>
              <ul className="pl-2">
                {ueberUnsItems.map((item) => (
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
