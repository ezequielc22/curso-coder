//local
import React, { createContext, useState, useEffect} from "react";


const CartContext = createContext();

const CartProvider = ({children}) => {
    const [products , setProducts] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(handleTotal())
    }, [products])
    
    const addItem = (item, quantity) =>{
        let cartElement = {item, quantity};
        let aux = []

        if(quantity>0){
        
            if(products.some(element => element.item.id === item.id)){
                console.log("esta");
                cartElement = products.find(element => element.item.id === item.id);
                cartElement.quantity = cartElement.quantity + quantity;
                aux=[...products];
            }
            else{
                console.log("no esta");
                aux = [cartElement, ...products];    
            }

            setProducts(aux);
   
        }
        else{
            console.log("no se puede agregar items");
        }


    };

    const removeItem = (item) => {
        if(products.some(element => element.item.id === item.id)){
            let cartElements = products.filter(element => element.item.id !== item.id)
            setProducts([...cartElements])
        }
        
    }

    const clear = () => {
        setProducts([])
    }

    const handleTotal = () => {  
        let aux = 0
        return (
          products && products.reduce((accumulator, currentValue) => {          
              return accumulator + currentValue.quantity                              
            },
            aux
          )    
        )
    }


    const data = {
        products,
        addItem,
        removeItem,
        clear,
        total
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

};

export { CartProvider }
export default CartContext;