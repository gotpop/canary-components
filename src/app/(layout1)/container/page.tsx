import { CardContainer } from "@/components/CardContainer"
import { Footer } from "@/components/Footer"
import { GetStyles } from "@/components/GetStyles"
import { GridMain } from "@/components/GridMain"
import { cardData } from "@/data/cards"
import styles from "./container.style"

export default function Container() {
  const cards = cardData.map((card, i) => <CardContainer key={i} {...card} />)

  return (
    <>
      <section className="section">
        <GetStyles styles={styles} data-style="containerPage" />
        <GridMain>
          <div className="intro">
            <h2 className="title">CSS container queries</h2>
            <p className="p">
              Container queries enable you to apply styles to an element based on the size of the elements container. If, for example, a container has less space available in the surrounding context,
              you can hide certain elements or use smaller fonts. Container queries are an alternative to media queries, which apply styles to elements based on viewport size or other device
              characteristics.
            </p>
          </div>
          {cards}
        </GridMain>
      </section>
      <Footer />
    </>
  )
}
