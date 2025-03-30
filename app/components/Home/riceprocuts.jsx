"use client";
import React from "react";
import products from "@/data/riceproducts.json"; // Import JSON directly
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const RiceProducts = () => {
  return (
    <section className="project-two lg:py-32 md:py-28 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Project Two Single Start */}
          <div className="wow fadeInUp" data-wow-delay="100ms">
            <div className="project-two__single">
              <div className="project-two__content-box">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">
                      FEATURED RICE PRODUCTS
                    </span>
                  </div>
                  <h2 className="section-title__title">
                    Discover Authentic Rice product
                  </h2>
                </div>
                <div className="project-two__btn-box">
                  <a
                    href="/rice"
                    className="thm-btn project-two__btn"
                  >
                    More Products
                    <span className="!relative">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="absolute h-5 top-[15px] left-[15px]"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map through products JSON */}
          {products.slice(0, 5).map((product) => (
            <div
              key={product.id}
              className="wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="project-two__single">
                <div className="project-two__img">
                  <img src={product.image} alt={product.title} />
                  <div className="project-two__content">
                    <p className="project-two__sub-title">{product.title}</p>
                    <h3 className="project-two__title">
                      <a href={product.link}>{product.description}</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiceProducts;
