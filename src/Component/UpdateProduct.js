import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';


const UpdateProduct = () => {
  const [name,setName]=useState('');
  const [price,setPrice]=useState('');
  const [category,setCategory]=useState('');
  const [company,setCompany]=useState('');
  const [error,setError]=useState(false);

  const navigate=useNavigate();

  const params=useParams();
  useEffect(()=>{
    getProductDetails();
  },[])

  const getProductDetails=async()=>{
    let result=await fetch(`http://localhost:5000/product/${params.id}`,{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
    });
    result =await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
    
  }

  const UpdateProduct= async ()=>{
    console.log(name,price,category,company);
    let result=await fetch(`http://localhost:5000/product/${params.id}`,{
        method:'Put',
        body:JSON.stringify({name,price,category,company}),
        headers:{
            'Content-Type':"application/json",
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
    });
    result = await result.json
    console.log(result);
    navigate('/');
  }
  return (
    <div className='AddProduct'>
      <h1>Update Product </h1>
      <input type='text' placeholder='Enter product Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
      {error && !name && <span> Enter valid name</span>}
      <input type='text' placeholder='Enter product Price' value={price} onChange={(e)=>{setPrice(e.target.value)}} />
      {error && !price && <span> Enter valid price</span>}
      <input type='text' placeholder='Enter product Category'value={category} onChange={(e)=>{setCategory(e.target.value)}}  />
      {error && !category && <span> Enter valid category</span>}
      <input type='text' placeholder='Enter product Company'value={company} onChange={(e)=>{setCompany(e.target.value)}}  />
      {error && !company && <span> Enter valid company</span>}
      <button onClick={UpdateProduct}> Save Product</button>

    </div>
  )
}

export default UpdateProduct