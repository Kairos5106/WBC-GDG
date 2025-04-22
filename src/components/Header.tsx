"use client"

import { Container, Section } from "@/components/ds";
import Introduction from "./Introduction";
import { PictureCarousel } from "./PictureCarousel";
import { Button } from "./ui/button";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  const rotatingTextsArr = [
    "seniors & elders.",
    "those in need.",
    "the underserved.",
    "the community.",
    "those left behind.",
    "new tech users.",
  ]

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
              <Introduction 
                rotatingTextsArr={rotatingTextsArr}
              />
              <Button
                variant="primary"
                asChild
              >
                <Link href="/resource/1">
                  Browse resources
                  <ArrowRightEndOnRectangleIcon 
                    className={`
                      size-[20px]
                      tablet:size-[24px] tablet:mt-0.5
                    `}
                  />
                </Link>
              </Button>
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

