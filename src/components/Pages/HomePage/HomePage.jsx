import Hero from './Hero';
import Services from './Services';
import Popular from './Popular';
import { useNavigate } from 'react-router';

const HomePage= ({places}) =>{
   const navigate = useNavigate();

   const toDestinations = ()=>{
     navigate("/destinations/all");
     window.scrollTo(0,0);
   }
   return(
      <div>
         <Hero toDestinations={toDestinations } />
        <Services toDestinations={toDestinations }/>
        <Popular places={places}/>
      </div>
   );
} 

export default HomePage;