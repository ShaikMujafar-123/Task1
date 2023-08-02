import {configureStore} from "@reduxjs/toolkit"

import cartReducer from "./slices/cartSlice"
import userReducer from "./slices/userSlice"
 

export const store1 = configureStore({
    reducer : 
    {
        Cat : cartReducer,
        User : userReducer
        
    }
})



export default store1