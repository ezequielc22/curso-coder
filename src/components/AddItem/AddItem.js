import React ,{useState} from 'react';
import "./AddItem.css";

//externals

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';


const AddItem = (props) => {
   
    const[items,setItems] = useState(0);
    const[stock,setStock] =useState(props.stock);
    const[disableButton, setDisableButton] = useState(false);
    const[disableButton2, setDisableButton2] = useState(false);
    
    const sumar = () => {
        if(items < stock ? (setItems(items +1) , setDisableButton2(false)) : setDisableButton(true));
    }
    const restar = () => {
        if(items > 0 ? (setItems(items - 1) , setDisableButton(false)) : setDisableButton2(true));    
    
    }
    return (
        
            <div className="add-item">
                <IconButton disabled={disableButton2} onClick={restar}>
                    <RemoveIcon color="secondary"/>
                </IconButton>
                <h1 style={{userSelect:"none"}}>{items}</h1>
                <IconButton disabled={disableButton} onClick={sumar}>
                    <AddIcon color="secondary" />
                </IconButton>
                <Button variant="outlined" color="secondary" >Agregar al carrito</Button> 
            </div>
    )
}

export default AddItem;
