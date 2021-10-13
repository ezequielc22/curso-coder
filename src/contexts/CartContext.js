import React, { createContext,useState} from "react";


const CartContext = createContext();

const CartProvider = ({children}) => {
    const [products , setProducts] = useState([]);
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


    console.log("Test", products);
    const data = {
        products,
        addItem
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )

};
export { CartProvider }
export default CartContext;