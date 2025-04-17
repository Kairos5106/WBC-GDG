// import React from "react";
// import Image from "next/image";

// function Footer() {
//   return (
//     <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//       <a
//         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Image
//           aria-hidden
//           src="/file.svg"
//           alt="File icon"
//           width={16}
//           height={16}
//         />
//         Testing
//       </a>
//       <a
//         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Image
//           aria-hidden
//           src="/window.svg"
//           alt="Window icon"
//           width={16}
//           height={16}
//         />
//         Examples
//       </a>
//       <a
//         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//         href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Image
//           aria-hidden
//           src="/globe.svg"
//           alt="Globe icon"
//           width={16}
//           height={16}
//         />
//         Go to nextjs.org →
//       </a>
//     </footer>
//   );
// }

// export default Footer;

// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section, Container } from "@/components/ds";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="grid gap-6">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src={"/globe.svg"}
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
          <div className="flex flex-col gap-2">
            <h5>Website</h5>
            <Link href="/">Blog</Link>
            <Link href="/">Authors</Link>
            <Link href="/">Categories</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Legal</h5>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
