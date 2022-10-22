import React from 'react'

import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='container mt-3 pt-2'>
        <div class="container-1">
          <div className="forms">
            <form>
              <h3 className='text-center'>TICKET STATUS</h3>
              <div className="mb-3">
                <label htmlFor="" className="form-label">Phone Number</label>
                <input type="text" className="form-control" />
              </div>
              <a type="submit" className='btn btn-success' href="/TicketStatus">Check Status &rarr;</a>
            </form>
          </div>
          <div className="forms">
            <form>
              <h3 className='text-center'>ADMINISTRATION LOGIN</h3>
              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">User ID</label>
              <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"/>
              </div>
              <div className='mb-3'>
                <Link className='btn'>Create new account</Link>
                <Link className='btn'>Forgot password??</Link>
              </div>

              <button type="submit" class="btn btn-primary">Login &rarr;</button>
            </form>
          
          </div>
          <div className="notice">
             <h4 className='text-center'>IMPORTANT NOTICES &rarr;</h4>
             <ul>
              <li>Complaint 1</li>
              <li>Complaint 1</li>
              <li>Complaint 1</li>
              <li>Complaint 1</li>
              <li>Complaint 1</li>
              <li>Complaint 1</li>
             </ul>
          </div>
          
        </div>
        <a href="/grievance" className='btn mt-5 complaint-btn'>Post a Complaint</a>
    </div>
  )
}

export default Home