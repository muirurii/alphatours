import { Link } from "react-router-dom";


const PopularCard = ({place})=>{

    return(
        <div className={'popular-card'}>
        <h3 className="capitalize">{place.name}</h3>
        <h4 className='category capitalize'>{place.category}</h4>
        <img src={place.background} alt={`${place.name}`} />
        <div className="links center">
            <Link to={`/booking/${place.id}`} className={'link-orange link'}>Book tour</Link>
            <Link to={`/destination/${place.id}`} className={'link-blue link'}>View details</Link>
        </div>
    </div>
    );
}

export default PopularCard;