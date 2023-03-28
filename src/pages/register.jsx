import React from 'react'

const Register = () => {
  return (
    <>
        <h3>
            Register with us
        </h3>
       <form className='auth-form'> 
        <div className="each-form mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="each-form mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
       </form>

    </>
  )
}

export default Register;