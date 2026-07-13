import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { company } from "@/lib/site";

export const metadata = {
  metadataBase: new URL("https://shahindustrialcorporation.com"),
  title: {
    default: `${company.name} | Engineering Excellence Since 1985`,
    template: `%s | ${company.name}`,
  },
  description:
    "Shah Industrial Corporation (SIC) delivers mission-critical engineering solutions — bulk material handling, hydraulics, crushing, drives and flow control — for India's largest mining, steel, cement and power operations.",
  keywords: [
    "Shah Industrial Corporation",
    "SIC Raipur",
    "bulk material handling",
    "hydraulics",
    "wear protection",
    "conveyor spillage control",
    "mining solutions",
    "power transmission",
    "industrial solutions India",
  ],
  openGraph: {
    title: `${company.name} | Engineering Excellence Since 1985`,
    description:
      "Mission-critical engineering solutions for mining, steel, cement and power plants across India.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#12141D",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
