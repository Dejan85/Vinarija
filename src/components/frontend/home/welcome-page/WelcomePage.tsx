import React from "react";
import { SubContainer, Button, Heading, Image } from "src/components/ui";

const WelcomePage = (props): JSX.Element => {
  const {
    content: { heading, image, buttonText },
  } = props;
  return (
    <SubContainer className="welcome-page" as="section">
      <Image
        src={image}
        alt="image"
        className="welcome-page__background-image"
        layout="fill"
        objectFit="cover"
      />
      <Heading className="welcome-page__heading" as="h1">
        {heading}
      </Heading>
      <Button as="a">{buttonText}</Button>
    </SubContainer>
  );
};

export default WelcomePage;
