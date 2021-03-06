import { useState } from "react";

const Testimonials = ()=>{
    const testimonials = [0,1,2,3];
    const [activeIndex,setActiveIndex] = useState(0);

    const int = setInterval(()=>{
        setActiveIndex(activeIndex >= 3 ? 0 : activeIndex+1);
        clearInterval(int);
    },6000);

    return(
        <div className="testimonials">
            <h1>Customers Reviews</h1>
            <div>
                {testimonials.map((t,index)=>{
                    return(
                     <div className={`testimonial ${activeIndex === index ? 'active' : null}`}  key={index}>
                            <h2>Customer {index+1}</h2>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga natus ab mionem aspernatur, aliquam omnis.inus quidem voluptatum qui nulla enim commodi blanditiis vitae ad itaque dolores iste, laboriosam quae exercitat
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga natus ab mionem aspernatur, aliquam omnis.inus quidem voluptatum qui nulla enim commodi blanditiis vitae ad itaque dolores iste, laboriosam quae exercitat
                     </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Testimonials;