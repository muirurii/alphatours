import {Link} from 'react-router-dom';

const ContactsInfo = ()=>{
    return(
        <div className = "contacts-info">
                <div>
                    <ul>
                        <li><Link to=""><i className="fas fa-envelope"></i><label>Email</label> - alphatours@gmail.com</Link></li>
                        <li><Link to=""><i className="fas fa-phone"></i><label>Phone</label> - </Link> +2547239383228</li>
                        <li><Link to=""><i className="fab fa-facebook"></i><label>Facebook</label> - @alphatours</Link></li>
                        <li><Link to=""><i className="fab fa-instagram"></i><label>Instagram</label> - @_alphatours</Link></li>
                        <li><Link to=""><i className="fab fa-twitter"></i><label>Twitter</label> - @alphatours</Link></li>
                    </ul>
                </div>
            <form>
             <div>
                <div>
                    <input type="text" id="name" placeholder="Enter your name"/>
                </div>
                <div>
                    <input type="email" id="email" placeholder="Enter your email"/>
                </div>
                <div>
                    <textarea id="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit">Send</button>
             </div> 
            </form>
        </div>
    );
} 

export default ContactsInfo;