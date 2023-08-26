import { GetStyles } from "../GetStyles"
import styles from "./GridMain.style"

interface GridProps {
  children: React.ReactNode
  tag?: keyof JSX.IntrinsicElements
  className?: string
}

export const GridMain: React.FC<GridProps> = ({ children, tag: Tag = "div", ...props }) => {
  return (
    <>
      <Tag className="grid" {...props}>
        <GetStyles styles={styles} data-style="GridMain" />
        {children}
      </Tag>
    </>
  )
}
