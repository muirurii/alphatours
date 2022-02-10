const Hero = ({toDestinations})=>{
    return(
      <div className="hero-bg">
        <div className="hero-text">
            <div className="highlight">
              <h1>
                  EVERY DAY IS A CHANCE FOR YOU TO
                  TRAVEL AND EXPROLE THE 
                  WORLD'S BEAUTY.
              </h1>
              <p>
                  Alpha tours provides you with the best packages to satisfy your travel needs
                  and make awesome memories.
              </p>
              <button className="cta" onClick={toDestinations}>View Destinations</button>
            </div>
        </div>
      </div> 
    );
}

export default Hero;