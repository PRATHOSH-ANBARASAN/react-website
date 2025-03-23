import React from 'react'

const Signin = () => {
  return (
    <div id='form-div' >
        <form action="" className='bg-dark text-white p-4 rounded d-flex flex-column gap-2'>
          <h5 className=' text-center'>Register Form</h5>
            <div>
                <label htmlFor="" className=' form-label'>Name :</label>
                <input type="text" className=' form-control' />
            </div>
            <div>
                <label htmlFor="" className=' form-label'>Age :</label>
                <input type="number" className=' form-control' />
            </div>
            <div>
                <label htmlFor="" className=' form-label'>Email :</label>
                <input type="email" className=' form-control' />
            </div>
            <div>
                <label htmlFor="" className=' form-label'>Password :</label>
                <input type="password" className=' form-control' />
            </div>
            <p className='small'>Already have a account ?<a href="login"> Login</a></p>
            <button className=' btn btn-success py-1'>Register</button>
        </form>
    </div>
  )
}

export default Signin