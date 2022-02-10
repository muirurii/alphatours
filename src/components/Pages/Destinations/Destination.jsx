import { useNavigate } from "react-router";

const Destination = ({place})=> {
    window.scrollTo(0,0);
    const navigate = useNavigate();

    const toBooking = ()=>{
        navigate(`/booking/${place.id}`);
    }
    return ( 
        <div className="destination" style={{"backgroundImage":`url(${place.background})`}}>
        <div className="description">
            <h2>{place.country}</h2> &nbsp;
            <i className="fas fa-map-marker-alt"></i>
            <h3>{place.name}</h3>
            <div>
                <label>Activity level : {place.level}</label>
            </div>
            <div>
                <label>Duration - {place.duration}</label>
            </div>
            <label className="price">Costs - {place.price}$</label>
            <p>{place.description}</p>
            <button onClick={toBooking}>Book Trip</button>
        </div>
        </div>
     );
}

export default Destination;