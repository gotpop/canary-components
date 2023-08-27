import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { ScrollCard } from "@/components/ScrollCard"
import { cardsScrollData as cardsData } from "@/data/cardsScroll"

export default function Scroll() {
  const cards = cardsData.map((card, i) => <ScrollCard key={i} {...card} />)

  return (
    <div>
      <Hero />
      {cards}
      <Footer snap="start" />
    </div>
  )
}
