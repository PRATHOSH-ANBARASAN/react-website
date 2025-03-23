import React from 'react'

const Login = () => {
  
  return (
    <div id='form-div'>
      <form  action="" className='bg-dark text-white p-4 rounded d-flex flex-column gap-2'>
        <h5 className='text-center'>Login Form</h5>
        <div>
          <label htmlFor="" className=' form-label'>Email :</label>
          <input type="email" className=' form-control' />
        </div>
        <div>
          <label htmlFor="" className=' form-label'>Password :</label>
          <input type="password" className=' form-control' />
        </div>
        <p className='small'>New user ?<a href="signin"> SignIn</a></p>
        <button className='btn btn-success'>Login</button>
      </form>
    </div>
  )
}

export default Login