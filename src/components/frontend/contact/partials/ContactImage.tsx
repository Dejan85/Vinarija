import React from "react";
import Image from "next/image";
import { Element } from "src/components/ui";

const ContactImage = (props) => {
  const { src } = props;
  return (
    <Element as="div" className="contact__image-container">
      <Element as="div" className="contact__image-container">
        <Image
          className="contact__image"
          src={src}
          width="270"
          height=""
          alt="img"
          objectFit="cover"
        />
      </Element>
    </Element>
  );
};

export default ContactImage;
