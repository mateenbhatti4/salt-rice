import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <footer className="site-footer-two">
      <div className="container mx-auto">
        <div className="site-footer-two__top">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3">
              <div className="site-footer-two__top-left">
                <h3 className="site-footer-two__top-title">
                  Subscribe to <span>Newsletter</span>
                </h3>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="site-footer-two__top-right">
                <form
                  className="footer-widget__newsletter-form mc-form"
                  data-url="MC_FORM_URL"
                  noValidate
                >
                  <div className="footer-widget__newsletter-form-input-box">
                    <input
                      type="email"
                      placeholder="Your e-mail"
                      name="EMAIL"
                      className="border rounded p-2"
                    />
                    <button
                      type="submit"
                      className="footer-widget__newsletter-btn"
                    >
                      <span className="icon-paper-plane">
                        <FontAwesomeIcon icon={faPaperPlane} />
                      </span>
                    </button>
                  </div>
                </form>
                <div className="mc-form__response"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer-two__middle">
          <div className="flex flex-wrap">
            <div
              className="w-full md:w-2/5 lg:w-1/3 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="footer-widget-two__column footer-widget-two__about">
                <div className="footer-widget-two__logo">
                  <a href="index.html">
                    <img
                      src="assets/logo/saltn-rice.png"
                      alt=""
                      className="h-[115px] w-[230px]"
                    />
                  </a>
                </div>
                <p className="footer-widget-two__text">
                  Global suppliers of nutrient-rich Himalayan salt and premium
                  rice, promoting health and sustainability.
                </p>
                <div className="footer-widget-two__social">
                  <a href="#">
                    <span className="icon-facebook-f">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </span>
                  </a>
                  <a href="#">
                    <span className="icon-instagram">
                      <FontAwesomeIcon icon={faInstagram} />
                    </span>
                  </a>
                  {/* <a href="#">
                    <span className="icon-Vector"></span>
                  </a>
                  <a href="#">
                    <span className="icon-linkedin-in"></span>
                  </a> */}
                </div>
              </div>
            </div>
            <div
              className="w-full md:w-2/5 lg:w-1/3 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="footer-widget__column footer-widget-two__services md:mt-0 mt-10">
                <ul className="footer-widget-two__services-list list-unstyled">
                  <div className="footer-widget-two__title-box">
                    <h3 className="footer-widget-two__title">Quick Links</h3>
                  </div>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/salt">Salt</a>
                  </li>
                  <li>
                    <a href="/rice">Rice</a>
                  </li>
                  <li>
                    <a href="/factory_tour">Factory Tour</a>
                  </li>
                  <li className="terms-policy !hidden">
                    <a href="/">Terms & Condition</a>
                  </li>
                  <li className="terms-policy !hidden">
                    <a href="/">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="w-full md:w-1/3 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="footer-widget-two__column footer-widget-two__contact lg:mt-0 mt-10">
                <ul className="footer-widget__about-contact list-unstyled">
                  <div className="footer-widget-two__title-box">
                    <h3 className="footer-widget-two__title">Contact</h3>
                  </div>
                  <li>
                    <div className="icon">
                      <span className="icon-envolop email-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                    <p>
                      <a href="mailto:info@saltngrains.com">
                        info@saltngrains.com
                      </a>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-location location-icon">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                    </div>
                    <p>Plot 423, Block A-1, Gulberg Lahore</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-call phone-call">
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                    </div>
                    <p>
                      <a href="tel:+923004284563">+92 300 4284563</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer-two__bottom">
        <div className="container mx-auto">
          <div className="site-footer-two__bottom-inner">
            <p className="site-footer-two__bottom-text">
              © Copyright 2025 | All Rights Reserved
            </p>
            <ul className="list-unstyled site-footer-two__bottom-menu">
              <li>
                <a href="/">Terms & Condition</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
