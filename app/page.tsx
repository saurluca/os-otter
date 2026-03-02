import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Skip link for accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-[#1b5e20] focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        Zum Inhalt springen
      </a>
      <Header />

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="flex min-h-[70vh] flex-col items-center justify-center bg-[#1b5e20] px-4 py-20 text-center sm:px-6 lg:px-8"
        >
          <p className="text-lg font-medium text-white/90 sm:text-xl">
            Osnabrücker Otter
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            PEC - Pfadfinder Osnabrücker Otter
          </h1>
          <p className="mt-4 text-xl font-medium text-white/95 sm:text-2xl">
            Entschieden für Christus
          </p>
          <p className="mt-2 text-lg text-white/80">
            Stamm 0904
          </p>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Neue Abenteuer erleben
          </p>
          <a
            href="#ueber-uns"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 font-medium text-[#1b5e20] transition-colors hover:bg-white/90"
          >
            Mehr erfahren
          </a>
        </section>

        {/* Über uns */}
        <section
          id="ueber-uns"
          className="border-t-2 border-[#1b5e20]/20 bg-white px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1b5e20]">Über uns</h2>
            <p className="mt-4 text-lg font-medium text-zinc-700">
              Schön, dass du bei uns vorbeischaust!
            </p>
            <p className="mt-6 text-zinc-600 leading-relaxed">
              Wir sind die Osnabrücker Otter des christlichen Pfadfinderbundes
              PEC (Pfadfinder entschieden für Christus). Unsere Sippen treffen
              sich regelmäßig zum gemeinsamen Stammtreff.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Wann sich welche Sippe trifft, kannst du unter „Sei dabei!“
              erfahren. Unser Stamm besteht aus abenteuerlustigen
              Pfadfinderinnen und Pfadfindern im Alter von 6 bis 60+ Jahren.
            </p>
            <p className="mt-6 text-zinc-600 leading-relaxed">
              Hier haben wir für dich die wichtigsten Informationen über unseren
              Stamm zusammengestellt.
            </p>
          </div>
        </section>

        {/* Sei dabei! */}
        <section
          id="sei-dabei"
          className="border-t border-zinc-200 bg-[#e8f5e9]/50 px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1b5e20]">Sei dabei!</h2>
            <p className="mt-4 text-lg font-medium text-zinc-700">
              Du willst was Neues erleben? Dann bist du bei uns richtig!
            </p>
            <p className="mt-6 text-zinc-600 leading-relaxed">
              Unsere Sippen treffen sich regelmäßig, um die Natur zu erleben, von
              Gott zu hören, Pfadfindertechniken zu lernen, unsere Freunde zu
              treffen, zum Singen, zum Spielen und vielem mehr.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Du bist herzlich eingeladen, also komm vorbei!
            </p>
            <a
              href="#kontakt"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#1b5e20] px-8 font-medium text-white transition-colors hover:bg-[#0d3d12]"
            >
              Pfadfinder werden
            </a>
          </div>
        </section>

        {/* Grundlagen */}
        <section
          id="grundlagen"
          className="border-t border-zinc-200 bg-white px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1b5e20]">Grundlagen</h2>
            <div className="mt-8 space-y-12">
              <div>
                <h3 className="text-xl font-semibold text-[#1b5e20]">Leitbild</h3>
                <p className="mt-4 text-zinc-600 leading-relaxed">
                  Als PEC-Pfadfinder sind wir entschieden für Christus. Unser
                  Leitbild prägt unsere Gemeinschaft und unsere Arbeit mit Kindern
                  und Jugendlichen.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1b5e20]">
                  Kindesschutz
                </h3>
                <p className="mt-4 text-zinc-600 leading-relaxed">
                  Der Schutz von Kindern und Jugendlichen hat bei uns höchste
                  Priorität. Wir haben ein umfassendes Schutzkonzept entwickelt
                  und alle Mitarbeitenden werden entsprechend geschult.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section
          id="galerie"
          className="border-t border-zinc-200 bg-[#e8f5e9]/50 px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1b5e20]">Galerie</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Hier findest du Eindrücke aus unserem Pfadfinder-Alltag – von
              Lagern, Fahrten und gemeinsamen Aktionen.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex aspect-video items-center justify-center rounded-lg border-2 border-dashed border-[#1b5e20]/40 bg-[#e8f5e9]/80 text-[#1b5e20]/60"
                >
                  Bild {i}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Berichte */}
        <section
          id="berichte"
          className="border-t border-zinc-200 bg-white px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1b5e20]">
              Aus dem Pfadfinder-Alltag
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Berichte von unseren Lagern, Hajks und besonderen Aktionen.
            </p>
            <div className="mt-8 space-y-8">
              <article className="rounded-lg border border-zinc-200 border-l-4 border-l-[#1b5e20] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1b5e20]">
                  Platzhalter Bericht 1
                </h3>
                <p className="mt-2 text-zinc-600">
                  Hier erscheinen zukünftige Berichte von unseren Aktionen und
                  Erlebnissen.
                </p>
              </article>
              <article className="rounded-lg border border-zinc-200 border-l-4 border-l-[#1b5e20] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1b5e20]">
                  Platzhalter Bericht 2
                </h3>
                <p className="mt-2 text-zinc-600">
                  Weitere Berichte folgen in Kürze.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section
          id="kontakt"
          className="border-t border-zinc-200 bg-[#e8f5e9]/50 px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1b5e20]">Kontakt</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Du hast Fragen oder möchtest uns besuchen? Wir freuen uns von dir
              zu hören!
            </p>
            <div className="mt-8 space-y-4">
              <p className="font-medium text-zinc-900">
                PEC Osnabrücker Otter – Stamm 0904
              </p>
              <p className="text-zinc-600">
                [Adresse wird ergänzt]
              </p>
              <p className="text-zinc-600">
                E-Mail: [Kontakt wird ergänzt]
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
