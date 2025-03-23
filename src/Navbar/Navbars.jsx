import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbars = () => {
  const[toggleMenu,setTogglemenu]=useState(false);
  return (
    <>
      <div className='bg-dark fw-semibold sticky-top' id='navbars'>
        <div className=' navbar px-4 ' >
            <div className='navbar-brand text-white'>
              Flex<span>Tech</span>
            </div>

            {/* mobile toggle menu btn */}
            <div className=' d-block d-md-none'>
                <button className='btn text-white fs-3' onClick={()=>setTogglemenu(!toggleMenu)}>
                  <i class="bi bi-list"></i>
                </button>
            </div>
            
            <div className='d-none d-md-flex gap-4 list-unstyled'>
                <NavLink to='home'><li>Home</li></NavLink>
                <NavLink to='about'><li>About</li></NavLink>
                <NavLink to='blog'><li>Blog</li></NavLink>
                <NavLink to='contact'><li>Contact</li></NavLink>
            </div>
            <div className='d-none d-md-flex gap-3'>
                <NavLink to='login'><button className='btn btn-light py-1 fw-semibold'>Login</button></NavLink> 
            </div>

        </div>

        {/* mobile dropmenu  */}
        {toggleMenu && <div onClick={()=>setTogglemenu(!toggleMenu)}  className='d-flex flex-column align-items-center d-md-none gap-4 list-unstyled  pb-4 '>
            <NavLink to='home'><li>Home</li></NavLink>
            <NavLink to='about'><li>About</li></NavLink>
            <NavLink to='blog'><li>Blog</li></NavLink>
            <NavLink to='contact'><li>Contact</li></NavLink>
        </div>}
      </div>
    </>
  )
}

export default Navbars