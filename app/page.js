import Image from "next/image";
import Banner from "./components/Home/banner";
import Industries from "./components/Home/industries";
import PinkSalt from "./components/Home/pinksalt";
import SaltProducts from "./components/Home/saltproducts";
import Rice from "./components/Home/rice";
import Riceprocuts from "./components/Home/riceprocuts";
import FactoryTour from "./components/Home/factorytour";
import Faq from "./components/Home/faq";
import Testimonials from "./components/Home/testimonials";

export const metadata = {
  title: "Salt'n Grains - Himalayan Salt | Best Salt Manufactures in Pakistan",
  description: "Pure Himalayan Salt & Finest Basmati Rice",
  keywords: "salt'n grains, salt exporter, rice exporter, grains, saltngrains",
  author: "Salt'n grains",
  // viewport: "width=device-width, initial-scale=1.0",
};

export default function Home() {
  return (
    <>
      <Banner/>
      <Industries/>
      <PinkSalt/>
      <SaltProducts/>
      <Rice/>
      <Riceprocuts/>
      <Faq/>
      <Testimonials />
    </>
  );
}
