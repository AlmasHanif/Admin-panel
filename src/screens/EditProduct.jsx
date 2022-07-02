import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
const EditProduct = () => {
  const {id} = useParams()
  const [product , setProduct] = useState({});
  const [name , setName] = useState("");
  const [rent , setRent] = useState("");
  
  console.log(id, "id")
  useEffect(()=>{
    axios.get(`https://crud-backend-code.herokuapp.com/api/product/${id}`)
    .then((res)=>{
      setProduct(res.data)
      setName(res.data.title)
      setRent(res.data.rentPerHour)
      console.log(res.data , "data")
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  console.log(name)
  
    const edit = () =>{
        let item = {name , rent}
        axios.put(`https://crud-backend-code.herokuapp.com/api/update-product/${id}` , {item})
        .then((res)=>{
          setProduct(res.data)
          console.log(res.data)
        }).catch((err)=>{
          console.log(err)
        })
    }
  return (
    <div className='container col-md-4 mx-auto mt-5'>
        <h1 className='text-center mt-5 mb-5'>Edit Product</h1>
        <label>Product Name</label>
        <input className='mx-auto w-100 mb-5' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <label>Car Rent</label>
        <input className='mx-auto w-100' type="number" value={rent} onChange={(e) => setRent(e.target.value)}/>
        <button type="button" class="btn btn-primary mt-3" onClick={edit}>Edit product</button>
    </div>
  )
}

export default EditProduct;