import { Noto_Serif_Display, Lato } from "next/font/google";
import "../globals.css";
import SingleNewsNavbar from "./components/SingleNewsNavbar";
import Footer from "@/components/Footer";

const notoSerif = Noto_Serif_Display({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "BNW Developments | Luxury Real Estate",
  description: "Legacy that Leads, Innovation that Lasts. Premier real estate developer in UAE.",
};

export default function NewsLayout({ children }) {
  return (
    <div className={`${lato.variable} ${notoSerif.variable} min-h-screen flex flex-col`}>
      <SingleNewsNavbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
