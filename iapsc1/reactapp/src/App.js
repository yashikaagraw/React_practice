import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const initialState = {
  title: "",
  price: "",
  category: "",
  image: "",
};

function App() {
  const[mapdata, setMapdata] = useState([])
  const[state, setState] = useState(initialState)
  //console.log(state);

  const changefn=(e)=> {
//console.log(e)
setState({...state, [e.target.name]: e.target.value})
  }
  //POST
const postfetch = () => {

}


  const fetchdata= async()=>{
    let URL= `http://localhost:3000/products`
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setState(data.data)
    setMapdata(data);
}


  //get
 useEffect(()=> {
 fetchdata()
  }, [])
  console.log(mapdata)

  return (
    <div>
      <h1>Yashika's Store</h1>
      <form>
        <input name='title' placeholder='title' onChange={changefn}/>
        <input name='price' placeholder='price' onChange={changefn}/>
        <input name='category' placeholder='category' onChange={changefn}/>
<input name='image' placeholder='image' onChange={changefn}/>   
<button onSubmit={submitfn}>Submit</button>
      </form>
      <br />
      <br />
      <br />
      <div>
        <h3>ALL PRODUCTS</h3>
        <div style={{display: "grid", gridTemplateColumns: "repeat(2,1fr"}}>
     {
      mapdata?.map((item, i)=> {
       // (mapdata.length && mapdata.map((item, i)=> {
        return (
        <div key={i}>
          <img style={{height: "300px", width: "200px"}}
          src={item.image} alt="##" />
          <h3>title:{item.title}</h3>
          <h3>price:{item.price}</h3>
          <h3>category:{item.category}</h3>
          </div>
        );
      })
     }
        </div>
      </div>
    </div>
    //show the data
  );
}

export default App;
