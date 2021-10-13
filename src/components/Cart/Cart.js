//local
import React, { useContext } from 'react';
import {Link} from "react-router-dom";

//components
import './Cart.css';

//external
import DeleteIcon from '@mui/icons-material/Delete';
import ShopIcon from '@mui/icons-material/Shop';

//context 
import CartContext from '../../contexts/CartContext'


const Cart = ({show}) => {
    const { products, removeItem, clear } = useContext(CartContext);

    return (
        <div className={`cart-widget ${show ? 'active' : ''}`}>
            <ul className="cart-items">
                {products.map((product) => {
                    return (
                        <li className="cart-item" key={product.item.id}>
                            <img className="product-image" src={product.item.pictureUrl} alt="img" />
                            <div className="product-info">
                                <p className="product-name">{product.item.title}</p>
                                <p className="product-price">{product.item.price}</p>
                            </div>
                            <div className="product-total">
                                <p className="quantity">
                                {`${product.quantity} U `}
                                </p>
                                <p className="amount">{product.quantity * parseInt(product.item.price)}</p>
                            </div>
                            <button className="product-remove" onClick={() =>removeItem(product.item) }>
                                ×
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div className="icons-container" style={{display: "flex", margin: "auto", flexDirection: "row"}}>
                <button onClick={clear} style={{display: "flex", margin: "auto"}} >
                    <DeleteIcon sx={{ fontSize: 15 }}/>
                </button>
                <button style={{display: "flex", margin: "auto"}} >
                    <Link to="/cart" style={{textDecoration: "none"}}>Comprar</Link>
                    <ShopIcon sx={{ fontSize: 15 }} style={{ marginLeft: "7px"}} />
                </button>
            </div>
        </div>
        
    )
}

export default Cart
