import React, { useEffect, useState} from 'react'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router";

const ItemListContainer = (props) => {


    return (
        <div className="main-container">
            <ItemList onAdd={props.onAdd} />

        </div>
    )
}

export default ItemListContainer;
