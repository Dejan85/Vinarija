import React from "react";
import { SubContainer, Heading } from "src/components/ui";

const Vine = (): JSX.Element => {
  return (
    <SubContainer className="vine">
      <Heading as="h2" className="vine__heading">
        Nasa <br /> Kolekcija Vina
      </Heading>
      <h1>vine page</h1>
    </SubContainer>
  );
};

export default Vine;
