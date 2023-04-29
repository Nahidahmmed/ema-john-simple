import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';

const Cart = ({cart,handleClearCart}) => {
   
    
    
    let total=0;
    let TotalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        } 
        // product.quantity = product.quantity || 1;

        total = total + product.price * product.quantity;
        TotalShipping = TotalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    let tax = total*7/100;
    let grandTotal = total + TotalShipping + tax;
    

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${TotalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h5>Grand Total: ${grandTotal.toFixed(2)}</h5> 
                <button onClick={handleClearCart} className='btn-clear-cart'>
                    <span>Clear Cart</span> 
                    <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
                    <Link to="/checkout"><button className='btn-clear-cart'>Checkout</button></Link>
        </div>
    );
};

export default Cart;