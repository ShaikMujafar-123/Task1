import { createSlice, createSelector} from "@reduxjs/toolkit"


const cartSlice = createSlice ({
    name : "Crt",
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



export const {removeItem} = cartSlice.actions
export const {addItem} = cartSlice.actions



export default cartSlice.reducer

