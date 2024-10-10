import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src="/logo.png" alt="" />
          <span>Habi</span>
        </a>
        <div className="navitems">
          <a href="/" className="navlink">Home</a>
          <a href="" className="navlink">About</a>
          <a href="" className="navlink">Contact</a>
          <a href="" className="navlink">Agents</a>
        </div>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <img
                src="/user.jpg"
                alt="" className="profileimg"
              />
            </Link>
          </div>
        ) : (
          <>
            <a href="/" className="navlink">Sign in</a>
            <a href="/" className="navlink">
              Sign up
            </a>
          </>
        )}
      </div>
      <div className="menuicon">
        <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
      </div>
      <div className={open ? "menu active" : "menu"}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
        <a href="">Sign in</a>
        <a href="">Sign up</a>
      </div>
    </nav>
  );
}
export default Navbar;
