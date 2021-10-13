//local
import React,{useState, useContext} from 'react';

//components
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";

//context
import CartContext from '../../contexts/CartContext'


const ItemDetail = (props) => {
    const[items,setItems] = useState(0);
    const[disableButton, setDisableButton] = useState(false);
    const[disableButton2, setDisableButton2] = useState(false);
    const { addItem } = useContext(CartContext);

    const onAdd = () => {
        return (items < props.data.stock ? (setItems(items +1) , setDisableButton2(false)) : setDisableButton(true));
    }

    const onLess = () => {
        return (items > 0 ? (setItems(items - 1) , setDisableButton(false)) : setDisableButton2(true));    
    }

    const addToCart = () =>{
        addItem(props.data, items);
    }

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
            <div className="buttons" >
                <ItemCount disableButton={disableButton} disableButton2={disableButton2}
                onAdd={onAdd} onLess={onLess} items={items} addToCart={addToCart} />
            </div>
                    
        </div>
    )
}

export default ItemDetail;
