import { createSlice } from '@reduxjs/toolkit'
import { Theme } from '../Models/theme'
import { themes } from '../styles/themes'

export interface ThemeState {
  theme: Theme
}

const initialState: ThemeState = {
  theme: themes['light'],
}

export const themeSlice = createSlice({
  name: 'themeList',
  initialState,
  reducers: {
    toggleThemeAction: (state) => {
      // console.log('toggleThemeAction state: ', state);
      // debugger
      // console.log('state.theme: ', state.theme.name);
      // state.theme = themes['dark'] 
      // return
      state.theme = state.theme.name === 'light' ? themes['dark'] : themes['light']
      // console.log("state.theme.name === 'light': ", state.theme.name === 'light');
      // console.log('state.theme: ', state.theme.name);
    },
  },
})

export const { toggleThemeAction } = themeSlice.actions
export default themeSlice.reducer