import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unterstützen",
  description: "Unterstütze die Pfadfinderarbeit der Osnabrücker Otter. Spenden, Holzliebhaber, tatkräftige Hände.",
  keywords: ["Spenden", "Unterstützung", "Pfadfinder Osnabrück"],
};

export default function UnterstuetzenPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-[#1b5e20] hover:underline">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold text-[#1b5e20]">Unterstütz uns!</h1>
        <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
          Willst du Kindern ermöglichen, Abenteuer zu erleben, Selbstbewusstsein zu stärken und echte Gemeinschaft zu erfahren?
          Dann werde auf deine Art Teil unserer Otter-Familie!
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-[#1b5e20]">Finanziell</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Wir brauchen Mittel für die Pacht unserer Wiese, für Material, Programm und Aktionen. Jede Spende ist willkommen! Die Landeskirchliche Gemeinschaft Osnabrück ist gemeinnützig. Zum Jahresanfang erhältst du eine Spendenquittung.
            </p>
            <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-6 font-mono text-sm text-zinc-700">
              <p className="font-sans font-semibold text-zinc-900">Landeskirchliche Gemeinschaft e.V.</p>
              <p className="mt-1">Sparkasse Osnabrück</p>
              <p className="mt-2">IBAN: DE49 2655 0105 0000 6802 49</p>
              <p>BIC: NOLADE22XXX</p>
              <p className="mt-2 font-sans">Verwendungszweck: Spende PEC-Pfadfinder</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1b5e20]">Holzliebhaber</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Wir lieben es, Feuer zu machen! Brennholzspenden sind daher jederzeit ein riesiger Gewinn für unsere Lagerfeuerabende.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1b5e20]">Tatkräftige Hände</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Auf unserer Wiese gibt es immer etwas zu tun – Rasen mähen, Hütten bauen, Abenteuer vorbereiten. Wenn du Zeit und Lust hast, melde dich gerne unter{" "}
              <a href="mailto:info@pfadfinder-os.de" className="font-medium text-[#1b5e20] hover:underline">
                info@pfadfinder-os.de
              </a>{" "}
              – wir freuen uns auf deine Unterstützung!
            </p>
          </section>

          <p className="text-zinc-600 leading-relaxed">
            Jede Unterstützung bringt Kinderaugen zum Leuchten, stärkt unsere Gemeinschaft und sorgt dafür, dass die Otter weiterhin wild, mutig und fröhlich unterwegs sein können.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-[#1b5e20]">
              Unterstützt und gefördert werden wir durch:
            </h2>
            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">Landeskirchliche Gemeinschaft Osnabrück (LKG)</h3>
                <p className="mt-2 text-zinc-600 leading-relaxed">
                  Die Gemeinde, die im wahrsten Sinne hinter den Ottern steht. Hier finden wir Menschen, die uns finanziell sowie mit Rat und Tat zur Seite stehen.
                </p>
                <a href="https://www.lkg-osnabrueck.de" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-medium text-[#1b5e20] hover:underline">
                  www.lkg-osnabrueck.de
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">Pfadfinderbund PEC</h3>
                <p className="mt-2 text-zinc-600 leading-relaxed">
                  Bundesweit werden Schulungen und Lager angeboten, Materialien entwickelt und bereitgestellt.
                </p>
                <a href="https://www.ec.de/arbeitsbereiche/pfadfinder/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-medium text-[#1b5e20] hover:underline">
                  ec.de/arbeitsbereiche/pfadfinder
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">Evangelische Stiftungen Osnabrück</h3>
                <p className="mt-2 text-zinc-600 leading-relaxed">
                  Den Evangelischen Stiftungen gehört die Wiese, die wir pachten. Sie unterstützen uns beim Pachtzins und bei Anschaffungen.
                </p>
                <a href="https://www.stiftungen-osnabrueck.de/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-medium text-[#1b5e20] hover:underline">
                  www.stiftungen-osnabrueck.de
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">Stadtjugendring Osnabrück und Stadt Osnabrück</h3>
                <p className="mt-2 text-zinc-600 leading-relaxed">
                  Wir sind Mitglied im Stadtjugendring.
                  Über den Stadtjugendring können wir Förderanträge bei der Stadt Osnabrück stellen. Die Stadt unterstützt Teilnehmende unserer Lager und die Anschaffung neuer Materialien mit 50 % Förderung.
                </p>
                <a href="https://www.sjr-osnabrueck.de/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-medium text-[#1b5e20] hover:underline">
                  www.sjr-osnabrueck.de
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
