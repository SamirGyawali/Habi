import { useState } from "react";
import "./Navbar.scss"
function Navbar(){
    const [open, setOpen] = useState(false)
    return(
        <nav>
            <div className="left">
                <a href="" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>Habi</span>
                </a>
                <div className="navitems">
                    <a href="/">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Agents</a>
                </div>

            </div>
            <div className="right">
                <a href="">Sign in</a>
                <a href="">Sign up</a>
            </div>
            <div className="menuicon">
                <img src="/menu.png" alt="" onClick={()=>setOpen(!open)}/>
            </div>
            <div className={open? "menu active":"menu"}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
                <a href="">Sign in</a>
                <a href="">Sign up</a>
            </div>
        </nav>
    )
}
export default Navbar;