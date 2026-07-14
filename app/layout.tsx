import type { Metadata } from "next";
import { Fraunces, Source_Serif_4, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-utility",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jongergen.com"),
  title: {
    default: "Jon Gergen — Author",
    template: "%s | Jon Gergen",
  },
  description:
    "Jon Gergen is the author of a forthcoming memoir and a ten-book children's series.",
  openGraph: {
    title: "Jon Gergen — Author",
    description:
      "Jon Gergen is the author of a forthcoming memoir and a ten-book children's series.",
    url: "https://jongergen.com",
    siteName: "Jon Gergen",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${sourceSerif.variable} ${inter.variable} flex min-h-screen flex-col bg-paper font-body text-ink antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
