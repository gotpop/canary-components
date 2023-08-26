import { CSSProperties } from "react"
import { GetStyles } from "../GetStyles"
import Image from "next/image"
import styles from "./CardSubgrid.style"

type NavItem = {
  href: string
  text: string
  icon: string
}

type CardProps = {
  title: string
  imageSrc: string
  description: string
  columns: number
  navItems: NavItem[]
}

export const CardSubgrid: React.FC<CardProps> = ({ title, imageSrc, description, columns, navItems }) => {
  const varsCSS = { ["--local-columns"]: columns } as CSSProperties

  const nav = navItems.map(({ href, text, icon }, i) => (
    <a key={i} className="link" href={href}>
      <span className="text">{text}</span>
      <span className="icon">{icon}</span>
    </a>
  ))

  return (
    <article className="card" style={varsCSS}>
      <GetStyles styles={styles} data-style="Card" />
      <section className="content">
        <div className="text">
          <h3 className="title">{title}</h3>
          <p className="p">{description}</p>
        </div>
        <figure className="figure">
          <Image className="image" src={imageSrc} alt={title} width={1506} height={1130} />
        </figure>
      </section>
      <nav className="links">{nav}</nav>
    </article>
  )
}
