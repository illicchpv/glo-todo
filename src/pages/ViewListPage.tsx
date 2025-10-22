import { useSelector } from "react-redux"
import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../Models/todo-item"
import { RootState } from "../store"

export const ViewListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos)

  return (
    <div className="container">
      {todoList.map((el: ToDo) => {
        return (<ListItem todo={el} key={el.id} />)
      })}
    </div>
  )
}