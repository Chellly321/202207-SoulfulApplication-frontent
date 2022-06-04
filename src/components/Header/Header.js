import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {

    const ChangeActive=(id)=>{
if(id=="Home"){
if(document.getElementById("Home").classList.contains("nav-active")){

}else{
    document.getElementById("Home").classList.add("nav-active")
    document.getElementById("Contact").classList.remove("nav-active")
    document.getElementById("About").classList.remove("nav-active")
    document.getElementById("MyInfo").classList.remove("nav-active")
    document.getElementById("login").classList.remove("nav-active")
}
}else if(id=="Contact"){
    document.getElementById("Contact").classList.add("nav-active")
    document.getElementById("Home").classList.remove("nav-active")
    document.getElementById("About").classList.remove("nav-active")
    document.getElementById("MyInfo").classList.remove("nav-active")
    document.getElementById("login").classList.remove("nav-active")

}else if(id=="About"){
    document.getElementById("About").classList.add("nav-active")
    document.getElementById("Contact").classList.remove("nav-active")
    document.getElementById("Home").classList.remove("nav-active")
    document.getElementById("MyInfo").classList.remove("nav-active")
    document.getElementById("login").classList.remove("nav-active")

}else if(id=="MyInfo"){
    document.getElementById("MyInfo").classList.add("nav-active")
    document.getElementById("Contact").classList.remove("nav-active")
    document.getElementById("About").classList.remove("nav-active")
    document.getElementById("Home").classList.remove("nav-active")
    document.getElementById("login").classList.remove("nav-active")
}else if(id=="login"){
    document.getElementById("login").classList.add("nav-active")
    document.getElementById("Contact").classList.remove("nav-active")
    document.getElementById("About").classList.remove("nav-active")
    document.getElementById("MyInfo").classList.remove("nav-active")
    document.getElementById("Home").classList.remove("nav-active")
}
    }
  return (
    <div className='My-Header'>
        <nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">
    <i class="fa fa-bars" aria-hidden="true"></i>
    </span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item nav-active" id="Home" onClick={()=>ChangeActive("Home")}>
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item" id="About" onClick={()=>ChangeActive("About")}>
        <Link className="nav-link" to="/about">About us</Link>
      </li>
      <li className="nav-item" id="Contact" onClick={()=>ChangeActive("Contact")}>
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
      <li className="nav-item" id="MyInfo" onClick={()=>ChangeActive("MyInfo")}>
        <Link className="nav-link" to="/Userinfo">My Info</Link>
      </li>
      <li className="nav-item" id="login" onClick={()=>ChangeActive("login")}>
        <Link className="nav-link" to="/signin">Login</Link>
      </li>
    </ul>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Header