import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "#E6E6E6" }}>
            <b>Pseudo Banking</b>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={() => navigate("/account")}>Bank accounts</button>
          ) : (<p></p>)}
        </li>
        <li>
          {user ? (
            <button onClick={() => navigate("/transfers")}>Transfers</button>
          ) : (<p></p>)}
        </li>
        <li>
          {user ? (
            <button onClick={() => navigate("/budget")}>Budgets</button>
          ) : (<p></p>)}
        </li>
        <li>
          {user ? (
            <button onClick={() => navigate("/info")}>Your Info</button>
          ) : (<p></p>)}
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
