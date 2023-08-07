import React from "react";
// Define a functional component named Home and pass in props as the parameter
function Home(props) {
  // Return JSX representing a card with product information
  return (
    <div className="card">
      {/* Display the product image using the src attribute */}
      <img src={props.image} alt={props.title} />
      
      {/* Display the product title */}
      <p>{props.title}</p>
      
      {/* Display the product price with a dollar sign */}
      <p>${props.price}</p>
      
      {/* Display the product description */}
      <p>Description: {props.description}</p>
    </div>
  );
}

// Export the Home component to make it accessible to other parts of the application
export default Home;
