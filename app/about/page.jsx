import React from 'react'
import WhyWe from '../components/About/whywe';
import WhyChoose from '../components/About/why-choose';

export const metadata = {
  title: "About - Himalayan Salt | Best Salt Manufactures in Pakistan",
  description: "Purity from the Himalayas to the World",
  keywords: "salt'n grains, salt exporter, rice exporter, grains, saltngrains",
  author: "Salt'n grains",
  // viewport: "width=device-width, initial-scale=1.0",
};

function page() {
  return (
    <>
    <WhyWe/>
    <WhyChoose />
    </>
   
  )
}

export default page
