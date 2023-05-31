
import Logo from '../../assets/images/Logo.png'
import './navbar.css'


function Navbar() {
    return (
        <div>
            <div className="Navbar">
                <div className="logo">
                    <img src={Logo} className="Logo"/>
                </div>                
                <div className="sec-navbar">
                    <ul>
                        <li>Modullar</li>
                        <li>Foydalar</li>
                        <li>Kafolat</li>
                        <li>Tariflar</li>
                        <li>Keyslar</li>
                    </ul>
                    <div className="button2">+998 00 000 99 99</div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;