import {Link} from 'react-router-dom';

const ContactsInfo = ()=>{
    return(
        <div className = "contacts-info">
                <div>
                    <ul>
                        <li><Link to="">Email alphatours@gmail.com</Link></li>
                        <li><Link to=""></Link>Phone - +2547239383228</li>
                        <li><Link to="">Facebook page @alphatours</Link></li>
                        <li><Link to="">Instagram @_alphatours</Link></li>
                        <li><Link to="">Twitter @alphatours</Link></li>
                    </ul>
                </div>
            <form>
                <div>
                    <input type="text" id="name" placeholder="Enter your name"/>
                </div>
                <div>
                    <input type="email" id="email" placeholder="Enter your name"/>
                </div>
                <div>
                    <textarea id="message" cols="30" rows="10" placeholder="Enter your name"></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
} 

export default ContactsInfo;