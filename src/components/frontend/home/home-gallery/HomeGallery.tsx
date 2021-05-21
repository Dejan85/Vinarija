import React from "react";
import { SubContainer, CarouselUi, Heading } from "src/components/ui";

const HomeGallery = (): JSX.Element => {
  return (
    <SubContainer className="home-gallery" as="section">
      <Heading as="h2">Nasi vinogradi</Heading>

      <CarouselUi />
    </SubContainer>
  );
};

export default HomeGallery;
