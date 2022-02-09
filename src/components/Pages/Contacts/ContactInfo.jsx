import {Link} from 'react-router-dom';
import 'select-pure';

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
            <form onSubmit = {(e)=> e.preventDefault()}>
             <div>
                <div>
                    <input type="text" id="name" placeholder="Enter your name" required/>
                </div>
                <div>
                    <input type="email" id="email" placeholder="Enter your email" required/>
                </div>
                <select-pure name="country" required>
                    <option-pure value="" disabled hidden>-- Subject of your message --</option-pure>
                    <option-pure value="1">I need help in booking</option-pure>
                    <option-pure value="2">Confirm tour data</option-pure>
                    <option-pure value="3">Request location visit</option-pure>
                    <option-pure value="4">Query on payments</option-pure>
                    <option-pure value="5">Feedback</option-pure>
                    <option-pure value="other">Other - specify below</option-pure>
                  </select-pure>
                <div>
                    <textarea id="message" cols="30" rows="10" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit">Send</button>
             </div> 
            </form>
        </div>
    );
} 

export default ContactsInfo;