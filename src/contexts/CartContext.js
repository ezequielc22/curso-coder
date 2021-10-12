import React, { createContext,useState} from "react";


const CartContext = createContext();

const CartProvider = ({children}) => {
    const [products , setProducts] = useState([]);

    const addProduct = (product) =>{
        
    }
 
    const distinct = (value, index, self)=>{
        return self.indexOf(value)===index;
    }

    const data = {
        products,
        addProduct
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )


};
export { CartProvider }
export default CartContext;