import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Booking = () => {
const  [Bookings , setBookings] =  useState([]);
useEffect(()=>{
    axios.get("https://crud-backend-code.herokuapp.com/api/bookings")
    .then((res)=>{
        console.log(res.data)
        setBookings(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
},[])
console.log(Bookings)

  const deleteBooking = (id) =>{
    axios.delete(`https://crud-backend-code.herokuapp.com/api/delete-booking/${id}`)
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
        <h1 className='text-center mb-2'>Bookings</h1>
        <hr />
        <table className="table mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User Name</th>
      <th scope="col">Car Name</th>
      <th scope="col">Total Hours</th>
    </tr>
  </thead>
  <tbody>
    {Bookings.map((item , ind)=>(
         <>
         <tr>
            <th scope="row">{ind}</th>
            <td>{item.user}</td>
            <td>{item.car}</td>
            <td>{item.totalHours}</td>

            {/* <td>
                <Link to={`/edit-category/${item._id}`}>
                    <button type="button" class="btn btn-primary">edit</button>
                 </Link>
        </td> */}
        {/* <td><button type="button" class="btn btn-danger" onClick={() => deleteBooking(item._id)}>delete</button></td> */}
            </tr>
            </>
    ))}
  </tbody>
</table>
    </div>
  )
}

export default Booking