import Image from "next/image";

const Logo = () => (
  <Image
    src="/logo.png"
    alt="Creative Lines Digital Logo"
    width={180}
    height={30}
    priority
  />
);

export default Logo;
