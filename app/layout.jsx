import { Montserrat, Work_Sans, Inter, JetBrains_Mono, EB_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { company } from "@/lib/site";

// Display / headlines
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
// Body prose
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});
// UI text (eyebrows, buttons, nav, labels)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ui",
  display: "swap",
});
// Data / part numbers / specs
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});
// Editorial pull-quotes
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

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
  const fontVars = `${montserrat.variable} ${workSans.variable} ${inter.variable} ${jetbrainsMono.variable} ${ebGaramond.variable}`;
  return (
    <html lang="en" className={`${fontVars} scroll-smooth`}>
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
