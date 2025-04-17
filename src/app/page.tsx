import { 
  Section, 
  // Container 
} from "@/components/ds";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Section>
        <Header />
      </Section>
      <Section>
        <Hero />
      </Section>
      <Footer />
    </div>
  );
}
