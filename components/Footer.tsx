export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-[#1b5e20] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-600">
            Copyright © {currentYear} - PEC Osnabrücker Otter - Stamm 0904
          </p>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="#"
              className="text-sm text-zinc-600 transition-colors hover:text-[#1b5e20]"
            >
              Impressum
            </a>
            <a
              href="#"
              className="text-sm text-zinc-600 transition-colors hover:text-[#1b5e20]"
            >
              Datenschutzerklärung
            </a>
            <a
              href="#grundlagen"
              className="text-sm text-zinc-600 transition-colors hover:text-[#1b5e20]"
            >
              Kinderschutzkonzept
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
