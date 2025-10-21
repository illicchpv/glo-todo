import './assets/scss/normalize.scss'
import './assets/scss/style.scss'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToDoListPage } from './pages/ToDoListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { ToDo } from './Models/todo-item';
import { NotFoundPage } from './pages/404';
import { ItemPage } from './pages/ItemPage';

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


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage todos={todos} />} />
        <Route path="/list/:id" element={<ItemPage todos={todos}/>} />
        <Route path="/todo" element={<ToDoListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

