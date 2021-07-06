import React from "react";
import { SubContainer, Element, Heading } from "src/components/ui";
import  { IoArrowRedoSharp } from 'react-icons/io5';

const HomeGallery = (): JSX.Element => {
  return (
    <Element className="home-gallery" as="section">
      <Element as="div" className="home-gallery__vineyards">
        <Element as="div" className="home-gallery__text">
          <p>Naša kultura</p>
          <h1>Naši vinogradi</h1>
          <a href="#" className="home-gallery__link">
            <IoArrowRedoSharp size={32} />
          </a>
        </Element>
        <img src="/images/home/carousel/vineyard_2.webp" className="home-gallery__alter-img" alt="" />
      </Element>
    </Element>
  );
};

export default HomeGallery;
