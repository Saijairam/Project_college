import React from 'react';
import {BrowserRouter as Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes'

function App() {
  return (
    <Routes>
       <Navbar/>
       <AllRoutes/>
    </Routes>
  );
}

export default App;

