import logo from "../../Logo3.png";
import { useUser } from "../../context/UserContext"; // <-- Import the useUser hook
import "../../styles/navbar.css";
import { NavLink } from "react-router-dom";

const CustomNavbar = () => {
    const { logout } = useUser(); // <-- Get the logout function from the context

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
                <ul>  <button onClick={logout} className="logout-button">Logout</button> {/* Use the logout function */}

                </ul>
            </div>
        </nav>
    );
}

export default CustomNavbar;
