import React from "react";
import ClickableCard from "./ClickableCard";
import RotatingTexts from "./RotatingTexts";
import { cn } from "@/lib/utils";
import { resourceTypes } from "@/data/resources";
import slugify from "./utils/slugify";
import Link from "next/link";
import ComesInGoesOutUnderline from "@/fancy/components/text/underline-comes-in-goes-out";
import { CalendarSearch, Landmark, Stethoscope } from "lucide-react";
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
      <nav className="flex items-center gap-2 text-gray-600 mb-8">
        <Link href="/" className="bg-brand-primary text-white px-3 py-1">
          <ComesInGoesOutUnderline label="Home" />
        </Link>
      </nav>
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
        <ClickableCard
          href={`/resources?category=${slugify(resourceTypes[0])}`}
          title={resourceTypes[0]}
          description=""
          icon={
            <div
              className="p-1.5 rounded"
              style={{ backgroundColor: "var(--color-service-600)" }}
            >
              <Landmark className="h-3 w-3 text-white" />
            </div>
          }
        />
        <ClickableCard
          href={`/resources?category=${slugify(resourceTypes[1])}`}
          title={resourceTypes[1]}
          description=""
          icon={
            <div
              className="p-1.5 rounded"
              style={{ backgroundColor: "var(--color-healthcare-600)" }}
            >
              <Stethoscope className="h-3 w-3 text-white" />
            </div>
          }
        />
        <ClickableCard
          href={`/resources?category=${slugify(resourceTypes[2])}`}
          title={resourceTypes[2]}
          description=""
          icon={
            <div
              className="p-1.5 rounded"
              style={{ backgroundColor: "var(--color-event-600)" }}
            >
              <CalendarSearch className="h-3 w-3 text-white" />
            </div>
          }
        />
      </div>
    </div>
  );
}