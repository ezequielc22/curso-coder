//local
import React, { useState,useEffect } from 'react';
import { useParams } from "react-router";

//components
import "./ItemList.css";
import Item from '../Item/Item.js';
import db from '../../firebase';
import {collection, getDocs } from 'firebase/firestore';

const ItemList = () => {
    
    const{catId} = useParams();
    
    const[products, setProduct] = useState([]);


    async function getProducts(db){
        const productsCol = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCol);
        const productsList = productsSnapshot.docs.map(doc => doc.data())
        return productsList;
        
    }
    useEffect(()=>{
        
        getProducts(db).then((res)=>{
        if(catId===undefined){
            setProduct(res);
        }
        else{
            let aux = [];
            res.forEach(element => {
                if(element.categoria===catId){
                    aux.push(element);
                }
            });
            setProduct(aux);
        }     
        })

    },[catId])

    return (
        <div className="cards-container">
            {products.map((product, index)=>{
                return (<Item key={index} data={product}/>)
            })}
        </div>
    )
}

export default ItemList;