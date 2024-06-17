import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";
import { useContext } from "react";

function Navbar() {
  const { auth } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {auth.isAuthenticated ? (
          <>
            <li className="navbar-item">
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/projects" className="navbar-link">
                Projects
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" className="navbar-link">
                Services
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link">
                Contact
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/booking" className="navbar-link">
                Book
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/logout" className="navbar-link">
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="navbar-item">
              <Link to="/register" className="navbar-link">
                Register
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/login" className="navbar-link">
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
