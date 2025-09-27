import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = ({ className }: { className?: string }) => (
  <Image
    src="https://i.ibb.co/HTChB0DY/creative-lines-digital-logo-transparent.png"
    alt="Creative Lines Digital Logo"
    width={140}
    height={26}
    className={cn("invert dark:invert-0", className)}
    priority
  />
);

export default Logo;
