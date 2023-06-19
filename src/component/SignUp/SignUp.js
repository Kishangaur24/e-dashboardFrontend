import React, { useEffect, useState } from 'react'
import style from "./SignUp.module.css"
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const navigate = useNavigate()
    useEffect(()=>{
    const auth = localStorage.getItem("user")
    if(auth){
      navigate("/")
    }
    },[])
  const handleRegister=async ()=>{
        console.log(name,email,password)
        let result =await fetch("http://localhost:7000/register",{
            method:"post",
            body:JSON.stringify({name,email,password}),
            headers:{
              "Content-Type":"application/json"
            },
        })
        result = await result.json()
        alert("registration successfull")
        navigate("/")
        console.log(result)
        localStorage.setItem("user",JSON.stringify(result))
    }

  return (
    <div className={style.main}>
       <div className={style.container}>
      <h1>Register here</h1>
      
        <input type='text' placeholder='Enter your Name ' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='text' placeholder='Enter your Email ' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='text' placeholder='Enter your password ' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleRegister}>Signup</button>
        </div>
    </div>
  )
}

export default SignUp
