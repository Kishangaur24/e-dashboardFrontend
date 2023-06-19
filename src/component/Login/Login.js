import React,{useState} from 'react'
import style from "./Login.module.css"
const Login = () => {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")

  function handleLogin(){
    alert("login karo")
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
