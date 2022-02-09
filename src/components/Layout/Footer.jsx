import Logo from './Logo';
import {Link} from 'react-router-dom';

import lg from '../../utilities/logo.png';

const Footer = ()=>{
    return(
        <footer>
            <div>
               <h2>Quick Links</h2>
                <ul>
                    <li><Link to="/alphatours#">Home</Link></li>
                    <li><Link to="/destinations/wildlife">Wildlife tour</Link></li>
                    <li><Link to="/destinations/mountain">Mountain climbing</Link></li>
                    <li><Link to="/destinations/adventure">Adventure</Link></li>
                    <li><Link to="/destinations/camping">Camping</Link></li>
                </ul>
                <ul className='foot-socials'>
                    <li><Link to="tel:2548776799"><i className = "fas fa-phone-alt"></i></Link></li>
                    <li><Link to="mailto:alphasafaris@gmail.com"><i className = "fas fa-envelope"></i></Link></li>
                    <li><Link to="#"><i className = "fab fa-instagram"></i></Link></li>
                    <li><Link to="#"><i className = "fab fa-facebook"></i></Link></li>
                </ul>
            </div>
            <div>
                <h2>Trusted by the best</h2>
                <div className="trustees">
                    <img src={lg} alt="logo" />
                    <img src={lg} alt="logo" />
                    <img src={lg} alt="logo" />
                </div>
            </div>
            <div>
                <Logo />
                <p>Copyright &copy; 2012-2022</p> 
            </div>
            
        </footer>
    );
}

export default Footer;