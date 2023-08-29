import { BsImage } from "react-icons/bs"
import { GetStyles } from "../GetStyles"
import { HTMLAttributes } from "react"
import { PopOver } from "../PopOver"
import styles from "./HomePanel.style"

interface HomePanelProps {
  panel: {
    title: string
    img: string
    width: number
    height: number
    description: string
    features: {
      icon: JSX.Element
      text: string
    }[]
  }
  index: number
}

interface MyButtonProps extends HTMLAttributes<HTMLButtonElement> {
  popovertarget?: string
  popovertargetaction?: string
}

const MyButton: React.FC<MyButtonProps> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>
}

export const HomePanel: React.FC<HomePanelProps> = ({
  panel: { title, img, width, height, description, features },
  index,
}) => {
  const popId = `popover-${index}`

  return (
    <>
      <GetStyles styles={styles} data-style="HomePanel" />
      <div className="intro">
        <h3 className="title">{title}</h3>
        <p className="p">{description}</p>
        <ul className="list">
          {features.map(({ icon, text }, index) => (
            <li key={index}>
              {icon}
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <MyButton popovertarget={popId} popovertargetaction="show" className="button-view">
          <span>View image</span>
          <BsImage />
        </MyButton>
      </div>
      <div className="pop-over">
        <PopOver imageSrc={img} index={index} title={"title"} width={width} height={height} />
      </div>
    </>
  )
}
