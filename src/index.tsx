import './assets/scss/normalize.scss'
import './assets/scss/style.scss'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToDoListPage } from './pages/ToDoListPage';
import { BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { ToDo } from './Models/todo-item';
import { NotFoundPage } from './pages/404';
import { ItemPage } from './pages/ItemPage';
import { Layout } from './layouts/Layout';

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage todos={todos} />,
      },
      {
        path: "/todo",
        element: <ToDoListPage />,
      },
      {
        path: "/list/:id",
        element: <ItemPage todos={todos} />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
], { basename: '/' }) // { basename: '/app/' }

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage todos={todos} />} />
        <Route path="/todo" element={<ToDoListPage />} />
        <Route path="/list/:id" element={<ItemPage todos={todos}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);

