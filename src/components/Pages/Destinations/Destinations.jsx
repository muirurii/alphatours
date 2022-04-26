import Destination from "./Destination";
import { useParams } from "react-router";
import {useState} from 'react';
import useScrollToTop from "../../../customHooks/useScroll";

const Destinations = ({places})=>{

  useScrollToTop();

  const[search,setSearch] = useState('');
  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }
  const {category} = useParams();
  
 let placesArr = category !== 'all' ?  places.filter(place=>place.category.includes(category)) :
     places;
   placesArr = placesArr.filter(place=>place.name.toLowerCase().trim().includes(search.toLowerCase().trim()) || place.country.toLowerCase().includes(search.toLowerCase().trim()))
    return(
      <div className="destinations">
          <h1>Destinations</h1>
          <div className="search-bar center">
              <form>
                  <input type="text" placeholder="search destinations" value = {search} onChange = {handleSearch}/>
              </form>
          </div>
        {placesArr.length ? placesArr.map((place,i)=> <Destination place={place} key={place.id} index={i+1}/>) : <p className="user-message">No destination fit your search term</p>}
      </div>  
    )
}

export default Destinations;