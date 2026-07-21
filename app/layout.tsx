import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bocadillo Open Bar | Bartenders Profesionales Lima, Perú",
  description:
    "Servicio de bartenders profesionales, barra móvil y open bar para bodas, cumpleaños y eventos corporativos en Lima, Perú. Tragos premium que sorprenden.",
  keywords: [
    "open bar",
    "bartenders",
    "barra movil",
    "eventos",
    "bodas",
    "cumpleaños",
    "Lima",
    "Peru",
    "cocteleria",
    "bocadillo open bar",
    "barman a domicilio",
    "fiestas",
    "cocteles de autor",
  ],
  authors: [{ name: "Bocadillo Open Bar" }],
  openGraph: {
    title: "Bocadillo Open Bar | Bartenders Profesionales",
    description:
      "Llevamos la fiesta a otro nivel. Tragos premium, bartenders profesionales y barra elegante para tu evento.",
    type: "website",
    locale: "es_PE",
    siteName: "Bocadillo Open Bar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bocadillo Open Bar | Bartenders Profesionales",
    description:
      "Tragos premium, bartenders profesionales y barra elegante para tu evento en Lima, Perú.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "0Q8yd1Y5KldwQhbtXdc5lq6wFaX0AJacZi645f5Gr2Y",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bocadillo Open Bar",
    description:
      "Servicio de bartenders profesionales, barra móvil y open bar para bodas, cumpleaños y eventos corporativos en Lima, Perú.",
    url: "https://bocadillo-openbar1.vercel.app",
    telephone: "+51-971-416-073",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lima",
      addressCountry: "PE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -12.0464,
      longitude: -77.0428,
    },
    priceRange: "$$",
    sameAs: [
      "https://www.instagram.com/bocadillo.openbar/",
      "https://www.tiktok.com/@bocadillo.openbar1",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
