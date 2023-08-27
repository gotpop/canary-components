import { Footer } from "@/components/Footer"
import { GetStyles } from "@/components/GetStyles"
import { GridMain } from "@/components/GridMain"
import { Hero } from "@/components/Hero"
import { PlayCard } from "@/components/Playcard"
import { playCardsData } from "@/data/playCards"
import styles from "./play.style"

export default function Play() {
  const playCards = playCardsData.map((cardData, index) => <PlayCard key={index} {...cardData} />)

  return (
    <>
      <Hero title="Play" paddingTop="0"/>
      <GetStyles styles={styles} data-style="PlayPage" />
      <section className="section">
        <GridMain>
          <div className="play-cards">{playCards}</div>
        </GridMain>
      </section>
      <Footer />
    </>
  )
}
