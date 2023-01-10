import logo from "../assets/img/personal-logo.png";
const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <nav>
                    <img src={logo} alt="Terciel" className="logo"/>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
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