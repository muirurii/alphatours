import {Link} from 'react-router-dom';
import Logo from '../../utilities/logo.png'

const Header = ()=>{
    return (
            <header>
                <div className="logo">
                <img src={Logo} />
                    <h1>
                        Alpha Tours
                    </h1>
                </div>
                <nav className = "main-nav">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="destinations">DESTINATIONS</Link></li>
                        <li><Link to="pricing">PRICING</Link></li>
                        <li><Link to="contacts">CONTACTS</Link></li>
                    </ul>
                </nav>
            </header>
    );
}

export default Header;