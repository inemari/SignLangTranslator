// Importing logo image, required hooks, and styles
import logo from "../../Logo3.png"; // Logo
import { useUser } from "../../context/UserContext"; // useUser
import "../../styles/navbar.css"; // Styles
import { NavLink } from "react-router-dom";
import "../../App.css"

// Definition for the custom navigation bar
const CustomNavbar = () => {

    const { user, logout } = useUser(); //Using the userHook to access user data and logout function

    // Rendering the component 
    return (
        /* Navigation section */
        <nav className="navigation">
            <img src={logo} alt="logo" className="brand-logo" />
            <div className="navigation-menu"> 
                {user !== null && (
                    <ul>
                        <li>
                            <NavLink to="/TranslationPage">Translator</NavLink> {/* Translator page */}
                        </li>
                    </ul>
                )}
                {user !== null && (
                    <ul>
                        <li>
                            <NavLink to="/Profile">Profile</NavLink> {/* Profile page */}
                        </li>
                    </ul>
                )}
                {user !== null && (
                    <ul>
                        <li>
                            <button onClick={logout} className="logout-btn"> {/* Logout button */}
                                Sign out
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
export default CustomNavbar; // Exporting the CustomNavbar component as the default export