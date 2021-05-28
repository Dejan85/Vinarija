export interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  layout?: any;
  eager?: any;
  className?: string;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  objectPosition?: string;
  draggable?: boolean;
}
