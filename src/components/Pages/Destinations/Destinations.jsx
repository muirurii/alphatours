import Destination from "./Destination";
import { useParams } from "react-router";

const Destinations = ({places})=>{
  window.scrollTo(0,0);

  let placesArr;

  const {category} = useParams();
  category !== 'all' ? placesArr = places.filter(place=>place.category.includes(category)) :
   placesArr = places
    return(
      <div className="destinations">
          <div className="search-bar">
              <form>
                  <input type="text" placeholder="search destinations"/>
                  <button type="submit">search</button>
              </form>
          </div>
        {placesArr.map(place=><Destination place={place} key={place.id}/>)}
      </div>  
    )
}

export default Destinations;