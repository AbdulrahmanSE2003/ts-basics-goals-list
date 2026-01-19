import type { ReactNode } from "react";

interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

const Header = ({ image, children }: HeaderProps) => {
  // const { src, alt } = image;
  return (
    <header>
      {/* <img src={src} alt={alt} /> */}
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
