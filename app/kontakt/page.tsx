import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt zu den PEC Osnabrücker Ottern. Telefon und E-Mail.",
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-[#1b5e20] hover:underline">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold text-[#1b5e20]">Kontakt</h1>
        <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
          Du hast Fragen, möchtest mitmachen oder uns einfach etwas mitteilen? Wir freuen uns von dir zu hören!
        </p>

        <div className="mt-10 rounded-lg border border-amber-900/20 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#1b5e20]">So erreichst du uns</h2>
          <div className="mt-4 space-y-3 text-zinc-600">
            <p>
              <span className="font-medium text-zinc-800">Telefon:</span>{" "}
              <a href="tel:+4915228700474" className="text-[#1b5e20] hover:underline">
                01522 8700474
              </a>
            </p>
            <p>
              <span className="font-medium text-zinc-800">E-Mail:</span>{" "}
              <a href="mailto:info@pfadfinder-os.de" className="text-[#1b5e20] hover:underline">
                info@pfadfinder-os.de
              </a>
            </p>
          </div>
          <a
            href="mailto:info@pfadfinder-os.de"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#1b5e20] px-5 py-3 font-medium text-white transition-colors hover:bg-[#2e7d32]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            E-Mail schreiben
          </a>
        </div>

        <p className="mt-8 text-zinc-600 leading-relaxed">
          Treffpunkt und Zeiten findest du auf der{" "}
          <Link href="/#kontakt" className="font-medium text-[#1b5e20] hover:underline">
            Startseite
          </Link>
          .
        </p>
      </main>
    </div>
  );
}
