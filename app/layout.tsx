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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
