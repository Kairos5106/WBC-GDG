import React, { FC } from "react";

interface IconProps {
  className?: string
};

const HamburgerIcon: FC<IconProps> = ({
  className
}) => (
  <div className={className}>
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </div>
);

export default HamburgerIcon;
