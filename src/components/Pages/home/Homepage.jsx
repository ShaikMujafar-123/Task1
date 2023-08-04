import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../../Home/Home";
import Data from './Data'
import './Homepage.css'
import { useSelector } from "react-redux";
import Header from "../../Common/Header";
import { useAuth } from "../auth/auth";

function Homepage() {
  const items = useSelector((state) => state.Product);
  const navigate = useNavigate()
  const [products, updateProducts] = useState(Data);
  const [prodlist,setProductList] = useState(items)
  const auth = useAuth()
 

  const [sortOrder, setSortOrder] = useState("lowToHigh");

  function handleSortOrderChange(event) {
    setSortOrder(event.target.value);
    sortProducts(event.target.value);
  }

  function sortProducts(order) {
    console.log(order);
    let sortedprodlist = [...prodlist];
    let sortedProducts = [...products];
  
    if (order === "lowToHigh") {
      sortedprodlist.sort((a, b) => a.price - b.price);
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "highToLow") {
      sortedprodlist.sort((a, b) => b.price - a.price); // Sort in reverse order
      sortedProducts.sort((a, b) => b.price - a.price); // Sort in reverse order
    }
  
    setProductList(sortedProducts);
    updateProducts(sortedprodlist);
  }
  

  const handleProduct = () => {
    navigate("/addproductpage");
  };

  return (
    <div>
      <Header/>
      <div className="sort-selector">
        <label htmlFor="sortOrder">Sort Order:</label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={handleSortOrderChange}
        >
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
      <div className="add-new-item">
        <div onClick={() => handleProduct()}>Add new Product...</div>
      </div>
      <div className="product-list">
        {products.map((p) => (
          <Home {...p} key={p.id} />
        ))}
        {prodlist.map((p) => (
          <Home {...p} key={p.id} />
        ))}
      </div>
    
    </div>
  );
}

export default Homepage;
