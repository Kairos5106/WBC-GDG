import React from "react";
import ClickableCard from "./ClickableCard";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import RotatingTexts from "./RotatingTexts";
import { cn } from "@/lib/utils";
import { resourceTypes } from "@/data/resources";
import slugify from "./utils/slugify";
interface IntroProps {
  rotatingTextsArr: string[]
}

export default function Introduction({
  rotatingTextsArr
}: IntroProps) {
  return (
    <div
      className={`
        block pt-16
      `}
    >
      <div
        className={cn(
          "flex flex-col pb-4 gap-4 items-start",
          "tablet:flex-row tablet:gap-2",
          "laptop:flex-col laptop:gap-4",
          "laptop-lg:flex-row laptop-lg:gap-2"
        )}
      >
        <h1 className="font-bold text-3xl/8 tablet:text-4xl/8 ">
          Resources for
        </h1>
        <RotatingTexts
          className={`
            font-bold text-3xl/8 -m-2
            tablet:text-4xl/8 
          `}
          textBefore=""
          rotatingTextsArr={rotatingTextsArr}
          backgroundColor="brand-primary"
        />
      </div>
      <h2
        className={`
        text-gray-500 text-md pb-3
        tablet:text-lg
      `}
      >
        Helping communities thrive in the digital age by bringing them closer to
        technology
      </h2>

      <div className="grid grid-cols-1 gap-3">
        {resourceTypes.map((resourceType, index) => (
          <ClickableCard
            key={index}
            href={`/resources?category=${slugify(resourceType)}`}
            title={resourceType}
            description=""
            icon={
              <BookOpenIcon
                width={20}
                className={`
                    tablet:w-[24px]
                  `}
              />
            }
          />
        ))}
      </div>
    </div>
  );
}