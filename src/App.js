
import './App.css';
import React, { useState } from 'react';


import { BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import Create from './components/Create';


import Shoppingprod from './components/Shoppingprod'


import Login from './components/Login'
import NewProduct from './components/NewProduct';



function App() {
  return (
    
    <div className="navbar">
      
    <BrowserRouter>
    <Routes>
  
      <Route path="/" element={<Create/>} />
    <Route path = "/login" element = {<Login/>} />
    <Route path = "/newproduct" element = {<NewProduct/>} />

    <Route path = "/shoppingprod" element = {<Shoppingprod/>} />

    
    

    </Routes>
    </BrowserRouter>

    

    
  </div>
  )
}
 
export default App;




