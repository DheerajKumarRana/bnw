import { Noto_Serif_Display, Lato } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
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
  title: "Projects | BNW Developments | Luxury Real Estate",
  description: "Legacy that Leads, Innovation that Lasts. Premier real estate developer in UAE.",
};

export default function ProjectLayout({ children }) {
  return (
    <>
      <Navbar />
      { children }
      <Footer />
    </>
  );
}
