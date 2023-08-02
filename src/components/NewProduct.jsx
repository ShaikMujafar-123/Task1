import React, { useState, useEffect } from "react";
import FormInput from "./FormInput"
import Header from "./Header";
import Shoppingprod1 from './Shoppingprod1';

import { useSelector,useDispatch } from "react-redux";

import {addItem, removItem} from '../redux1/slices/cartSlice';


const NewProduct = () => {
  const items = useSelector((state) => state.Cat);
  const username  = useSelector((state) => state.User)

 

  
    
    const dispatch = useDispatch()

    const [newproduct, setNewProduct] = useState({
        id: "",
        image: "",
        title: "",
        price: "",
        description: "",
      });
      const existingData = JSON.parse(localStorage.getItem(username)) || []

  const newData = [...existingData, newproduct]
      

      const handleSubmit = (e) => 
    {
        e.preventDefault();
        dispatch(addItem(newproduct))
       
        setNewProduct({  
            id: "",
            image: "",
            title: "",
            price: "",
            description: "",
          });
          localStorage.setItem(username, JSON.stringify(newData));
    console.log("gfrejg",username)
          

    }
 
      const onChange = (e) =>
      {
        setNewProduct({ ...newproduct, [e.target.name]: e.target.value });
     };

     const tasks = JSON.parse(localStorage.getItem(username));
  const [prodlist, setProductList] = useState(tasks ?? []);
   
     return (
       <div>
        <Header/>
       <div className="app">
   
         <form onSubmit={handleSubmit}>
           <h1>Add a Product</h1>
   
           <FormInput
             name="id"
             type="text"
             placeholder="id"
             label="id"
             required={true}
             value={newproduct.id}
             onChange={onChange}
           />
 
           <FormInput
             name="image"
             type="text"
             placeholder="image"
             label="image"
             required={true}
             value={newproduct.image}
             onChange={onChange}
           />

           <FormInput
             name="title"
             type="text"
             placeholder="title"
             label="title"
             required={true}
             value={newproduct.title}
             onChange={onChange}
           />

           <FormInput
             name="price"
             type="text"
             placeholder="price"
             label="price"
             required={true}
             value={newproduct.price}
             onChange={onChange}
           />

           <FormInput
             name="description"
             type="text"
             placeholder="description"
             label="description"
             required={true}
             value={newproduct.description}
             onChange={onChange}
           />
           <button  className = "btn" type="submit">ADD</button>

         </form>


       </div>
       <div className="product-list">
      
        {prodlist.map((p) => (
          <Shoppingprod1 {...p} key={p.id} />
          
        ))}
      </div>
       </div>
     );
}

export default NewProduct
