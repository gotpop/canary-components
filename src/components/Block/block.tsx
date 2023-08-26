import { GridMain } from "../GridMain"
import styles from "./block.style"

interface GridProps {
  children: React.ReactNode
  tag?: keyof JSX.IntrinsicElements
  className?: string
}

export const Block: React.FC<GridProps> = ({ children, tag: Tag = "div", ...props }) => {
  return (
    <>
      <style>{styles}</style>
      <Tag className={props.className}>
        <GridMain>{children}</GridMain>
      </Tag>
    </>
  )
}
