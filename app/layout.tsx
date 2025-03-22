import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CashTrackr - Gestiona tus Finanzas",
  description: "CashTrackr es la mejor aplicación para administrar tu dinero, llevar presupuestos y controlar tus gastos de forma eficiente.",
  keywords: "finanzas, presupuesto, control de gastos, administración de dinero",
  authors: [{ name: "Carlos Eduardo Ibarra Manzano", url: "https://www.carlos-fullstack.com" }],
  metadataBase: new URL("https://cashtrackr.carlos-fullstack.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CashTrackr - Gestiona tus Finanzas",
    description: "Administra tu dinero de manera fácil y eficiente con CashTrackr.",
    url: "https://cashtrackr.carlos-fullstack.com",
    siteName: "CashTrackr",
    images: [
      {
        url: "/CashTrackrPreview.webp",
        width: 1200,
        height: 630,
        alt: "CashTrackr - Gestión de Finanzas",
      },
    ],
    locale: "es_ES",
    type: "website",
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}

