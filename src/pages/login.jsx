import React from 'react'

const Login = () => {
  return (
    <>
       
       <form className='auth-form'> 
       <h3>
           Login to your Leaf
        </h3>

        <div className="each-form mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" />
        </div>
        <div className="each-form mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="passwordInput" />
        </div>
        
        <button type="submit" className="btn btn-success">Log In</button>
        <div>Not Registered...?</div>
       </form>

    </>
  )
}

export default Login