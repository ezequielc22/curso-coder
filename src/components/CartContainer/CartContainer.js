//local
import React, { useContext } from 'react'

//components
import "./CartContainer.css";

//externals
import DeleteIcon from '@mui/icons-material/Delete';

//context
import CartContext from '../../contexts/CartContext'

const CartContainer = () => {
    const { products, removeItem, clear } = useContext(CartContext);

    return (
        <div className="cart-container">
            <ul className="cart">
                {products.map((product) => {
                    return (
                        <li className="cart-i" key={product.item.id}>
                            <img className="product-img" src={product.item.pictureUrl} alt="img" />
                            <div className="product-inf">
                                <p className="title1">{product.item.title}</p>
                                <p className="price">{product.item.price}</p>
                            </div>
                            <div className="total">
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
            <div className="icon-container" style={{ display: "flex", flexDirection: "row", width: "50px", height: "50px", paddingRight: "35px" }}>
                <button onClick={clear} style={{display: "flex", margin: "auto"}} >
                    <DeleteIcon sx={{ fontSize: 15 }}/>
                </button>
            </div>
        
        </div>
    )
}

export default CartContainer
