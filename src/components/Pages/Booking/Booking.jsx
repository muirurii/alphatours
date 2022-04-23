import { useParams } from "react-router";
import {useState} from 'react';

const Booking = ({places})=>{

    window.scrollTo(0,0);
    const {id} = useParams();
    const place = places.filter(place => place.id === +id)[0];

    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[number,setNumber] = useState('');
    const[slots,setSlots] = useState(1);
    const[message,setMessage] = useState('');
    
    const changeName = (e)=>{
        setName(e.target.value);    
    }
    const changeEmail = (e)=>{
        setEmail(e.target.value);
    }
    const changeNumber = (e)=>{
        setNumber(e.target.value);
    }
    const changeSlots = (e)=>{
        setSlots(e.target.value);
    }
    const changeMessage = (e)=>{
        setMessage(e.target.value);
    }

    const onSubmit = (e)=>{
        e.preventDefault();
    }

    return(
        <div className="booking">
            <h1>Book Tour </h1>
            <h3>{place.name}</h3>
            <div className="tour-info">
                <h4><i className="fas fa-map-marker-alt"></i> {place.country}</h4>
                <h4>Price - {place.price * +slots }$</h4>
                <h4>Duration - {place.duration}</h4>
            </div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="_name">Name</label>
                    <input type="text" id="_name" placeholder="your name" value={name} onChange={changeName} required/>
                </div>
                <div>
                    <label htmlFor="mail">Email</label>
                    <input type="email" id="mail" placeholder="your email" value={email} onChange={changeEmail} required/>
                </div>
                <div>
                    <label htmlFor="slots">Phone Number</label>
                    <input type="number" min={1} id="slots" placeholder="your phone number" value={number} onChange={changeNumber} required/>
                </div>
                <div>
                    <label htmlFor="slots">Slots</label>
                   
                    <input type="number" min={1} id="slots"  value={slots} onChange={changeSlots} placeholder="how many slots?"  required/>
                </div>
                <div>
                    <label htmlFor="info">Additional info</label>
                    <textarea id="info" cols="30" rows="10" placeholder="enter additional info" value={message} onChange={changeMessage} required></textarea>
                </div>
                <button type="submit">Book</button>
            </form>
        </div>
    )
}
export default Booking;