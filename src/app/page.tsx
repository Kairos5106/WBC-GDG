import { 
  Section, 
  // Container 
} from "@/components/ds";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQs";
import AnimatedGradientComponent from "@/components/AnimatedGradientComponent";

export default function Home() {
  return (
    <>
      <Section>
        <Header />
        <Section className="w-full py-8">
          <Hero />
        </Section>
        <Section className="w-full bg-black/5 py-32">
          <Features />
        </Section>
        <Section className="h-screen">
          <AnimatedGradientComponent />
        </Section>
        <Section className="w-full py-8">
          <FAQ />
        </Section>
      </Section>
    </>
  );
}
