import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
  const navigate=useNavigate();

  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  })
    const collectData= async ()=>{
      
      console.log(name,email,password)
      let result=await fetch('http://localhost:5000/register',{
      method:'post',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      },
      })
      result=await result.json();
      console.log(result)
      localStorage.setItem("user",JSON.stringify(result.result));
      localStorage.setItem("token",JSON.stringify(result.auth));

      navigate('/');
      
    }

  return (
    <div className='AddProduct'>
        <h1>Register</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter Name'/>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter Email'/>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Enter Password'/>
        <button type='button' onClick={collectData} >Sign Up</button>
       
       

    </div>
  )
}

export default SignUp
