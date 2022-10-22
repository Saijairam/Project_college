import React from 'react'
import Logo from '../../assets/Logo.jpg'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={Logo} alt=".." className='img-fluid' style={{width:'100px',marginTop:'5px',marginBottom:'5px'}}/></a>
    <a className="navbar-brand" href="/">IIT BHU GRIEVANCE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ul-container" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contactus">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/feedback">Feedback</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/FAQ">FAQ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Profile">Profile</a>
        </li>

      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar