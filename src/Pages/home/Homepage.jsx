// Import necessary libraries and components
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../../components/Carts/Home";
import Data from "./Data"; // Sample data for products
import "./Homepage.css";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { useAuth } from "../loginpage/auth";

// Define the Homepage component
function Homepage() {
  // Getting new add products from redux store
  const items = useSelector((state) => state.Product);
  const navigate = useNavigate();

  // Initialize state for products and product lists
  const [products, updateProducts] = useState(Data); // Sample data for products
  const [prodlist, setProductList] = useState(items);
  const [allproducts, setAllProducts] = useState([...Data, ...items]);

  // Access authentication status and actions using the useAuth hook
  const auth = useAuth();

  // Initialize state for sorting order of products
  const [sortOrder, setSortOrder] = useState("lowToHigh");

  // Function to handle changes in sorting order
  function handleSortOrderChange(event) {
    setSortOrder(event.target.value);
    sortProducts(event.target.value);
  }

  // Function to sort products based on the selected order
  function sortProducts(order) {
    let sortedprodlist = [...allproducts];

    if (order === "lowToHigh") {
      sortedprodlist.sort((a, b) => a.price - b.price);
    } else if (order === "highToLow") {
      sortedprodlist.sort((a, b) => b.price - a.price); // Sort in reverse order
    }

    setAllProducts(sortedprodlist);
  }

  // Function to navigate to the "Add Product" page
  const handleProduct = () => {
    navigate("/addproductpage");
  };

  // Return JSX representing the homepage
  return (
    <div>
      {/* Include the application header */}
      <Header />

      <div className="sort-selector">
        {/* Dropdown to select the sorting order */}
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
        {/* Button to add a new product */}
        <div onClick={() => handleProduct()}>Add new Product...</div>
      </div>

      <div className="product-list">
        {/* Map through the list of products and render Home components */}
        {allproducts.map((p) => (
          <Home {...p} key={p.id} />
        ))}
      </div>
    </div>
  );
}

// Export the Homepage component to make it accessible to other parts of the application
export default Homepage;
