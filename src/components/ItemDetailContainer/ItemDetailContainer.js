//local
import React,{useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

//components
import ItemDetail from '../ItemDetail/ItemDetail';
import {collection, getDocs } from 'firebase/firestore';
import db from '../../firebase';

const ItemDetailContainer = () => {
    const [infoItem, setInfoItem] = useState([]);
    const{id} = useParams();

    async function getProducts(db){
        const productsCol = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCol);
        const productsList = productsSnapshot.docs.map(doc => doc.data())
        return productsList;
        
    }

    useEffect(()=>{

        getProducts(db).then((res)=>{
            const product = res.find(prod => prod.id === id)
            setInfoItem(product)
        })


    }, [id])   


    return (
        <div className="detail-container" style={{fontFamily:" 'Bebas Neue', cursive"}}>

            <ItemDetail data={infoItem}/>

        </div>
    )
}

export default ItemDetailContainer;
