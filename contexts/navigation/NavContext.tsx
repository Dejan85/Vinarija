import { createContext, useState, useEffect } from "react";
import { Power3, TimelineMax } from "gsap";

const NavContext = createContext(null);

const NavProvider = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false);
  const tl = new TimelineMax();

  const closeNav = (): void => {
    tl.to(".navigation", { left: "-100%", ease: Power3.easeOut }, 0.1);
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    if (toggleNav) {
      tl.to(".navigation", { left: "0%", ease: Power3.easeOut }, 0.1);
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
        1
      );
    } else {
      tl.to(".navigation", { left: "-100%", ease: Power3.easeOut }, 0.1);
    }
  }, [toggleNav]);

  return (
    <NavContext.Provider
      value={{
        setToggleNav,
        toggleNav,
        closeNav,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export { NavContext, NavProvider };
