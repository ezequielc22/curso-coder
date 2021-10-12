//local
import "./CartWidget.js";
import React,{useState} from 'react';
import Cart from '../Cart/Cart.js';

//external
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const amount = 1;
const CartWidget = () => {
    const [showCart, setShowCart] = useState(false);
    const handleCart = () => {
      !showCart ? setShowCart(true) : setShowCart(false);
    };
    return (
        <>
            <div className="cart-icon" >
                <Button color="inherit" onClick={handleCart}>
                    <ShoppingCartIcon />
                    <b className="cantidad">{amount}</b>
                </Button>
                <Cart show={showCart} close={handleCart} />
            </div>
        </>
    )
}

export default CartWidget;

