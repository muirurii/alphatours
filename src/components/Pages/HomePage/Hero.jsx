import { Link } from "react-router-dom";

const Hero = ()=>{
    return(
        <div className="hero-text center">
            <img src={"https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1024"} alt="Beach" />
            <div className="highlight">
              <h1>
                  EVERY DAY IS A CHANCE FOR YOU TO
                  TRAVEL AND EXPROLE THE 
                  WORLD'S BEAUTY.
              </h1>
              <h4>
                  Alpha tours is a top rated travel agency offering epic worldwide destinations with the best packages to satisfy your travel needs.
                  Travel with us and let us make awesome memories together.
              </h4>
              <Link className="cta center" to={"/destinations/all"}>
                  <span>Get Started</span>
                  <i className="fas fa-arrow-right"></i>
                  </Link>
            </div>
        </div>
    );
}

export default Hero;