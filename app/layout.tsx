import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dsd = DM_Serif_Display({
    weight: "400",
    style: "normal",
    subsets: ["latin"]
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anjan Suman — Full Stack Developer",
  description: "Portfolio of Anjan Suman — Building web3, full-stack, and high-performance applications.",
  openGraph: {
    title: "Anjan Suman — Full Stack Developer",
    description: "Explore projects, skills, and contact info.",
    url: "https://anjan-neon.vercel.app",
    siteName: "Anjan Suman Portfolio",
    images: [
      {
        url: "/images/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Anjan Suman Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anjan Suman — Full Stack Developer",
    description: "Explore projects, skills, and contact info.",
    images: ["/images/preview.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${dsd.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
