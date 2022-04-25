

const ServiceCard = ({service}) =>{
    return(
        <div className="card">
            <div>
                <i className={`${service.icon} center`}></i>
            </div>
            <h3 className="capitalize">{service.title}</h3>
            <p>{service.text}</p>
        </div>
    );
}

export default ServiceCard;