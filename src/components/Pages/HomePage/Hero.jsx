import { Link } from "react-router-dom";

const Hero = ()=>{
    return(
        <div className="hero-text center">
            <div className="highlight">
              <h1>
                  EVERY DAY IS A CHANCE FOR YOU TO
                  TRAVEL AND EXPROLE THE 
                  WORLD'S BEAUTY.
              </h1>
              <h3>
                  Alpha tours is a top rated travel agency offering epic worldwide destinations with the best packages to satisfy your travel needs.
                  Travel with us and let us make awesome memories together.
              </h3>
              <Link className="cta block" to={"/destinations/all"}>View Destinations</Link>
            </div>
        </div>
    );
}

export default Hero;