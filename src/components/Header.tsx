import Balancer from "react-wrap-balancer";
import { Container, Section } from "@/components/ds";
import Button from "./Button";

const Header = () => {
  return (
    <Section className="bg-white">
      <Container className="flex flex-col">
        <h1 className="!mb-0">Lorem ipsum dolor sit amet consectetur</h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate quidem natus.
          </Balancer>
        </h3>
        <div className="!mt-8 flex items-center gap-2">
          <Button />
          <Button />
        </div>
      </Container>
    </Section>
  );
};

export default Header;
