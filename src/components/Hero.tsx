// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { Camera } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/ds";
import { Button } from "@/components/ui/button";
import { PictureCarousel } from "./PictureCarousel";

const Hero = () => {
  return (
    <Section className="w-full h-screen">
      <Container className="grid gap-2 grid-cols-1 lg:grid-cols-[0.6fr_0.4fr]">

        <Container className="min-h-0 w-full h-full">
          <PictureCarousel 
            imageSrc={[]}
          />
        </Container>

        <Container className="flex flex-col justify-center text-center lg:text-left lg:m-0">
          <h1 className="text-3xl pb-4">
            <Balancer>
              Focus on the things that actually matter. Save your time
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
              Never have to worry about unimportant things again
            </Balancer>
          </h3>
          <div className="not-prose mt-4 flex justify-center lg:justify-normal gap-2">
            <Button asChild>
              <Link href="/">
                <Camera className="mr-2" />
                Send nudes
              </Link>
            </Button>
            <Button variant={"ghost"} asChild>
              <Link href="/posts">Or dont idc lmao -{">"}</Link>
            </Button>
          </div>
        </Container>

      </Container>
    </Section>
  );
};

export default Hero;
