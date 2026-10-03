import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rankskey | Digital Growth Agency",
    template: "%s | Rankskey",
  },
  description:
    "Rankskey helps businesses grow through SEO, websites, Google Ads, Meta Ads and digital marketing strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} min-h-screen bg-[#08202c] text-white antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}