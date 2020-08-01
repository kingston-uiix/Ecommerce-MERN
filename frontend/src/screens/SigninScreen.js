import React, {useEffect, useState} from 'react'
import {Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';




export default function SigninScreen(props) {
   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const {loading, userInfo, error} = userSignin;
  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

   
   useEffect(() => {
        if (userInfo) {
          props.history.push(redirect);
        }
     return () => {
      
     };
   }, [userInfo]);

const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(signin(email, password));
}
    return (

<div>
<div  className="cont">

    <h2 className="sinh">SIGN IN</h2>
    
    <div>
    {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </div>
  
    
  
    <form onSubmit={submitHandler} action="" method="post">
   
      <div className="first-input input__block first-input__block">
         <input type="email" placeholder="Email" className="input" id="email" onChange={(e)=>setEmail(e.target.value)}  />
      </div>
    
      <div className="input__block">
         <input type="password" placeholder="Password" className="input" id="password" onChange={(e)=>setPassword(e.target.value)}   />
      </div>

    
    
      <button className="signin__btn">
        Sign in
      </button>
    </form>
  
    <div className="separator">
      <p>OR</p>
    </div>
  <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect}>
    <button className="github__btn">
      <i className="fab fa-basket"></i>
      Need New Account?
    </button></Link>
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

