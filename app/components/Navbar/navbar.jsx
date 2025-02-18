"use client";
import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMobileNavExpanded, setIsMobileNavExpanded] = useState(false);
  const [expandedDropdowns, setExpandedDropdowns] = useState(new Set());

  const toggleMobileNav = (e) => {
    e.preventDefault();
    setIsMobileNavExpanded(!isMobileNavExpanded);
    document.body.classList.toggle("locked");
  };

  const toggleDropdown = (e, dropdownId) => {
    e.preventDefault();
    setExpandedDropdowns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(dropdownId)) {
        newSet.delete(dropdownId);
      } else {
        newSet.add(dropdownId);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const stickyHeaders = document.getElementsByClassName('stricked-menu');
      if (stickyHeaders.length > 0) {
        const stickyHeader = stickyHeaders[0];
        if (window.scrollY > 100) {
          stickyHeader.classList.add('stricky-fixed');
        } else {
          stickyHeader.classList.remove('stricky-fixed');
        }
      }
    };

    // Populate mobile navigation
    if (document.querySelector(".main-menu__list") && document.querySelector(".mobile-nav__container")) {
      try {
        let navContent = document.querySelector(".main-menu__list").outerHTML;
        let mobileNavContainer = document.querySelector(".mobile-nav__container");
        mobileNavContainer.innerHTML = navContent;
      } catch (error) {
        console.error("Error populating mobile navigation:", error);
      }
    }

    // Populate sticky header
    if (document.querySelector(".sticky-header__content")) {
      try {
        let navContent = document.querySelector(".main-menu").innerHTML;
        let stickyHeaderContainer = document.querySelector(".sticky-header__content");
        stickyHeaderContainer.innerHTML = navContent;
      } catch (error) {
        console.error("Error populating sticky header:", error);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="">
      <header className="main-header">
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="container mx-auto">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                  <div className="">
                    <a href="/">
                      <img src="/assets/logo/ktk-logo.png" alt="logo" className="h-[80px] w-[145px]"/>
                    </a>
                  </div>
                  <div className="main-menu__main-menu-box">
                    <a
                      href="#"
                      className="mobile-nav__toggler"
                      onClick={toggleMobileNav}
                    >
                      <div className="main-menu__nav-sidebar-icon">
                        <span className="icon-dots-menu-one"></span>
                        <span className="icon-dots-menu-two"></span>
                        <span className="icon-dots-menu-three"></span>
                      </div>
                    </a>
                    <ul className="main-menu__list">
                      <li
                        className={`dropdown ${
                          expandedDropdowns.has("home") ? "expanded" : ""
                        }`}
                      >
                        <a href="/">
                          Home
                          <button
                            aria-label="dropdown toggler"
                            onClick={(e) => toggleDropdown(e, "home")}
                          >
                            <i
                              className={`fa fa-angle-down ${
                                expandedDropdowns.has("home") ? "expanded" : ""
                              }`}
                            ></i>
                          </button>
                        </a>
                        <ul>
                          <li>
                            <a href="index.html">Home One</a>
                          </li>
                          <li>
                            <a href="index2.html">Home Two</a>
                          </li>
                          <li className="dropdown">
                            <a href="#">Header Styles</a>
                            <ul>
                              <li>
                                <a href="index.html">Header One</a>
                              </li>
                              <li>
                                <a href="index2.html">Header Two</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li
                        className={`dropdown ${
                          expandedDropdowns.has("pages") ? "expanded" : ""
                        }`}
                      >
                        <a href="#">
                          Pages
                          <button
                            aria-label="dropdown toggler"
                            onClick={(e) => toggleDropdown(e, "pages")}
                          >
                            <i
                              className={`fa fa-angle-down ${
                                expandedDropdowns.has("pages") ? "expanded" : ""
                              }`}
                            ></i>
                          </button>
                        </a>
                        <ul
                          style={{
                            display: expandedDropdowns.has("pages")
                              ? "block"
                              : "none",
                          }}
                        >
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-carousel.html">Team Carousel</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="testimonials.html">Testimonials</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                          <li>
                            <a href="404.html">404 Error</a>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={`dropdown ${
                          expandedDropdowns.has("services") ? "expanded" : ""
                        }`}
                      >
                        <a href="#">
                          Services
                          <button
                            aria-label="dropdown toggler"
                            onClick={(e) => toggleDropdown(e, "services")}
                          >
                            <i
                              className={`fa fa-angle-down ${
                                expandedDropdowns.has("services")
                                  ? "expanded"
                                  : ""
                              }`}
                            ></i>
                          </button>
                        </a>
                        <ul
                          style={{
                            display: expandedDropdowns.has("services")
                              ? "block"
                              : "none",
                          }}
                        >
                          <li>
                            <a href="services.html">Services</a>
                          </li>
                          <li>
                            <a href="services-carousel.html">
                              Services Carousel
                            </a>
                          </li>
                          <li>
                            <a href="express-freight-solutions.html">
                              Express Freight Solutions
                            </a>
                          </li>
                          <li>
                            <a href="quick-move-logistics.html">
                              Quick Move Logistics
                            </a>
                          </li>
                          <li>
                            <a href="speedy-dispatch.html">Speedy Dispatch</a>
                          </li>
                          <li>
                            <a href="swift-supply-chain.html">
                              Swift Supply Chain
                            </a>
                          </li>
                          <li>
                            <a href="on-point-distribution.html">
                              On Point Distribution
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={`dropdown ${
                          expandedDropdowns.has("projects") ? "expanded" : ""
                        }`}
                      >
                        <a href="#">
                          Projects
                          <button
                            aria-label="dropdown toggler"
                            onClick={(e) => toggleDropdown(e, "projects")}
                          >
                            <i
                              className={`fa fa-angle-down ${
                                expandedDropdowns.has("projects")
                                  ? "expanded"
                                  : ""
                              }`}
                            ></i>
                          </button>
                        </a>
                        <ul
                          style={{
                            display: expandedDropdowns.has("projects")
                              ? "block"
                              : "none",
                          }}
                        >
                          <li>
                            <a href="projects.html">Projects</a>
                          </li>
                          <li>
                            <a href="project-details.html">Project Details</a>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={`dropdown ${
                          expandedDropdowns.has("blog") ? "expanded" : ""
                        }`}
                      >
                        <a href="#">
                          Blog
                          <button
                            aria-label="dropdown toggler"
                            onClick={(e) => toggleDropdown(e, "blog")}
                          >
                            <i
                              className={`fa fa-angle-down ${
                                expandedDropdowns.has("blog") ? "expanded" : ""
                              }`}
                            ></i>
                          </button>
                        </a>
                        <ul
                          style={{
                            display: expandedDropdowns.has("blog")
                              ? "block"
                              : "none",
                          }}
                        >
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="main-menu__right">
                  <div className="main-menu__search-nav-sidebar-btn-box">
                    <div className="main-menu__search-box">
                      <a
                        href="#"
                        className="main-menu__search search-toggler fas fa-search"
                      ></a>
                    </div>
                    <div className="main-menu__nav-sidebar-icon">
                      <a className="navSidebar-button" href="#">
                        <span className="icon-dots-menu-one"></span>
                        <span className="icon-dots-menu-two"></span>
                        <span className="icon-dots-menu-three"></span>
                      </a>
                    </div>
                    <div className="main-menu__btn-box">
                      <a href="about.html" className="thm-btn main-menu__btn">
                        Read more<span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`mobile-nav__wrapper ${
            isMobileNavExpanded ? "expanded" : ""
          }`}
        >
          <div
            className="mobile-nav__overlay mobile-nav__toggler"
            onClick={toggleMobileNav}
          ></div>
          <div className="mobile-nav__content">
            <span
              className="mobile-nav__close mobile-nav__toggler"
              onClick={toggleMobileNav}
            >
              <i className="fa fa-times"></i>
            </span>
            <div className="logo-box">
              <a href="index.html">
                <img src="#" alt="logo" />
              </a>
            </div>
            <div className="mobile-nav__container">
              <ul className="main-menu__list">
                <li
                  className={`dropdown ${
                    expandedDropdowns.has("home") ? "expanded" : ""
                  }`}
                >
                  <a href="#">Home</a>
                  <ul>
                    <li>
                      <a href="index.html">Home One</a>
                    </li>
                    <li>
                      <a href="index2.html">Home Two</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Header Styles</a>
                      <ul>
                        <li>
                          <a href="index.html">Header One</a>
                        </li>
                        <li>
                          <a href="index2.html">Header Two</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li
                  className={`dropdown ${
                    expandedDropdowns.has("pages") ? "expanded" : ""
                  }`}
                >
                  <a href="#">
                    Pages
                    <button
                      aria-label="dropdown toggler"
                      onClick={(e) => toggleDropdown(e, "pages")}
                    >
                      <i
                        className={`fa fa-angle-down ${
                          expandedDropdowns.has("pages") ? "expanded" : ""
                        }`}
                      ></i>
                    </button>
                  </a>
                  <ul
                    style={{
                      display: expandedDropdowns.has("pages")
                        ? "block"
                        : "none",
                    }}
                  >
                    <li>
                      <a href="team.html">Team</a>
                    </li>
                    <li>
                      <a href="team-carousel.html">Team Carousel</a>
                    </li>
                    <li>
                      <a href="team-details.html">Team Details</a>
                    </li>
                    <li>
                      <a href="testimonials.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq</a>
                    </li>
                    <li>
                      <a href="404.html">404 Error</a>
                    </li>
                  </ul>
                </li>
                <li
                  className={`dropdown ${
                    expandedDropdowns.has("services") ? "expanded" : ""
                  }`}
                >
                  <a href="#">
                    Services
                    <button
                      aria-label="dropdown toggler"
                      onClick={(e) => toggleDropdown(e, "services")}
                    >
                      <i
                        className={`fa fa-angle-down ${
                          expandedDropdowns.has("services") ? "expanded" : ""
                        }`}
                      ></i>
                    </button>
                  </a>
                  <ul
                    style={{
                      display: expandedDropdowns.has("services")
                        ? "block"
                        : "none",
                    }}
                  >
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="services-carousel.html">Services Carousel</a>
                    </li>
                    <li>
                      <a href="express-freight-solutions.html">
                        Express Freight Solutions
                      </a>
                    </li>
                    <li>
                      <a href="quick-move-logistics.html">
                        Quick Move Logistics
                      </a>
                    </li>
                    <li>
                      <a href="speedy-dispatch.html">Speedy Dispatch</a>
                    </li>
                    <li>
                      <a href="swift-supply-chain.html">Swift Supply Chain</a>
                    </li>
                    <li>
                      <a href="on-point-distribution.html">
                        On Point Distribution
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className={`dropdown ${
                    expandedDropdowns.has("projects") ? "expanded" : ""
                  }`}
                >
                  <a href="#">
                    Projects
                    <button
                      aria-label="dropdown toggler"
                      onClick={(e) => toggleDropdown(e, "projects")}
                    >
                      <i
                        className={`fa fa-angle-down ${
                          expandedDropdowns.has("projects") ? "expanded" : ""
                        }`}
                      ></i>
                    </button>
                  </a>
                  <ul
                    style={{
                      display: expandedDropdowns.has("projects")
                        ? "block"
                        : "none",
                    }}
                  >
                    <li>
                      <a href="projects.html">Projects</a>
                    </li>
                    <li>
                      <a href="project-details.html">Project Details</a>
                    </li>
                  </ul>
                </li>
                <li
                  className={`dropdown ${
                    expandedDropdowns.has("blog") ? "expanded" : ""
                  }`}
                >
                  <a href="#">
                    Blog
                    <button
                      aria-label="dropdown toggler"
                      onClick={(e) => toggleDropdown(e, "blog")}
                    >
                      <i
                        className={`fa fa-angle-down ${
                          expandedDropdowns.has("blog") ? "expanded" : ""
                        }`}
                      ></i>
                    </button>
                  </a>
                  <ul
                    style={{
                      display: expandedDropdowns.has("blog") ? "block" : "none",
                    }}
                  >
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
    </div>
  );
}

export default Navbar;
