import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team - PEC Osnabrücker Otter",
  description: "Das Team der Osnabrücker Otter.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-[#1b5e20] hover:underline">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold text-[#1b5e20]">Team</h1>

        <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
          Unsere Stammesleitung und die Mitarbeitenden der Osnabrücker Otter. Bei Fragen oder um mitzumachen, melde dich gerne unter{" "}
          <a href="mailto:pfadfinder@ec-os.de" className="font-medium text-[#1b5e20] hover:underline">
            pfadfinder@ec-os.de
          </a>.
        </p>

        <p className="mt-6 text-zinc-500">
          [Platzhalter: Teamvorstellung kann hier ergänzt werden]
        </p>
      </main>
    </div>
  );
}
