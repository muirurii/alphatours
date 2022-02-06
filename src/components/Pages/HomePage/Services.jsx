const Services = ({toDestinations})=>{
    return(
        <div id="services">
            <h1>What we offer</h1>
            <div className="service-cards">
                <div className="card">
                    <div>
                        <i className="fas fa-user-lock"></i>
                        <h2>Private Tours</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dignissimos modi ipsum aspernatur similique amet, magni quia, accusantium sed veritatis deleniti sit laborum.
                    </p>
                </div>
                <div className="card">
                    <div>
                        <i className="fas fa-star"></i>
                        <h2>Apex Services</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dignissimos modi ipsum aspernatur similique amet, magni quia, accusantium sed veritatis deleniti sit laborum.
                    </p>
                </div>
                <div className="card">
                    <div>
                        <i className="fas fa-money-bill-wave"></i>
                        <h2>Affordable Packages</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dignissimos modi ipsum aspernatur similique amet, magni quia, accusantium sed veritatis deleniti sit laborum.
                    </p>
                </div>
            </div>
            <button onClick={toDestinations}>Book Tour</button>
        </div>
    );
}

export default Services;