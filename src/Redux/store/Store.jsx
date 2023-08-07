// Import the configureStore function from the Redux Toolkit library
import { configureStore } from "@reduxjs/toolkit";

// Import the productReducer from the Addproductslice slice
import productReducer from "../slices/Addproductslice";

// Configure and create the Redux store
export const store = configureStore({
  reducer: {
    Product: productReducer, // Assign the productReducer to the "Product" slice of the store
  },
});

// Export the created store to be used in the application
export default store;
