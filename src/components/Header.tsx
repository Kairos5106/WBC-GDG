import { Container, Section } from "@/components/ds";
import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <Section className="bg-stone-50">
      <Container className="flex flex-col h-screen w-full">
        <video
          autoPlay
          playsInline
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/header.mp4" />
        </video>

        <div className="relative z-10 flex items-center justify-center h-100 w-full bg-black/40 mt-32">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Our Site
            </h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto">
              Innovation. Impact. Inspiration.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-16 pt-16 z-15">
          <Button variant="ghost" className="text-white text-2xl font-light p-10">
            Get a booking
          </Button>
          <Button variant="ghost" className="text-white text-2xl font-light p-10">
            Learn more <ChevronRightIcon className="w-8"/>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Header;