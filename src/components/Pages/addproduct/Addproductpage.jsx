import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../Redux/slices/Addproductslice";
import FormInput from "../../Forminput/FormInput";
import Home from "../../Home/Home";
import Header from "../../Common/Header";
import './addproductpage.css'

const NewProduct = () => {
  const items = useSelector((state) => state.Product);
  const dispatch = useDispatch();

  const [newproduct, setNewProduct] = useState({
    id: "",
    image: "",
    title: "",
    price: "",
    description: "",
  });

  // Create a state to hold the list of products
  const [productList, setProductList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new product to the list
    setProductList([...productList, newproduct]);
    // Dispatch the action to update the Redux state
    dispatch(addItem(newproduct));
    // Clear the form
    setNewProduct({
      id: "",
      image: "",
      title: "",
      price: "",
      description: "",
    });
  };

  const onChange = (e) => {
    setNewProduct({ ...newproduct, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Header />

      <div className="add-product">
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
          <button className="btn" type="submit">
            ADD
          </button>
        </form>
      </div>
      <div className="product-list">
        {productList.map((p) => (
          <Home {...p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default NewProduct;
