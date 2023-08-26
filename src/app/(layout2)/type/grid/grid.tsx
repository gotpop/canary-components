import styles from "./grid.module.css"

interface GridProps {
  children: React.ReactNode
  tag?: keyof JSX.IntrinsicElements
  className?: string
}

export const Grid: React.FC<GridProps> = ({ children, tag: Tag = "div", ...props }) => {
  return (
    <>
      <Tag className={styles.grid}>{children}</Tag>
    </>
  )
}
