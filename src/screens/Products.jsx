import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Product = () => {
const  [Product , setProduct] =  useState([]);
useEffect(()=>{
    axios.get("https://crud-backend-code.herokuapp.com/api/products")
    .then((res)=>{
        console.log(res.data)
        setProduct(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
},[])
console.log(Product)

  const deleteProduct = (id) =>{
    axios.delete(`https://crud-backend-code.herokuapp.com/api/delete-product/${id}`)
    .then((res)=>{
        console.log(res.data)
        alert(res.data.message)
    }).catch((err)=>{
        console.log(err)
    })
    console.log("delete" , id)
  }

  
  return (
    <div className='container col-md-6 mx-auto mt-5'>
        <h1 className='text-center mb-2'>Products</h1>
        <hr />
        <table className="table mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Rent</th>
      <th  scope="col">Category</th>
      <th  scope="col"></th>

      <th scope="col">
      <Link to={`/add-product`}>
                    <button type="button" class="btn btn-primary">Add New Product</button>
                 </Link>
      </th>
    </tr>
  </thead>
  <tbody>
    {Product.map((item , ind)=>(
         <>
         <tr>
            <th scope="row">{ind}</th>
            <td>{item.title}</td>
            <td> $ {item.rentPerHour}</td>
            <td> {item.category}</td>

            <td>
                <Link to={`/edit-product/${item._id}`}>
                    <button type="button" class="btn btn-primary">edit</button>
                 </Link>
        </td>
        <td><button type="button" class="btn btn-danger" onClick={() => deleteProduct(item._id)}>delete</button></td>
            </tr>
            </>
    ))}
  </tbody>
</table>
    </div>
  )
}

export default Product