import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      {/* Skip link for accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-[#1b5e20] focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        Zum Inhalt springen
      </a>
      <Header />

      <main>
        {/* Hero - Full-bleed camp image */}
        <section
          id="hero"
          className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8"
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
            <div className="absolute inset-0 bg-[#1b5e20]/75" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-7xl">
              Willkommen bei den Pfadfindern
            </h1>
            <div className="mt-8 space-y-3 text-lg text-white/95 drop-shadow-md">
              <p>Die Funken steigen in den Abendhimmel.</p>
              <p>Holz knackt im Feuer.</p>
              <p>Über dem Feuer köchelt der Tschai.</p>
              <p className="font-semibold">Und du mittendrin.</p>
            </div>
            <div className="mt-10 max-w-2xl space-y-2 text-left text-base text-white/90">
              <p>Hast du Lust zu lernen, wie man mit nur einem Streichholz ein Feuer entfacht?</p>
              <p>Willst du wissen, wie man mit Karte und Kompass den richtigen Weg findet – auch wenn es quer durch Wald und Wiese geht?</p>
              <p>Fragst du dich, was Kohten und Jurten sind und warum sie nach Abenteuer riechen?</p>
              <p>Bist du gern draußen unterwegs, liebst Wind im Gesicht und Matsch an den Schuhen?</p>
              <p>Suchst du echte Gemeinschaft, die trägt – und Freunde, auf die man sich verlassen kann?</p>
              <p>Möchtest du herausfinden, was in dir steckt?</p>
              <p>Und entdecken, dass du gewollt bist – von Menschen und von Gott?</p>
            </div>
            <p className="mt-10 text-xl font-semibold text-white">
              Dann bist du bei uns genau richtig.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-white/95">
              Hier wird gesungen und gelacht.
              <br />
              Hier wird ausprobiert, gebaut und gewagt.
              <br />
              Hier wachsen Mut, Verantwortung und Vertrauen.
            </p>
            <p className="mt-8 text-xl font-bold text-white">
              Lass dein Abenteuer beginnen.
            </p>
            <p className="mt-2 text-lg font-medium text-white/90">
              Allzeit bereit!
            </p>
            <a
              href="#ueber-uns"
              className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 font-medium text-[#1b5e20] transition-colors hover:bg-amber-50 hover:shadow-lg"
            >
              Mehr erfahren
            </a>
          </div>
        </section>

        {/* Image divider */}
        <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-96">
          <Image
            src="/images/main2.jpeg"
            alt="Pfadfinderlager mit Lagerfeuer und Holzkonstruktionen"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e20]/40 to-transparent" />
        </div>

        {/* Über uns */}
        <section
          id="ueber-uns"
          className="border-t-2 border-amber-900/20 bg-[#faf8f5] px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg ring-2 ring-amber-900/10 lg:aspect-auto lg:h-[500px]">
                <Image
                  src="/images/main.jpeg"
                  alt="Kohten und Jurten auf der Pfadfinderwiese"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-16 lg:py-4">
                <div>
                  <h2 className="text-3xl font-bold text-[#1b5e20]">
                    Pfadfinder – was ist das eigentlich?
                  </h2>
                  <p className="mt-6 text-zinc-600 leading-relaxed">
                    Pfadfinder gibt es seit 1907. Die Idee hatte Robert Baden-Powell in England: Kinder und Jugendliche sollen Abenteuer erleben, Verantwortung übernehmen und Gemeinschaft über soziale Grenzen hinweg erfahren.
                  </p>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Heute ist daraus eine weltweite Bewegung mit rund 60 Millionen Mitgliedern in über 200 Ländern geworden. Sogar der erste Mensch auf dem Mond, Neil Armstrong, war Pfadfinder – ebenso wie Queen Elizabeth II.
                  </p>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Unser Grundprinzip heißt: „Learning by doing“ – Lernen durch Ausprobieren.
                    Wir lernen nicht aus Büchern, sondern indem wir Feuer machen, Zelte bauen, unterwegs sind und Verantwortung übernehmen. Dabei darf man Neues wagen – und auch aus Fehlern lernen.
                  </p>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Unser gemeinsames Zeichen ist die Kluft: Hemd und Halstuch. Sie ist praktisch für draußen, schafft Zusammenhalt und zeigt: Hier zählt nicht, woher du kommst, sondern dass du dabei bist.
                    Uns ist wichtig: Die Kluft ist kein militärisches Uniformstück, sondern Ausdruck von Gemeinschaft und Gleichwertigkeit.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1b5e20]">
                    Was Kinder bei uns lernen können
                  </h3>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    In unserer Pfadfinderarbeit lernen Kinder und Jugendliche,
                  </p>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-600">
                    <li>Verantwortung zu übernehmen,</li>
                    <li>als Team zusammenzuarbeiten,</li>
                    <li>Konflikte fair und konstruktiv zu lösen,</li>
                    <li>mit wenig auszukommen,</li>
                    <li>Herausforderungen mutig anzugehen,</li>
                    <li>die Natur kennenzulernen, zu schätzen und zu schützen,</li>
                    <li>sich selbst und anderen mit Respekt zu begegnen.</li>
                  </ul>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Und das alles ganz analog – draußen, miteinander, im echten Leben.
                  </p>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Als Stamm gehören wir zum PEC (Pfadfinder Entschieden für Christus). Wir sind christliche Pfadfinder.
                    Das bedeutet: Wir sehen jeden Menschen als von Gott gewollt und geliebt. Diese Haltung prägt unser Miteinander. Geschichten, Impulse und Gespräche über Glauben gehören zu unserem Programm dazu.
                    Dabei gilt: Eine Kirchenzugehörigkeit ist keine Voraussetzung.
                    Unser Angebot ist offen für alle.
                    Jeder ist bei uns willkommen.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1b5e20]">
                    Was haben Pfadfinder mit Ottern zu tun?
                  </h3>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    In unserem Pfadfinderbund bekommt jeder Stamm den Namen eines Tieres – eines Tieres, dessen Eigenschaften wir uns für unseren Stamm wünschen.
                  </p>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Otter sind faszinierende Tiere: Sie schlafen nachts auf dem Wasser und halten sich dabei fest, damit niemand verloren geht. Genau das zeigt auch unser Logo.
                  </p>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Wir wollen eine Gemeinschaft sein, die trägt – füreinander da ist, einander Halt gibt und Abenteuer gemeinsam meistert.
                    Deshalb sind wir die Osnabrücker Otter.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1b5e20]">
                    Wie sind wir entstanden?
                  </h3>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    2021, mitten in der Coronakrise, setzten sich ein paar engagierte Mitarbeitende der Landeskirchliche Gemeinschaft Osnabrück zusammen. Sie wollten Kindern trotz Einschränkungen ein echtes Abenteuer ermöglichen – weit weg von Bildschirmen und Computern.
                  </p>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Als Rike, Katha und Vicky von ihren eigenen Pfadfindererlebnissen erzählten, war die Begeisterung sofort da. So entstand die Idee: Ein eigener Stamm – die Osnabrücker Otter.
                  </p>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Am 23. September 2021 fand unsere erste Gruppenstunde im Haus der LKG statt.
                    Seit Mai 2022 haben wir unsere eigene Wiese am Hörner Weg – unser Zuhause für Abenteuer, Gemeinschaft und unvergessliche Erlebnisse.
                  </p>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    So begann unsere Reise. Und sie geht weiter – mutig, gemeinsam und mit offenen Armen für jedes neue Mitglied.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1b5e20]">
                    Was ist die Landeskirchliche Gemeinschaft Osnabrück– und warum ist das wichtig?
                  </h3>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Die Landeskirchliche Gemeinschaft Osnabrück (LKG) ist die Keimzelle unseres Stammes. Hier entstand die Idee, eine Pfadfindergruppe zu gründen, um Kindern auch in der Coronazeit ein echtes Abenteuer zu ermöglichen.
                  </p>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Die LKG ist eine Gemeinde innerhalb der evangelischen Landeskirche im Stadtteil Wüste. Menschen unterschiedlichster Generationen treffen sich hier, um gemeinsam Glauben zu leben und in guten wie in schweren Zeiten füreinander da zu sein.
                  </p>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Unser Haus steht in der Langen Straße 19a.
                  </p>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Anders als große Gemeinden wie Katharinen oder Marien finanziert sich die LKG ausschließlich durch Spenden.
                    Die meisten unserer Mitarbeitenden gehören selbst zur LKG, und die Gemeinde unterstützt unsere Pfadfinderarbeit sowohl tatkräftig als auch finanziell.
                  </p>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Wichtig: Eine Mitgliedschaft in der LKG oder eine bestimmte Konfession ist für die Teilnahme an unseren Stammestreffen keine Voraussetzung – jeder ist herzlich willkommen!
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
              </div>
            </div>
          </div>
        </section>

        {/* Sei dabei! - with image */}
        <section
          id="sei-dabei"
          className="border-t border-amber-900/20 bg-[#e8f5e9]/60 px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg ring-2 ring-amber-900/10 lg:order-2 lg:aspect-auto lg:h-[450px]">
                <Image
                  src="/images/main2.jpeg"
                  alt="Gemeinschaft am Lagerfeuer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-12 lg:order-1">
                <div>
                  <h2 className="text-3xl font-bold text-[#1b5e20]">
                    Wie werde ich Pfadfinder bei den Osnabrücker Ottern?
                  </h2>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Du willst dabei sein?
                    Feuer machen, Knoten lernen, draußen unterwegs sein?
                    Dann komm einfach vorbei – dein Abenteuer beginnt mit einem ganz normalen Donnerstag!
                    Gerne können dich deine Eltern bis zum Start begleiten, uns Mitarbeitende kennenlernen und einen Blick auf unsere Pfadfinderwiese werfen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1b5e20]">
                    Erst mal schnuppern …
                  </h3>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Du kannst dreimal unverbindlich mitmachen.
                    Feuerduft schnuppern. Gemeinschaft erleben. Herausfinden, ob das dein Ding ist.
                    Frühestens nach deinem dritten Besuch kannst du dich anmelden – denn wir möchten, dass du sicher weißt: Hier gehöre ich hin.
                    Wenn du bleiben willst, sag einfach der Stammesleitung Bescheid.
                    Wir schicken euch dann alles Weitere per E-Mail zu.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1b5e20]">
                    Liebe Eltern:
                  </h3>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Bitte stellen Sie Ihr Kind beim ersten Besuch kurz einem Mitarbeitenden vor und hinterlassen Sie uns eine Kontaktmöglichkeit – damit wir Sie erreichen können, falls einmal etwas ist.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1b5e20]">
                    Wo und wann geht&apos;s los?
                  </h3>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Unsere Stammestreffen finden außerhalb der Schulferien
                  </p>
                  <p className="mt-2 font-medium text-zinc-900">
                    donnerstags von 17:00 bis 18:45 Uhr
                  </p>
                  <p className="mt-2 text-zinc-600 leading-relaxed">
                    auf unserer Wiese am Hörner Weg (Zugang links vom Spielplatz) statt.
                    Bei Unwetter ziehen wir ins Haus der Landeskirchliche Gemeinschaft Osnabrück
                    (Lange Straße 19a) um.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1b5e20]">
                    Beitrag
                  </h3>
                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Pfadfinden soll kein Luxus sein.
                    Die Teilnahme ist grundsätzlich kostenlos.
                    Da wir unsere Arbeit ausschließlich über Spenden finanzieren, freuen wir uns über einen freiwilligen Beitrag von etwa 40–50 € pro Jahr und Kind.
                    Und ganz wichtig: Geld darf kein Hindernis sein.
                    Bitte sprechen Sie uns vertrauensvoll an.
                  </p>
                </div>

                <a
                  href="#kontakt"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#1b5e20] px-8 font-medium text-white transition-colors hover:bg-[#0d3d12]"
                >
                  Pfadfinder werden
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section
          id="galerie"
          className="border-t border-amber-900/20 bg-[#faf8f5] px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#1b5e20]">
              Aus dem Pfadfinder-Alltag
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GALERIE_IMAGES.map((src, i) => (
                <div
                  key={src}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md ring-2 ring-amber-900/10 transition-transform hover:scale-[1.02] hover:shadow-xl"
                >
                  <Image
                    src={`/${src}`}
                    alt={`Pfadfinder-Erlebnis ${i + 1}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unterstützen */}
        <section
          id="unterstuetzen"
          className="border-t border-amber-900/20 bg-[#faf8f5] px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1b5e20]">
                Unterstütz uns!
              </h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Willst du Kindern ermöglichen, Abenteuer zu erleben, Selbstbewusstsein zu stärken und echte Gemeinschaft zu erfahren?
                Dann werde Teil unserer Otter-Familie – auf deine Art!
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1b5e20]">
                Finanziell:
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Wir brauchen Mittel für die Pacht unserer Wiese, für Material, Programm und Aktionen. Jede Spende ist willkommen! Die Landeskirchliche Gemeinschaft Osnabrück ist gemeinnützig – zum Jahresanfang erhältst du eine Spendenquittung.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1b5e20]">
                Holzliebhaber:
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Wir lieben es, Feuer zu machen! Brennholzspenden sind daher jederzeit ein riesiger Gewinn für unsere Lagerfeuerabende.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1b5e20]">
                Tatkräftige Hände:
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Auf unserer Wiese gibt es immer etwas zu tun – Rasen mähen, Hütten bauen, Abenteuer vorbereiten. Wenn du Zeit und Lust hast, melde dich gerne unter pfadfinder@ec-os.de – wir freuen uns auf deine Unterstützung!
              </p>
            </div>

            <p className="text-zinc-600 leading-relaxed">
              Jede Unterstützung bringt Kinderaugen zum Leuchten, stärkt unsere Gemeinschaft und sorgt dafür, dass die Otter weiterhin wild, mutig und fröhlich unterwegs sein können.
            </p>

            <div>
              <h3 className="text-2xl font-bold text-[#1b5e20]">
                Unterstützt und gefördert werden wir durch:
              </h3>

              <div className="mt-8 space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-[#1b5e20]">
                    Landeskirchliche Gemeinschaft Osnabrück (LKG)
                  </h4>
                  <p className="mt-2 text-zinc-600 leading-relaxed">
                    Die Landeskirchliche Gemeinschaft Osnabrück ist die Gemeinde, die im wahrsten Sinne hinter den Ottern steht. Hier finden wir Menschen, die uns finanziell sowie mit Rat und Tat zur Seite stehen und unsere Arbeit engagiert mittragen. So haben beispielsweise Männer der LKG unsere große Materialhütte gebaut und durch Spenden mitfinanziert. Die LKG ist unser verlässlicher Rückhalt.
                  </p>
                  <a
                    href="https://www.lkg-osnabrueck.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-medium text-[#1b5e20] hover:underline"
                  >
                    www.lkg-osnabrueck.de
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#1b5e20]">
                    Pfadfinderbund PEC
                  </h4>
                  <p className="mt-2 text-zinc-600 leading-relaxed">
                    Der PEC ist unser Pfadfinderbund. Bundesweit werden Schulungen und Lager angeboten, Materialien entwickelt und bereitgestellt. Zudem erhalten wir Begleitung und Coaching durch die Bundesleitung. Diese Einbindung stärkt unsere Arbeit vor Ort und verbindet uns mit anderen Stämmen.
                  </p>
                  <a
                    href="https://www.ec.de/arbeitsbereiche/pfadfinder/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-medium text-[#1b5e20] hover:underline"
                  >
                    https://www.ec.de/arbeitsbereiche/pfadfinder/
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#1b5e20]">
                    Evangelische Stiftungen Osnabrück
                  </h4>
                  <p className="mt-2 text-zinc-600 leading-relaxed">
                    Den Evangelischen Stiftungen gehört die Wiese, die wir seit 2021 pachten. Seit Mai 2026 stellen sie uns die gesamte Fläche zur Verfügung. Dabei kommen sie uns beim Pachtzins sehr entgegen und unterstützen uns auch finanziell bei Anschaffungen, zum Beispiel beim Kauf unseres Hochgrasrasenmähers. Für die vertrauensvolle Zusammenarbeit und das uns entgegengebrachte Vertrauen sind wir sehr dankbar.
                  </p>
                  <a
                    href="https://www.stiftungen-osnabrueck.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-medium text-[#1b5e20] hover:underline"
                  >
                    https://www.stiftungen-osnabrueck.de/
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#1b5e20]">
                    Stadtjugendring Osnabrück und Stadt Osnabrück
                  </h4>
                  <p className="mt-2 text-zinc-600 leading-relaxed">
                    Wir sind Mitglied im Stadtjugendring Osnabrück. Hier vernetzen sich die verschiedenen Träger der Jugendarbeit in Osnabrück. Dadurch stehen wir in engem Austausch mit anderen Jugendorganisationen vor Ort.
                    Über den Stadtjugendring können wir zudem Förderanträge bei der Stadt Osnabrück stellen. Die Stadt unterstützt beispielsweise Teilnehmende unserer Lager sowie die Anschaffung neuer Materialien – diese mit einer Förderung von 50 %. Das ist für unsere Arbeit eine große Hilfe.
                  </p>
                  <a
                    href="https://www.sjr-osnabrueck.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-medium text-[#1b5e20] hover:underline"
                  >
                    https://www.sjr-osnabrueck.de/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grundlagen - Kinder- und Jugendschutz */}
        <section
          id="grundlagen"
          className="border-t border-amber-900/20 bg-[#e8f5e9]/60 px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1b5e20]">
                Kinder- und Jugendschutz
              </h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Der Schutz und das Wohl von Kindern und Jugendlichen bilden die Grundlage unserer Arbeit. Wir möchten, dass sich alle Mädchen und Jungen – ebenso wie unsere Mitarbeitenden – bei uns sicher fühlen und ihre Persönlichkeit frei entfalten können.
              </p>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Dafür setzen wir uns klar ein:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-600">
                <li>für den Schutz von Kindern und Jugendlichen</li>
                <li>gegen körperliche, seelische oder sexualisierte Gewalt</li>
                <li>gegen Diskriminierung und Abwertung</li>
                <li>für ein respektvolles und sensibles Miteinander</li>
                <li>und für eine Kultur, in der persönliche Grenzen geachtet werden</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1b5e20]">
                Umsetzung in der Praxis
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Gemeinsam mit der Landeskirchliche Gemeinschaft Osnabrück haben wir ein internes Schutzkonzept entwickelt. Es beschreibt unsere Maßnahmen zur Prävention von Gewalt.
                Unser Ziel: Kinder und Jugendliche bestmöglich vor Gefahren schützen und den Zugriff potenzieller Täterinnen oder Täter verhindern.
              </p>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Zu den Maßnahmen gehören unter anderem:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-600">
                <li>verpflichtende Präventionsschulungen für alle volljährigen Mitarbeitenden</li>
                <li>Vorlage eines polizeilichen Führungszeugnisses</li>
                <li>Unterzeichnung einer Selbstverpflichtungserklärung</li>
              </ul>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Bei Fragen zu unserem Schutzkonzept oder zum Thema Kinder- und Jugendschutz steht unsere Stammesleitung jederzeit gerne zur Verfügung.
              </p>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section
          id="kontakt"
          className="border-t border-amber-900/20 bg-[#faf8f5] px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1b5e20]">Kontakt</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Du hast Fragen oder möchtest uns besuchen? Wir freuen uns von dir zu hören!
            </p>
            <div className="mt-8 space-y-4">
              <p className="font-medium text-zinc-900">
                PEC Osnabrücker Otter – Stamm 0904
              </p>
              <p className="text-zinc-600">
                Stammestreffen: donnerstags 17:00–18:45 Uhr (außerhalb der Schulferien)
              </p>
              <p className="text-zinc-600">
                Wiese am Hörner Weg (Zugang links vom Spielplatz)
              </p>
              <p className="text-zinc-600">
                Bei Unwetter: Haus der Landeskirchliche Gemeinschaft Osnabrück, Lange Straße 19a
              </p>
              <a
                href="mailto:pfadfinder@ec-os.de"
                className="block font-medium text-[#1b5e20] hover:underline"
              >
                pfadfinder@ec-os.de
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
