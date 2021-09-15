import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    return (
        <p className="parrafo-1">
            Este es un {props.name} !
        </p>
    )
}

export default ItemListContainer;
