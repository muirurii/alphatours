import Hero from './Hero';
import Services from './Services';
import { useNavigate } from 'react-router';

const HomePage= () =>{
   const navigate = useNavigate();

   const toDestinations = ()=>{
     navigate("/destinations/all");
     window.scrollTo(0,0);
   }
   return(
      <div>
         <Hero toDestinations={toDestinations } />
        <Services toDestinations={toDestinations }/>
      </div>
      
   );
} 

export default HomePage;