
import NavBar from '../../components/NavBar/NavBar';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';
import React  from 'react';
import { fondo } from '../../images/images';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CartContainer from '../CartContainer/CartContainer';

function AppRouter() {

  return (

    <div className="AppRouter">

            <Router>
                <img src={fondo} alt="fondo" className="fondo"/>
                <NavBar/>          
            <Switch>  

                <Route path="/category/:catId" component={ItemListContainer}/>    
                <Route path="/item/:id" component={ItemDetailContainer}/>
                <Route path="/cart"component={CartContainer}/>
                <Route path="/"component={ItemListContainer}/>    


            </Switch>    
        </Router>
    </div>
  );
}

export default AppRouter;
