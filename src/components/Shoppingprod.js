import React, { useState, useEffect } from "react";
import Shoppingprod1 from "./Shoppingprod1";
import Header from "./Header";
import Data from './MOCK_DATA (2).json'
import { useNavigate } from 'react-router-dom';

import { useSelector,useDispatch } from "react-redux";


function Shoppingprod() {
  const items = useSelector((state) => state.Cat);
  const username  = useSelector((state) => state.User);
  const navigate = useNavigate()
  const tasks = JSON.parse(localStorage.getItem(username));
  const [prodlist, setProductList] = useState(tasks ?? []);
  const [products, updateProducts] = useState(Data);


  const [sortOrder, setSortOrder] = useState("lowToHigh");

  


  
  

 

 

  // async function getProducts() {
  //   let res = await fetch("https://fakestoreapi.com/products");
  //   let productlist = await res.json();
  //   updateProducts(productlist);
  // }

  function handleSortOrderChange(event) 
  {
    setSortOrder(event.target.value);
    sortProducts(event.target.value);
  }
  

  function sortProducts(order) 
  
  {
    console.log(order)
    let sortedprodlist = [...prodlist];
    let sortedProducts = [...products];

    if (order === "lowToHigh") 
    {
      sortedprodlist.sort((a, b) => a.price - b.price);
      sortedProducts.sort((a, b) => a.price - b.price);
    } 
    else if (order === "highToLow") 
    {
      sortedprodlist.sort((a, b) => a.price - b.price);
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    setProductList(sortedProducts);
    updateProducts(sortedprodlist)
  }
  

  

  const handleProduct = () => {
    navigate('/newproduct')
    
  }

  
  return (
    <div>
        <Header/>
      <div className="sort-selector">
        <label htmlFor="sortOrder">Sort Order:</label>
        <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
      <div className='add-new-item'>
      {/* <input type='text' placeholder='Add a New Product' /> */}
      <div onClick={() => handleProduct()}>Add new Product...</div>
      </div>
      <div className="product-list">

      {products.map((p) => (
          <Shoppingprod1 {...p} key={p.id} />
          
        ))}
      
        {prodlist.map((p) => (
          <Shoppingprod1 {...p} key={p.id} />
          
        ))}
        
        
      </div>
    </div>
  );
}

export default Shoppingprod;
