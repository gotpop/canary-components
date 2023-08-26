import { CardSubgrid } from "@/components/CardSubgrid"
import { Footer } from "@/components/Footer"
import { GetStyles } from "@/components/GetStyles"
import { GridMain } from "@/components/GridMain"
import { cardSubGridData } from "@/data/cards"
import styles from "./subgrid.style"

export default function Subgrid() {
  const cards = cardSubGridData.map((card, i) => <CardSubgrid key={i} {...card} />)

  return (
    <>
      <section className="section">
        <GetStyles styles={styles} data-style="subgridPage" />
        <GridMain>
          <div className="intro">
            <h2 className="title">CSS Grid Subgrid</h2>
            <p className="p">Level 2 of the CSS Grid Layout specification includes a subgrid value for grid-template-columns and grid-template-rows.</p>
          </div>
          {cards}
        </GridMain>
      </section>
      <Footer />
    </>
  )
}
