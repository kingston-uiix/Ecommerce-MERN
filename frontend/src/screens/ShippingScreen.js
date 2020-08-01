import React, {useEffect, useState} from 'react'
import {Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin, register } from '../actions/userActions';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';



export default function ShippingScreen(props) {
   
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
    const dispatch = useDispatch();
  

const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }));
    props.history.push('payment');
  
  }
    return (

<div>

<div  className="cont">

    <h2 className="sinh">Shipping Address</h2>
    
 
    <CheckoutSteps step1 step2 ></CheckoutSteps>
  
    <form onSubmit={submitHandler} action="" method="post">
   
      <div className="first-input input__block first-input__block">
         <input type="text" placeholder="address" className="input" id="address" onChange={(e)=>setAddress(e.target.value)}  />
      </div>
      <div className="first-input input__block first-input__block">
         <input type="text" placeholder="city" className="input" id="city" onChange={(e)=>setCity(e.target.value)}  />
      </div>
      <div className="first-input input__block first-input__block">
         <input type="text" placeholder="postal" className="input" id="postal" onChange={(e)=>setPostalCode(e.target.value)}  />
      </div>
      <div className="first-input input__block first-input__block">
         <input type="text" placeholder="country" className="input" id="country" onChange={(e)=>setCountry(e.target.value)}  />
      </div>
     
    
    
      <button className="signin__btn">
        Continue
      </button>
    </form>
  

    </div>
  
  <foot>
    <p>
      Thank you for Visiting!..
      <i className="fa fa-heart"></i> 
      <i className="fa fa-heart"></i> 
      <i className="fa fa-heart"></i> 
    </p>

  </foot>




 </div>

    )
    
    
    
}

