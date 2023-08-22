import React from "react";
import { useState } from "react";

const initialstate={
  title: "",
  price: "",
  category: "",
  image: "",
  }

const AddProduct = () => {
  const[state, setState] = useState(initialstate)

    const handleSubmit =(e)=> {
        e.preventDefault();
      const requestOptions = {
       method: "POST",
       headers: {"Content-Type":"application/json"},
       body: JSON.stringify(state),
      };
      fetch("http://localhost:3000/products ", requestOptions)
      .then((response)=> response.json())
      .then((data)=> console.log(data));
      }

      const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
      }
    
      
    return(
        <div>
      <h1>Yashika Store</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="title" onChange={handleChange}/>
        <input name="price" placeholder="price" onChange={handleChange}/>
        <input name="category" placeholder="category" onChange={handleChange} />
        <input name="image" placeholder="image" onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>

        </div>
    )
}

export default AddProduct;