import React, { useEffect, useRef } from "react";
import {
  Element,
  Heading,
  Link,
  SubContainer,
  Paragraph,
} from "src/components/ui";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HomeMoments = (): JSX.Element => {

  useEffect(() => {
    gsap.to(".home-moments__col:nth-child(1)", {
      position: "sticky",
      scrollTrigger: {
        trigger: ".home-moments",
        start: "top top",
        toggleActions: "play none none reset"
      },
    });
  }, []);

  return (
    <SubContainer className="home-moments" as="section">
      <Element as="div" className="home-moments__col">
        <Heading className="home-moments__heading" as="h1">
          Podelite Vaše Momente Sa Nama
        </Heading>
        <Link
          className="home-moments__link"
          href="https://www.instagram.com/vinarijarnjak/"
        >
          @vinarijarnjak
        </Link>
        <Paragraph as="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni,
          libero quisquam tenetur, ad reprehenderit officiis quod dignissimos
          nostrum quasi rem eius dolore animi fuga molestias modi neque quidem
          a.
        </Paragraph>
      </Element>
      <Element as="div" className="home-moments__col">
        <Element as="div" className="home-moments__photo-stack">
          <figure>
            <img
              src="/images/home/carousel/vineyard_2.webp"
              width="1000"
              height="1000"
            />
          </figure>
          <figure>
            <img
              src="/images/home/carousel/vineyard_2.webp"
              width="1000"
              height="1000"
            />
          </figure>
          <figure>
            <img
              src="/images/home/carousel/vineyard_2.webp"
              width="1000"
              height="1000"
            />
          </figure>
          <figure>
            <img
              src="/images/home/carousel/vineyard_2.webp"
              width="1000"
              height="1000"
            />
          </figure>
          <figure>
            <img
              src="/images/home/carousel/vineyard_2.webp"
              width="1000"
              height="1000"
            />
          </figure>
        </Element>
      </Element>
    </SubContainer>
  );
};

export default HomeMoments;
