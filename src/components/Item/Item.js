
import React from 'react'
import "./Item.css"
import img from '../../images/1.png';

//externals
import ItemCount from '../ItemCount/ItemCount';


const Products = (props) => {
    const onAdd = () =>{
        console.log("Se van a agregar items al carrito")
      }
      
    return (
            <div className="product-cards">

                <div className="container-img-producto">
                    <img src={img} alt="imagen"/>
                </div>

                <div className="container-product-data">
                    <div className="data-container">
                    <h1>{props.title}</h1>
                    <p>${props.price}</p>                        
                    </div>
                    <ItemCount onAdd={onAdd} stock={props.stock}/>


                </div>
            </div>
    )
}

export default Products;
