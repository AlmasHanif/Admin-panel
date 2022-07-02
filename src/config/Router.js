import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../pages/Home';
import AddProduct from '../screens/AddProduct';
import Booking from '../screens/Booking';
import Categories from '../screens/Categories';
import EditCatrgory from '../screens/EditCatrgory';
import EditProduct from '../screens/EditProduct';
import Product from '../screens/Products';
import Users from '../screens/Users';
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route path="/categories" element={<Categories/>} />
      <Route path="/products" element={<Product/>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/bookings" element={<Booking/>} />
      <Route path="/edit-category/:id" element={<EditCatrgory />} />
      <Route path="/edit-product/:id" element={<EditProduct />} />
      <Route path="/add-product" element={<AddProduct />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

export default Router