import React from 'react'
import './Grievance.css';

const Grievance = () => {
  return (
    <div className='container grievance-container'>
        <div className='box'>
           <a href="grievance/hostel" className='btn btn-link hostel-btn'>Hostel</a>
        </div>
       <div className="box">
          <div className="sub-box"><a href='/grievance' className='btn btn-link'>Academic</a></div>
          <div className="sub-box"><a href='/grievance' className='btn btn-link'>Internet</a></div>
       </div>
       <div className="box">
          <div className="sub-box"><a href='/grievance' className='btn btn-link'>Security</a></div>
          <div className="sub-box"><a href='/grievance' className='btn btn-link'>Fests</a></div>
       </div>
       <div className="box">
          <div className="sub-box"><a href='/grievance' className='btn btn-link'>Infrastructure</a></div>
          <div className="sub-box"><a href='/grievance' className='btn btn-link'>Finance</a></div>
       </div>
    </div>
  )
}

export default Grievance