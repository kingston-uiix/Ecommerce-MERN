import React from 'react';
import './App.css';

import { BrowserRouter, Route,Link } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <BrowserRouter>
    <div className="App">
     
        <header tabindex="0">
        
        <Link to="/"><img className="bitee"  src="/img/logo.png" alt="Sample photo"/></Link>
        
 
        <div className="donkey">
        
      <Link to="/cart">   <li><a className="monk"  href="#0"><i  className="fa fa-shopping-cart" aria-hidden="true"></i></a></li></Link>
      {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">  <li><a  href="#0"></a></li> </Link>
            )}
  
        </div>
      </header>
        <div id="nav-container">
          <div className="bg"></div>
          <div className="button" tabindex="0">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </div>
          <div id="nav-content" tabindex="0">
            <ul>
            <li><Link to="/">Home</Link></li>
              <li><Link to="signin">Login</Link></li>
              <li><Link to="products/9">Todays Special</Link></li>
            
              <li><Link to="/shipping">Shipping</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li className="small"><a href="#0">Facebook</a><a href="#0">Instagram</a></li>
            </ul>
          </div>
        </div>
    
        <Route path="/shipping" component={ShippingScreen}/>
        <Route path="/payment" component={PaymentScreen}/>
        <Route path="/placeorder" component={PlaceOrderScreen}/>
            <Route path="/signin" component={SigninScreen}/>
            <Route path="/register" component={RegisterScreen}/>
            <Route path="/products/:id" component={ProductScreen}/>
            <Route path="/cart/:id?" component={CartScreen}/>
            <Route path="/" exact={true} component={HomeScreen}/>
        
         
        <footer className="footer-distributed">
 
		<div className="footer-left">
 
		<img className="biteee"  src="/img/logo.png" alt="Sample photo"/>
 
	
 
		<p className="footer-company-name">Kingston &copy; 2019</p>
		</div>
 
		<div className="footer-center">
 
		<div>
		<i className="fa fa-map-marker"></i>
		<p><span>kingstondavid1998@gmail.com</span> Bangalore, India</p>
		</div>
 
	
	
		</div>
 
		<div className="footer-right">
 
		<p className="footer-company-about">
		<span>About the company</span>
        &amp; SELF Learner.
		</p>
 

 
		</div>
 
		</footer>
 



     </div>
     </BrowserRouter>
      
  );
}

export default App;


