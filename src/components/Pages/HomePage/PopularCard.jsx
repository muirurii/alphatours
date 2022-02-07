import {useNavigate} from 'react-router-dom';

const PopularCard = ({place})=>{
    const navigate = useNavigate();
    const toBooking = ()=>{
        navigate(`/booking/${place.id}`)
    }
    const toDestination = ()=>{
        navigate(`/destination/${place.id}`)
    }

    return(
        <div>
        <h2>{place.name}</h2>
        <h3>Category - {place.category}</h3>
        <label>{place.price}$</label>
        <label>{place.duration}</label>
        <div className="buttons">
            <button onClick={toBooking}>Book Tour</button>
            <button onClick={toDestination}>More</button>
        </div>
    </div>
    );
}

export default PopularCard;