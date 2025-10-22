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
    createAction: (state, action: PayloadAction<string>) => {
      // console.log('createAction.payload: ', action.payload, state.todos);
      const newId = state.todos.reduce((acc, el) => acc > el.id ? acc : el.id, 0) + 1
      const toDoItem = { id: newId, text: action.payload, isDone: false }
      // state.todos = [...state.todos, toDoItem]
      state.todos.push(toDoItem)
    },
    updateAction: (state, action: PayloadAction<ToDo>) => {
      // console.log('updateAction.payload: ', action.payload);
      const toDoItem = action.payload
      const modTodo: ToDo | undefined = state.todos.find(el => el.id === toDoItem.id)
      if (modTodo) modTodo.isDone = !modTodo.isDone
      // ??? state.todos = [...state.todos]
    },
    deleteAction: (state, action: PayloadAction<ToDo>) => {
      // console.log('deleteAction.payload: ', action.payload);
      const toDoItem = action.payload
      state.todos = state.todos.filter(el => el.id !== toDoItem.id)
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  createAction,
  updateAction,
  deleteAction
} = todoSlice.actions

export default todoSlice.reducer