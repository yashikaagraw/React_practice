import { useState } from "react";
import "./App.css";
import ProductsCard from "./Component/ProductsCard";
import AddProduct from "./Component/AddProduct";
import ProductsItems from "./Component/Productsitems";
function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "add product" : "show Products"}
      </button>
      {toggle ? <ProductsItems /> : <AddProduct />}
    </div>
  );
}

export default App;