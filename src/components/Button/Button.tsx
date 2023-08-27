import { GetStyles } from "../GetStyles"
import styles from "./Button.style"

type ButtonProps = {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <>
      <GetStyles styles={styles} data-style="Button" />
      <button className="button" {...rest}>
        {children}
      </button>
    </>
  )
}
