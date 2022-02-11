import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../shared/configs/firebase";
import { useAuthContext } from "../shared/context/AuthContext";
import logo from "../assets/logo.png";
// import logo from "../assets/logo.png";

function Header() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  return (
    <div
      className="header"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <img src={logo} style={{ height: "100px" }} />
      </div>

      <div>
        {user ? <Link to="/order">Sale</Link> : <Link to="/">Menu</Link>}{" "}
        &nbsp;&nbsp;
        {user && <Link to="/editorder">Edit Items</Link>}
        {!user && <Link to="/vieworder">For Sale</Link>}
        {/* &nbsp;&nbsp;<Link to="/order">Order</Link> */}
        &nbsp;&nbsp;
        <Link to="/contact">Contact</Link>&nbsp;&nbsp;
        <Link to="/tech">Technology</Link>&nbsp;&nbsp;
        {user ? (
          <a
            onClick={() => {
              signOut(auth);
              navigate("/");
            }}
          >
            Logout
          </a>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}

export default Header;
