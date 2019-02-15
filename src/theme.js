import { deepFreeze } from "grommet/utils"

export const customTheme = deepFreeze({
  global: {
    colors: {
      brand: `#EEEEEE`,
    },
    font: {
      family: `'Lato', 'Helvetica', 'Arial'`,
      face: `
        @font-face {
          font-family: "Lato";
          font-display: block;
        }
        @font-face {
          font-family: "Indie flower";
          font-display: block;
        }
      `,
      weight: `500`,
    },
  },
  anchor: {
    color: {
      light: `neutral-3`,
    },
  },
})
