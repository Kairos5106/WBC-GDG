"use client"

import { Container, Section } from "@/components/ds";
import Introduction from "./Introduction";
import { PictureCarousel } from "./PictureCarousel";
import { ButtonPrimary } from "./ButtonPrimary";

// import { Button } from "@/components/ui/button"
// import VariableFontHoverByLetter from "@/fancy/components/text/variable-font-hover-by-letter";
// import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
// import Link from "next/link";
// import RotatingTexts from "@/components/RotatingTexts";

const Header = () => {
  // const rotateTextsArr: string[] = [
  //   "inspiration",
  //   "innovation",
  //   "impact"
  // ];
  const images = [
    "/home-page-header/header-1.jpg",
    "/home-page-header/header-2.jpg",
    "/home-page-header/header-3.jpg",
  ];
  return (
    <Section className="bg-brand-background">
      <Container 
        className={`
          h-fit pt-[4rem]
      `}>
        <div 
          className={`
            px-4 pb-8 bg-gray-100 shadow-md grid grid-cols-1 border-b-2 border-b-rich-black
            mobile-lg:px-8 mobile-lg:pt-12
            tablet:-mx-2
            laptop:mt-18 laptop:mx-4
        `}>
          <div 
            className={`
              grid grid-cols-1 gap-3
              laptop:grid-cols-2 laptop:gap-6
          `}> 
            <div
              className={`
                flex flex-col justify-between h-full
            `}>
              <Introduction />
              <ButtonPrimary 
                text="Browse resources" 
                className={`
                  mt-3 mb-1
              `}/>
            </div>
            <PictureCarousel 
              className={`
                laptop:pt-9
              `}
              imageSrc={images}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Header;

