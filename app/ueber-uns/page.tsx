import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Team, Entstehung und Zugehörigkeit der Osnabrücker Otter. Wer wir sind, wie wir entstanden sind und wie du mitmachen kannst.",
  keywords: ["Osnabrücker Otter", "Team", "Entstehung", "Pfadfinder Stamm", "Zugehörigkeit"],
};

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-[#1b5e20] hover:underline">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold text-[#1b5e20]">Über uns</h1>

        {/* 1. Team */}
        <section id="team" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold text-[#1b5e20]">Team</h2>
          <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
            Unsere Stammesleitung und die Mitarbeitenden der Osnabrücker Otter. Bei Fragen oder um mitzumachen, melde dich gerne unter{" "}
            <a href="mailto:info@pfadfinder-os.de" className="font-medium text-[#1b5e20] hover:underline">
              info@pfadfinder-os.de
            </a>
            .
          </p>
          <p className="mt-6 text-zinc-500">
            [Platzhalter: Teamvorstellung kann hier ergänzt werden]
          </p>
        </section>

        {/* 2. Entstehung */}
        <section id="entstehung" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-bold text-[#1b5e20]">Entstehung</h2>
          <h3 className="mt-6 text-xl font-semibold text-zinc-800">Wie sind wir entstanden?</h3>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            2021, mitten in der Coronakrise, setzten sich ein paar engagierte Mitarbeitende der Landeskirchliche Gemeinschaft Osnabrück zusammen. Sie wollten Kindern trotz Einschränkungen ein echtes Abenteuer ermöglichen und das weit weg von Bildschirmen und Computern.
          </p>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Als Rike, Katha und Vicky von ihren eigenen Pfadfindererlebnissen erzählten, war die Begeisterung sofort da. So entstand die Idee: Ein eigener Stamm – die Osnabrücker Otter.
          </p>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Am 23. September 2021 fand unsere erste Gruppenstunde im Haus der LKG statt.
            Seit Mai 2022 haben wir unsere eigene Wiese am Hörner Weg. Die Pfadfinderwiese ist unser Zuhause für Abenteuer, Gemeinschaft und unvergessliche Erlebnisse.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-zinc-800">Was haben Pfadfinder mit Ottern zu tun?</h3>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            In unserem Pfadfinderbund bekommt jeder Stamm den Namen eines Tieres. Otter sind faszinierende Tiere, deren Eigenschaften wir uns für unseren Stamm wünschen.
          </p>
          <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <div className="shrink-0">
              <Image
                src="/logo.jpeg"
                alt="Osnabrücker Otter Logo – zwei Otter halten sich im Wasser fest"
                width={160}
                height={160}
                className="rounded-full object-contain"
              />
            </div>
            <div>
              <p className="text-zinc-600 leading-relaxed">
                Sie schlafen nachts auf dem Wasser und halten sich dabei fest, damit niemand verloren geht. Genau das zeigt auch unser Logo. Und das möchten wir für unseren Stamm.
              </p>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Wir wollen eine Gemeinschaft sein, die trägt, füreinander da ist, einander Halt gibt und Abenteuer gemeinsam meistert.
                Deshalb sind wir die Osnabrücker Otter.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Zugehörigkeit */}
        <section id="zugehoerigkeit" className="mt-16 scroll-mt-24 border-t border-amber-900/20 bg-[#e8f5e9]/60 -mx-4 sm:-mx-6 lg:-mx-8 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1b5e20] text-center">Zugehörigkeit</h2>
            <p className="mt-6 text-zinc-600 leading-relaxed">
              Als Stamm gehören wir zum PEC (Pfadfinder Entschieden für Christus) und haben unsere Wurzeln in der Landeskirchlichen Gemeinschaft Osnabrück (LKG). Die LKG ist die Keimzelle unseres Stammes. Hier entstand die Idee, eine Pfadfindergruppe zu gründen. Die Gemeinde unterstützt unsere Arbeit tatkräftig und finanziell.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Wichtig: Eine Mitgliedschaft in der LKG oder eine bestimmte Konfession ist für die Teilnahme keine Voraussetzung. Jeder ist herzlich willkommen!
            </p>
            <a
              href="https://www.lkg-osnabrueck.de"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-medium text-[#1b5e20] hover:underline"
            >
              www.lkg-osnabrueck.de
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
