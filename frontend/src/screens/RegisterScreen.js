import React, {useEffect, useState} from 'react'
import {Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin, register } from '../actions/userActions';




export default function RegisterScreen(props) {
   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
   useEffect(() => {
        if (userInfo) {
          props.history.push(redirect);
        }
     return () => {
      //
     };
   }, [userInfo]);

const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(register(name, email, password));
}
    return (

<div>
<div  className="cont">

    <h2 className="sinh">Register</h2>
    
    <div>
    {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </div>
  
    
  
    <form onSubmit={submitHandler} action="" method="post">
   
      <div className="first-input input__block first-input__block">
         <input type="text" placeholder="name" className="input" id="name" onChange={(e)=>setName(e.target.value)}  />
      </div>
      <div className="first-input input__block first-input__block">
         <input type="email" placeholder="Email" className="input" id="email" onChange={(e)=>setEmail(e.target.value)}  />
      </div>
    
      <div className="input__block">
         <input type="password" placeholder="Password" className="input" id="password" onChange={(e)=>setPassword(e.target.value)}   />
      </div>

      <div className="input__block">
         <input type="password" placeholder="rePassword" className="input" id="rePassword" onChange={(e)=>setRePassword(e.target.value)}   />
      </div>
    
    
      <button className="signin__btn">
        Register
      </button>
    </form>
  
    <div className="separator">
      <p>OR</p>
    </div>
    <Link to={redirect === "/" ? "signin" : "register?redirect=" + redirect}>
    <button className="github__btn">
      <i className="fab fa-basket"></i>
      Existing User
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

