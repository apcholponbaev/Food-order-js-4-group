
import './App.css';

import FoodOrderInfo from './components/FoodOrderInfo'
import Header from './layout/Header';
import Products from './components/product/Products';
import Modal from './components/UI/Modal';
import { useState } from 'react';


function App() {

 
const [visibleModal , setVisibleModal] = useState(false)

const changheStateModal = () => {
  setVisibleModal(prevState => !prevState)
}
  

  return (
    <div className="App">
      <Header modal={changheStateModal}/>
     {visibleModal &&  <Modal onClose={changheStateModal}/> }
      <FoodOrderInfo/>
      <Products/>
     
    </div>
  );
}

export default App;
