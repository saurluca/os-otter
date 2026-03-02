import Image from "next/image";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

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
            <div className="absolute inset-0 bg-zinc-800/60" />
          </div>
          <div className="relative z-10 max-w-3xl text-center">
            <h3 className="text-xl font-bold text-white drop-shadow-md sm:text-2xl">
              Osnabrücker Otter
            </h3>
            <div className="mx-auto my-4 h-px w-24 bg-white/80" aria-hidden="true" />
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
              PEC - Pfadfinder Osnabrücker Otter
            </h1>
            <p className="mt-4 text-lg text-white/95 drop-shadow-md sm:text-xl">
              Neue Abenteuer erleben
            </p>
            <a
              href="#bei-uns"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-sm border-2 border-white bg-transparent px-6 font-medium text-white transition-colors hover:bg-white hover:text-[#1b5e20]"
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
            <div className="mt-6 space-y-4 text-lg text-zinc-600 leading-relaxed">
              <p>
                Feuer machen und schnitzen.
                In Kohten und Jurten übernachten, die nach Abenteuer riechen.
                Draußen sein. Sonne und Wind im Gesicht. Matsch an den Schuhen.
              </p>
              <p>
                Freunde finden, die zusammenhalten.
                Neues wagen und entdecken, was in dir steckt.
                Und erleben:
                Du bist gewollt – von Menschen und von Gott.
              </p>
              <p className="font-semibold text-zinc-800">
                Klingt gut?
                Dann sei dabei – dein Abenteuer wartet.
                <br />
                Allzeit bereit!
              </p>
            </div>
          </div>
        </section>

        {/* 3. Image Showcase */}
        <section className="border-t border-amber-900/20 bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <ImageGallery />
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
            <div className="mt-8 space-y-6">
              {/* <p className="mt-4 text-center text-zinc-600 leading-relaxed">
                Wir wollen eine Gemeinschaft sein, die trägt – wo jeder gewollt ist, von Menschen und von Gott. Unser Angebot ist offen für alle.
              </p> */}
              <div className="rounded-lg bg-white/80 p-5 shadow-sm">
                <p className="font-semibold text-[#1b5e20]">Tragende Gemeinschaft erleben</p>
                <p className="mt-1 text-zinc-600 leading-relaxed">
                  Bei uns findest du echte Gemeinschaft, in der man zusammenhält und füreinander da ist.
                </p>
              </div>
              <div className="rounded-lg bg-white/80 p-5 shadow-sm">
                <p className="font-semibold text-[#1b5e20]">Selbstvertrauen entwickeln</p>
                <p className="mt-1 text-zinc-600 leading-relaxed">
                  Schritt für Schritt wächst dein Mut, Neues zu wagen und an dich zu glauben.
                </p>
              </div>
              <div className="rounded-lg bg-white/80 p-5 shadow-sm">
                <p className="font-semibold text-[#1b5e20]">Dich selbst und seine Gaben entdecken</p>
                <p className="mt-1 text-zinc-600 leading-relaxed">
                  Du kannst ausprobieren, was in dir steckt, und deine Stärken entfalten.
                </p>
              </div>
              <div className="rounded-lg bg-white/80 p-5 shadow-sm">
                <p className="font-semibold text-[#1b5e20]">Gott kennenlernen</p>
                <p className="mt-1 text-zinc-600 leading-relaxed">
                  Wir sind christliche Pfadfinder, bei uns kannst du entdecken, wer Gott ist und was das mit deinem Leben zu tun hat.
                </p>
              </div>
            </div>
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
              Für Kinder und Jugendliche ab 8 Jahren.
              <br />
              Dreimal kannst du unverbindlich schnuppern und dann entscheidest du.
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
                  <a
                    href="https://www.google.de/maps/place/PEC+Pfadfinderwiese+%22Osnabr%C3%BCcker+Otter%22/@52.257195,8.006294,17.94z/data=!4m6!3m5!1s0x47b9efc8e361cbf5:0xb34d52762fc63d3f!8m2!3d52.2579193!4d8.0065595!16s%2Fg%2F11tcsmmgb0?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1b5e20] hover:underline"
                  >
                    PEC Pfadfinderwiese „Osnabrücker Otter“
                  </a>
                  <br />
                  <span className="text-sm">Hinter dem Hörner Weg 47, 49078 Osnabrück</span>
                </p>

              </div>
              <div className="rounded-lg bg-white p-6 shadow-md ring-2 ring-amber-900/10">
                <p className="font-semibold text-[#1b5e20]">Kosten?</p>
                <p className="mt-2 text-zinc-600">
                  Grundsätzlich kostenlos.
                  <br />
                  <span className="text-sm">Freiwilliger Beitrag ca. 40–50 €/Jahr. Geld soll kein Hindernis sein.</span>
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
                href="/entstehung"
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
