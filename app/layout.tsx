import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CashTrackr - Manage Your Finances",
  description:
    "CashTrackr is the best app to manage your money, create budgets, and track your expenses efficiently.",
  keywords: "finances, budgeting, expense tracking, money management",
  authors: [
    {
      name: "Carlos Eduardo Ibarra Manzano",
      url: "https://www.carlos-fullstack.com",
    },
  ],
  metadataBase: new URL("https://cashtrackr.carlos-fullstack.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CashTrackr - Manage Your Finances",
    description: "Easily and efficiently manage your money with CashTrackr.",
    url: "https://cashtrackr.carlos-fullstack.com",
    siteName: "CashTrackr",
    images: [
      {
        url: "/CashTrackrPreview.webp",
        width: 1200,
        height: 630,
        alt: "CashTrackr - Finance Management",
      },
    ],
    locale: "en_US",
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
