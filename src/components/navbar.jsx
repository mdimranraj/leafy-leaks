import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <img className= "logo-img" src="https://drive.google.com/uc?export=download&id=11l-zqKjyyVmgYa5f6S8iqijAkhpAvu97" alt="logo"/>
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav navbar-right-items">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/plantroom">Plant Room</Link>
              </li>

              {/* <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Plant Room
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="/plantroom">Category 1</a></li>
                  <li><a className="dropdown-item" href="/">Category 2</a></li>
                  <li><a className="dropdown-item" href="/">Category 3</a></li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/myplants">My Plants</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/"><img class="profile-blank-img" src="https://drive.google.com/uc?export=download&id=1LlZ-cNQVrnfUTFwEg5lCVuFw4OPbd7wg" alt="" srcset=""></img></Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;