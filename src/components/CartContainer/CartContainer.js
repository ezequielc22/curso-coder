//local
import React, { useContext } from 'react'

//components
import "./CartContainer.css";

//externals
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@material-ui/core';

//context
import CartContext from '../../contexts/CartContext'
import db from '../../firebase';
import { addDoc, collection } from '@firebase/firestore';

const CartContainer = () => {
    const { products, removeItem, clear } = useContext(CartContext);

    const calcularTotal = () =>{
        let total = 0;
        const aux = products.map((prod)=>prod.quantity * parseInt(prod.item.price))
        if(aux.length === 0){
            total = 0;
        }else{
        const total = aux.reduce((acc,item)=>{ return acc= acc + item;});}
        return total;
    }
    const newOrder = {
        buyer:{
            name: "Marcelo",
            email: "marcelo_alderete@hotmail.com",
            phone: "3819098734"
        },
        items: products,
        total: calcularTotal() + " €"

    }
    const addOrder = () =>{
        console.log("Orden generada: ", newOrder )
        pushOrderFirebase(newOrder);
    }
    const pushOrderFirebase = async(newOrder) =>{
        const orderFirebase = collection(db,'orders');
        const order = await addDoc(orderFirebase, newOrder)
        console.log("se genero orden con id: ", order.id)

    }

    return (
        <div className="cart-container" style={{fontFamily:" 'Bebas Neue', cursive"}}>
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
            <div className="icon-container" style={{ display: "flex", flexDirection: "column", width: "50px", height: "50px", paddingRight: "35px"}}>
                <Button onClick={clear} style={{display: "flex", margin: "auto", border:"1px solid black"}} >
                    <DeleteIcon sx={{ fontSize: 15 }}/>
                </Button>
                <Button onClick={addOrder} variant="outlined" color="secondary" style={{color:"black", border:"1px solid black", marginTop: "40px", fontFamily:" 'Bebas Neue', cursive"}}>
                    Generar Orden
                </Button> 
            </div>
        </div>
    )
}

export default CartContainer
