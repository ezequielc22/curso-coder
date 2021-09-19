//local
import "./CartWidget.js";
import React from 'react';

//external
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const amount = 1;
const CartWidget = (props) => {
    return (
        <>
            <div className="cart-icon" >
                <Button color="inherit">
                    <ShoppingCartIcon/>
                    <b className="cantidad">{amount}</b>
                </Button>
            </div>
        </>
    )
}

export default CartWidget;

