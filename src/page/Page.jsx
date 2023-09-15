import Heading from "./Heading";
import Section from "./Section";

export default function Page() {
  return (
    <Section>
      <Heading>Section 1st level</Heading>
      <Section>
        <Heading>Section level 2</Heading>
        <Section>
          <Heading>Section level 3</Heading>
        </Section>
      </Section>
    </Section>
  );
}
