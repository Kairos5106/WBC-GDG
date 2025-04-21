import { 
  Section, 
  // Container 
} from "@/components/ds";
import Header from "@/components/Header";
import Features from "@/components/Features";
import FAQ from "@/components/FAQs";
import AnimatedGradientComponent from "@/components/AnimatedGradientComponent";

export default function Home() {
  return (
    <>
      <Section>
        <Header />
        <Features />
        <AnimatedGradientComponent />
        <FAQ />
      </Section>
    </>
  );
}
