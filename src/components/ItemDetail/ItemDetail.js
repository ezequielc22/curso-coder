import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";

const ItemDetail = (props) => {

    return (
        <div className="detail">
                <div className="detail-img-container">
                    <img src={props.data.pictureUrl} alt="imagen-detail"/>
                </div>
                <div className="data-detail-container">
                    <h1 className="title">{props.data.title}</h1>
                    <p className="price">{props.data.price}€</p>  
                    <p className="description">{props.data.description}</p>                         
                </div>
                <div className="button-add">
                    <ItemCount onAdd={props.onAdd} stock={props.data.stock}/>
                </div>
                    
        </div>
    )
}
export default ItemDetail;
