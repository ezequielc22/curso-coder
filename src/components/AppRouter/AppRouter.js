
import NavBar from '../../components/NavBar/NavBar';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';
import React  from 'react';
import { fondo } from '../../images/images';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function AppRouter() {
    const onAdd = () =>{
        console.log("Se van a agregar items al carrito")
    }

  return (

    <div className="AppRouter">

            <Router>
                <img src={fondo} alt="fondo" className="fondo"/>
                <NavBar/>          
            <Switch>  

                <Route path="/category/:catId">    
                    <ItemListContainer onAdd={onAdd}/> 
                </Route>
                <Route path="/item/:id">
                    <ItemDetailContainer onAdd={onAdd} /> 
                </Route>
                <Route path="/">    
                    <ItemListContainer onAdd={onAdd}/> 
                </Route>

            </Switch>    
        </Router>
    </div>
  );
}

export default AppRouter;
