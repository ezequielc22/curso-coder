import React from 'react';
import './Cart.css';

const Cart = ({show}) => {
    return (
        <div>
            <div className={`cart-widget ${show ? 'active' : ''}`}></div>
        </div>
    )
}

export default Cart
