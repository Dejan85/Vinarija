import React, { useContext } from "react";
import { Element } from "src/components/ui";
import { Squash as Hamburger } from "hamburger-react";
import { NavContext } from "src/contexts/navigation/NavContext";

const Nav = (): JSX.Element => {
  const { toggleNav, setToggleNav } = useContext(NavContext);

  const toggleHandler = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <Element as="nav" className="nav">
      <Hamburger
        color={!toggleNav ? "#1d1d1d" : "#fff"}
        toggled={toggleNav}
        onToggle={toggleHandler}
      />
    </Element>
  );
};

export default Nav;
