import Destination from "./Destination";
import places from "./places";

const Destinations = ()=>{
    return(
      <div className="destinations">
          <div className="search-bar">
              <form>
                  <input type="text" placeholder="search destinations"/>
                  <button type="submit">search</button>
              </form>
          </div>
        {places.map(place=><Destination place={place}/>)}
      </div>  
    )
}

export default Destinations;