import { Link } from "react-router-dom";

const Destination = ({place,index})=> {
    window.scrollTo(0,0);

    return ( 
        <>  
            <h2 className="destination-title capitalize"><span className="center">{index}</span> &nbsp;{place.name}</h2>
            <div className="destination">
            <div className="description">
                <h2>{place.country}</h2> &nbsp;
                <i className="fas fa-map-marker-alt"></i>
                <div>
                    <label className="capitalize">{place.category}</label>
                </div>
                <div>
                    <label>Activity level - {place.level}</label>
                </div>
                <div>
                    <label>Duration - {place.duration}</label>
                </div>
                <label className="orange">This tour costs {place.price}$</label>
               <p>
                    {[...place.description].map((letter,index)=> {
                       return index >= 300 && index % 380 === 0 ? <span key={index}>{letter} <br /> <br /> </span>  :<span key={index}>{letter}</span>
                    })}
                </p> 
                <Link to={`/booking/${place.id}`}className ="link-orange link">Book Trip</Link>
            </div>
            <img src={place.background} alt={place.name} />
            </div>
        </>
     );
}

export default Destination;