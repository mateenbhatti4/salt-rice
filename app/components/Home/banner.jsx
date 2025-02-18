import React from 'react';

function Banner() {
  return (
    <section className="main-slider">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="main-slider__content">
              <div className="main-slider__sub-title-box">
                <div className="main-slider__sub-title-icon">
                  <img src="#" alt="" />
                </div>
                <p className="main-slider__sub-title">Best shipping</p>
              </div>
              <h2 className="main-slider__title">Reliable <span>Responsive</span> <br /> Driven
                Logistics</h2>
              <p className="main-slider__text">We have been operating for over a decade, providing
                top-notch services to <br /> our clients and building a strong track record in
                the industry.
              </p>
              <div className="main-slider__btn-and-call-box">
                <div className="main-slider__btn-box">
                  <a href="about.html" className="thm-btn main-slider__btn">Read
                    more<span></span></a>
                </div>
                <div className="main-slider__call">
                  <div className="main-slider__call-icon">
                    <span className="icon-phone"></span>
                  </div>
                  <div className="main-slider__call-number">
                    <p>Need help?</p>
                    <h5><a href="tel:307555-0133">(307) 555-0133</a></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
