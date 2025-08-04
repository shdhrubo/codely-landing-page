// components/Icon.tsx
import { IconProps } from "@/app/models/icon-props";
import React from "react";

const Icon: React.FC<IconProps> = ({
  name,
  width = 24,
  height = 24,
  className = "",
  color = "currentColor",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href={`/icons.svg#${name}`} />
    </svg>
  );
};

export default Icon;
