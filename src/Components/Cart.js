import React,{useContext,useState} from 'react';
import{ FoodContext} from '../App'
import {Link} from 'react-router-dom' 

function Cart() {
  let context = useContext(FoodContext); 
  let [cartPrice]= useState(0)
  let handleRemove=(e)=>{
    context.cart.splice(context.cart.indexOf(e),1)
    context.setCartValue(context.cart.length)
  }

  return <div className='product-wrapper'>
  <h2>Cart</h2>
  {
    context.cart.length>0?<>
    <h2>Your Order</h2>
    {
    context.cart.map((e,i)=>
    {
      cartPrice = cartPrice +  Number(e.price)
     return <div className='product-item-wrapper' key={i}>
    <div className='product-details'>
       <h4>{e.name}</h4>
        <div className='product-price'>&#x20B9; {e.price}</div>
        <div className='product-description'>{e.description}</div>
        <button className='product-btn' onClick=
          {()=> handleRemove() }>
            Remove
        </button>
        </div>
        <div className='product-image'>
          <img src={e.image} alt={e.name}/>
        </div>
      </div>
      })
    }
    <div className='placeholder-wrapper'>
    <div className='product-price-name'> Total Price:{cartPrice}</div>
    <Link to='/'>
  <button className='product-btn-placeorder' onClick={()=>{
    context.setCart([])
    context.setCartValue(0)
  }}>
  Place Order
  </button></Link>
  </div>
    </>:<h2>Your Cart is Empty</h2>
  }
    </div>
  }
  
  
  export default  Cart;
