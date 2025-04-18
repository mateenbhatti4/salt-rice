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
  title: "Home",
  description: "Generated by create next app",
  keywords: "next.js",
  author: "Your Name",
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
