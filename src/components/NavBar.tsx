"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import HamburgerIcon from "./icons/HamburgerIcon";
import CloseIcon from "./icons/CloseIcon";

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
      className={`${
        isAtTop ? "bg-black" : "bg-transparent"
      } fixed w-full top-0 left-0 z-50 transition-colors duration-250 ease-in-out`}
    >
      <div className="max-w-7xl m-0 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <Link
                href="/"
                className={`flex items-center space-x-3 ${
                  isAtTop ? "text-white" : "hidden"
                }`}
              >
                <Image
                  src="/vercel.svg"
                  width={50}
                  height={50}
                  alt="Company logo"
                />
                <span className="text-md">
                  Empowering Digital Futures
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink>Sample link</NavigationMenuLink>
                      <NavigationMenuLink>Sample page</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href={"/contact-us"} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Contact Us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-inset focus:ring-white"
              onClick={() => toggleNavBar()}
            >
              {isClicked === false ? <HamburgerIcon /> : <CloseIcon />}
            </button>
          </div>
        </div>
      </div>
      {isClicked && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Sample link</NavigationMenuLink>
                  <NavigationMenuLink>Sample page</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href={"/contact-us"} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
