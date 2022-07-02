import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
const EditCatrgory = () => {
  const {id} = useParams()
  const [category , setCategory] = useState({});
  const [name , setName] = useState("")
  console.log(id, "id")
  useEffect(()=>{
    axios.get(`https://crud-backend-code.herokuapp.com/api/category/${id}`)
    .then((res)=>{
      setCategory(res.data)
      setName(res.data.name)
      console.log(res.data , "data")
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  console.log(name)
  
    const edit = () =>{
        axios.put(`https://crud-backend-code.herokuapp.com/api/update-category/${id}` , {name})
        .then((res)=>{
          setCategory(res.data)
          console.log(res.data)
        }).catch((err)=>{
          console.log(err)
        })
    }
  return (
    <div className='container col-md-4 mx-auto mt-5'>
        <h1 className='text-center mt-5 mb-5'>Edit Category</h1>
        <label>category</label>
        <input className='mx-auto w-100' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <button type="button" class="btn btn-primary mt-3" onClick={edit}>Edit Category</button>
    </div>
  )
}

export default EditCatrgory