import React from 'react'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {

    return (
        <div className="main-container">
            <ItemList onAdd={props.onAdd}/>

        </div>
    )
}

export default ItemListContainer;
