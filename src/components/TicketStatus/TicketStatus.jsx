import React from 'react'
import "./TicketStatus.css"

function TicketStatus() {
  return (
    <>
        <div className='container'>
            <h2>View my tickets</h2>
            <div className = "box-1">
                <div className='box-1-1'>
                    <p>Enter mobile no. or email to search</p>
                    <input type= "text"></input>
                    <button className='search-btn btn-success btn-sm'><i class="bi bi-search"></i>Search</button>
                </div>
                <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Ticket No.</th>
          <th scope="col">Ticket Date</th>
          <th scope="col">Problem Summary</th>
          <th scope="col">Status</th>
          <th scope="col">Assigned To</th>
          <th scope="col">Last Updated on</th>
          <th scope="col">Remarks</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* <th scope="row">1</th> */}
          {/* <td></td> */}
          <td>Ticket/001567</td>
          <td>18-Oct-2022</td>
          <td>Any...</td>
          <td></td>
          <td></td>
          <td>18-Oct-2022 19:37</td>
          <td></td>
          <td>History</td>
          
        </tr>
        
        
      </tbody>
    </table>
  </div>
            </div>
        </div>
    </>
  )
}

export default TicketStatus