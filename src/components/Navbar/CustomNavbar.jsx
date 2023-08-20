import { NavLink } from "react-router-dom"

const CustomNavbar = () => {
    return (
        <nav>,
            <ul>
                <li><NavLink to="/Translator">Translator</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/Profile">Profile</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default CustomNavbar;
