import React from "react";

const WhyWe = () => {
  return (
    <>
      <section className="pt-20 container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Purity from the Himalayas to the World
        </h2>
        <p className="text-lg text-gray-700 font-normal">
          At <span className="text-[#c11425]">Salt'n Grains</span>, we are passionate about delivering the finest
          Himalayan salt and premium rice to global markets. Sourced from the
          pristine mountains and fertile regions of the Himalayas, our products
          embody nature's purity, tradition, and unmatched quality.
        </p>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 mb-8 font-normal">
            Founded in 2019, we began with a simple mission: to share the
            authentic taste and wellness benefits of Himalayan salt and rice
            with the world. What started as a small venture has grown into a
            trusted export partner for businesses and consumers who value
            natural, sustainable, and nutrient-rich products.
          </p>
        </div>
      </section>
    </>
  );
};

export default WhyWe;
