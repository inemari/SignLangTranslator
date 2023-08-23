/**
 * CustomNavbar Component
 * This component renders the main navigation bar for the application.
 * Dependencies: react-router-dom's NavLink, Logo3.png, navbar.css
 */
import logo from "../../Logo3.png";
import "../../styles/navbar.css";
import { NavLink } from "react-router-dom"

const CustomNavbar = () => {
    return (

        <nav className="navigation">
            <img src={logo} alt="logo" className="brand-logo"></img>

            <div className="navigation-menu">

                <ul>
                    <li>
                        <NavLink to="/TranslationPage">
                            Translator
                        </NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink to="/Profile">
                            Profile
                        </NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink to="/Logout">
                            Logout
                        </NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default CustomNavbar;
