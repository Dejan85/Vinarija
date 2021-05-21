import React from "react";
import Image from "next/image";
import { ImageProps } from "./types";

const ImageUi = (props: ImageProps) => {
  const {
    src,
    alt,
    width,
    height,
    layout,
    eager,
    objectFit,
    objectPosition,
    className: customClassName,
  } = props;
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      eager={eager}
      objectFit={objectFit}
      className={customClassName}
      objectPosition={objectPosition}
    />
  );
};

export default ImageUi;
