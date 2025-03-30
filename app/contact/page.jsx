import React from "react";
import FaqSection from "../components/Contact/faqSection";

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
                  <span className="icon-call"></span>
                </div>
                <div className="content">
                  <h3 className="text-lg font-semibold">Let's Talk</h3>
                  <p>
                    Phone number:{" "}
                    <a href="tel:32566800890" className="text-blue-500">
                      +32566 - 800 - 890
                    </a>
                  </p>
                  <p>
                    Fax:{" "}
                    <a href="tel:123458963007" className="text-blue-500">
                      1234 - 58963 - 007
                    </a>
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4 p-4 rounded-lg">
                <div className="icon">
                  <span className="icon-location"></span>
                </div>
                <div className="content">
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p>
                    Dhaka 102, 8000 Sent Behavior <br /> Road 45, House of
                    Street
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4 p-4rounded-lg">
                <div className="icon">
                  <span className="icon-envelope"></span>
                </div>
                <div className="content">
                  <h3 className="text-lg font-semibold">Send us an Email</h3>
                  <p>
                    <a
                      href="mailto:nafizislam1223@gmail.com"
                      className="text-blue-500"
                    >
                      nafizislam1223@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:demo23@gmail.com" className="text-blue-500">
                      demo23@gmail.com
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
                <div className="row">
                    <div className="col-xl-7">
                        <div className="contact-two__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Contact</span>
                                </div>
                                <h2 className="section-title__title">Get Touch Here</h2>
                            </div>
                            <form className="contact-form-validated contact-two__form" action="assets/inc/sendemail.php"
                                method="post" noValidate="noValidate">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="contact-two__input-box">
                                            <input type="text" name="name" placeholder="Name" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="contact-two__input-box">
                                            <input type="email" name="email" placeholder="E-mail" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12">
                                        <div className="contact-two__input-box">
                                            <input type="text" name="text" placeholder="Subject" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-two__input-box text-message-box">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className=" col-xl-12">
                                        <div className="contact-two__btn-box">
                                            <button type="submit" className="thm-btn contact-two__btn">Submit
                                                Now<span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

      {/* <FaqSection /> */}
    </>
  );
};

export default page;
