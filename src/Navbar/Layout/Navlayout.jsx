import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbars from '../Navbars'

const Navlayout = () => {
  return (
    
    <div>
        <Navbars/>
        <div>
          <Outlet/>
        </div>


    </div>
  )
}

export default Navlayout