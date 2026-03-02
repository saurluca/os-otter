import Image from "next/image";
import Link from "next/link";

const GALERIE_IMAGES = [
  "images/main.jpeg",
  "images/main2.jpeg",
  "images/cross.jpeg",
  "images/f09aa62e-c82d-4bf3-965b-8c53286d71a1.jpeg",
  "images/8d1d191f-fd91-46c6-8ccb-6f72a8d31f66.jpeg",
  "images/8fd70895-76f0-48fb-b64b-a10e1fdbe026.jpeg",
  "images/39db513c-0021-4ec3-8dcf-c5288fe28d40.jpeg",
  "images/df965e88-e1d4-45ff-8bcf-8ca7d71a93ab.jpeg",
  "images/bc2ef12b-bb0b-4780-adee-bffe6094cd62.jpeg",
  "images/5a4e3248-42f9-4ff4-8511-7bc1368c551a.jpeg",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-zinc-800">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-24 focus:z-[100] focus:rounded focus:bg-[#1b5e20] focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        Zum Inhalt springen
      </a>

      <main>
        {/* 1. Erster Eindruck - Hero */}
        <section
          id="hero"
          className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/main.jpeg"
              alt="Pfadfinderlager mit Zelten und Gemeinschaft"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#1b5e20]/70" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="mb-8 flex justify-center gap-6">
              <Image
                src="/logo.jpeg"
                alt="Osnabrücker Otter"
                width={120}
                height={120}
                className="rounded-full object-contain drop-shadow-lg"
              />
              <Image
                src="/pfadfinder_logo.jpeg"
                alt="PEC Pfadfinder"
                width={80}
                height={80}
                className="object-contain drop-shadow-lg"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              Lass dein Abenteuer beginnen.
            </h1>
            <a
              href="#bei-uns"
              className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 font-medium text-[#1b5e20] transition-colors hover:bg-amber-50 hover:shadow-lg"
            >
              Mehr erfahren
            </a>
          </div>
        </section>

        {/* 2. Bei uns erlebst du */}
        <section
          id="bei-uns"
          className="border-t-2 border-amber-900/20 bg-[#faf8f5] px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1b5e20]">
              Bei uns erlebst du
            </h2>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              Feuer machen, Knoten lernen, draußen unterwegs sein – hier wird gesungen und gelacht, ausprobiert, gebaut und gewagt. Hier wachsen Mut, Verantwortung und Vertrauen. Wöchentliche Treffen, Lager, Aktionen, Fahrten – richtig geniale Sachen! Bist du gern mit Freunden zusammen? Magst du die Natur und willst Abenteuer erleben? Dann bist du bei den Osnabrücker Ottern genau richtig.
            </p>
          </div>
        </section>

        {/* 3. Image Showcase */}
        <section className="border-t border-amber-900/20 bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
              {GALERIE_IMAGES.slice(0, 8).map((src, i) => (
                <div
                  key={src}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md ring-2 ring-amber-900/10 transition-transform hover:scale-[1.02] hover:shadow-xl"
                >
                  <Image
                    src={`/${src}`}
                    alt={`Pfadfinder-Erlebnis ${i + 1}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Das ist uns wichtig */}
        <section
          id="werte"
          className="border-t border-amber-900/20 bg-[#e8f5e9]/60 px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1b5e20] text-center">
              Das ist uns wichtig
            </h2>
            <p className="mt-4 text-center text-zinc-600 leading-relaxed">
              Wir wollen eine Gemeinschaft sein, die trägt – wo jeder gewollt ist, von Menschen und von Gott. Unser Angebot ist offen für alle.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              <li className="flex items-start gap-3 rounded-lg bg-white/80 p-4 shadow-sm">
                <span className="text-[#1b5e20]">•</span>
                <span className="text-zinc-700">Verantwortung übernehmen</span>
              </li>
              <li className="flex items-start gap-3 rounded-lg bg-white/80 p-4 shadow-sm">
                <span className="text-[#1b5e20]">•</span>
                <span className="text-zinc-700">Als Team zusammenzuarbeiten</span>
              </li>
              <li className="flex items-start gap-3 rounded-lg bg-white/80 p-4 shadow-sm">
                <span className="text-[#1b5e20]">•</span>
                <span className="text-zinc-700">Die Natur schätzen und schützen</span>
              </li>
              <li className="flex items-start gap-3 rounded-lg bg-white/80 p-4 shadow-sm">
                <span className="text-[#1b5e20]">•</span>
                <span className="text-zinc-700">Herausforderungen mutig angehen</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 5. Was sind eigentlich Pfadfinder? */}
        <section
          id="pfadfinder"
          className="border-t border-amber-900/20 bg-[#faf8f5] px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1b5e20] text-center">
              Was sind eigentlich Pfadfinder?
            </h2>
            <p className="mt-6 text-zinc-600 leading-relaxed">
              Pfadfinder gibt es seit 1907. Die Idee hatte Robert Baden-Powell in England: Kinder und Jugendliche sollen Abenteuer erleben, Verantwortung übernehmen und Gemeinschaft über soziale Grenzen hinweg erfahren. Heute ist daraus eine weltweite Bewegung mit rund 60 Millionen Mitgliedern in über 200 Ländern geworden.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Unser Grundprinzip heißt: „Learning by doing“ – Lernen durch Ausprobieren. Wir lernen nicht aus Büchern, sondern indem wir Feuer machen, Zelte bauen, unterwegs sind und Verantwortung übernehmen. Unser gemeinsames Zeichen ist die Kluft: Hemd und Halstuch – praktisch für draußen, Ausdruck von Gemeinschaft und Gleichwertigkeit.
            </p>
          </div>
        </section>

        {/* 6. Zugehörigkeit */}
        <section
          id="zugehoerigkeit"
          className="border-t border-amber-900/20 bg-[#e8f5e9]/60 px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1b5e20] text-center">
              Zugehörigkeit
            </h2>
            <p className="mt-6 text-zinc-600 leading-relaxed">
              Als Stamm gehören wir zum PEC (Pfadfinder Entschieden für Christus) und haben unsere Wurzeln in der Landeskirchlichen Gemeinschaft Osnabrück (LKG). Die LKG ist die Keimzelle unseres Stammes – hier entstand die Idee, eine Pfadfindergruppe zu gründen. Die Gemeinde unterstützt unsere Arbeit tatkräftig und finanziell.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Wichtig: Eine Mitgliedschaft in der LKG oder eine bestimmte Konfession ist für die Teilnahme keine Voraussetzung – jeder ist herzlich willkommen!
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

        {/* 7. Kontakt + Wo + Wann + Kosten - CTA */}
        <section
          id="kontakt"
          className="border-t-2 border-[#1b5e20] bg-[#faf8f5] px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1b5e20]">
              Komm vorbei!
            </h2>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              Dein Abenteuer beginnt mit einem ganz normalen Donnerstag. Dreimal unverbindlich schnuppern – dann entscheidest du.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-md ring-2 ring-amber-900/10">
                <p className="font-semibold text-[#1b5e20]">Wann?</p>
                <p className="mt-2 text-zinc-600">
                  Donnerstags 17:00–18:45 Uhr
                  <br />
                  <span className="text-sm">(außerhalb der Schulferien)</span>
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md ring-2 ring-amber-900/10">
                <p className="font-semibold text-[#1b5e20]">Wo?</p>
                <p className="mt-2 text-zinc-600">
                  Wiese am Hörner Weg
                  <br />
                  <span className="text-sm">(Zugang links vom Spielplatz)</span>
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  Bei Unwetter: LKG, Lange Straße 19a
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md ring-2 ring-amber-900/10">
                <p className="font-semibold text-[#1b5e20]">Kosten?</p>
                <p className="mt-2 text-zinc-600">
                  Kostenlos zum Schnuppern.
                  <br />
                  <span className="text-sm">Freiwilliger Beitrag ca. 40–50 €/Jahr. Geld darf kein Hindernis sein.</span>
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:pfadfinder@ec-os.de"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#1b5e20] px-8 font-medium text-white transition-colors hover:bg-[#0d3d12]"
              >
                pfadfinder@ec-os.de
              </a>
              <Link
                href="/ueber-uns"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-[#1b5e20] px-8 font-medium text-[#1b5e20] transition-colors hover:bg-[#1b5e20]/10"
              >
                Warum heißen wir Otter?
              </Link>
            </div>

            <p className="mt-8 text-sm text-zinc-500">
              Liebe Eltern: Bitte stellt euer Kind beim ersten Besuch kurz einem Mitarbeitenden vor und hinterlasst eine Kontaktmöglichkeit.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
