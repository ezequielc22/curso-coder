import React, { useState,useEffect } from 'react'
import "./ItemList.css"
import Item from '../Item/Item.js'

const ItemList = (props) => {
    const[products, setProduct] = useState([])
    const getProducts = new Promise ((resolve)=>{
        setTimeout(()=>{
            const mockProducts = [
                {
                    id: '1',
                    title: 'Libro 1',
                    pictureUrl: '1.png',
                    price: '1800',
                    description: 'libro encantando 1',
                    stock: 15
                },
        
                {
                    id: '2',
                    title: 'Libro 2',
                    pictureUrl: '1.png',
                    price: '400',
                    description: 'libro encantando 2',
                    stock: 6
                },
        
                {
                    id: '3',
                    title: 'Libro 3',
                    pictureUrl: '1.png',
                    price: '1100',
                    description: 'libro encantando 3',
                    stock: 9
                }
            ]

            resolve(mockProducts)
        }, 2000)

    })
    useEffect(()=>{

        getProducts.then( (res)=>{
            console.log("respuesta de promesa: ", res)
            setProduct(res)
        })

    }, [])



    return (
        <div className="cards-container">
            {products.map((product)=>{
                return (<Item onAdd={props.onAdd} key={product.id} title={product.title} price={product.price} stock={product.stock} />)
            })}

            

        </div>
    )
}

export default ItemList;
