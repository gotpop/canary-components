import { CSSProperties } from "react"
import { GetStyles } from "../GetStyles"
import { GridMain } from "../GridMain"
import { Logo } from "../Logo"
import styles from "./Footer.style"

interface FooterProps {
  snap?: string
}

export const Footer: React.FC<FooterProps> = ({ snap }) => {
  const varsCSS = { ["--local-scroll-snap-align"]: snap } as CSSProperties

  return (
    <footer className="footer" style={varsCSS}>
      <GetStyles styles={styles} data-style="Footer" />
      <GridMain>
        <Logo />
        <aside className="copyright">
          <small>&#169; GotPop</small>
        </aside>
      </GridMain>
    </footer>
  )
}
