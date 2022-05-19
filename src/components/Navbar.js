import "./Navbar.css"
// import useState for mobile 
import { useState } from "react";
// Import react icons, return menu 
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({navbarLinks}) => {
    // Use useState for phone mobile
    const [menuClicked, setMenuClicked] = useState(false)
    // create funtion for insert o menu mobile 
    const toggleMenuclick = () =>{
        setMenuClicked(!menuClicked)
    }
    return (
        <nav className="navbar">
            <span className="navbar_logo">Travell</span>
        {/* Validetion funtion, for if use {} */}
            {menuClicked ? (
                <FiMenu size={25} className="navbar_menu" onClick={toggleMenuclick}/>
                ) : (
                <FiX size={25} className="navbar_menu" onClick={toggleMenuclick}/>
                )}
            {/* insert class create for mobil no css */}
            <ul className={
                menuClicked ? "navbar_list" : "navbar_list navbar_list--active"
            }>
                {navbarLinks.map((item) =>{
                    return (
                        <li className="navbar_item" key={item.title}>
                            <a className="navbar_link" href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            
        </nav>
    )
}
export default Navbar