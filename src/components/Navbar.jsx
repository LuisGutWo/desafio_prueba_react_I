import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Nav className="navbar bg-dark fs-5 m-0">
      <div>
        <NavLink to="/">
          <img
            src="/src/assets/img/pokebola.png"
            width="55"
            className="d-inline-block align-text-top"
            alt=""
          />
        </NavLink>
      </div>
      <div className="d-flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-class" : "inactive-class"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/pokemonapi"
          className={({ isActive }) =>
            isActive ? "active-class" : "inactive-class"
          }
        >
          Cards
        </NavLink>
      </div>
    </Nav>
  );
}
