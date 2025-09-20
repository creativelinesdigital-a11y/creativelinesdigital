import * as React from "react";

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="150"
    height="36"
    viewBox="0 0 150 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.736 35.216L12.592 18.064L24.736 0.896H34.12L19.48 18.064L34.12 35.216H24.736Z"
      className="fill-primary"
    />
    <path
      d="M15.4 35.216L3.256 18.064L15.4 0.896H24.784L10.144 18.064L24.784 35.216H15.4Z"
      className="fill-primary/70"
    />
    <text
      x="45"
      y="27"
      fontFamily="Inter, sans-serif"
      fontSize="20"
      fontWeight="bold"
      className="fill-foreground"
    >
      Binate
    </text>
    <text
      x="105"
      y="27"
      fontFamily="Inter, sans-serif"
      fontSize="20"
      fontWeight="normal"
      className="fill-muted-foreground"
    >
      Digital
    </text>
  </svg>
);

export default Logo;
