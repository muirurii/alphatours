import Testimonials from './Testimonials';
import useScrollToTop from '../../../customHooks/useScroll';

const About = ()=>{

    useScrollToTop();

    return(
       <>
        <div className ="about">
            <h1>About Us</h1>
            <div className='text'>
                <p> 
                    Loreem voluptatum qui nulla enim commodi blanditiis vitae ad itaque dolores iste, laboriosam quae exercitationem aspernatur, aliquam omnis.
                    Fuga natus ab minus quidem voluptatum qui nulla enim
                    Fug voluptminus quidem voluptab minus quidem voluptatum qui nulla enim commodi blanditiis vitae ad itaque dolores iste, laboriosam quae exercitationem aspernatur, aliquam omnis.
                    Fuga natus ab minus quidem voluptatum qui nulla  vita
                    Mommodi blandia natus ab minus ationem 
                    quideminus quidem voluptatum qui nulla enimiis vit
                    Mommoditum quie ad itaque dolores iste, laboriosam quae exercitaspernatur, aliquam omnis.
                </p>
                <p>
                    lvoluptatum qui nulla enim
                    Fug voluptminus quidem voluptab minus quidem voluptatum qui nulla enim commodi blanditiis vitae ad itaque dolores iste, laboriosam quae exercitationem aspernatur, aliquam omnis.
                    Fuga natus ab minus quidem voluptatum qui nulla  vita
                    Mommodi blandia natus ab minus ationem 
                    q
                </p>
            </div>
        </div>
        <Testimonials />
       </>
    )
}

export default About;