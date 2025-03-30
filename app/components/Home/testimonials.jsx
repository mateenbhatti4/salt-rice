"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import teamData from "@/data/teamData.json"; // Import JSON directly
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data to ensure hydration matches
    setData(teamData);
  }, []);

  return (
    <section className="team-one">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="team-one__top flex justify-between items-center">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Testimonials</span>
            </div>
            <h2 className="section-title__title">
              Our Clients,
            </h2>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 1 },
            992: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {data.map((member, index) => (
            <SwiperSlide key={member.id || index}>
              <div className="testimonial-two__quote">
                <span className="icon-quote">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </span>
              </div>
              <div className="team-one__single">
                <div className="team-one__content">
                  <h3 className="team-one__title">
                    <a href="team-details.html">{member.name}</a>
                  </h3>
                  <p className="team-one__sub-title">{member.title}</p>
                  <p>{member.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Pagination */}
        <div className="swiper-pagination"></div>
      </div>

      {/* Custom Styling for Swiper Navigation */}
      <style jsx>{`
        .custom-nav {
          background-color: #c11425;
          color: white;
          border: none;
          padding: 8px 12px;
          cursor: pointer;
          border-radius: 5px;
          transition: 0.3s ease;
        }
        .custom-nav:hover {
          background-color: #a10f1e;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
