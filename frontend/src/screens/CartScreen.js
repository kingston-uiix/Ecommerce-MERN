import React, { useEffect } from 'react'
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

export default function CartScreen(props) {

    const cart = useSelector(state => state.cart);

  const { cartItems } = cart;


    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) =>{
        dispatch(removeFromCart(productId));
    }
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty));
        }
    }, [] );

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping");
      }

    return (
        <div>
        <div className="our">
          <h1 className="space"><span className="space"><i className="fa fa-shopping-basket" aria-hidden="true"></i></span>Your Cart</h1>
            </div>
            <div className = "cart">
                <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                       <h3>
                           Items
                           </h3> 
                           <h3>
                               Price
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
                                <div className>
                                <Link to={"/product/" + item.product}>
                                    {item.name} 
                       <h6 className="fromm">from {item.brand}</h6>
                                </Link>
                                </div>

                                <div className="cutie">
                                    Qty:
                                    <select className="putton" value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                    {[...Array(item.countInStock).keys()].map(x =>
                                     <option key={x + 1} value={x + 1}>{x + 1}</option>
                                         )}
                                    </select>
                                    </div>
                                    <button type="button" id="rem-btn" className="fa fa-trash" onClick={() => removeFromCartHandler(item.product)} >
                                   
                </button>
               
                                
                            </div>
                            <div className="cart-price">
                               ${item.price} 
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

                        <button onClick={checkoutHandler} className="cart-btn" disabled={cartItems.length===0}>
                            Place Your order
                        </button>
                       
                </div>
            </div>
           
    </div>
    )
}
