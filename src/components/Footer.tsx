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
          {/* Brand Section */}
          <div className="grid gap-0 p-4">
            <Link href="/">
              <h3 className="sr-only">HelpingHand</h3>
              <Image
                src={"/logo-outline-black.png"}
                alt="HelpingHand Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 rotate-270"
              />
            </Link>
            <p>
              <Balancer>
                <span className="font-bold">HelpingHand</span> empowers seniors and low-income families
                by making vital information, digital literacy resources, and community support easy to access.
              </Balancer>
            </p>
            <p className="text-muted-foreground">
              © HelpingHand. All rights reserved. 2024-present.
            </p>
          </div>

          {/* Call to Action Section */}
          <CallToAction />

          {/* Links Section */}
          <div className="flex flex-col gap-4 p-4">
            <h5 className="font-extrabold font-stretch-expanded">Resources</h5>
            <Link href="/guides">
              <ComesInGoesOutUnderline label="Guides & Tutorials" />
            </Link>
            <Link href="/faq">
              <ComesInGoesOutUnderline label="Frequently Asked Questions" />
            </Link>
            <Link href="/resources">
              <ComesInGoesOutUnderline label="Community Resources" />
            </Link>

            <h5 className="font-extrabold font-stretch-expanded">Support</h5>
            <Link href="/contact-us">
              <ComesInGoesOutUnderline label="Contact Support" />
            </Link>
            <Link href="/help-center">
              <ComesInGoesOutUnderline label="Help Center" />
            </Link>

            <h5 className="font-extrabold font-stretch-expanded">Legal</h5>
            <Link href="/privacy-policy">
              <ComesInGoesOutUnderline label="Privacy Policy" />
            </Link>
            <Link href="/terms-of-service">
              <ComesInGoesOutUnderline label="Terms of Service" />
            </Link>
            <Link href="/cookie-policy">
              <ComesInGoesOutUnderline label="Cookie Policy" />
            </Link>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
