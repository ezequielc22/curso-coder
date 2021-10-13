//local
import React  from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//components
import NavBar from '../../components/NavBar/NavBar';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from '../CartContainer/CartContainer';
import { fondo } from '../../images/images';
//Context
import  { CartProvider }  from '../../contexts/CartContext.js';

function AppRouter() {

  return (

    <div className="AppRouter">
      <Router>
        <CartProvider>  
            <img src={fondo} alt="fondo" className="fondo"/>
            <NavBar/>          
          <Switch>  
            
            <Route path="/category/:catId" component={ItemListContainer}/>    
            <Route path="/item/:id" component={ItemDetailContainer}/>
            <Route path="/cart"component={CartContainer}/>
            <Route path="/"component={ItemListContainer}/>    

          </Switch> 
        </CartProvider>     
      </Router>
    </div>
  );
}

export default AppRouter;
