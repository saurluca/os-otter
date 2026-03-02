import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kinder- und Jugendschutz - PEC Osnabrücker Otter",
  description: "Unser Schutzkonzept für Kinder und Jugendliche.",
};

export default function JugendschutzPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-[#1b5e20] hover:underline">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold text-[#1b5e20]">Kinder- und Jugendschutz</h1>
        <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
          Der Schutz und das Wohl von Kindern und Jugendlichen bilden die Grundlage unserer Arbeit. Wir möchten, dass sich alle Mädchen und Jungen – ebenso wie unsere Mitarbeitenden – bei uns sicher fühlen und ihre Persönlichkeit frei entfalten können.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#1b5e20]">Dafür setzen wir uns klar ein:</h2>
          <ul className="mt-4 space-y-2 text-zinc-600">
            <li className="flex gap-2">
              <span className="text-[#1b5e20]">•</span>
              für den Schutz von Kindern und Jugendlichen
            </li>
            <li className="flex gap-2">
              <span className="text-[#1b5e20]">•</span>
              gegen körperliche, seelische oder sexualisierte Gewalt
            </li>
            <li className="flex gap-2">
              <span className="text-[#1b5e20]">•</span>
              gegen Diskriminierung und Abwertung
            </li>
            <li className="flex gap-2">
              <span className="text-[#1b5e20]">•</span>
              für ein respektvolles und sensibles Miteinander
            </li>
            <li className="flex gap-2">
              <span className="text-[#1b5e20]">•</span>
              und für eine Kultur, in der persönliche Grenzen geachtet werden
            </li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#1b5e20]">Umsetzung in der Praxis</h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Gemeinsam mit der Landeskirchliche Gemeinschaft Osnabrück haben wir ein internes Schutzkonzept entwickelt. Es beschreibt unsere Maßnahmen zur Prävention von Gewalt.
            Unser Ziel: Kinder und Jugendliche bestmöglich vor Gefahren schützen und den Zugriff potenzieller Täterinnen oder Täter verhindern.
          </p>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Zu den Maßnahmen gehören unter anderem:
          </p>
          <ul className="mt-4 space-y-2 text-zinc-600">
            <li className="flex gap-2">
              <span className="text-[#1b5e20]">•</span>
              verpflichtende Präventionsschulungen für alle volljährigen Mitarbeitenden
            </li>
            <li className="flex gap-2">
              <span className="text-[#1b5e20]">•</span>
              Vorlage eines polizeilichen Führungszeugnisses
            </li>
            <li className="flex gap-2">
              <span className="text-[#1b5e20]">•</span>
              Unterzeichnung einer Selbstverpflichtungserklärung
            </li>
          </ul>
          <p className="mt-6 text-zinc-600 leading-relaxed">
            Bei Fragen zu unserem Schutzkonzept oder zum Thema Kinder- und Jugendschutz steht unsere Stammesleitung jederzeit gerne zur Verfügung.
          </p>
        </section>
      </main>
    </div>
  );
}
