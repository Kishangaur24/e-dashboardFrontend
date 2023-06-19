import React from "react";
import { Link,useNavigate } from "react-router-dom";
import style from "./Navbar.module.css"
import Login from "../Login/Login";
const Navbar = () => {
  const auth = localStorage.getItem("user")
  const navigate = useNavigate()
  const logout=()=>{
    localStorage.clear()
    navigate("/signup")
  }
  return (
    <div>
  
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand " to="/">E-Dashboard</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item ">
        <Link class="nav-link ml-5" to="/">Product </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/add">add Product</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/update">Update Product</Link>
      </li>
      
      <li class="nav-item">
        <Link class="nav-link " to="/profile">Profile</Link>
      </li>
      {
        auth?
        <li class="nav-item">
        <Link onClick={logout} class="nav-link " to="/signup">Logout</Link>
      </li>:
     
       <li class="nav-item">
       <Link class="nav-link " to="/signup">SignUp</Link>
     </li>
     
 
      }
        <li class="nav-item">
       <Link class="nav-link " to="/login">Login</Link>
     </li>
    </ul>
  </div>
</nav>
    </div>
  );
};

export default Navbar;
