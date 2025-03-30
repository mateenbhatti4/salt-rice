import React from "react";
import FaqSection from "../components/Contact/faqSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const page = () => {
  return (
    <>
      <section className="contact-one">
        <div className="container mx-auto px-4">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Contact us</span>
            </div>
            <h2 className="section-title__title">Get in Touch With Us</h2>
          </div>
          <div className="contact-one__inner">
            <ul className="contact-one__contact-list list-none grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <li className="flex items-start space-x-4 p-4 rounded-lg">
                <div className="icon">
                  <span className="!relative">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="absolute h-5 top-[-8px] left-[-8px]"
                    />
                  </span>
                </div>
                <div className="content">
                  <h3 className="text-lg font-semibold">Let's Talk</h3>
                  <p>
                    Phone number:{" "}
                    <a href="tel:+923004284563" className="text-blue-500">
                      +92 300 4284563
                    </a>
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4 p-4 rounded-lg">
                <div className="icon">
                  <span className="!relative">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="absolute h-5 top-[-8px] left-[-8px]"
                    />
                  </span>
                </div>
                <div className="content">
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p>Plot 423, Block A-1, Gulberg Lahore</p>
                </div>
              </li>

              <li className="flex items-start space-x-4 p-4rounded-lg">
                <div className="icon">
                  <span className="!relative">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="absolute h-5 top-[-8px] left-[-8px]"
                    />
                  </span>
                </div>
                <div className="content">
                  <h3 className="text-lg font-semibold">Send us an Email</h3>
                  <p>
                    <a
                      href="mailto:info@saltngrains.com"
                      className="text-blue-500"
                    >
                      info@saltngrains.com
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contact-two">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="contact-two__left">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">Contact</span>
                </div>
                <h2 className="section-title__title">Get Touch Here</h2>
              </div>
              <form
                className="contact-form-validated contact-two__form"
                action="assets/inc/sendemail.php"
                method="post"
                noValidate="noValidate"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="contact-two__input-box">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required=""
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="contact-two__input-box">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      required=""
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="contact-two__input-box col-span-2">
                    <input
                      type="text"
                      name="text"
                      placeholder="Subject"
                      required=""
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="contact-two__input-box col-span-2">
                    <textarea
                      name="message"
                      placeholder="Message"
                      className="w-full p-2 border rounded"
                    ></textarea>
                  </div>
                  <div className="col-span-2">
                    <div className="contact-two__btn-box">
                      <button
                        type="submit"
                        className="thm-btn contact-two__btn"
                      >
                        Submit Now
                        <span className="!relative">
                          <FontAwesomeIcon
                            icon={faAnglesRight}
                            className="absolute h-5 top-[15px] left-[15px]"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="result"></div>
            </div>
          </div>
        </div>
      </section>

      {/* <FaqSection /> */}
    </>
  );
};

export default page;
