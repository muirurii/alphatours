import { useParams } from "react-router";
import Destination from "./Destination";
import useScrollToTop from "../../../customHooks/useScroll";

const DestinationDetails = ({places})=>{
    
    useScrollToTop();

    const{id} = useParams();
    const place = places.find(place => place.id === +id);
    return(
       <div className="destinations">
           <Destination place={place} index={1}/>
       </div>
   );
}

export default DestinationDetails;