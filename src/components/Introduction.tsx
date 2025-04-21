import React from "react";
import ClickableCard from "./ClickableCard";
import { BookOpenIcon } from "@heroicons/react/24/solid";

export default function Introduction() {
  return (
    <div 
      className={`
        block pt-16
      `}
    >
      <h1 className={`
        font-bold text-3xl/8 pb-3
        tablet:text-4xl/8 
      `}>Resources for the underserved.</h1>

      <h2 className={`
        text-gray-500 text-md pb-3
        tablet:text-lg
      `}>Helping communities thrive in the digital age by bringing them closer to technology</h2>

      <div className="grid grid-cols-1 gap-3">
        <ClickableCard 
          href="/"
          title="Cat 1"
          description="Get information about your local community"
          icon={
            <BookOpenIcon 
              width={20}
              className={`
                tablet:w-[24px]
              `}
          />}
        />
        <ClickableCard 
          href="/"
          title="Cat 2"
          description="Browse a collection of free resources"
          icon={
            <BookOpenIcon 
              width={20}
              className={`
                tablet:w-[24px]
              `}
          />}
        />
      </div>
    </div>
  );
}