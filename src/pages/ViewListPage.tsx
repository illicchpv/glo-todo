import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../Models/todo-item"

interface ComponentProps {
  todos: ToDo[];
}

export const ViewListPage = ({todos}: ComponentProps) => {
  
  return (
    <div className="container">
      {todos.map((el:ToDo) => {
        return (<ListItem todo={el} key={el.id}/> )
      })}
    </div>
  )
}