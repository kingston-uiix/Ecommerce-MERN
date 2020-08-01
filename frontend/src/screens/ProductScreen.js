import React, { useEffect, useState } from 'react'


import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';


export default function ProductScreen(props) {
  
  
  const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails);
  const dispatch = useDispatch();
  const { product, loading, error } = productDetails;


  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const handleAddToCart = () => {
    props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
  };

    return (
    
    
  <div>
 {loading? <div className="boxLoading">
</div>:
      error? <div>{error}</div>:
      (    
      
        <maine className="screen">
 
 
                <div className="left-column">
   
                <img className="screenimg" src={product.image} alt="Sample photo"/>
                </div>



         <div className="right-column">

 
   <div className="product-description">
    <span>{product.brand}</span>
    <h1>{product.name}</h1>
    <p>{product.description}</p>
   </div>

  
   <div className="product-configuration">

    
     <div className="product-color">
       <span className="ratinge">Rating</span>

       <div className="color-choose">
       <span id="stars">{product.rating}</span>({product.numReviews} Reviews)
       </div>
     </div>

     
     <div className="cable-config">
     <span className="stock">Status:{product.countInStock > 0? "In Stock": ""}</span>

       <div className="cable-choose">
         
         Qty: <select className="putton" value={qty} onChange={(e) => {setQty(e.target.value)}}>
           
         {[...Array(product.countInStock). keys()].map(x =>
                <option key={x+1} className="numm" value={x+1} >{x+1}</option>
            )}
         
         </select>
     
       </div>

       
     </div>
   </div>

   
   <div className="product-price">
    <span>{product.price}$</span>
    {product.countInStock> 0 &&
     <a href="#" onClick={handleAddToCart} className="cart-btn">Add to cart</a>
      }

    
   </div>
 </div>
</maine>  

    


)
    }
      
        




</div> 
            
        
    )
}
