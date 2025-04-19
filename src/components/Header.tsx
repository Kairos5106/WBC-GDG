"use client"

import { Container, Section } from "@/components/ds";
import { Button } from "@/components/ui/button"
import VariableFontHoverByLetter from "@/fancy/components/text/variable-font-hover-by-letter";
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import RotatingTexts from "@/components/RotatingTexts";

const Header = () => {
  const rotateTextsArr: string[] = [
    "inspiration",
    "innovation",
    "impact"
  ];
  return (
    <Section className="bg-stone-50">
      <Container className="flex flex-col h-screen w-full">
        <video
          autoPlay
          playsInline
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/header.mp4" />
        </video>

        <div className="relative z-10 flex items-center justify-center h-100 w-full bg-black/40 mt-32">
          <div className="text-center text-white">
            <VariableFontHoverByLetter
              label="Welcome to Our Site"
              fromFontVariationSettings="'wght' 100, 'slnt' 0"
              toFontVariationSettings="'wght' 700, 'slnt' 5"
              className="text-4xl md:text-6xl font-bold"
            />

            <RotatingTexts 
              textBefore="Experience"
              rotatingTextsArr={rotateTextsArr}
              className="flex justify-center p-4 text-2xl"
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-14 sm:mt-0 sm:p-0 ">
          <div className="grid sm:grid-cols-2 items-center justify-between pt-3 sm:pt-16 z-15">
            <Button
              variant="ghost"
              className="text-white text-2xl font-light p-10 cursor-pointer"
            >
              Get a Booking
            </Button>
            <Button
              variant="ghost"
              className="text-white text-2xl font-light p-10 cursor-pointer"
            >
              <Link href="/contact-us" className="flex items-center gap-4">
                Learn More <ArrowUpRightIcon className="w-8 hidden sm:block" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Header;

