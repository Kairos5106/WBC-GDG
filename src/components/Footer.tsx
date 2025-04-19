// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section, Container } from "@/components/ds";
import { CallToAction } from "./CallToAction";
import ComesInGoesOutUnderline from "@/fancy/components/text/underline-comes-in-goes-out";

export default function Footer() {
  return (
    <footer className="bg-neutral-300 z-0">
      <Section>
        <Container className="grid gap-2 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="grid gap-0 p-4">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src={"/vercel.svg"}
                alt="Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert"
              ></Image>
            </Link>
            <p>
              <Balancer>
                brijr/components is a collection of Next.js, React, Typescript
                components for building landing pages and websites.
              </Balancer>
            </p>
            <p className="text-muted-foreground">
              ©{" "}
              <a href="https://github.com/brijr/components">brijr/components</a>
              . All rights reserved. 2024-present.
            </p>
          </div>
          <CallToAction />
          <div className="flex flex-col gap-4 p-4">
            <h5 className="font-extrabold font-stretch-expanded">Website</h5>
            <Link href="/contact-us"><ComesInGoesOutUnderline label="Products"/></Link>
            <Link href="/"><ComesInGoesOutUnderline label="Authors"/></Link>
            <Link href="/"><ComesInGoesOutUnderline label="Categories"/></Link>
            <h5 className="font-extrabold font-stretch-expanded">Legal</h5>
            <Link href="/privacy-policy"><ComesInGoesOutUnderline label="Privacy Policy"/></Link>
            <Link href="/terms-of-service"><ComesInGoesOutUnderline label="Terms of Conditions"/></Link>
            <Link href="/cookie-policy"><ComesInGoesOutUnderline label="Cookie Policy"/></Link>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
