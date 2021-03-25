import React from "react";
import Container from "../Container/Container";
import HeroImage from "../HeroImage/HeroImage";
import Jobs from "../Jobs/Jobs";
import Section from "../Section/Section"

function Content() {
  return (
    <div className="content">
      <HeroImage />
      <Section title='Experence'>
        <Container>
          <Jobs />
        </Container>
      </Section>
    </div>
  );
}

export default Content;
