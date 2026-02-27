import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import LogoSlider from "@/components/LogoSlider";
import Collaboration from "@/components/Collaboration";
import WhyBNW from "@/components/WhyBNW";
import LatestLaunch from "@/components/LatestLaunch";
import PremiumDevelopments from "@/components/PremiumDevelopments";
import OurVerticals from "@/components/OurVerticals";
import Footer from "@/components/Footer";
import { getAllNews } from "@/lib/news";

export default async function Home() {

  const articles = await getAllNews();

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Introduction />
      <LogoSlider />
      <Collaboration />
      <LatestLaunch />
      <PremiumDevelopments />
      <WhyBNW />
      <OurVerticals articles={ articles } />
      <Footer />
    </main>
  );
}
