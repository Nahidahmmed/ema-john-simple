import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    
    
    let total=0;
    let TotalShipping = 0;
    for(const product of cart){
        total = total + product.price;
        TotalShipping = TotalShipping + product.shipping;
    }
    let tax = total*7/100;
    let grandTotal = total + TotalShipping + tax;
    

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${TotalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h5>Grand Total: ${grandTotal.toFixed(2)}</h5> 
        </div>
    );
};

export default Cart;