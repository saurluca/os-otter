import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Entstehung",
  description: "Geschichte und Namensherkunft der Osnabrücker Otter. Warum wir Otter heißen.",
  keywords: ["Osnabrücker Otter", "Geschichte", "Pfadfinder Stamm"],
};

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-[#1b5e20] hover:underline">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold text-[#1b5e20]">Entstehung</h1>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#1b5e20]">Wie sind wir entstanden?</h2>
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
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#1b5e20]">Was haben Pfadfinder mit Ottern zu tun?</h2>
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
      </main>
    </div>
  );
}
