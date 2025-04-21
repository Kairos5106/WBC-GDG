"use client";

import React, { useState, useEffect } from "react";
import NavBarContents from "./NavBarContents";
import HamburgerIcon from "./icons/HamburgerIcon";
import CloseIcon from "./icons/CloseIcon";
import NavBarLogo from "./NavBarLogo";

function NavBar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Check position on initial load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleNavBar() {
    setIsClicked(!isClicked);
  }

  return (
    <nav
      className={`fixed w-screen top-0 left-0 z-50 transition-colors duration-250 ease-in-out`}
    >
      <div 
        className={`
          mx-4 border-b-2 border-white
          mobile-lg:mx-4
          laptop:mx-10 laptop:border-b-4
      `}>
        <div className={`
        ${( isAtTop || isClicked ) ? "bg-brand-primary" : "bg-rich-black/50"
        } mx-auto px-4 
          sm:px-6 
          laptop:px-16 laptop:py-4
          transition-colors duration-500 ease-in-out
        `}>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <NavBarLogo />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <NavBarContents className="flex justify-center items-center gap-2" />
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <div className="p-0.25 bg-brand-primary"> {/* Box behind hamburger */}
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-inset focus:ring-white"
                  onClick={() => toggleNavBar()}
                >
                  {!isClicked ? (
                    <HamburgerIcon className="" />
                    ) : (
                    <CloseIcon className=""/>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Where the navbar is rendered in mobile view */}
      {isClicked && (
        <div className="md:hidden mx-4 pt-2 pb-3 space-y-1 sm:px-3">
          <NavBarContents 
            className="grid grid-cols-[1.0fr_1.0fr] gap-4 w-full p-2" 
          />
        </div>
      )}
    </nav>
  );
}

export default NavBar;