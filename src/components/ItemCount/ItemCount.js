import React  from 'react';
import "./ItemCount.css";

//externals

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';


const ItemCount = (props) => {

    return (
        
            <div className="add-item">
                <IconButton disabled={props.disableButton2} onClick={props.onLess}>
                    <RemoveIcon style={{color:"black"}}/>
                </IconButton>
                <h1 style={{userSelect:"none"}}>{props.items}</h1>
                <IconButton disabled={props.disableButton} onClick={props.onAdd}>
                    <AddIcon style={{color:"black"}} />
                </IconButton>
                <Button variant="outlined" color="secondary" onClick={props.addToCart} style={{color:"black", border:"1px solid black"}}>
                    Agregar al carrito
                </Button> 
            </div>
    )
}

export default ItemCount;
