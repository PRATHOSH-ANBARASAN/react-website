import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='container'>
        This Page is not Found <span>
            <NavLink to='home'>Home</NavLink>
        </span>
    </div>
  )
}

export default Notfound