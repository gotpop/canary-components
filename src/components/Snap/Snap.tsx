import { GridMain } from "../GridMain"
import styles from "./Snap.style"

type SnapProps = {
  children: React.ReactNode
}

export const Snap = ({ children }: SnapProps) => {
  return (
    <section className="snap">
      <style>{styles}</style>
      <GridMain>{children}</GridMain>
    </section>
  )
}
