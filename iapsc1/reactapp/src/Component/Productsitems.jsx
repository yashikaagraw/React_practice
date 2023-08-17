import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const ProductsItems = () => {
  const [initialData, setInitialData] = useState([]);
  const [sortValues, setSortValues] = useState("");
  const [filterValues, setFilterValues] = useState("");
  const handleSort = (e) => {
    setSortValues(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterValues(e.target.value);
  };

  console.log(sortValues);

  const getFetch = () => {
    let url = `http://localhost:8080/products?_page=${2}&_limit=6`;

    if (sortValues === "asc") {
      url += "?_sort=price&_order=asc";
    } else if (sortValues === "desc") {
      url += "?_sort=price&_order=desc";
    }

    if (filterValues === "men's clothing") {
      sortValues
        ? (url += "&category=men's clothing")
        : (url += `?category=men's clothing`);
    } else if (filterValues === "jewelery") {
      sortValues
        ? (url += "&category=jewelery")
        : (url += `?category=jewelery`);
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setInitialData(data));
  };

  //get request
  useEffect(() => {
    getFetch();
  }, [sortValues, filterValues]);

  return (
    <div>
      <h4>Sortng</h4>
      <select onChange={handleSort}>
        <option>--</option>
        <option>asc</option>
        <option>desc</option>
      </select>
      <br />
      <br />
      <br />
      <h4>Filtering</h4>
      <select onChange={handleFilter}>
        <option>--</option>
        <option>men's clothing</option>
        <option>jewelery</option>
      </select>
      <div>
        <h3>ALL PRODUCTS</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr" }}>
          {initialData.length &&
            initialData.map((item, i) => {
              return (
                <div key={i}>
                  <ProductsCard item={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductsItems;