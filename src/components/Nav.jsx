import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  if (location.pathname === "/") {
    return <Link to="/Employes">View Current Employees</Link>;
  }

  return <Link to="/">Home</Link>;
}
