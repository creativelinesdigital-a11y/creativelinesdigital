import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 180 30"
    width="180"
    height="30"
    className={cn("fill-current text-foreground", className)}
  >
    <text
      x="0"
      y="20"
      fontFamily="Inter, sans-serif"
      fontSize="16"
      fontWeight="bold"
      textAnchor="start"
    >
      CREATIVE LINES DIGITAL
    </text>
  </svg>
);

export default Logo;
