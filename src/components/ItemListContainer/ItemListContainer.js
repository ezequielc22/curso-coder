import React from 'react'
import "./ItemListContainer.css"
import Products from '../Products/Products'

const ItemListContainer = (props) => {
    return (
        <div className="cards-container">
            <Products title="Libro 1" price="1800" stock="15"/>
            <Products title="Libro 2" price="400" stock="6"/>
            <Products title="Libro 3" price="1100" stock="9"/>

        </div>
    )
}

export default ItemListContainer;
