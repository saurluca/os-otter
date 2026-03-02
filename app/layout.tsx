import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osnabruecker-otter.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PEC Osnabrücker Otter - Stamm 09-04",
    template: "%s | PEC Osnabrücker Otter",
  },
  description:
    "PEC Pfadfinder Osnabrücker Otter - Stamm 09-04. Christliche Pfadfinderarbeit in Osnabrück. Entschieden für Christus.",
  keywords: [
    "Pfadfinder",
    "Osnabrück",
    "PEC",
    "Christliche Pfadfinder",
    "Osnabrücker Otter",
    "Stamm 09-04",
    "Jugendarbeit",
    "EC",
    "Kinder"
  ],
  authors: [{ name: "PEC Osnabrücker Otter", url: siteUrl }],
  creator: "PEC Osnabrücker Otter",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "PEC Osnabrücker Otter",
    title: "PEC Osnabrücker Otter - Stamm 09-04",
    description:
      "PEC Pfadfinder Osnabrücker Otter - Stamm 09-04. Christliche Pfadfinderarbeit in Osnabrück. Entschieden für Christus.",
    images: [{ url: "/logo.jpeg", width: 512, height: 512, alt: "Osnabrücker Otter Logo" }],
  },
  twitter: {
    card: "summary",
    title: "PEC Osnabrücker Otter - Stamm 09-04",
    description:
      "PEC Pfadfinder Osnabrücker Otter - Stamm 09-04. Christliche Pfadfinderarbeit in Osnabrück.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/icon.jpg",
    shortcut: "/icon.jpg",
    apple: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PEC Osnabrücker Otter",
    url: siteUrl,
    logo: `${siteUrl}/logo.jpeg`,
    description:
      "PEC Pfadfinder Osnabrücker Otter - Stamm 09-04. Christliche Pfadfinderarbeit in Osnabrück.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hinter dem Hörner Weg 47",
      addressLocality: "Osnabrück",
      postalCode: "49078",
    },
    email: "pfadfinder@ec-os.de",
  };

  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
