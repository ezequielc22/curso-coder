import React ,{useState} from 'react';
import "./ItemCount.css";

//externals

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';


const ItemCount = (props) => {
   
    const[items,setItems] = useState(0);
    const[disableButton, setDisableButton] = useState(false);
    const[disableButton2, setDisableButton2] = useState(false);
    
    const sumar = () => {
        return (items < props.stock ? (setItems(items +1) , setDisableButton2(false)) : setDisableButton(true));
    }
    const restar = () => {
        return (items > 0 ? (setItems(items - 1) , setDisableButton(false)) : setDisableButton2(true));    
    
    }
    return (
        
            <div className="add-item">
                <IconButton disabled={disableButton2} onClick={restar}>
                    <RemoveIcon style={{color:"#91642e"}}/>
                </IconButton>
                <h1 style={{userSelect:"none"}}>{items}</h1>
                <IconButton disabled={disableButton} onClick={sumar}>
                    <AddIcon style={{color:"#91642e"}} />
                </IconButton>
                <Button variant="outlined" color="secondary" onClick={props.onAdd} style={{color:"#91642e", border:"1px solid #91642e"}}>Agregar al carrito</Button> 
            </div>
    )
}

export default ItemCount;
