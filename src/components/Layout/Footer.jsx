import SocialMedia from '../Pages/Contacts/SocialMedia';
import { Link } from 'react-router-dom';
import logo from '../../utilities/logo.png';

const Footer = ()=>{
    return(
        <footer>
            <div>
               <h3>Quick Links</h3>
                <ul>
                    <li><Link to="/alphatours#">Home</Link></li>
                    <li><Link to="/destinations/wildlife">Wildlife tour</Link></li>
                    <li><Link to="/destinations/mountain">Mountain climbing</Link></li>
                    <li><Link to="/destinations/adventure">Adventure</Link></li>
                    <li><Link to="/destinations/camping">Camping</Link></li>
                    <li><Link to={""}>Terms of service</Link></li>
                    <li><Link to={""}>Customer care</Link></li>
                </ul>
                
            </div>
            <div className='foot-socials'>
                <SocialMedia />
            </div>
            <div className='awards'>
                <h3>Awards</h3>
                <div className="trustees">
                    <img src={logo} alt="logo" />
                    <img src={logo} alt="logo" />
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className='lower-footer center'>
                <p>Alpha tours &nbsp; | &nbsp; Copyright &copy; 2022</p> 
            </div>
            
        </footer>
    );
}

export default Footer;