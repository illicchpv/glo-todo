import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDo } from '../Models/todo-item'

export interface TodoState {
  todos: ToDo[]
}

const initialState: TodoState = {
  todos: [],
}

export const todoSlice = createSlice({  // reducer
  name: 'todoList',
  initialState,
  reducers: { // мутаторы для изменения состояния
    createAction: (state, action: PayloadAction<ToDo>) => {
      // state.todo.push(action.payload)
      console.log('createAction.payload: ', action.payload);
    },
    updateAction: (state, action: PayloadAction<ToDo>) => {
      console.log('updateAction.payload: ', action.payload);
    },
    deleteAction: (state, action: PayloadAction<ToDo>) => {
      console.log('deleteAction.payload: ', action.payload);
    },
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const {
  createAction,
  updateAction,
  deleteAction
} = todoSlice.actions

export default todoSlice.reducer