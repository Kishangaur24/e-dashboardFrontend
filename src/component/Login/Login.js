import React,{useEffect, useState} from 'react'
import style from "./Login.module.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
 const navigate = useNavigate()

 useEffect(()=>{
 const auth = localStorage.getItem("user")
 if(auth){
  navigate("/")
 }
 },[])


  async function handleLogin(){
   let result = await fetch("http://localhost:7000/login",{
    method:"post",
    body:JSON.stringify({email,password}),
    headers:{
      "Content-Type":"application/json"
    },
   })
    
   result = await result.json()
   console.log(result)
   if(result.email){
    localStorage.setItem("user",JSON.stringify(result))
   }else{
    alert("please enter correct details")
   }
  navigate("/")
  }
  return (

    <div className={style.main}>
       <div className={style.container}>
      <h1>Login here</h1>
      
        <input type='text' placeholder='Enter your Email ' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='text' placeholder='Enter your password ' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
        </div>
    </div>
  )
}

export default Login
