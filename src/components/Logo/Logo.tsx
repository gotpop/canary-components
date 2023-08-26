import { GetStyles } from "../GetStyles"
import styles from "./Logo.style"

export const Logo: React.FC = () => {
  return (
    <section className="logo">
      <GetStyles styles={styles} data-style="Logo" />
      <a href="/" className="link">
        <h1 className="title">CSS 2023</h1>
      </a>
    </section>
  )
}
