import {Link} from 'react-router-dom';
import Logo from './Logo';

const Header = ()=>{
    return (
            <header>
                <Logo />
                <nav className = "main-nav">
                    <ul className='list'>
                        <li><Link to="/">HOME</Link></li>
                        <li className='dest'>CATEGORIES
                            <ul className="more">
                                <li><Link to="/destinations/wildlife">Wildlife tour</Link></li>
                                <li><Link to="/destinations/mountain">Mountain climbing</Link></li>
                                <li><Link to="/destinations/adventure">Adventure</Link></li>
                                <li><Link to="/destinations/camping">Camping</Link></li>
                            </ul>
                        </li>
                        <li><Link to="booking">PRICING</Link></li>
                        <li><Link to="contacts">CONTACTS</Link></li>
                    </ul>
                </nav>
            </header>
    );
}

export default Header;