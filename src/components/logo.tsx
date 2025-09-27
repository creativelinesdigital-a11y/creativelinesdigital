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
      transform="scale(0.8) translate(-10, 4)"
    />
    <path
      d="M15.4 35.216L3.256 18.064L15.4 0.896H24.784L10.144 18.064L24.784 35.216H15.4Z"
      className="fill-primary/70"
      transform="scale(0.8) translate(-10, 4)"
    />
    <text
      x="28"
      y="27"
      fontFamily="Inter, sans-serif"
      fontSize="16"
      fontWeight="bold"
      className="fill-foreground"
    >
      Creative
    </text>
    <text
      x="95"
      y="27"
      fontFamily="Inter, sans-serif"
      fontSize="16"
      fontWeight="normal"
      className="fill-muted-foreground"
    >
      Lines Digital
    </text>
  </svg>
);

export default Logo;
