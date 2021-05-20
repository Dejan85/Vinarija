import React from "react";
import Image from "next/image";

const Navigation = (): JSX.Element => {
  return (
    <div className="navigation">
      <div className="navigation__col">
        <Image
          className="navigation__col__nav-logo"
          src="/images/logo/logo_2.png"
          alt="logo"
          width="200px"
          height=""
          objectFit="contain"
          draggable="false"
        />
        <a className="navigation__col__nav-links" href="#">
          Naslovna
        </a>
        <a className="navigation__col__nav-links" href="#">
          Vina
        </a>
        <a className="navigation__col__nav-links" href="#">
          Vinogradi
        </a>
        <a className="navigation__col__nav-links" href="#">
          Prodavnica
        </a>
        <a className="navigation__col__nav-links" href="#">
          Kontakt
        </a>
        <div className="navigation__col__socials">
          <p>Konektujmo se</p>
          <div className="navigation__col__socials__icons">
            <a href="#">
              <img src="/icons/socials/facebook.svg" alt="facebook" />
            </a>
            <a href="#">
              <img src="/icons/socials/instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="navigation__col">
        <img
          className="navigation__col__nav-images"
          src="images/home/welcome-page/background.webp"
          alt="image"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default Navigation;
