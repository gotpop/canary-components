import { Footer } from "@/components/Footer"
import { GetStyles } from "@/components/GetStyles"
import { GridMain } from "@/components/GridMain"
import { cardsScrollData as cardsData } from "@/data/cardsScroll"
import Image from "next/image"
import { BsImage } from "react-icons/bs"
import styles from "./scroll.style"

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

function Card({
  title,
  description,
  image: { src, width, height, alt },
  list,
  button: { text, href },
}: CardProps) {
  const listItems = list.map(({ text }, i) => (
    <li key={i} className="list-item">
      {text}
    </li>
  ))

  return (
    <section className="panel">
      <GridMain>
        <div className="text">
          <div className="inner">
            <h2 className="title">{title}</h2>
            <p className="p">{description}</p>
            <ul className="list">{listItems}</ul>
            <a className="button-view" href={href}>
              <span>{text}</span>
              <BsImage />
            </a>
          </div>
        </div>
        <figure className="figure">
          <div className="inner">
            <Image className="image" src={src} width={width} height={height} alt={alt} />
          </div>
        </figure>
      </GridMain>
    </section>
  )
}

export default function Scroll() {
  const cards = cardsData.map((card, i) => <Card key={i} {...card} />)

  return (
    <>
      <div>
        <GetStyles styles={styles} data-style="scrollPage" />
        <section className="hero">
          <h2>Scroll Timeline</h2>
        </section>
        {cards}
        <Footer snap="start" />
      </div>
    </>
  )
}
