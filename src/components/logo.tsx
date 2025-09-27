import * as React from "react";

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="180"
    height="32"
    viewBox="0 0 180 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.736 35.216L12.592 18.064L24.736 0.896H34.12L19.48 18.064L34.12 35.216H24.736Z"
      className="fill-primary"
      transform="scale(0.9) translate(0, 2)"
    />
    <path
      d="M15.4 35.216L3.256 18.064L15.4 0.896H24.784L10.144 18.064L24.784 35.216H15.4Z"
      className="fill-primary/70"
      transform="scale(0.9) translate(0, 2)"
    />
    <text
      x="38"
      y="27"
      fontFamily="Inter, sans-serif"
      fontSize="18"
      fontWeight="bold"
      className="fill-foreground"
    >
      Binate
    </text>
    <text
      x="105"
      y="27"
      fontFamily="Inter, sans-serif"
      fontSize="18"
      fontWeight="normal"
      className="fill-muted-foreground"
    >
      Digital
    </text>
  </svg>
);

export default Logo;
