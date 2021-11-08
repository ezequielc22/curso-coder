//local
import React, { useState,useEffect } from 'react';
import { useParams } from "react-router";
import Loader from '../Loader/Loader';

//components
import "./ItemList.css";
import Item from '../Item/Item.js';
import db from '../../firebase';
import {collection, getDocs } from 'firebase/firestore';

const ItemList = () => {
    
    const{catId} = useParams();
    
    const[products, setProduct] = useState([]);
    const[loader,setLoader] = useState(false);


    async function getProducts(db){
        const productsCol = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCol);
        const productsList = productsSnapshot.docs.map(doc => doc.data())
        return productsList;
        
    }
    useEffect(()=>{
        setLoader(true);
        setTimeout(()=>{
            setLoader(false)
        }, 3000)

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
            
            {
            loader ? <Loader/> :
            
            products.map((product, index)=>{
                return (
                <Item key={index} data={product}/>)
            })
            
            }
        </div>
    )
}

export default ItemList;