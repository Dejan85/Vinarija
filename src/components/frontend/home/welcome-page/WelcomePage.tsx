import React from "react";
import { SubContainer, Button, Heading, Image } from "src/components/ui";

const WelcomePage = (): JSX.Element => {
  return (
    <SubContainer className="welcome-page" as="section">
      <Image
        src="/images/home/welcome-page/background.webp"
        alt="image"
        className="welcome-page__background-image"
        layout="fill"
        objectFit="cover"
      />
      <Heading as="h1">Vinarija Rnjak</Heading>
      <Button as="a">Pogledajte Ponudu</Button>
    </SubContainer>
  );
};

export default WelcomePage;
