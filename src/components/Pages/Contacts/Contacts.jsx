import ContactsInfo from "./ContactInfo";
import Testimonials from "./Testimonials";

const ContactsPage = ()=>{
    return(
        <div className="contacts">
            <h1>Reach out to us</h1>
            <ContactsInfo />
            <Testimonials />
        </div>
    );
}

export default ContactsPage;