// React and Next.js imports
import React from "react";

// Third-party library imports
import { ArrowUpRight } from "lucide-react";

// UI component imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Custom components
import { Section, Container } from "@/components/ds";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "What is HelpingHand and who is it for?",
    answer:
      "HelpingHand is a free website that helps seniors and low-income families easily access local services, important information, and digital learning tools.",
  },
  {
    question: "I’m not good with technology. Can I still use this website?",
    answer:
      "Absolutely! HelpingHand was designed to be easy to use, even for those with little to no computer experience. Everything is written in plain language, with large buttons and clear instructions.",
  },
  {
    question: "How can I learn to use a smartphone or computer?",
    answer:
      "We offer beginner-friendly guides on how to use smartphones, access the internet, and stay safe online.",
    link: "/guides",
  },
  {
    question: "Where can I find help in my area?",
    answer:
      "We provide links to nearby digital literacy programs, public Wi-Fi spots, and government aid. Just enter your postcode or browse by city to find help close to you.",
    link: "/resources",
  },
];

const FAQ = () => {
  return (
    <Section className="w-full py-8">
      <Container>
        <h3 className="!mt-0">Frequently Asked Questions</h3>
        <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our
          support team or visit the help center.
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
