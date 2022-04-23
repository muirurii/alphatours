import Hero from './Hero';
import Services from './Services';
import Popular from './Popular';

const HomePage= ({places}) =>{
   return(
      <div>
        <Hero />
        <Services />
        <Popular places={places}/>
      </div>
   );
} 

export default HomePage;