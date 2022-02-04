import {Link} from 'react-router-dom'

const Header = ()=>{
    return (
        <header>
            <div className="logo">
                <h1>Travel Advisor</h1>
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