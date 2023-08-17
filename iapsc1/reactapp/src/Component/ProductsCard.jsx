import React from "react";

const ProductsCard = ({ item }) => {
  return (
    <div>
      <img
        style={{ height: "200px", width: "200px" }}
        src={item.image}
        alt="##"
      />
      <h3>title:-{item.title}</h3>
      <h3>price:-{item.price}</h3>
      <h3>category:-{item.category}</h3>
    </div>
  );
};

export default ProductsCard;