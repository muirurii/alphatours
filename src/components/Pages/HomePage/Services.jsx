import { Link } from 'react-router-dom';
import {services} from '../../../utilities/services'
import ServiceCard from './ServiceCard';

const Services = ()=>{
    return(
        <div id="services">
            <h1>What we offer</h1>
            <div className="service-cards">
              {services.map((service,id)=> <ServiceCard key={id} service={service}/>)}
            </div>
            <Link className='link-orange link' to={"/destinations/all"}>View Destinations</Link>
        </div>
    );
}

export default Services;