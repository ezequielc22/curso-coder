//local
import React, {useState} from 'react';
import CartIcon from '../CartIcon/CartIcon.js';

//components
import Cart from '../Cart/Cart.js';

//external
import { Button } from '@material-ui/core';



const CartWidget = () => {
    const [showCart, setShowCart] = useState(false);

    const handleCart = () => {
      !showCart ? setShowCart(true) : setShowCart(false);
    };

    return (
        <>
            <div className="cart-icon">
                <Button color="inherit" onClick={handleCart}>
                    <CartIcon/>
                </Button>
                <Cart show={showCart} close={handleCart} />
            </div>
        </>
    )
}

export default CartWidget;

