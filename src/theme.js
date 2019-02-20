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
      weight: `350`,
    },
  },
  heading: {
    level: {
      2: {
        font: {
          weight: 500,
        },
      },
      3: {
        font: {
          weight: 450,
        },
      },
      4: {
        font: {
          weight: 400,
        },
      },
      5: {
        font: {
          weight: 300,
        },
      },
      6: {
        font: {
          weight: 300,
        },
      },
    },
    weight: 600,
  },
  anchor: {
    color: {
      light: `neutral-3`,
    },
  },
})
