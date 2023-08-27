import { GetStyles } from "../GetStyles"
import styles from "./Hero.style"

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <GetStyles styles={styles} data-style="Hero" />
      <h2 className="title">Scroll Timeline</h2>
    </section>
  )
}
