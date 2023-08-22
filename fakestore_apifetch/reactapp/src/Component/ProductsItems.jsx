import React from "react";
import { useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";

const ProductsItems = () => {
    const[initialData, setInitialData]= useState([])
    const[sort, setSort] = useState("")
    const[filter, setFilter] = useState("")
    const[pagenation, setPagenation] = useState(1)
    const[length, setLength] = useState(0) 
    console.log(length);
    
    console.log(pagenation);

    let totalpage= Math.ceil(length/4)
    console.log(totalpage);

    const handleSort = (e) => {
    setSort(e.target.value)
    };

    const handlefilter =(e) => {
      setFilter(e.target.value)
    }

    const pagedata = async() => {
      const res= await fetch("http://localhost:3000/products")
      const data = await res.json()
      //console.log(data.length);
      setLength(data.length);
    }

  

   // console.log(sort);
    //console.log(filter);
    


    const fetchdata = async() => {
      let url= `http://localhost:3000/products?_page=${pagenation}&_limit=4`;

     //sort  
      if(sort==="asc"){
        url+= "?_sort=price&_order=asc"
      } else if(sort==="desc"){
        url+= "?_sort=price&_order=desc";
      }

 //filter
      // if(filter==="men's clothing"){
      //   sort
      //   ?(url+= "&catgory=men's clothing")
      //   :(url+= `?category=men's clothing`);
      // }else if(filter === "jewelery"){
      //   sort
      //   ? (url+= "&category=jewelery")
      //   : (url+= `?category=jewelery`);
      // }

      if (filter === "men's clothing") {
        sort
          ? (url += "&category=men's clothing")
          : (url += `?category=men's clothing`);
      } else if (filter === "jewelery") {
        sort
          ? (url += "&category=jewelery")
          : (url += `?category=jewelery`);
      }
      
      
      
      const res= await fetch(url)
        const data= await res.json()
        console.log(data);
        //console.log(initialData)
        setInitialData(data)
      }
      useEffect(() => {
      fetchdata()
      pagedata()
      }, [sort, filter, pagenation])


    return(
        <div>
          <h4>Sorting</h4>
          <select onChange={handleSort}>
            <option>--</option>
            <option>asc</option>
            <option>desc</option>
          </select>
          <br />
          <br />
          <br />
          <h4>Filter</h4>
          <select onChange={handlefilter}>
            <option>--</option>
            <option>men's clothing</option>
            <option>jewelery</option>
          </select>
       <div>
        <h3>Products</h3>
        <div style = {{display: "grid", gridTemplateColumns: "repeat(2,1fr"}}>
        {initialData?.map((item, i) => {
          return (
            <div key={i}>
              <ProductsCard  item={item} />
            </div>
          )
        })
       }
        </div>
      </div>
      <button  disabled={pagenation==1} onClick={(()=> {
        setPagenation(pagenation-1)
      })}>Prev</button>

      <button>{pagenation}</button>
      
      <button disabled={pagenation==totalpage}onClick={(()=> {
        setPagenation(pagenation+1)
      })}>Next</button>
        </div>
    )
}

export default ProductsItems;