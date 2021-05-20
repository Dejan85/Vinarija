import React, { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Power3, TimelineMax } from "gsap";

const Nav = (): JSX.Element => {
  const [toggleNav, setToggleNav] = useState(false);
  const [hamburgerColor, setHamburgerColor] = useState("red");

  const toggleHandler = () => {
    setToggleNav(!toggleNav);
  };

  const tl = new TimelineMax();

  useEffect(() => {
    if (toggleNav) {
      tl.to(".navigation", { left: "0%", ease: Power3.easeOut });
      tl.staggerFrom(
        ".navigation__col__nav-links",
        0.5,
        { x: -200, opacity: 0 },
        0.3
      );
      tl.staggerFrom(
        ".navigation__col__socials",
        0.5,
        { y: 100, opacity: 0 },
        0.2
      );
      tl.fromTo(
        ".navigation__col__nav-images",
        { opacity: 0, transform: "scale(0.8)" },
        { opacity: 1, transform: "scale(1)", ease: Power3.easeOut },
        1.5
      );
      setHamburgerColor("#fff");
    } else {
      tl.to(".navigation", { left: "-100%", ease: Power3.easeOut });
      setHamburgerColor("#1d1d1d");
    }
  }, [toggleNav]);

  return (
    <nav className="nav">
      <Hamburger color={hamburgerColor} onToggle={toggleHandler} />
    </nav>
  );
};

export default Nav;
