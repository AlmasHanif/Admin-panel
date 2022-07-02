import axios from 'axios';
import React, { useState } from 'react'

const AddProduct = () => {
    const [title , setTitle] = useState("");
    const [rentPerHour , setRentPerHour] = useState("");
    const [category , setCategory] = useState("");
    const [imagePath , setImage] = useState("");

    const addProduct = async(e) =>{
        e.preventDefault()
        const file = new FormData()
        file.append('imagePath' , imagePath)
        const data = {title , rentPerHour , category , file}
    const result = await axios.post("https://crud-backend-code.herokuapp.com/api/create-product" ,data)
        alert("product add sucess")
        console.log(result , "resulttt")

    }

    return (
        <div className='container col-md-6 mx-auto mt-5'>
            <h1 className='text-center mt-5'>Add New Product</h1>
            
                <div classNmae="mb-3">
                    <label className="form-label">Add Product Name</label>
                    <input type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)} aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div classNmae="mb-3">
                    <label className="form-label">Add Product Category</label>
                    <input type="text" className="form-control" onChange={(e)=>setCategory(e.target.value)} aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label className="form-label">Rent</label>
                    <input type="number" onChange={(e)=>setRentPerHour(e.target.value)} className="form-control"  />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Add Picture</label>
                    <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])} />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button onClick={addProduct} class="btn btn-primary">Submit</button>
            
        </div>
    )
}

export default AddProduct