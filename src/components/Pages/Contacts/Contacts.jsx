const ContactsPage = ()=>{
    return(
        <div className="contacts">
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" cols="30" rows="10"></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactsPage;