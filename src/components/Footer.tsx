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
        <Container className="grid gap-6 md:grid-cols-[1.5fr_1fr_1fr] items-start">
          {/* Brand Section */}
          <div className="flex flex-col gap-4 p-4 ml-3">
            <Link href="/" className="w-fit">
              <h3 className="sr-only">HelpingHand</h3>
              <Image
                src={"/logo-outline-black.png"}
                alt="HelpingHand Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 rotate-270 ml-4"
              />
            </Link>
            <p className="text-md leading-relaxed">
              <Balancer>
                <span className="font-bold"><span className={`text-rich-black`}>Helping</span><span className={`text-brand-primary`}>Hand</span></span> empowers seniors and low-income families
                by making vital information, digital literacy resources, and community support easy to access.
              </Balancer>
            </p>
            <p className="text-muted-foreground">
              © Kofi. All rights reserved. 2025-present.
            </p>
          </div>

          {/* Call to Action Section */}
          <div className="p-4 flex items-start md:items-center">
            <CallToAction />
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-4 p-4 ml-3">
            <div className="flex flex-col gap-2 min-w-[160px]">
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
            </div>

            <div className="flex flex-col gap-2 min-w-[160px]">
              <h5 className="font-extrabold font-stretch-expanded">Support</h5>
              <Link href="/contact-us">
                <ComesInGoesOutUnderline label="Contact Support" />
              </Link>
              <Link href="/help-center">
                <ComesInGoesOutUnderline label="Help Center" />
              </Link>
            </div>

            <div className="flex flex-col gap-2 min-w-[160px]">
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
          </div>
        </Container>

      </Section>
    </footer>
  );
}
