
import React from 'react'
import "./Item.css"



//externals
import ItemCount from '../ItemCount/ItemCount';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';



const Item = (props) => {

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

                    <ItemCount onAdd={props.onAdd} stock={props.data.stock}/>
                    <Button>
                        <Link to={`/item/${props.data.id}`} style={{textDecoration: "none"}} >
                        VER MAS
                        </Link>
                    </Button>

                </div>
            </div>
    )
}
export default Item;
