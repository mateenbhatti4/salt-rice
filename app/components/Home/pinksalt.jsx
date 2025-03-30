import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PinkSalt() {
  return (
    <section className="why-choose-one lg:py-32 md:py-28 py-20">
      <div className="container mx-auto px-4">
        <div className="lg:flex gap-20">
          <div className="w-full lg:mb-0 mb-10">
            <div className="why-choose-one__left">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">Why Choose Us</span>
                </div>
                <h2 className="section-title__title">
                  Experience the Purest Himalayan Salt <br /> for Health &
                  Wellness
                </h2>
              </div>
              <p className="why-choose-one__text">
                Our Himalayan salt is 100% natural, rich in minerals, and
                hand-mined from pristine sources. Whether for cooking, therapy,
                or industrial use, our high-quality salt ensures health benefits
                and superior purity.
              </p>
              <div className="why-choose-one__btn-box">
                <a href="/about" className="thm-btn why-choose-one__btn">
                  Learn More
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
          <div className="w-full">
            <div className="why-choose-one__right">
              <div
                className="why-choose-one__img wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <img
                  src="/assets/logo/pinksaltymass-1024x576.webp"
                  alt="Himalayan Salt"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PinkSalt;
