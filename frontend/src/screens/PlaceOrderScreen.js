import React, { useEffect } from 'react'
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PlaceOrderScreen(props) {

    const cart = useSelector(state => state.cart);

  const { cartItems, shipping, payment } = cart;
    if(!shipping){
        props.history.push("./shipping");
    }

    else if(!payment){
        props.location.push("./payment");
    }

   
    const dispatch = useDispatch();
  
    useEffect(() => {
    
    }, [] );

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping");
      }

    return (
        <div>
        <div className="our">
          <h1 className="space"><span className="space"><i className="fa fa-shopping-basket" aria-hidden="true"></i></span>Your Cart</h1>
            </div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className = "cart">
                <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                       <h3>
                           Shipping
                           </h3> 
                           <h3>
                               Payment
                           </h3>
                    </li>
                    {
                       cartItems.length ===0? 
                       <div>
                           You Have A Empty Cart!...<span id="hblue"> <Link to ={"/"}> continue shopping </Link></span>
                       </div>
                       :
                       cartItems.map(item =>
                        <li>
                            <div className="cart-image">

                            <img  src={item.image} alt="product"/>
                            </div>
                        
                           
                            <div className="cart-name">
                             
                              {cart.shipping.address},{cart.shipping.city}
                       <h6 className="fromm"> {cart.shipping.postalCode},{cart.shipping.country}</h6>
                                
                     

                                <div className="cutie">
                                    Qty: {item.qty}
                                 
                                    </div>
        
                                    </div>
                                
                           
                            <div className="cart-price">
                             {cart.payment.paymentMethod}
                            </div>
                          
                        
                        </li>
                        )
                    }

                </ul>
                </div>
                <div className="cart-action">

                        <p id="place-order">By Placing your order you agree to <span id="hblue"> have a bite</span> notice &  <span id="hblue">conditions of use</span> by our products!..</p>
                        <h6 id="polite">Order Summary</h6>

                <h3>
    Items :( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
    
  </h3>
  <h3>
  
  
    Sub total: $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
  </h3>

                        <button onClick={checkoutHandler} className="putto" disabled={cartItems.length===0}>
                            Pay Now
                        </button>
                       
                </div>
            </div>
           
    </div>
    )
}
