import { Theme } from "../Models/theme";

// #4682b4
// #edf0f1

const light: Theme = {
  name: 'light',
  colors: {
    backgroundPrimary: '#4682b4',
    backgroundSecondary: '#edf0f1',
  },
}
const dark: Theme = {
  name: 'light',
  colors: {
    backgroundPrimary: 'black',
    backgroundSecondary: 'gray',
  },
}

export const themes = { light, dark }