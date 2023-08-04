import React, {useEffect, useReducer} from 'react'
import axios from 'axios';
import { Box, Heading } from '@chakra-ui/react'
//in useState, dispatch change the function state
const initialState = {
  products: [],
  loading: false,
  error: null,
}

const reducer= (state, action) => {
  //product which have empty array
  //console.log(state);
  //console.log(action);
  switch(action.type){
 case "FETCH_REQUEST" : return {
...state,
loading: true,
error: null,
    }
    case "FETCH_SUCCESS" : return{
      ...state,
      products: action.payload,
      loading: false,
      error: null,
    }
    case "FETCH_FAILURE" : return{
      ...state,

    }
default:
  throw Error("Unknown action:" + action.type)

  }
}
  //dispatch
//making request to get products data


const ProductsPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const {products, loading, error } = state;
  //api(fakestore),
  //set state- state management 
  //useState, useReducer
  //render data on to the ui
  const getData=()=> {
    //loading is true 
    //not use payload bcoz we are no sending any data here
    //network call
    dispatch({type: "FETCH_REQUEST"});
    axios
    .get(`https://fakestoreapi.com/products`)
    .then((response)=> {
      //console.log(response);
      dispatch({type: "FETCH_SUCCESS", payload: response.data});
    })
    .catch((error) => {
      dispatch({type: "FETCH_FAILURE", payload:error.message });
    });
  };
  useEffect(()=> {
  getData();
  }, []);
  console.log(products);
  

  return (
    <Box>
      <Heading>Products Page</Heading>
    </Box>
  )
}

export default ProductsPage;
//api call --> fakestore api
//set state--> statemanagement --> useState, usereducer
//render data on to the ui

