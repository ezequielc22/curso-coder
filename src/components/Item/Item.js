
import React,{useState, useEffect} from 'react'
import "./Item.css"
import img from '../../images/1.png';

//externals
import ItemCount from '../ItemCount/ItemCount';


const Item = (props) => {

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

                    <ItemCount onAdd={props.onAdd} stock={props.stock}/>

                </div>
            </div>
    )
}

export default Item;
