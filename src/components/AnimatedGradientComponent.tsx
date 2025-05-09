"use client"

import React from "react"
import { motion } from "motion/react"

import AnimatedGradient from "@/fancy/components/background/animated-gradient-with-svg"
import { Section } from "./ds"

interface BentoCardProps {
  title: string
  value: string | number
  subtitle?: string
  colors: string[]
  delay: number
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  value,
  subtitle,
  colors,
  delay,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className="relative overflow-hidden h-full bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <AnimatedGradient colors={colors} speed={15} blur="medium" />
      <motion.div
        className="relative z-10 p-3 sm:p-5 md:p-8 text-foreground dark:text-muted"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h3 className="text-sm sm:text-base md:text-lg" variants={item}>
          {title}
        </motion.h3>
        <motion.p
          className="text-2xl sm:text-4xl md:text-5xl font-medium mb-4"
          variants={item}
        >
          {value}
        </motion.p>
        {subtitle && (
          <motion.p className="text-sm opacity-80" variants={item}>
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  )
}

const AnimatedGradientComponent: React.FC = () => {
  return (
    <Section className="h-screen">
      <div className="w-full bg-background h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 grow h-full">
          <div className="md:col-span-2">
            <BentoCard
              title="Seniors Without Internet Access"
              value="27%"
              subtitle="Roughly 1 in 4 seniors in the U.S. lack internet access at home (Pew Research)"
              colors={["#F5FFF5", "#EBFEEA", "#D7FED5"]}
              delay={0.2}
            />
          </div>
          <BentoCard
            title="Low-Income Digital Divide"
            value="38%"
            subtitle="Over one-third of low-income households lack a reliable computer or broadband"
            colors={["#9CFC97", "#7DCA79", "#5E975B"]}
            delay={0.4}
          />
          <BentoCard
            title="Digital Literacy Support"
            value="+1,200"
            subtitle="People empowered through HelpingHand community guides and in-person sessions"
            colors={["#B0FDAC", "#89B586", "#6BA368"]}
            delay={0.6}
          />
          <div className="md:col-span-2">
            <BentoCard
              title="Local Resource Listings"
              value="320+"
              subtitle="Curated services including healthcare, transportation, and digital help centers"
              colors={["#6BA368", "#568253", "#40623E"]}
              delay={0.8}
            />
          </div>
          <div className="md:col-span-3">
            <BentoCard
              title="Community Satisfaction"
              value="4.9/5"
              subtitle="Feedback from real users who gained confidence and access through HelpingHand"
              colors={["#3E653C", "#1F321E", "#7DCA79"]}
              delay={1}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AnimatedGradientComponent
