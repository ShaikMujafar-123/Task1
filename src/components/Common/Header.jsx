import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { ADMIN_USERNAME } from "../constants/Logindata";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Pages/auth/auth";

function Header() {
  const navigate = useNavigate();
  const auth =useAuth()
  const hanldeLogout = () =>
  {
    auth.logout()
  }
  return (
    <div className="header-list">
      <div className="nav-username">
        <NavLink
          style={{ textDecoration: "none", color: "white" }}
          to={"/home"}
        >
          Products
        </NavLink>
      </div>
      

      {auth.user && (
        <div>{ADMIN_USERNAME}</div>
        
      )}
      {auth.user && (
        <NavLink onClick={hanldeLogout}
        style={{ textDecoration: "none", color: "white" }}
        className="log-out"
        to={"/"}
      >
        Logout
      </NavLink>
        
      )}
      
    </div>
  );
}

export default Header;
