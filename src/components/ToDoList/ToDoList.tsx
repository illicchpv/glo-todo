import "./ToDoList.scss";

import { ToDoListItem } from "./ToDoListItem/ToDoListItem";

interface Human {
  name: string
}

interface Man extends Human {
  sex: 'man'
}
interface Woman extends Human {
  sex?: 'woman'
}

export const ToDoList = () => {
  const hum1: Man = {
    name: `alex`,
    sex: 'man'
  }
  const hum2: Woman = {
    name: `kate`,
    sex: 'woman'
  }


  return (
    <div className="todo-container">

      <ul className="todo-list failed">
        <ToDoListItem />
      </ul>

      <ul className="todo-list completed">
        <ToDoListItem />
        {/* <li className="todo-list-item__wrapper">
          <span>Вторая задача</span>
          <div className="todo-list-item__buttons">
            <button className="btn-trash"></button>
            <button className="btn-uncheck"></button>
          </div>
        </li> */}
      </ul>
    </div>
  );
}
