import React,{useState, useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";


const ItemDetail = (props) => {
    const[items,setItems] = useState(0);
    const[disableButton, setDisableButton] = useState(false);
    const[disableButton2, setDisableButton2] = useState(false);


    const[estilo,setEstilo] = useState({
        visibility: "hidden",
        position: "absolute"

    });
    const[estilo2,setEstilo2] = useState({
        visibility: "visible",
        position: "relative"
    });

    const onAdd = () => {
        return (items < props.data.stock ? (setItems(items +1) , setDisableButton2(false)) : setDisableButton(true));
    }
    const onLess = () => {
        return (items > 0 ? (setItems(items - 1) , setDisableButton(false)) : setDisableButton2(true));    
    
    }
    const visibility = () =>{
        setEstilo({
            visibility: "visible",
            position: "relative"
        })
        setEstilo2({
            visibility: "hidden",
            position: "absolute"
        })

    }
    const visibility2 = () =>{
        setEstilo2({
            visibility: "visible",
            position: "relative"
        })
        setEstilo({
            visibility: "hidden",
            position: "absolute"
        })

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
                <div className="buttons" style={estilo2}>
                    <ItemCount disableButton={disableButton} disableButton2={disableButton2}
                    onAdd={onAdd} onLess={onLess} items={items} visibility={visibility} />
                </div>
                <div className="buttons"  style={estilo}>
                <Button onClick={visibility2} variant="outlined" color="secondary" style={{color:"#91642e", border:"1px solid #91642e"}}>
                    <Link to="/cart" style={{textDecoration: "none"}}>Terminar Compra</Link>
                </Button>
                </div>
                    
        </div>
    )
}
export default ItemDetail;
