import Destination from "./Destination";
import places from "./places";
import 'select-pure';
import { useParams } from "react-router";
import { useState } from "react";

const Destinations = ()=>{

  const {category} = useParams();
  const [placesArr,setPlaces] = useState(places);
  console.log(category);
  // if(category){
  //     setPlaces(placesArr.filter(place => place.category === category))
  // }

    return(
      <div className="destinations">
          <div className="search-bar">
              <form>
                  <input type="text" placeholder="search destinations"/>
                  <button type="submit">search</button>
                  <select-pure name="country" id="country">
                    <option-pure value="" disabled hidden>-- Please select a country --</option-pure>
                    <option-pure value="UA">Ukraine</option-pure>
                    <option-pure value="PL">Poland</option-pure>
                    <option-pure value="DE">Germany</option-pure>
                    <option-pure value="US">USA</option-pure>
                    <option-pure value="RU" disabled>Russia</option-pure>
                  </select-pure>
                  
              </form>
          </div>
        {placesArr.map(place=><Destination place={place} key={place.name}/>)}
      </div>  
    )
}

export default Destinations;