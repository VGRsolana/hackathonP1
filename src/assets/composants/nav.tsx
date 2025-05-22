import "./nav.css"
import { Link } from "react-router"
import logo from "../img/logo.webp"
import { useLocation } from "react-router"
import { useState } from "react";
import { useEffect } from "react";


function Nav() {
    const location = useLocation();
    const [css, setCss] = useState("pink");

    useEffect(() => {
        if (location.pathname === "/Regle") setCss("pink")
            else if (location.pathname === "/") setCss("green")
      }, [location]);

      
 return (
        <nav className={css}>
            <Link to="/" className="divLogo">
                <img src={logo} alt="" className="logo" />
            </Link>

            <div className="navlinks">
                <Link to="/Labyrinthe">css-html</Link>
                <Link to="/Labyrinthe1">API</Link>
                <Link to="/Labyrinthe2">React</Link>
                <Link to= "/Cours">Cours</Link>
            </div>

            <div className=" nav-side">
                <Link to="/Regle" className={`n-btn ${css}-button`} >Les règles</Link>
            </div>

        </nav>
    )
}

export default Nav