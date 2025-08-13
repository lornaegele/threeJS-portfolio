import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="header">
      <NavLink to="/">
        <div className="bg-white rounded-xl p-2 font-bold text-sky-800 shadow-sm">
          LN
        </div>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isHome
              ? "text-white" // homepage color
              : isActive
              ? "text-blue-600"
              : "text-white-700"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isHome
              ? "text-white" // homepage color
              : isActive
              ? "text-blue-600"
              : "text-white-200"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isHome
              ? "text-white" // homepage color
              : isActive
              ? "text-blue-600"
              : "text-white-200"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
