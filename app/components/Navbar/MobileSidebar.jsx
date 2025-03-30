import React, { useState } from "react";

const MobileSidebar = ({ navItems }) => {
  const [expandedDropdowns, setExpandedDropdowns] = useState(new Set());

  const toggleDropdown = (dropdownId) => {
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

  const renderNavItems = (items) => {
    return items.map((item, index) => (
      <li key={index} className={`dropdown ${item.dropdown ? (expandedDropdowns.has(item.name.toLowerCase()) ? "expanded" : "") : ""}`}>
        <a href={item.href}>
          {item.name}
        </a>
        {item.dropdown && (
          <>
            <button
              aria-label="dropdown toggler"
              className="mobile"
            >
              +
            </button>
            <ul>
              {item.dropdown.map((subItem, subIndex) => (
                <li key={subIndex} className={`dropdown ${subItem.subItems ? "dropdown" : ""}`}>
                  <a href={subItem.href}>{subItem.name}</a>
                  {subItem.subItems && (
                    <>
                      <button
                        aria-label="nested dropdown toggler"
                        className="mobile"
                      >
                        +
                      </button>
                      <ul>
                        {subItem.subItems.map((subSubItem, subSubIndex) => (
                          <li key={subSubIndex}>
                            <a href={subSubItem.href}>{subSubItem.name}</a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </li>
    ));
  };

  return (
    <div className="mobile-nav__wrapper">
      <ul className="mobile-nav__list">
        {renderNavItems(navItems)}
      </ul>
    </div>
  );
};

export default MobileSidebar; 