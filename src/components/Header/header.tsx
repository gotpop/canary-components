import { Logo } from "@/components/Logo";
import { links as linksData } from "@/data/navLinks";
import { GridMain } from "../GridMain";
import styles from "./header.style";

export const Header: React.FC = () => {
  const links = linksData.map((link) => (
    <a className="link" href={link.href} key={link.href}>
      {link.text}
    </a>
  ));

  return (
    <header className="header">
      <style>{styles}</style>
      <GridMain>
        <Logo />
        <nav className="nav">{links}</nav>
      </GridMain>
    </header>
  );
};
