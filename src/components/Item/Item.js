import React, {useState, useContext} from 'react'
import "./Item.css"

//externals
import ItemCount from '../ItemCount/ItemCount';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext'


const Item = (props) => {


    const { products, addProduct } = useContext(CartContext);


    const[items,setItems] = useState(0);
    const[disableButton, setDisableButton] = useState(false);
    const[disableButton2, setDisableButton2] = useState(false);    
    const onAdd = () => {
        return (items < props.data.stock ? (setItems(items +1) , setDisableButton2(false)) : setDisableButton(true));
    }
    const onLess = () => {
        return (items > 0 ? (setItems(items - 1) , setDisableButton(false)) : setDisableButton2(true));    
    }
    const addToCart = () =>{
        addProduct(props);
    }

    return (
            <div className="product-cards">

                <div className="container-img-producto">
                    <img src={props.data.pictureUrl} alt="imagen"/>
                </div>

                <div className="container-product-data">
                    <div className="data-container">
                        <h1>{props.data.title}</h1>
                        <p>${props.data.price}</p>                        
                    </div>

                    <ItemCount disableButton={disableButton} disableButton2={disableButton2}
                    onAdd={onAdd} onLess={onLess} items={items} addToCart={addToCart} />
                    <Button style={{display:"block", margin:"auto"}}>
                        <Link to={`/item/${props.data.id}`} style={{textDecoration: "none"}} >
                        VER MAS
                        </Link>
                    </Button>

                </div>
            </div>
    )
}
export default Item;
