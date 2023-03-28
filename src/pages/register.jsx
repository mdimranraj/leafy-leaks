import React from 'react'

const Register = () => {
  return (
    <>
       
       <form className='auth-form'> 
       <h3>
           Join us. Be a Leaf.
        </h3>
        <div className="each-form mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
            <input type="text" className="form-control" id="nameInput" />
        </div>
        <div className="each-form mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" />
        </div>
        <div className="each-form mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="passwordInput" placeholder='For ex : abdj@123CD'/>
        </div>
        <div className="each-form mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="passwordInput" placeholder='mention same password as above'/>
        </div>
        
        <button type="submit" className="btn btn-success">Register</button>
        
       </form>

    </>
  )
}

export default Register;