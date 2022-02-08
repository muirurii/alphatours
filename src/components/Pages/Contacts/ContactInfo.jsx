import {Link} from 'react-router-dom';

const ContactsInfo = ()=>{
    return(
        <div className = "contacts-info">
                <div>
                    <ul>
                        <li><Link to=""><label>Email</label> - alphatours@gmail.com</Link></li>
                        <li><Link to=""><label>Phone</label> - </Link> +2547239383228</li>
                        <li><Link to=""><label>Facebook</label> - @alphatours</Link></li>
                        <li><Link to=""><label>Instagram</label> - @_alphatours</Link></li>
                        <li><Link to=""><label>Twitter</label> - @alphatours</Link></li>
                    </ul>
                </div>
            <form>
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
            </form>
        </div>
    );
} 

export default ContactsInfo;