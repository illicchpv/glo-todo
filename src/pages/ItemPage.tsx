import { useEffect, useState } from "react";
import { ToDo } from "../Models/todo-item";
import { useNavigate, useParams } from "react-router-dom";

interface ComponentProps {
  todos: ToDo[];
}

export const ItemPage = ({ todos }: ComponentProps) => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [todo, setTodo] = useState<ToDo | null>(null)

  useEffect(() => {
    const searchToDo = todos.find(el => el.id === Number(id))
    console.log('searchToDo: ', searchToDo);
    if (!searchToDo) {
      console.log(`Задача id:${id} не найдена!`)
      navigate('/404')
    } else {
      setTodo(searchToDo)
    }
  }, [todos, id, navigate])


  return (
    <div className="container">
      <h1>Название:[{todo?.text}]</h1>
      <h1>id:[{id}]</h1>
    </div>
  );
};