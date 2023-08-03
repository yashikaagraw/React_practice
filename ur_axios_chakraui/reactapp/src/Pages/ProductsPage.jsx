import React, {useEffect, useReducer} from 'react'

const initialState = {
  products: [],
  loading: false,
  error: null,
}

const reducer= (state, action) => {
  //dispatch
//making request to get products data


const ProductsPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //api(fakestore),
  //set state- state management 
  //useState, useReducer
  //render data on to the ui

  return (
    <div>
      <h1>Products Page</h1>
    </div>
  )
}

export default ProductsPage

