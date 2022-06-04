import React,{useState,useEffect} from 'react'
import "./Signin.css"
const Signin = () => {

  function ChangeShow(id){
    if(id=="h-text1"){
      document.getElementById("h-text1").classList.remove("dull-text")
      document.getElementById("h-text2").classList.add("dull-text")
      document.getElementById("mysignup").style.transform="translateX(100%)"
      setTimeout(()=>{
        document.getElementById("mysignup").style.display="none"
        document.getElementById("mylogin").style.display="block"
      },200)
      setTimeout(()=>{
    
        document.getElementById("mylogin").style.transform="translateX(0%)"
      },200)
    }else{
      document.getElementById("h-text2").classList.remove("dull-text")
      document.getElementById("h-text1").classList.add("dull-text")
      document.getElementById("mylogin").style.transform="translateX(100%)"
      setTimeout(()=>{
        document.getElementById("mylogin").style.display="none"
        document.getElementById("mysignup").style.display="block"
      },200)
      setTimeout(()=>{
    
        document.getElementById("mysignup").style.transform="translateX(0%)"
      },200)
    }
  }
  return (
   <>
 <div className='login-outer-container'>
 <div className='login-container'>
     <div className='login-header'>
       <a className='header-text' id="h-text1" onClick={()=>ChangeShow("h-text1")}>Login</a>
       <a className='header-text1 dull-text' id="h-text2" onClick={()=>ChangeShow("h-text2")}>Sign Up</a>
     </div>
     <div className='my-credentials-container'>
       <div className='login-screen' id="mylogin">
<div className='input-group mb-3'>
  <input type="text" className='form-control' name="email" placeholder='Enter Email' />
</div>
<div className='input-group mb-3'>
  <input type="password" className='form-control' name="password" placeholder='Enter Password' />
</div>
<div className='forget-password'>
  <a className='forget-link'>Forget password ?</a>
</div>
<div className='forget-password'>
  <a className='forget-link' onClick={()=>ChangeShow("h-text2")}>Do you have an account ?</a>
</div>
<div className='login-btn-container'>
  <button type='button' className='login-btn' >Login</button>
</div>
       </div>
       <div className='signup-screen' id="mysignup">
       <div className='input-group mb-3'>
  <input type="text" className='form-control' name="firstname" placeholder='First Name' />
</div>
<div className='input-group mb-3'>
  <input type="text" className='form-control' name="lastname" placeholder='Last Name' />
</div>
       <div className='input-group mb-3'>
  <input type="text" className='form-control' name="email" placeholder=' Email' />
</div>
<div className='input-group mb-3'>
  <input type="text" className='form-control' name="email" placeholder='Date of Birth' />
</div>
<div className='input-group mb-3'>
  <input type="password" className='form-control' name="password" placeholder=' Password' />
</div>
<div className='login-btn-container'>
  <button type='button' className='login-btn' >Login</button>
</div>
       </div>

     </div>

   </div>
 </div>
   </>
  )
}

export default Signin