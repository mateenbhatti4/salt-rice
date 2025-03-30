import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const rice = () => {
  return (
    <section className="why-choose-one">
      <div className="container mx-auto px-4">
        <div className="lg:flex gap-20 py-28">
          <div className="">
            <div className="why-choose-one__right">
              <div
                className="why-choose-one__img wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <img src="/assets/logo/rice.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="lg:mt-0 mt-10">
            <div className="why-choose-one__left">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">Why Chose us</span>
                </div>
                <h2 className="section-title__title">
                  Delivering excellence every a time Express Logistics
                </h2>
              </div>
              <p className="why-choose-one__text">
                Construction is an essential industry that involves building
                adesigning the an structures such as buildings roads, bridges
                Construction is an essent industry that involves building
                adesigning the a structures such
              </p>
              <div className="why-choose-one__btn-box">
                <a href="about.html" className="thm-btn why-choose-one__btn">
                  Read more
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
      </div>
    </section>
  );
};

export default rice;
