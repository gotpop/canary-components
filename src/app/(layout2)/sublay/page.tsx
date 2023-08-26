import { FooterLocal } from "./FooterLocal/FooterLocal"
import { Grid } from "./grid"
import { HeaderLocal } from "./HeaderLocal"
import Trim from "@/app/(layout2)/sublay/trim/trim"

export default function Type() {
  return (
    <>
      <Grid tag="section">
        <HeaderLocal />
        <Trim />
        <FooterLocal />
      </Grid>
    </>
  )
}
