import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <NavLink className="nav__link" to="/">
        All Pets
      </NavLink>
      <NavLink className="nav__link" to="/dogs">
        Dogs
      </NavLink>
      <NavLink className="nav__link" to="/cats">
        Cats
      </NavLink>
      <NavLink className="nav__link" to="/rabbits">
        Rabbits
      </NavLink>
    </div>
  );
};

export default Nav;
