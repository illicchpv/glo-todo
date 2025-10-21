import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="container">
      <h1>404 - NotFound</h1>
      <Link to="/">To Home</Link>
    </div>
  )
};