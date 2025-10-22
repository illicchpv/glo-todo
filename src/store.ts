import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todoList'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'
import formReducer from './features/formSlice'


export const store = configureStore({
  reducer: {
    form: formReducer,
    todoList: todoReducer
  },
  preloadedState: loadFromLocalStorage(),
})

store.subscribe(() => {
  // console.log('subscribe', store.getState())
  saveToLocalStorage(store.getState())
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
