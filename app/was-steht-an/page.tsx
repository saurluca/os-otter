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

        <div className="mt-10 space-y-6">
          <article className="rounded-lg border border-amber-900/20 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#1b5e20]">Heijke</h2>
            <p className="mt-2 font-medium text-zinc-700">25.04. – 26.04.2026</p>
            <p className="mt-2 text-zinc-600">Wanderung mit Rucksack und Übernachtung</p>
          </article>
          <article className="rounded-lg border border-amber-900/20 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#1b5e20]">Pfingstlager</h2>
            <p className="mt-2 font-medium text-zinc-700">22.05. – 25.05.2026</p>
            <p className="mt-2 text-zinc-600">bei Oldenburg</p>
          </article>
          <article className="rounded-lg border border-amber-900/20 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#1b5e20]">Flohmarkt-Stand Straßenfest</h2>
            <p className="mt-2 font-medium text-zinc-700">05.09.2026</p>
            <p className="mt-2 text-zinc-600">Lange Straße</p>
          </article>
          <article className="rounded-lg border border-amber-900/20 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#1b5e20]">Adventsbasar & Weihnachtsfeier</h2>
            <p className="mt-2 font-medium text-zinc-700">29.11.2026</p>
            <p className="mt-2 text-zinc-600">Landeskirchliche Gemeinschaft Osnabrück (LKG) - Lange Straße 19a</p>
          </article>
          <article className="rounded-lg border border-amber-900/20 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#1b5e20]">Friedenslicht im Heiligabend-Gottesdienst</h2>
            <p className="mt-2 font-medium text-zinc-700">24.12.2026</p>
            <p className="mt-2 text-zinc-600">auf dem Hoffmeier Platz</p>
          </article>
        </div>
      </main>
    </div>
  );
}
