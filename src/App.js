import './App.css';
import React,{useState,useEffect} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import axios from 'axios';
import Pizza from './Components/Pizza';
import Burger from './Components/Burger';
import Home from './Components/Home';
import Header from './Components/Header';
import Cart from './Components/Cart';
const url = 'http://fod-app.herokuapp.com/food';
export const FoodContext = React.createContext()
function App() {
  let [data,setData]=useState([])
  let [cart,setCart]=useState([])
  let [cartValue,setCartValue]=useState(cart.length)

  useEffect(()=>{
  getData()
},[])

let getData= async()=>{
  let res= await axios.get(url); 
  console.log(res.data)
  setData(res.data)
}
  return <>
    <BrowserRouter>
      <FoodContext.Provider value={{data,cart,cartValue,setCart,setCartValue}}>
      <Header/>
      <Routes>
        <Route path='/pizza' element={<Pizza/>}/>
        <Route path='/burger' element={<Burger/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/' element={<Home/>}/>

      </Routes>

      </FoodContext.Provider>
    </BrowserRouter>
  </>
   
}

export default App;
