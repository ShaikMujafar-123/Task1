// Import createSlice function from the Redux Toolkit library
import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice named Addproductslice
const Addproductslice = createSlice({
  name: "PRODUCT", // The name of the slice
  initialState: [], // The initial state of the slice (an empty array)
  reducers: {
    // Reducer to add an item to the state
    addItem: (state, action) => {
      state.push(action.payload); // Push the new item into the state array
    },
    // Reducer to remove an item from the state
    removeItem: (state, action) => {
      // Find the index of the item to be removed based on its id
      const itemIndex = state.findIndex(
        (item) => item.props.id === action.payload.props.id
      );

      console.log(itemIndex); // Log the index of the item for debugging

      // If the item is found (itemIndex !== -1), remove it from the state
      if (itemIndex !== -1) {
        state.splice(itemIndex, 1); // Remove the item using splice
      }
    },
  },
});

// Export individual action creators from the slice
export const { removeItem } = Addproductslice.actions;
export const { addItem } = Addproductslice.actions;

// Export the reducer function to be used in the Redux store
export default Addproductslice.reducer;
