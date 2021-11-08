import React, {useContext} from 'react'
import CartContext from '../../contexts/CartContext'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartIcon = () => {
    const { total } = useContext(CartContext);
    return (
        <div>
            <ShoppingCartIcon/>
            <b className="cantidad">{total}</b>
        </div>
    )
}

export default CartIcon
