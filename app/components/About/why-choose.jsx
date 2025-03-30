import React from "react";
import industries from "@/data/whychoose.json";

function WhyChoose() {
  return (
    <>
      <section className="process-one">
        <div className="container mx-auto px-4">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">
                Industries We Serve
              </span>
            </div>
            <h2 className="section-title__title">Why Choose Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Dynamically Rendering Industry Cards */}
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className="wow fadeInUp"
                data-wow-delay={`${index * 100}ms`}
              >
                <div className="process-one__single min-h-24">
                  <div className="process-one__count"></div>
                  <h3 className="process-one__title">{industry.industry}</h3>
                  <div className="process-one__icon-and-text">
                    <div className="icon">
                      <span className={industry.icon}></span>
                    </div>
                    <p>{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Explore our catalog, request a quote, or ask how Himalayan salt and
            rice can elevate your business. Let's bring nature's best to your
            table.
          </p>
          <div className="main-menu__search-nav-sidebar-btn-box">
            <div className="main-menu__btn-box md:block">
              <a href="/contact" className="thm-btn main-menu__btn">
                Contact Us
                <span className="!relative">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    className="svg-inline--fa fa-arrow-right absolute h-5 top-[15px] left-[15px]"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChoose;
