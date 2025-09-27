import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = ({ className }: { className?: string }) => (
  <Image
    src="https://i.ibb.co/Swp9938S/final-logo-trans.png"
    alt="Creative Lines Digital Logo"
    width={150}
    height={28}
    className={cn("invert dark:invert-0", className)}
    priority
  />
);

export default Logo;
