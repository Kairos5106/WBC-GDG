"use client"

import { FC } from "react";

import { LayoutGroup, motion } from "motion/react";

import TextRotate from "@/fancy/components/text/text-rotate";

interface RotatingTextsProps {
  textBefore: string,
  rotatingTextsArr: string[],
  backgroundColor: string,
  className?: string
};

const RotatingTexts: FC<RotatingTextsProps> = ({
  textBefore,
  rotatingTextsArr,
  backgroundColor = "black",
  className
}) => {
  return (
    <div className={className}>
      <LayoutGroup>
        <motion.p className="flex whitespace-pre" layout>
          <motion.span
            className="pt-0.5 sm:pt-1 md:pt-2"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            {textBefore}{" "}
          </motion.span>
          <TextRotate
            texts={rotatingTextsArr}
            mainClassName={`text-white px-2 sm:px-2 md:px-3 bg-${backgroundColor} overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg`}
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </motion.p>
      </LayoutGroup>
    </div>
  )
}

export default RotatingTexts;