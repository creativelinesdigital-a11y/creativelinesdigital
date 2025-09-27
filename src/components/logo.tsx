import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = ({ className }: { className?: string }) => (
  <Image
    src="https://i.ibb.co/Swp9938S/final-logo-trans.png"
    alt="Creative Lines Digital Logo"
    width={140}
    height={26}
    className={cn("invert dark:invert-0", className)}
    priority
  />
);

export default Logo;
