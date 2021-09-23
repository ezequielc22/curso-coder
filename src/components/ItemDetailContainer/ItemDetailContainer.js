import React,{useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
// import "./ItemListContainer.css"
// import ItemList from '../ItemList/ItemList'

const ItemDetailContainer = (props) => {
    const [infoItem, setInfoItem] = useState({});
    const getItem = new Promise ((resolve)=>{
        setTimeout(()=>{
            const mockItem = {

                    id: '1',
                    title: 'Libro 1',
                    pictureUrl: '1.png',
                    price: '1800',
                    description: 'libro encantando 1',
                    stock: 15
                }
            
            resolve(mockItem)
        }, 2000)

    })
    useEffect(()=>{
        getItem.then( (response)=>{
            setInfoItem(response)

        })

    }, [])



    return (
        <div className="detail-container">
            <ItemDetail onAdd={props.onAdd} data={infoItem}/>

        </div>
    )
}
export default ItemDetailContainer;
