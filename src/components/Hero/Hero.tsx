import { CSSProperties } from "react"
import { GetStyles } from "../GetStyles"
import styles from "./Hero.style"

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  snap?: string
  paddingTop?: string
}

export const Hero: React.FC<HeroProps> = ({ title, snap, paddingTop, ...rest }) => {
  const varsCSS = { ["--local-scroll-snap-align"]: snap, ["--local-padding-top"]: paddingTop } as CSSProperties

  return (
    <section className="hero" style={varsCSS} {...rest}>
      <GetStyles styles={styles} data-style="Hero" />
      <h2 className="title">{title}</h2>
    </section>
  )
}
