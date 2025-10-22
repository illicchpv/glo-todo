import { NavLink } from "react-router-dom";
import cl from "./Header.module.scss";

export const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${cl.link} ${cl.active}` : cl.link;
  }

  return (
    <header className={cl.header}>
      <div className={cl.container}>
        <NavLink
          className={getActiveClass}
          to="/">Home</NavLink>
        <NavLink
          className={getActiveClass}
          to="/list">ToDo</NavLink>
      </div>
    </header>

  );

}
