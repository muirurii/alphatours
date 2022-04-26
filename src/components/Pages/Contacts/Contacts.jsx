import ContactsInfo from "./ContactInfo";
import useScrollToTop from "../../../customHooks/useScroll";

const ContactsPage = ()=>{

    useScrollToTop();

    return(
        <div className="contacts">
            <h1>Reach out to us</h1>
            <ContactsInfo />
        </div>
    );
}

export default ContactsPage;