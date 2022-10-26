import React, { useState } from 'react'

const AddProduct = () => {
  const [name,setName]=useState('');
  const [price,setPrice]=useState('');
  const [category,setCategory]=useState('');
  const [company,setCompany]=useState('');
  const [error,setError]=useState(false);

  const addProduct= async ()=>{
    if(!name || !price || !category || !company){
      setError(true);
      return false;
    }

    const userId=JSON.parse(localStorage.getItem('user'))._id;
    let result=await fetch("http://localhost:5000/add-product",{
      method:'post',
      body:JSON.stringify({name,price,category,company,userId}),
      headers:{
        'Content-Type':'application/json',
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result=await result.json();
    console.warn(result);
    
  }
  return (
    <div className='AddProduct'>
      <h1>Add Product</h1>
      <input type='text' placeholder='Enter product Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
      {error && !name && <span> Enter valid name</span>}
      <input type='text' placeholder='Enter product Price' value={price} onChange={(e)=>{setPrice(e.target.value)}} />
      {error && !price && <span> Enter valid price</span>}
      <input type='text' placeholder='Enter product Category'value={category} onChange={(e)=>{setCategory(e.target.value)}}  />
      {error && !category && <span> Enter valid category</span>}
      <input type='text' placeholder='Enter product Company'value={company} onChange={(e)=>{setCompany(e.target.value)}}  />
      {error && !company && <span> Enter valid company</span>}
      <button onClick={addProduct}> Add Product</button>

    </div>
  )
}

export default AddProduct