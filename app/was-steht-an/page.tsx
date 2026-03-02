import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Was steht an - PEC Osnabrücker Otter",
  description: "Aktuelle Termine und Veranstaltungen der Osnabrücker Otter.",
};

export default function WasStehtAnPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-[#1b5e20] hover:underline">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold text-[#1b5e20]">Was steht an?</h1>

        <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
          Hier findest du aktuelle Termine, Lager, Hajks und besondere Aktionen der Osnabrücker Otter.
        </p>

        <p className="mt-6 text-zinc-500">
          [Platzhalter: Termine und Veranstaltungen können hier ergänzt werden]
        </p>
      </main>
    </div>
  );
}
