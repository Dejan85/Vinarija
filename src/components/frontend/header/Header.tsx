import React from "react";
import { SubContainer } from "src/components/ui";
import { Nav } from "src/components/frontend";

const Header = (): JSX.Element => {
  return (
    <SubContainer className="header" as="header">
      <Nav />
    </SubContainer>
  );
};

export default Header;
