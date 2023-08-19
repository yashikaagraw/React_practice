import { useState, useEffect } from "react"

const  Todo = () => {

const[state, setState] = useState([])
const[loading, setLoading] = useState(true)
const[filter, setFilter] = useState("")
console.log(filter)
//console.log(state);
const getdata = async() => {
let url = `http://localhost:3004/posts`
if(filter==="completed"){
  url+= "?completed=true"
}
if(filter==="incompleted"){
  url+= "?completed=false"
}
const res = await fetch(url)
const data= await res.json()
//console.log(data);
setLoading(false);
setState(data);
}
const handlesort = (e)=> {
setFilter(e.target.value)
}
useEffect(()=> {
  getdata()
}, [filter])


if(loading){
  return(
    <div>
      <h1>loading</h1>
       </div>
  )
}

  return(

    <div>
      <h1>Todo Page</h1>
      <select onChange ={handlesort}>

        <option>filter</option>
        <option>completed</option>
        <option>incompleted</option>
      </select>

{
  state?.map((e) => {
    return(
      <div>
        <h2>title: {e.title}</h2>
        <h3>userId: {e.userId}</h3>
        <h4>completed: {e.completed ? "YES" : "NO"}</h4>
      </div>
    )
  })
}

      </div>

  )
}

export default Todo;