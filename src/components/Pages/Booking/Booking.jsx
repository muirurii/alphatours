import { useParams } from "react-router";
import {useState} from 'react';
import useScrollToTop from '../../../customHooks/useScroll'

const Booking = ({places})=>{

    useScrollToTop();
        
    const {id} = useParams();
    const place = places.filter(place => place.id === +id)[0];

    const[formData,setFormData] = useState({
        name:'',
        email:'',
        number:'',
        slots:1,
        message:''
    });
   
    const changeForm = obj =>{
        setFormData({...formData,...obj});
    }

    const onSubmit = (e)=>{
        e.preventDefault();
    }

    return(
        <div className="booking">
            <h1>Book Tour </h1>
            <h3 className="capitalize">{place.name}</h3>
            <div className="tour-info">
                <h4><i className="fas fa-map-marker-alt"></i> {place.country}</h4>
                <h4>Price - {place.price * +formData.slots }$</h4>
                <h4>Duration - {place.duration}</h4>
            </div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="_name">Name</label>
                    <input type="text" id="_name" placeholder="your name" value={formData.name} onChange={(e)=>changeForm({name:e.target.value})} required/>
                </div>
                <div>
                    <label htmlFor="mail">Email</label>
                    <input type="email" id="mail" placeholder="your email" value={formData.email} onChange={(e)=>changeForm({email:e.target.value})} required/>
                </div>
                <div>
                    <label htmlFor="slots">Phone Number</label>
                    <input type="number" min={1} id="slots" placeholder="your phone number" value={formData.number} onChange={(e)=>changeForm({number:e.target.value})} required/>
                </div>
                <div>
                    <label htmlFor="slots">Slots</label>
                   
                    <input type="number" min={1} id="slots"  value={formData.slots} onChange={(e)=>changeForm({slots:e.target.value})} placeholder="how many slots?"  required/>
                </div>
                <div>
                    <label htmlFor="info">Additional info</label>
                    <textarea id="info" cols="30" rows="10" placeholder="enter additional info" value={formData.message} onChange={(e)=>changeForm({message :e.target.value})} required></textarea>
                </div>
                <button type="submit" className="link link-blue">Book</button>
            </form>
        </div>
    )
}
export default Booking;