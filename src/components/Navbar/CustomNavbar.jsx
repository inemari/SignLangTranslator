import logo from "../../Logo3.png";
import { useUser } from "../../context/UserContext"; 
import "../../styles/navbar.css"; 
import { NavLink } from "react-router-dom";
import "../../App.css"

const CustomNavbar = () => {

    const { user, logout } = useUser(); //Using the userHook to access user data and logout function

    return (

        <nav className="navigation">
            <img src={logo} alt="logo" className="brand-logo" />
            <div className="navigation-menu"> 
                {user !== null && (
                    <ul>
                        <li>
                            <NavLink to="/TranslationPage">Translator</NavLink> 
                        </li>
                    </ul>
                )}
                {user !== null && (
                    <ul>
                        <li>
                            <NavLink to="/Profile">Profile</NavLink> 
                        </li>
                    </ul>
                )}
                {user !== null && (
                    <ul>
                        <li>
                            <button onClick={logout} className="logout-btn"> 
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