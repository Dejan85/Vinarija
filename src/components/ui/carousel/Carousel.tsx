import React from "react";
import Carousel from "react-multi-carousel";

import Image from "next/image";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselUi = (): JSX.Element => {
  return (
    <div className="carousel">
      <Carousel
        responsive={responsive}
        containerClass="carousel__container"
        itemClass="carousel__item"
        sliderClass="carousel__slider"
      >
        <Image
          src="/images/home/carousel/image.webp"
          alt="img"
          width="500"
          height="390"
          objectFit="contain"
          className="carousel__image"
        />
        <Image
          src="/images/home/carousel/image2.webp"
          alt="img"
          width="500"
          height="390"
          objectFit="contain"
          className="carousel__image"
        />
        <Image
          src="/images/home/carousel/image.webp"
          alt="img"
          width="500"
          height="390"
          objectFit="contain"
          className="carousel__image"
        />
        <Image
          src="/images/home/carousel/image2.webp"
          alt="img"
          width="500"
          height="390"
          objectFit="contain"
          className="carousel__image"
        />
        <Image
          src="/images/home/carousel/image.webp"
          alt="img"
          width="500"
          height="390"
          objectFit="contain"
          className="carousel__image"
        />
        <Image
          src="/images/home/carousel/image2.webp"
          alt="img"
          width="500"
          height="390"
          objectFit="contain"
          className="carousel__image"
        />
        <Image
          src="/images/home/carousel/image.webp"
          alt="img"
          width="500"
          height="390"
          objectFit="contain"
          className="carousel__image"
        />
        <Image
          src="/images/home/carousel/image2.webp"
          alt="img"
          width="500"
          height="390"
          objectFit="contain"
          className="carousel__image"
        />
        <Image
          src="/images/home/carousel/image.webp"
          alt="img"
          width="500"
          height="390"
          objectFit="contain"
          className="carousel__image"
        />
        <Image
          src="/images/home/carousel/image2.webp"
          alt="img"
          width="500"
          height="390"
          objectFit="contain"
          className="carousel__image"
        />
        <Image
          src="/images/home/carousel/image.webp"
          alt="img"
          width="500"
          height="390"
          objectFit="contain"
          className="carousel__image"
        />
        <Image
          src="/images/home/carousel/image2.webp"
          alt="img"
          width="500"
          height="390"
          objectFit="contain"
          className="carousel__image"
        />
      </Carousel>
    </div>
  );
};

export default CarouselUi;
