import React from "react";

interface ZaloIconProps {
  size?: number;
  className?: string;
}

const ZaloIcon: React.FC<ZaloIconProps> = ({ size = 32, className }) => {
  return (
    <img
      src="/Icon_of_Zalo.svg.webp"
      alt="Zalo"
      width={size}
      height={size}
      className={className}
    />
  );
};

export default ZaloIcon;
