import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./layouts/Layout"
import { NotFoundPage } from "./pages/404"
import { ViewListPage } from "./pages/ViewListPage"
import { ToDoListPage } from "./pages/ToDoListPage"
import { ItemPage } from "./pages/ItemPage"
import { ToDo } from "./Models/todo-item"

const todos: ToDo[] = [
  {
    id: 0,
    text: 'Первая задача(изменить нельзя)',
    isDone: false,
  },
  {
    id: 1,
    text: 'Вторая задача',
    isDone: true,
  },
  {
    id: 2,
    text: 'Третья задача',
    isDone: false,
  },
  {
    id: 3,
    text: 'Четвёртая задача',
    isDone: true,
  },
]

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <ToDoListPage />,
      },
/*
      {
        path: "/todo",
        element: <ViewListPage todos={todos} />,
      },
      {
        path: "/list/:id",
        element: <ItemPage todos={todos} />,
      },
*/
      {
        path: "/list",
        element: <ViewListPage todos={todos} />,
        children: [
          {
            path: ":id",
            element: <ItemPage todos={todos} />,
          }
        ],

      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
], { basename: '/' }) // { basename: '/app/' }