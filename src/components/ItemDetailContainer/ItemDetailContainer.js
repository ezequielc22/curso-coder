import React,{useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import {libro1, libro2, libro3, libro4, libro5, libro6} from '../../images/images'

const ItemDetailContainer = (props) => {
    const [infoItem, setInfoItem] = useState([]);
    const{id} = useParams();
    console.log("id:", id);
    console.log(props.idsProd);



    //    const obtenerIds = (lista) =>{
    //            let aux = [];
    //            lista.forEach(element => {
    //                if(element.id==id){
    //             aux.push(element);

    //         }});
    //            return aux;
               
    //    }
        useEffect(()=>{
                const productos = [
                    {
                        id: '1',
                        title: 'Libro 1',
                        pictureUrl: libro1,
                        price: '1800',
                        description: 'libro normal 1',
                        stock: 15,
                        categoria: 'normal'
                    },
            
                    {
                        id: '2',
                        title: 'Libro 2',
                        pictureUrl: libro2,
                        price: '400',
                        description: 'libro normal 2',
                        stock: 6,
                        categoria: 'normal'
                    },
                    {
                        id: '3',
                        title: 'Libro 3',
                        pictureUrl: libro3,
                        price: '1100',
                        description: 'libro normal 3',
                        stock: 9,
                        categoria: 'normal'
                    },
                    {
                        id: '4',
                        title: 'Libro 4',
                        pictureUrl: libro4,
                        price: '1900',
                        description: 'libro encantando 4',
                        stock: 10,
                        categoria: 'encantado'
                    },
                    {
                        id: '5',
                        title: 'Libro 5',
                        pictureUrl: libro5,
                        price: '1300',
                        description: 'libro encantando 5',
                        stock: 12,
                        categoria: 'encantado'
                    },
                    {
                        id: '6',
                        title: 'Libro 6',
                        pictureUrl: libro6,
                        price: '1600',
                        description: 'libro encantando 6',
                        stock: 18,
                        categoria: 'encantado'
                    }
            
    
                ]
                const producto =  productos.find(prod => prod.id === id);
                setInfoItem(producto);


            

        }, [id])   


    return (
        <div className="detail-container">
            <ItemDetail onAdd={props.onAdd} data={infoItem} />


        </div>
    )
}
export default ItemDetailContainer;
