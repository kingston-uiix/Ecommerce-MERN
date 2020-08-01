import React, {  useEffect, useState }  from 'react'

import {Link} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';


export default function HomeScreen(props) {


 
  const productList = useSelector(state => state.productList);
  const {products, loading, error} = productList;
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(listProducts());


    return () => {
      //
    };
  }, []);
  
  return (
    loading? 
    <div className="pox">
    <div className="boxLoading">
    </div></div>:
    error? <div>{error}</div>:



            <div className="App">
 <div class="containe">
  <div class="color-bg"></div>
  <img src="http://unsplash.it/1600/300/?random" class="blurMe" />
  <div class="content">
    <h1>Our Bakings</h1>
    <p class="lead">Have A Great Look At Our Products</p>
  </div>
</div>


        <main className="grid">
        {
              products.map(product =>
                <article key={product._id}>
            
            <div className="brand"> {product.brand}</div>
              <Link to={'/products/' + product._id} className="product" ><img src={product.image} alt="Sample photo"/></Link>
              
              <div className="text">
              
              <Link to={'/products/' + product._id} className="product" >{product.name}</Link>
                
              <p className="price">${product.price}</p>
                <div className="rating"><span id="stars">{product.rating}</span></div>
                
              </div>
            </article>
                )
            }
      
        
        
      </main>
      <section id="hero1" className="hero">
  <div className="inner">
    <div className="copy">
    <h1 className="llax">Thank You For Being Here</h1>
    <p className="rlax">For more details email us to the mail below!</p>
    </div>
  </div>
</section>




      </div>
    )
}
