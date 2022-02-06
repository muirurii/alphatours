import {Link} from  'react-router-dom';

const Hero = ({toDestinations})=>{
    return(
      <div className="hero-bg">
        <div className="hero-text">
            <div className="socials">
                  <Link to="/"><i className="fas fa-map-marker-alt"></i></Link>
                  <Link to="/"><i className="fas fa-envelope"></i></Link>
                  <Link to="/"><i className="fab fa-twitter"></i></Link>
                  <Link to ="/"><i className="fab fa-instagram"></i></Link>
                  <Link to ="/"><i className="fab fa-facebook"></i></Link>
                  <Link to="/"><i className="fas fa-phone"></i></Link>
            </div>
            <div className="highlight">
              <h3>
                  EVERY DAY IS A CHANCE FOR YOU TO
                  TRAVEL AND EXPROLE THE 
                  WORLD'S BEAUTY.
              </h3>
              <p>
                  Alpha tours provides you with the best packages to satisfy your travel needs
                  and make awesome memories.
              </p>
            </div>
            <div className="align-left">
              <button className="cta" onClick={toDestinations}>View Destinations</button>
            </div>
        </div>
      </div> 
    );
}

export default Hero;