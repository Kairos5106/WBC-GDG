import { 
  Main, 
  Section, 
  // Container 
} from "@/components/ds";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Main>
        <Section>
          <Header />
        </Section>
        <Section>
          <Hero />
        </Section>
        <Footer />
      </Main>
    </>
  );
}
