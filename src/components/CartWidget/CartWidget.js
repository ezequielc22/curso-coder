//local
import React, {useState, useContext} from 'react';

//components
import Cart from '../Cart/Cart.js';
import CartContext from '../../contexts/CartContext'

//external
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const CartWidget = () => {
    const { total } = useContext(CartContext);
    const [showCart, setShowCart] = useState(false);

    const handleCart = () => {
      !showCart ? setShowCart(true) : setShowCart(false);
    };

    return (
        <>
            <div className="cart-icon">
                <Button color="inherit" onClick={handleCart}>
                    <ShoppingCartIcon/>
                    <b className="cantidad">{total}</b>
                </Button>
                <Cart show={showCart} close={handleCart} />
            </div>
        </>
    )
}

export default CartWidget;

