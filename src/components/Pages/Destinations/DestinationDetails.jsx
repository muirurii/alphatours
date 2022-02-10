import { useParams } from "react-router";
import Destination from "./Destination";

const DestinationDetails = ({places})=>{
    const{id} = useParams();
    const place = places.find(place => place.id === +id);
   return(
       <div className="destinations">
           <Destination place={place}/>
       </div>
   );
}

export default DestinationDetails;