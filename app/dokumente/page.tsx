import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dokumente - PEC Osnabrücker Otter",
  description: "Dokumente und Formulare der Osnabrücker Otter.",
};

export default function DokumentePage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-[#1b5e20] hover:underline">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold text-[#1b5e20]">Dokumente</h1>

        <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
          Hier findest du wichtige Dokumente, Formulare und Informationen für die Teilnahme an unseren Stammestreffen und Lagern.
        </p>

        <p className="mt-6 text-zinc-500">
          [Platzhalter: Dokumente können hier ergänzt werden]
        </p>
      </main>
    </div>
  );
}
