// React and Next.js imports
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section, Container } from "@/components/ds";

const Hero = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <Image
          src={"/next.svg"}
          width={172}
          height={72}
          alt="Company Logo"
          className="not-prose mb-6 dark:invert md:mb-8"
        />
        <h1 className="!mb-0">
          <Balancer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Balancer>
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Balancer>
        </h3>
        <div className="not-prose mt-6 flex gap-2 md:mt-12">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;