import {configureStore} from "@reduxjs/toolkit"


import productReducer from "../slices/Addproductslice"

 

export const store = configureStore({
    reducer : 
    {
        Product : productReducer,
    }
})



export default store