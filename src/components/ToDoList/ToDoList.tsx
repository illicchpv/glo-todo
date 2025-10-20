import "./ToDoList.scss";

import { ToDoListItem } from "./ToDoListItem/ToDoListItem";

// type FirsType = string | number 
type FirsType = 'ssss1' | number 

export const ToDoList = () => {
  // let myVar: string | number = 'ssss'
  let myVar: FirsType = 'ssss1'
  myVar = 7

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
