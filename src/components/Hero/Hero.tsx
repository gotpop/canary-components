import { GetStyles } from "../GetStyles"
import styles from "./Hero.style"

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  title: string
}

export const Hero: React.FC<HeroProps> = ({ title, ...rest }) => {
  return (
    <section className="hero" {...rest}>
      <GetStyles styles={styles} data-style="Hero" />
      <h2 className="title">{title}</h2>
    </section>
  )
}
