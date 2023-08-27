import { BsImage } from "react-icons/bs"
import { GetStyles } from "../GetStyles"
import { GridMain } from "../GridMain"
import Image from "next/image"
import styles from "./ScrollCard.style"

interface CardProps {
  title: string
  description: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
  list: {
    text: string
  }[]
  button: { [key: string]: string }
}

export const ScrollCard: React.FC<CardProps> = ({
  title,
  description,
  image: { src, width, height, alt },
  button: { text, href },
}) => {
  return (
    <section className="panel">
      <GetStyles styles={styles} data-style="ScrollCard" />
      <GridMain>
        <div className="text">
          <h2 className="title">{title}</h2>
          <p className="p">{description}</p>
          <a className="button-view" href={href}>
            <span>{text}</span>
            <BsImage />
          </a>
        </div>
        <figure className="figure">
          <Image className="image" src={src} width={width} height={height} alt={alt} />
        </figure>
      </GridMain>
    </section>
  )
}
