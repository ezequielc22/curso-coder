
import React from 'react'
import "./Products.css"
import img from '../../images/1.png';

//externals
import AddItem from '../AddItem/AddItem';


const Products = (props) => {

    return (
            <div className="product-cards">

                <div className="container-img-producto">
                    <img src={img} alt="imagen"/>
                </div>

                <div className="container-product-data">
                    <div className="data-container">
                    <h1>{props.title}</h1>
                    <p>${props.price}</p>                        
                    </div>
                    <AddItem stock={props.stock}/>


                </div>
            </div>
    )
}

export default Products;
