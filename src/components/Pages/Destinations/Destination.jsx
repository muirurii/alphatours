const Destination = ({place})=> {
    return ( 
        <div className="destination" style={{"backgroundImage":`url(${place.background})`}}>
        <div className="description">
            <h2>{place.country}</h2> &nbsp;
            <i className="fas fa-map-marker-alt"></i>
            <h3>{place.name}</h3>
            <div>
                  <label>Activity level </label><span>: {place.level}</span>
            </div>
            <p>{place.description}</p>
            <button className="">Book Trip</button>
        </div>
        </div>
     );
}

export default Destination;