import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ProductsPage from '../Pages/ProductsPage'
import SingleProductPage from '../Pages/SingleProductPage'
import AboutPage from '../Pages/AboutPage'
import LoginPage from '../Pages/LoginPage'
import ContactPage from '../Pages/ContactPage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/products/:proud_id" element={<SingleProductPage />}></Route>
       <Route path="/login" element={<LoginPage />}></Route>
       <Route path="/about" element={<AboutPage />}></Route>
       <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
