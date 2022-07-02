import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
const  [Users , setUsers] =  useState([]);
useEffect(()=>{
    axios.get("https://crud-backend-code.herokuapp.com/api/allUsers")
    .then((res)=>{
        console.log(res.data)
        setUsers(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
},[])
console.log(Users)

  const deleteUser = (id) =>{
    axios.delete(`https://crud-backend-code.herokuapp.com/api/deleteUser/${id}`)
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
        <h1 className='text-center mb-2'>Users</h1>
        <hr />
        <table className="table mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User Name</th>
      <th scope="col">User Email</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {Users.map((item , ind)=>(
         <>
         <tr>
            <th scope="row">{ind}</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            {/* <td>
                <Link to={`/edit-category/${item._id}`}>
                    <button type="button" class="btn btn-primary">edit</button>
                 </Link>
        </td> */}
        <td><button type="button" class="btn btn-danger" onClick={() => deleteUser(item._id)}>delete</button></td>
            </tr>
            </>
    ))}
  </tbody>
</table>
    </div>
  )
}

export default Users