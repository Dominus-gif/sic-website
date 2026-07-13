import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://shahindustrialcorporation.com"),
  title: {
    default: `${company.name} | Integrated Industrial Solutions`,
    template: `%s | ${company.name}`,
  },
  description:
    "Shah Industrial Corporation (SIC) is a pan-India partner delivering bulk material handling, hydraulic, crushing, drive and flow-control solutions for mining, steel, cement and power plants.",
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
    title: `${company.name} | Integrated Industrial Solutions`,
    description:
      "Three decades of engineering excellence for mining, steel, cement and power plants across India.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#080c16",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
