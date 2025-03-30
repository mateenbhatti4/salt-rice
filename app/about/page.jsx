import React from 'react'
import WhyWe from '../components/About/whywe';
import WhyChoose from '../components/About/why-choose';

export const metadata = {
    title: "About",
    description: "About us",
    keywords: "react, web development",
    author: "Your Name",
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
