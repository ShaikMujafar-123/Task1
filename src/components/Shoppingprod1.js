import React from 'react';
import { useDispatch } from 'react-redux'
import { addItem } from '../redux1/slices/cartSlice';

function Shoppingprod1(props) {
  
  const dispatch = useDispatch()
  return (
    
    <div className='card'>
      <img src={props.image} alt={props.title} />
      <p>{props.title}</p>
      <p>${props.price}</p>
      <p>Description : {props.description }</p>
      {/* <button onClick={e => dispatch(addItem({props}))} className='add-to-cart-btn'>Add to cart</button> */}
    </div>
    
  );
}

export default Shoppingprod1;
