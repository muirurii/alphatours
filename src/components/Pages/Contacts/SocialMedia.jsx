import {Link} from 'react-router-dom'; 

const SocialMedia = ()=>{
    return(
        <ul className="socials-list">
            <h3>Our socials</h3>
            <li><Link to=""><i className="fas fa-envelope"></i><label>Email</label> - alphatours@gmail.com</Link></li>
            <li><Link to=""><i className="fas fa-phone"></i><label>Phone</label> - </Link> +254723938899</li>
            <li><Link to=""><i className="fas fa-phone"></i><label>Phone</label> - </Link> +254740810228</li>
            <li><Link to=""><i className="fab fa-facebook"></i><label>Facebook</label> - @alphatours</Link></li>
            <li><Link to=""><i className="fab fa-instagram"></i><label>Instagram</label> - @_alphatours</Link></li>
            <li><Link to=""><i className="fab fa-twitter"></i><label>Twitter</label> - @alphatours</Link></li>
        </ul>
    );
}

export default SocialMedia;