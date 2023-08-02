import React from "react";
import "./../App.css";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

function Header() {
  const username = useSelector((state) => state.User);
  const navigate = useNavigate();
  return (
    <div className="header-list">
      <div className="nav-username">
        
        <div className="nav-products" onClick={() => navigate("/shoppingprod")}>Products</div>
        
      </div>
      <div>{username}</div>
      <div className="log-out" onClick={() => navigate("/")}>Logout</div>
      

      

    </div>
  );
}

export default Header;
