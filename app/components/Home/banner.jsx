import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Banner() {
  return (
    <>
      <section className="main-slider">
        <div className="relative overflow-hidden">
          <div className="main-slider__bg">
            <img
              src="/assets/banner.png"
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="container mx-auto px-4 ">
            <div className="flex flex-wrap">
              <div className="w-full">
                <div className="main-slider__content banner-info">
                  <div className="main-slider__sub-title-box">
                    <p className="main-slider__sub-title">
                      Premium Quality Guaranteed
                    </p>
                  </div>
                  <h2 className="main-slider__title">
                    Pure <span>Himalayan Salt</span> <br /> & Finest{" "}
                    <span>Basmati Rice</span>
                  </h2>
                  <p className="main-slider__text">
                    Offering 100% natural Himalayan salt and the finest grade
                    Basmati rice, sourced and processed with the highest
                    standards.
                  </p>
                  <div className="main-slider__btn-and-call-box">
                    <div className="main-slider__btn-box">
                      <a href="/products" className="thm-btn main-slider__btn">
                        Explore Products
                        <span className="!relative">
                          <FontAwesomeIcon icon={faArrowRight} className="absolute h-5 top-[15px] left-[15px]" />
                        </span>
                      </a>
                    </div>
                    <div className="main-slider__call">
                      <div className="main-slider__call-icon">
                        <span className="icon-phone"></span>
                      </div>
                      <div className="main-slider__call-number">
                        <p>Have Questions?</p>
                        <h5>
                          <a href="tel:+1234567890">+92 300 4284563</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 banner-info-mobile py-10">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="main-slider__content">
              <div className="main-slider__sub-title-box">
                <p className="main-slider__sub-title">
                  Premium Quality Guaranteed
                </p>
              </div>
              <h2 className="main-slider__title">
                Pure Himalayan Salt <br /> & Finest{" "}
                Basmati Rice
              </h2>
              <p className="main-slider__text">
                Offering 100% natural Himalayan salt and the finest grade
                Basmati rice, sourced and processed with the highest standards.
              </p>
              <div className="main-slider__btn-and-call-box">
                <div className="main-slider__btn-box">
                  <a href="/products" className="thm-btn main-slider__btn">
                    Explore Products
                    <span className="!relative">
                      <FontAwesomeIcon icon={faArrowRight} className="absolute h-5 top-[15px] left-[15px]" />
                    </span>
                  </a>
                </div>
                <div className="main-slider__call">
                  <div className="main-slider__call-icon">
                    <span className="icon-phone"></span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
