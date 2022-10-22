import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Grievance from './components/Grievance/Grievance';
import Home from './components/Home/Home';
import TicketStatus from './components/TicketStatus/TicketStatus';
import Hostel from './pages/Hostel/Hostel'


const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/grievance' element={<Grievance/>}/>
    <Route path='/grievance/hostel' element={<Hostel/>}/>
    <Route path='/TicketStatus' element={<TicketStatus/>}/>
   </Routes>
  )
}

export default AllRoutes