//local
import React from 'react'

//components
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    return (
        <div className="main-container" style={{fontFamily:" 'Bebas Neue', cursive"}}>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;
