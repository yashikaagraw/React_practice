import logo from './logo.svg';
import './App.css';
import AddProduct from './Component/AddProduct';
import ProductsItems from './Component/ProductsItems';
import { useState } from 'react';



function App() {
  const[toggle, setToggle]= useState(true);
  
  return <div>
<button onClick={(() => setToggle(!toggle))}>
  {toggle? "add product" : "show Products"}
</button>
{
  toggle?  <ProductsItems /> : <AddProduct /> 
}

</div>
 
 
}
export default App;
