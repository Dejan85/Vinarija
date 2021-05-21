import React from "react";
import { SubContainer, Button, Heading } from "src/components/ui";
import Image from "next/image";

const WelcomePage = (): JSX.Element => {
  return (
    <SubContainer className="welcome-page" as="section">
      <Image
        src="/images/home/welcome-page/background.webp"
        className="welcome-page__background-image"
        layout="fill"
        objectFit="cover"
      />
      <Heading as="h1">Vinarija Rnjak</Heading>
      <button className="welcome-page__button">
        Pogledajte Ponudu
        <div className="welcome-page__button__horizontal"></div>
        <div className="welcome-page__button__vertical"></div>
      </button>
    </SubContainer>
  );
};

export default WelcomePage;
