import Hero from './Hero';
import Services from './Services';
import Popular from './Popular';
import useScrollToTop from '../../../customHooks/useScroll';

const HomePage= ({places}) =>{

   useScrollToTop();

   return(
      <div>
        <Hero />
        <Services />
        <Popular places={places}/>
      </div>
   );
} 

export default HomePage;