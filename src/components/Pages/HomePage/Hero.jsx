import HeroText from './HeroText';
import styles from './homepage.module.css';

const Hero= () =>{
   return(
      <div className="hero-bg" style={{styles}}>
        <HeroText />
      </div> 
   );
} 

export default Hero;