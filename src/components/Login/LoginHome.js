import React from "react";
import "./LoginHome.css";
import { Link } from "react-router-dom";

function LoginHome() {
  return (
    <div className="container">
      <div className="nav">
      
        <div>
          <Link to="/signup">
            <span className="nav-button-join">Join now</span>
          </Link>
          <Link to="/signin">
            <button className="nav-button-signin" type="button">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    
    </div>
  );
}

export default LoginHome;
