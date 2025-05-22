import "./nav.css"
import { Link } from "react-router"
import logo from "../img/logo.webp"


function Nav() {
    return (
        <nav>
            <Link to="/" className="divLogo">
                <img src={logo} alt="" className="logo" />
            </Link>

            <div className="navlinks">
                <Link to="/Labyrinthe">css-html</Link>
                <Link to="">java-script</Link>
                <Link to="">interface de travail</Link>
            </div>

            <div className=" nav-side">
                <Link to="/Regle" className="n-btn">Les règles</Link>
            </div>

        </nav>
    )
}

export default Nav