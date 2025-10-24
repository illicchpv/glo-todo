import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./layouts/Layout"
import { NotFoundPage } from "./pages/404"
import { ViewListPage } from "./pages/ViewListPage"
import { ToDoListPage } from "./pages/ToDoListPage"
import { ViewListItemPage } from "./pages/ViewListItemPage"
import { ghRoot, isDev } from "./const"

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
      {
        path: "/list",
        element: <ViewListPage />,
      },
      {
        path: "/list/:id",
        element: <ViewListItemPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
], { basename: `${isDev ? '' : ghRoot}` }) // { basename: '/app/' }
// ], { basename: '/' }) // { basename: '/app/' }