import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div>
      {/* <div className={style.nav}>
        <p><Link to="/">Product</Link></p>
        <p><Link to="/add">add Product</Link></p>
        <p><Link to="/update">update Product</Link></p>
        <p><Link to="/logout">Logout</Link></p>
        <p><Link to="/profile">Profile</Link></p>
      </div> */}
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
        <Link class="nav-link " to="/logout">Logout</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/profile">Profile</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/signup">SignUp</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
};

export default Navbar;
