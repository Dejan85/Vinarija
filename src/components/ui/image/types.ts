export interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  layout?: "intrinsic" | "fixed" | "responsive" | "fill";
  eager?: boolean;
  className?: string;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
}
