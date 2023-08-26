import { Grid } from "./grid"
import { HeaderLocal } from "./HeaderLocal"
import Trim from "./trim/trim"

export default function Type() {
  return (
    <>
      <Grid tag="section">
        <HeaderLocal />
        <Trim />
      </Grid>
    </>
  )
}
