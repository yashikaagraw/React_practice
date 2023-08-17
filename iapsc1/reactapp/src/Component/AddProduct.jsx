import React, { useState } from "react";
const initialState = {
  title: "",
  price: "",
  category: "",
  image: "",
};
const AddProduct = () => {
  const [inputValue, setinputValue] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputValue),
    };

    fetch("http://localhost:8080/products", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const handleChange = (e) => {
    // console.log(e);
    setinputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>YASHIKA STORE</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="title" onChange={handleChange} />
        <input name="price" placeholder="price" onChange={handleChange} />
        <input name="category" placeholder="category" onChange={handleChange} />
        <input name="image" placeholder="image" onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddProduct;