import { deepFreeze } from "grommet/utils"
import "typeface-indie-flower"
import "typeface-lato"

export const customTheme = deepFreeze({
  global: {
    colors: {
      brand: `#EEEEEE`,
    },
    font: {
      family: `'Lato', 'Helvetica', 'Arial'`,
      weight: `500`,
    },
  },
  anchor: {
    color: {
      light: `neutral-3`,
    },
  },
})
