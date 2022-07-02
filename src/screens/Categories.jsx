import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Categories = () => {
const  [Categories , setCategories] =  useState([]);
useEffect(()=>{
    axios.get("https://crud-backend-code.herokuapp.com/api/categories")
    .then((res)=>{
        console.log(res.data)
        setCategories(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
},[])
console.log(Categories)

  const deleteCategory = (id) =>{
    axios.delete(`https://crud-backend-code.herokuapp.com/api/delete-category/${id}`)
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
        <h1 className='text-center mb-2'>Categories</h1>
        <hr />
        <table className="table mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Category Name</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {Categories.map((item , ind)=>(
         <>
         <tr>
            <th scope="row">{ind}</th>
            <td>{item.name}</td>
            <td>
                <Link to={`/edit-category/${item._id}`}>
                    <button type="button" class="btn btn-primary">edit</button>
                 </Link>
        </td>
        <td><button type="button" class="btn btn-danger" onClick={() => deleteCategory(item._id)}>delete</button></td>
            </tr>
            </>
    ))}
  </tbody>
</table>
    </div>
  )
}

export default Categories