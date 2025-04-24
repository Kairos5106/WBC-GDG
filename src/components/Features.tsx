// React and Next.js
import React, { ReactElement } from "react";

// Layout Components
import { Section, Container } from "@/components/ds";
import Balancer from "react-wrap-balancer";

// Icons
import { Globe, HeartHandshake, BookOpenCheck } from "lucide-react";

type FeatureText = {
  icon: ReactElement;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Easy Access to Vital Services",
    description:
      "HelpingHand connects you to essential services like healthcare, government aid, and public benefits — all in one easy-to-use place.",
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Support for Seniors & Families",
    description:
      "Our platform is designed with older adults and underserved families in mind, with clear language, large text, and helpful guidance at every step.",
  },
  {
    icon: <BookOpenCheck className="h-6 w-6" />,
    title: "Build Confidence with Digital Skills",
    description:
      "From using email to recognizing online scams, our tutorials and tools help you grow your digital literacy in a safe, friendly environment.",
  },
];

const Features = () => {
  return (
    <Section className="border-b w-full bg-black/5 py-32">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl text-center sm:text-left">
            <Balancer>
              Empowering communities through digital confidence and connection
            </Balancer>
          </h3>
          <h4 className="text-2xl text-center sm:text-left font-light opacity-70">
            <Balancer>
              HelpingHand makes it simple to find trusted information and build skills to thrive in a digital world.
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="flex flex-col gap-4 p-4 rounded-xl bg-white hover:shadow-lg transition" key={index}>
                {icon}
                <h4 className="text-xl text-primary">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Features;
