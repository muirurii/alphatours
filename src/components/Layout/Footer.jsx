import Logo from './Logo';
import {Link} from 'react-router-dom';

import lg from '../../utilities/logo.png';

const Footer = ()=>{
    return(
        <footer>
            <div>
               <h3>Quick Links</h3>
                <ul>
                    <li><Link to="/#">Home</Link></li>
                    <li><Link to="/destinations/wildlife">Wildlife tour</Link></li>
                    <li><Link to="/destinations/mountain">Mountain climbing</Link></li>
                    <li><Link to="/destinations/adventure">Adventure</Link></li>
                    <li><Link to="/destinations/camping">Camping</Link></li>
                </ul>
            </div>
            <div>
                <h1>Trusted By</h1>
                <div className="trustees">
                    <img src={lg} alt="logo" />
                    <img src={lg} alt="logo" />
                    <img src={lg} alt="logo" />
                </div>
            </div>
            <div>
                <ul>
                    <li><Link to="tel:2548776799"><i className = "fas fa-phone-alt"></i></Link></li>
                    <li><Link to="mailto:alphasafaris@gmail.com"><i className = "fas fa-envelope"></i></Link></li>
                    <li><Link to="#"><i className = "fab fa-instagram"></i></Link></li>
                    <li><Link to="#"><i className = "fab fa-facebook"></i></Link></li>
                </ul>
                <Logo />
                <p>Copyright &copy; 2012-2013</p> 
            </div>
            
        </footer>
    );
}

export default Footer;