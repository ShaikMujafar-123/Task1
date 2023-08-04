import { createSlice} from "@reduxjs/toolkit"


const Addproductslice = createSlice ({
    name : "PRODUCT",
    initialState : [],
    reducers : 
    {
        addItem: (state, action) => {
            state.push(action.payload);
          },
          removeItem: (state, action) => 
          {
            const itemIndex = state.findIndex((item) => item.props.id === action.payload.props.id);
            console.log(itemIndex)
            if (itemIndex !== -1) {
              state.splice(itemIndex, 1);
            }
          },
    }
})



export const {removeItem} = Addproductslice.actions
export const {addItem} = Addproductslice.actions



export default Addproductslice.reducer

