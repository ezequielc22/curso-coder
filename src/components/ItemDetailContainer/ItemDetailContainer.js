//local
import React,{useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

//components
import ItemDetail from '../ItemDetail/ItemDetail';
import {libro1, libro2, libro3, libro4, libro5, libro6} from '../../images/images';

const ItemDetailContainer = () => {
    const [infoItem, setInfoItem] = useState([]);
    const{id} = useParams();


    useEffect(()=>{
        const productos = [
            {
                id: '1',
                title: 'CUERPO SENSIBLE',
                pictureUrl: libro1,
                price: '20,00',
                description: '«Cuerpo sensible es el título elegido por David Le Breton para el presente libro, en su búsqueda por expresar una dimensión de la corporalidad humana más allá de su mera presencia orgánica y física».',
                stock: 15,
                categoria: 'monografias'
            },
    
            {
                id: '2',
                title: 'SOCIOLOGIA ',
                pictureUrl: libro2,
                price: '17,95',
                description: '«El reconocido sociólogo David Le Breton presenta en este volumen una útil y certera genealogía de las teorías que se han ocupado del cuerpo, en donde recorre todas las corrientes sociológicas, filosóficas y antropológicas que históricamente han abordado las lógicas sociales y culturales del cuerpo, los imaginarios en torno a él, y el control político de la corporeidad».',
                stock: 6,
                categoria: 'monografias'
            },
            {
                id: '3',
                title: 'ANTROPOLOGIA',
                pictureUrl: libro3,
                price: '18,00',
                description: '«No hay presunción vanidosa ni entusiasta alegría que no pueda derrumbarse estrepitosamente con la imprevisible llegada del dolor. Encrucijada dramática para todas las convicciones humanas y lamento igualitario que humilla a todos los cuerpos por igual; el dolor es al mismo tiempo, el gran t estigo de la fragilidad humana y la proclamación de un poder cuya inminencia no lo hace menos extraño y temido».',
                stock: 9,
                categoria: 'monografias'
            },
            {
                id: '4',
                title: 'DESAPARECER DE SI',
                pictureUrl: libro4,
                price: '18,95',
                description: '«En un mundo marcado por las obligaciones, las exigencias, los compromisos, la apariencia, por la búsqueda frenética de sensaciones, surge el deseo de ausentarse, como demuestra el sociólogo David Le Breton en Desaparecer de sí».',
                stock: 10,
                categoria: 'filosofia'
            },
            {
                id: '5',
                title: 'SILENCIO',
                pictureUrl: libro5,
                price: '17,00',
                description: '«La disolución mediática del mundo genera un ruido ensordecedor, una equiparación generalizada de lo banal y lo dramático que anestesia las opiniones y blinda las sensibilidades.»',
                stock: 12,
                categoria: 'filosofia'
            },
            {
                id: '6',
                title: 'ELOGIO DEL CAMINAR',
                pictureUrl: libro6,
                price: '13,95',
                description: '«Un emocionante breviario sobre una manera de estar y comportarse en el mundo. Un catecismo laico para caminar, para no dejar nunca de pensar en medio de este mundo ruidoso y automatizado».',
                stock: 18,
                categoria: 'filosofia'
            }
    
        ]
        const producto =  productos.find(prod => prod.id === id);
        setInfoItem(producto);

    }, [id])   


    return (
        <div className="detail-container">
            
            <ItemDetail data={infoItem}/>

        </div>
    )
}

export default ItemDetailContainer;
