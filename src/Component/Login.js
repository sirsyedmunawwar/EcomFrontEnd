import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    },[])
    const navigate =useNavigate();

    const handleLogin= async ()=>{
        console.log(email,password);
        let result=await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result =await result.json();
        console.log(result);
        if(result.auth){
            localStorage.setItem("user",JSON.stringify(result.user));
            localStorage.setItem("token",JSON.stringify(result.auth));

            navigate('/');
        }else{
            alert("Please enter correct details");
        }
    }
    return (
        <div className='AddProduct'> 
            <h1>Login</h1>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter Email' />
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter Password' />
            <button type='button' onClick={handleLogin} >Login</button>
        </div>
    )
}

export default Login