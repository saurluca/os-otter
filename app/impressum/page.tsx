import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum & Datenschutz - PEC Osnabrücker Otter",
  description: "Impressum und Datenschutzerklärung der Osnabrücker Otter.",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-[#1b5e20] hover:underline">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold text-[#1b5e20]">
          Impressum und Datenschutz
        </h1>
        <p className="mt-2 text-sm text-zinc-500">Angaben gemäß § 5 TMG</p>

        <div className="mt-12 space-y-12">
          {/* Impressum */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b5e20]">Impressum</h2>
            <div className="mt-4 space-y-4 text-zinc-600 leading-relaxed">
              <p className="font-medium text-zinc-800">EC-Jugendarbeit Osnabrück</p>
              <p>Lange Straße 19a<br />48090 Osnabrück</p>
              <p>
                <span className="font-medium text-zinc-800">Vertreten durch:</span><br />
                Cedric Bublies<br />
                E-Mail: <a href="mailto:pfadfinder@ec-os.de" className="text-[#1b5e20] hover:underline">pfadfinder@ec-os.de</a>
              </p>
              <p>
                <span className="font-medium text-zinc-800">Kontakt:</span><br />
                Telefon: 0541 / 67375790<br />
                E-Mail: <a href="mailto:pfadfinder@ec-os.de" className="text-[#1b5e20] hover:underline">pfadfinder@ec-os.de</a>
              </p>
              <p>
                <span className="font-medium text-zinc-800">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</span><br />
                Cedric Bublies<br />
                Am Lünsebrink 37<br />
                49078 Osnabrück
              </p>
              <p>
                <span className="font-medium text-zinc-800">Gestaltung:</span><br />
                Cedric Bublies
              </p>
              <p>
                <span className="font-medium text-zinc-800">Hosting:</span><br />
                Diese Website wird gehostet von Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.<br />
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#1b5e20] hover:underline">vercel.com</a>
              </p>
            </div>
          </section>

          {/* Streitschlichtung */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b5e20]">Streitschlichtung</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* Haftung für Inhalte */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b5e20]">Haftung für Inhalte</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          {/* Haftung für Links */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b5e20]">Haftung für Links</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          {/* Urheberrecht */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b5e20]">Urheberrecht</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          {/* Datenschutz */}
          <section id="datenschutz">
            <h2 className="text-2xl font-bold text-[#1b5e20]">Datenschutz</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies soweit möglich stets auf freiwilliger Basis. Die Nutzung der Angebote und Dienste ist, soweit möglich, stets ohne Angabe personenbezogener Daten möglich.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
            </p>
          </section>

          {/* Auskunft, Löschung, Sperrung */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b5e20]">Auskunft, Löschung, Sperrung</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b5e20]">Cookies</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Wenn du einen Kommentar auf unserer Website schreibst, kann das eine Einwilligung sein, deinen Namen, E-Mail-Adresse und Website in Cookies zu speichern. Dies ist eine Komfortfunktion, damit du nicht, wenn du einen weiteren Kommentar schreibst, all diese Daten erneut eingeben musst. Diese Cookies werden ein Jahr lang gespeichert.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Falls du ein Konto hast und dich auf dieser Website anmeldest, werden wir ein temporäres Cookie setzen, um festzustellen, ob dein Browser Cookies akzeptiert. Dieses Cookie enthält keine personenbezogenen Daten und wird verworfen, wenn du deinen Browser schließt.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Wenn du dich anmeldest, werden wir einige Cookies einrichten, um deine Anmeldeinformationen und Anzeigeoptionen zu speichern. Anmelde-Cookies verfallen nach zwei Tagen und Cookies für die Anzeigeoptionen nach einem Jahr. Falls du bei der Anmeldung „Angemeldet bleiben“ auswählst, wird deine Anmeldung zwei Wochen lang aufrechterhalten. Mit der Abmeldung aus deinem Konto werden die Anmelde-Cookies gelöscht.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Wenn du einen Artikel bearbeitest oder veröffentlichst, wird ein zusätzlicher Cookie in deinem Browser gespeichert. Dieser Cookie enthält keine personenbezogenen Daten und verweist nur auf die Beitrags-ID des Artikels, den du gerade bearbeitet hast. Der Cookie verfällt nach einem Tag.
            </p>
          </section>

          {/* Hosting und Datenspeicherung */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b5e20]">Hosting und Datenspeicherung</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Diese Website wird auf Servern von Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet. Vercel ist ein Anbieter für das Hosten von Webanwendungen. Bei Aufruf dieser Website können dabei technisch bedingt Verbindungen zu Servern von Vercel entstehen. Weitere Informationen zum Datenschutz bei Vercel finden Sie unter{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#1b5e20] hover:underline">
                vercel.com/legal/privacy-policy
              </a>.
            </p>
          </section>

          {/* Server-Log-Files */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b5e20]">Server-Log-Files</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Der Provider der Seiten (Vercel Inc.) erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-1 text-zinc-600">
              <li>Browsertyp / Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
            </ul>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.
            </p>
          </section>

          {/* Kontaktformular */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b5e20]">Kontaktformular</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          {/* Widerspruch Werbe-Mails */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b5e20]">Widerspruch Werbe-Mails</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </section>

          {/* Quelle */}
          <section>
            <p className="text-sm text-zinc-500">
              Quelle: eRecht24.de – Rechtsberatung von Anwalt Sören Siebert und e-recht24.de
            </p>
          </section>

          {/* Dazu gehören wir */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b5e20]">Dazu gehören wir</h2>
            <div className="mt-4 space-y-2 text-zinc-600 leading-relaxed">
              <p className="font-medium text-zinc-800">Niedersächsischer Jugendverband „Entschieden für Christus“ (EC) e.V.</p>
              <p>Archivstrasse 3<br />30169 Hannover</p>
              <p>Telefon: +49 511 1241-468</p>
              <p>
                <a href="mailto:info@ec-niedersachsen.de" className="text-[#1b5e20] hover:underline">info@ec-niedersachsen.de</a><br />
                <a href="https://www.ec-niedersachsen.de" target="_blank" rel="noopener noreferrer" className="text-[#1b5e20] hover:underline">www.ec-niedersachsen.de</a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
