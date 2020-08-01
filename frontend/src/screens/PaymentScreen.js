import React, {useEffect, useState} from 'react'
import {Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin, register } from '../actions/userActions';
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';



export default function PaymentScreen(props) {
   
  const [paymentMethod, setPaymentMethod] = useState('');

    const dispatch = useDispatch();
  

const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push('placeorder');
  
  }
    return (

<div>

<div  className="cont">

    <h2 className="sinh">Payment</h2>
    
 
    <CheckoutSteps step1 step2 step3></CheckoutSteps>
  
    <form onSubmit={submitHandler} action="" method="post">
    <div >
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="paypal"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>
                <label for="paymentMethod">Paypal</label>
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

