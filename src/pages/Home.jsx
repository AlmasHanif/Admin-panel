import React from 'react'
import Categories from '../screens/Categories'
import {Link} from "react-router-dom";
const Home = () => {
  return (
    <>
    <h1 className='text-center mt-5'>Welcome to the Admin Panel</h1>
    <div className='container col-md-4 mx-auto mt-5'>
    <div class="btn-group btn-group-lg" role="group" aria-label="Basic outlined example">
        <Link to="/categories">
     <button type="button" class="btn btn-outline-primary">Categories</button>
     </Link>
     <Link to="/products">
     <button type="button" class="btn btn-outline-primary">Products</button>
     </Link>
     <Link to="/users">
     <button type="button" class="btn btn-outline-primary">Users</button>
     </Link>
     <Link to="/bookings">
     <button type="button" class="btn btn-outline-primary">Bookings</button>
     </Link>
</div>
</div>
    </>
  )
}

export default Home