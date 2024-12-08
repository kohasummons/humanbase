import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from './providers';
import "./globals.css";

const ppNeueMontreal = localFont({
  src: [
    {
      path: "./fonts/ppneuemontreal-Medium.otf",
      weight: "500",
    },
    {
      path: "./fonts/ppneuemontreal-semibolditalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/ppneuemontreal-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/ppneuemontreal-bold.otf",
      weight: "700",
    },
    {
      path: "./fonts/ppneuemontreal-thin.otf",
      weight: "100",
    },
    {
      path: "./fonts/ppneuemontreal-book.otf",
      weight: "400",
    },
  ],
  variable: "--font-pp-neue-montreal",
});

const ppSupplySans = localFont({
  src: [
    {
      path: "./fonts/PPSupplySans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PPSupplySans-Ultralight.otf",
      weight: "100",
    },
  ],
  variable: "--font-pp-supply-sans",
});

export const metadata: Metadata = {
  title: "Humanbase",
  description: "Speak with your money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ppNeueMontreal.variable} ${ppSupplySans.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
