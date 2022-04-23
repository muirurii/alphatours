import SocialMedia from './SocialMedia';
import 'select-pure';

const ContactsInfo = ()=>{
    return(
        <div className = "contacts-info">
            <div>
                <SocialMedia />                    
            </div>
            <form onSubmit = {(e)=> e.preventDefault()}>
                <h3>Write to us</h3>
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
                <button className='link-blue link' type="submit">Send</button>
             </div> 
            </form>
        </div>
    );
} 

export default ContactsInfo;