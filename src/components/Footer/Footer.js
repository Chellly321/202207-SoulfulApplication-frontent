import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='my-footer'>
        <div className='container'>
            <div className='row footer-row'>
                <div className='col-md-4 footer-social'>
                    <div className='footer-logo'>
                        Navbar
                    </div>
                </div>
                <div className='col-md-4'>
                   <div className='row'>
                       <div className='col-6'>
                       <div className='footer-pages' >
                        <Link className='footer-link' to="/">Home</Link>
                        <Link className='footer-link' to="/">About us</Link>
                        <Link className='footer-link' to="/">Contact</Link>
                        
                    </div>
                       </div>
                       <div className='col-6'>
                       <div className='footer-pages' >
                        
                        <Link className='footer-link' to="/">Info</Link>
                        <Link className='footer-link' to="/">Login</Link>
                    </div>
                       </div>
                   </div>
                </div>
                <div className='col-md-4 footer-social'>
                    <div className='footer-social-icons'>
                    <a href='' target="_blank"> <i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
                   <a href='' target="_blank"> <i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                   <a href='' target="_blank"> <i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
                   <a href='' target="_blank"> <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer