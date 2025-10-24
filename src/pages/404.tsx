import { NavLink } from "react-router-dom";

export const NotFoundPage = () => {

  return (
    <div className="container">
      <h1>404 - NotFound</h1>
      <NavLink to="/">To Home</NavLink>
    </div>
  )
};