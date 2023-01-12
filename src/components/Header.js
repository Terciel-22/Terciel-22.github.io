import logo from "../assets/img/personal-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
const Header = () => {
    
    const menu = useRef();
    const openMenu = () => {
        menu.current.style = "right: 0";
    }
    const closeMenu = () => {
        menu.current.style = "right: -12.5rem";
    }
    
    return (
        <header>
            <div className="container">
                <nav>
                    <img src={logo} alt="Terciel" className="logo"/>
                    <ul ref={menu}>
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <FontAwesomeIcon icon={faTimes} className="icon" onClick={closeMenu}/>
                    </ul>
                    <FontAwesomeIcon icon={faBars} className="icon" onClick={openMenu}/>
                </nav>
                <div className="header-text">
                    <p>UI/UX Designer</p>
                    <h1>
                        Hi, I'm <br/>
                        <span>Diether Mark Fiel</span><br/>
                        from Philippines.
                    </h1>
                </div>
            </div>
        </header>
    )
}

export default Header;