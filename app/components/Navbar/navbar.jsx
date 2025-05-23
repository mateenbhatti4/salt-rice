"use client";
import { faXmark, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 

function Navbar() {
  const [isMobileNavExpanded, setIsMobileNavExpanded] = useState(false);
  const [expandedDropdowns, setExpandedDropdowns] = useState(new Set());

  const toggleMobileNav = (e) => {
    e.preventDefault();
    setIsMobileNavExpanded((prev) => !prev);
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
      const stickyHeaders = document.getElementsByClassName("stricked-menu");
      if (stickyHeaders.length > 0) {
        const stickyHeader = stickyHeaders[0];
        stickyHeader.classList.toggle("stricky-fixed", window.scrollY > 100);
      }
    };

    const populateMobileNav = () => {
      const navContent = document.querySelector(".main-menu__list")?.outerHTML;
      const mobileNavContainer = document.querySelector(
        ".mobile-nav__container"
      );
      if (navContent && mobileNavContainer) {
        mobileNavContainer.innerHTML = navContent;

        // Change display of dropdowns from none to block
        const dropdowns = mobileNavContainer.querySelectorAll(
          ".main-menu__list > li > ul"
        );
        dropdowns.forEach((dropdown) => {
          dropdown.style.display = "block"; // Change display to block
        });

        // Change display of nested dropdowns from none to block
        const nestedDropdowns = mobileNavContainer.querySelectorAll(
          ".main-menu__list > li > ul > li > ul"
        );
        nestedDropdowns.forEach((nestedDropdown) => {
          nestedDropdown.style.display = "block"; // Change display to block
        });
      }
    };

    const populateStickyHeader = () => {
      const navContent = document.querySelector(".main-menu")?.innerHTML;
      const stickyHeaderContainer = document.querySelector(
        ".sticky-header__content"
      );
      if (navContent && stickyHeaderContainer) {
        // Create a MutationObserver to watch for changes
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList' || mutation.type === 'characterData') {
              const updatedContent = document.querySelector(".main-menu")?.innerHTML;
              if (updatedContent) {
                // Update sticky header content
                stickyHeaderContainer.innerHTML = updatedContent;
                
                // Update classes for active links
                const mainMenuLinks = document.querySelectorAll(".main-menu__list dropdown a");
                const stickyHeaderLinks = stickyHeaderContainer.querySelectorAll("a");
                
                mainMenuLinks.forEach((mainLink, index) => {
                  const stickyLink = stickyHeaderLinks[index];
                  if (stickyLink) {
                    // Copy all classes from main menu link to sticky header link
                    stickyLink.className = mainLink.className;
                  }
                });
              }
            }
          });
        });

        // Start observing the main menu for changes
        const mainMenu = document.querySelector(".main-menu");
        if (mainMenu) {
          observer.observe(mainMenu, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: true,
            attributeFilter: ['class']
          });
        }
        // Initial content population
        stickyHeaderContainer.innerHTML = navContent;
        
        // Initial class synchronization
        const mainMenuLinks = document.querySelectorAll(".main-menu a");
        const stickyHeaderLinks = stickyHeaderContainer.querySelectorAll("a");
        
        mainMenuLinks.forEach((mainLink, index) => {
          const stickyLink = stickyHeaderLinks[index];
          if (stickyLink) {
            stickyLink.className = mainLink.className;
          }
        });
      }
    };

    populateMobileNav();
    populateStickyHeader();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [usePathname()]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Salt",
      href: "/salt",
      dropdown: [
        {
          name: "Salt Lamps",
          href: "/salt-lamp",
          icon: "^",
          subItems: [
            { name: "Geometric Salt Lamp", href: "/salt-lamp/geometrical" },
            { name: "Animal Salt Lamp", href: "/salt-lamp/animal" },
          ],
        },
        { name: "Salt Tiles", href: "/salt-tile" },
        {
          name: "Edible Rock Salt",
          href: "/edible-salt",
          icon: "^",
          subItems: [
            { name: "Edible Salt Jars", href: "/edible-salt/jars" },
            { name: "Edible Salt Pouches", href: "/edible-salt/pouches" },
          ],
        },
        { name: "Salt Cooking Block", href: "/salt_block" },
        { name: "Animal Lick Salt", href: "/animal_lick_salt" },
        { name: "Bath Salt", href: "/bath_salt" },
        { name: "Salt Crockery", href: "/salt_crockery" },
        {
          name: "Aroma Therapy Salt Lamps",
          icon: "^",
          href: "/aroma",
        },
        { name: "Salt Candle Holder", href: "/salt_candle_holder" },
      ],
    },
    { name: "Rice", href: "/rice" },
    // { name: "Certifications", href: "/certifications" },
    { name: "Factory Tour", href: "/factory_tour" },
  ];

  const renderNavItems = (items) => {
    return items.map((item, index) => (
      <li
        key={item.name}
        className={`dropdown ${
          item.dropdown
            ? expandedDropdowns.has(item.name.toLowerCase())
              ? "expanded"
              : ""
            : ""
        }`}
      >
        <Link 
          href={item.href}
          className={`${usePathname() === item.href ? 'color' : ''}`}
        >
          {item.name}
          {/* {item.dropdown && (
            <button
              aria-label="dropdown toggler"
              className="mobile"
              onClick={(e) => toggleDropdown(e, item.name.toLowerCase())}
            >
              <i className={`fa fa-angle-down ${expandedDropdowns.has(item.name.toLowerCase()) ? "expanded" : ""}`}></i>
            </button>
          )} */}
        </Link>
        {item.dropdown && (
          <ul>
            {item.dropdown.map((subItem, subIndex) => (
              <li
                key={subIndex}
                className={`dropdown ${subItem.subItems ? "dropdown" : ""}`}
              >
                <Link href={subItem.href} >{subItem.name}</Link>
                {/* {console.log(subItem.href)} */}
                {subItem.subItems && (
                  <ul>
                    {subItem.subItems.map((subSubItem, subSubIndex) => (
                      <li key={subSubIndex}>
                        <a href={subSubItem.href}>{subSubItem.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <div className="">
      <header className="main-header">
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="container mx-auto">
              <div className="main-menu__wrapper-inner h-[120px]">
                <div className="">
                  <a href="/">
                    <img
                      src="/assets/logo/saltn-rice.png"
                      alt="logo"
                      className="h-[80px] w-[150px]"
                    />
                  </a>
                </div>
                <div className="main-menu__left">
                  <div className="">
                    {/* <a href="/">
                      <img src="/assets/logo/salt-n-rice.png" alt="logo" className="h-[80px] w-[145px]"/>
                    </a> */}
                  </div>
                  <div className="main-menu__main-menu-box">
                    <a
                      href="#"
                      className="mobile-nav__toggler"
                      onClick={toggleMobileNav}
                    >
                      <div className="main-menu__nav-sidebar-icon !mr-0">
                        <span className="icon-dots-menu-one"></span>
                        <span className="icon-dots-menu-two"></span>
                        <span className="icon-dots-menu-three"></span>
                      </div>
                    </a>
                    <ul
                      className="main-menu__list"
                      key={`main-menu-list-${navItems
                        .map((item) => item.name)
                        .join("-")}`}
                    >
                      {renderNavItems(navItems)}
                    </ul>
                  </div>
                </div>
                <div className="main-menu__right">
                  <div className="main-menu__search-nav-sidebar-btn-box">
                    <div className="main-menu__btn-box md:block">
                      <a href="/contact" className="thm-btn main-menu__btn">
                        Contact Us
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
              <FontAwesomeIcon icon={faXmark} />
            </span>
            <div className="logo-box">
              <Link href="/">
                <img
                  src="/assets/logo/saltn-rice-v2.png"
                  alt="logo"
                  className="h-[80px] w-[150px]"
                />
              </Link>
            </div>
            <div className="mobile-nav__container">
              {/* Mobile navigation items can be rendered here if needed */}
            </div>
            <div className="main-menu__search-nav-sidebar-btn-box mt-5">
              <div className="main-menu__btn-box md:block">
                <a href="/contact" className="thm-btn main-menu__btn">
                  Contact Us
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
      </header>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
    </div>
  );
}

export default Navbar;
