import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React  from 'react';


function App() {
  
  const onAdd = () =>{
    console.log("Se van a agregar items al carrito")
  }

  return (
    
    <div className="App">
      <NavBar />
       <ItemListContainer onAdd={onAdd} /> 
      <ItemDetailContainer onAdd={onAdd} />
    </div>
  );
}

export default App;
