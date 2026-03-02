import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-[#1b5e20] bg-[#2d2a26] text-zinc-300">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center gap-6">
          <Image
            src="/logo.jpeg"
            alt="Osnabrücker Otter"
            width={64}
            height={64}
            className="rounded-full object-contain"
          />
          <Image
            src="/pfadfinder_logo.jpeg"
            alt="PEC Pfadfinder"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-400">
            Copyright © {currentYear} - PEC Osnabrücker Otter - Stamm 0904
          </p>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="#"
              className="text-sm text-zinc-400 transition-colors hover:text-amber-400"
            >
              Impressum
            </a>
            <a
              href="#"
              className="text-sm text-zinc-400 transition-colors hover:text-amber-400"
            >
              Datenschutzerklärung
            </a>
            <Link
              href="/jugendschutz"
              className="text-sm text-zinc-400 transition-colors hover:text-amber-400"
            >
              Kinder- und Jugendschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
