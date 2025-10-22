import { RootState } from "../store";

export const saveToLocalStorage = (state: RootState) => {
  console.log('saveToLocalStorage state: ', state);
  try {
    const appState = JSON.stringify(state)
    localStorage.setItem('appState', appState)
  } catch (e) {
    console.warn('saveToLocalStorage error: ', e)
  }
}
export const loadFromLocalStorage = () => {
  try {
    const appState = localStorage.getItem('appState')
    if (!appState) return undefined
    return JSON.parse(appState)
  } catch (e) {
    console.error('loadFromLocalStorage error: ', e)
    return undefined
  }
}
