"use client";

import { ArtodeIcon, type ArtodeIconProps } from "@/components/artode-icon";

const PATH = "M 21.333 24 H 2.667 c -1.473 0 -2.667 -1.194 -2.667 -2.667 V 2.667 c 0 -1.473 1.194 -2.667 2.667 -2.667 h 18.667 c 1.473 0 2.667 1.194 2.667 2.667 v 18.667 C 24 22.806 22.806 24 21.333 24 z M 18.838 18.667 h -4.291 L 5.219 5.333 h 4.291 L 18.838 18.667 z M 15.058 17.536 h 1.709 L 8.999 6.464 h -1.709 L 15.058 17.536 z M 6.577 18.667 L 11.379 13.104 L 10.751 12.271 L 5.215 18.667 Z M 12.3 10.481 L 12.903 11.34 L 18.091 5.333 L 16.757 5.333 Z";

export const XIcon = ({ className, size, drawType = "fill", ...props }: Omit<ArtodeIconProps, "path" | "drawType"> & { drawType?: "fill" | "stroke" }) => {
  return (
    <ArtodeIcon
      path={PATH}
      className={className}
      size={size}
      drawType={drawType}
      {...props}
    />
  );
};
