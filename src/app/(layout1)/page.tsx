import { Footer } from "@/components/Footer"
import { HomePanel } from "@/components/HomePanel"
import { Snap } from "@/components/Snap"
import { homePanels } from "@/data/homePanels"

export default function Home() {
  return (
    <>
      {homePanels.map((panel, i) => (
        <Snap key={i}>
          <HomePanel panel={panel} index={i}></HomePanel>
        </Snap>
      ))}
      <Footer snap="start" />
    </>
  )
}
