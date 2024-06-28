import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css'

import Home from './components/Home';
import AllForms from './components/AllForms';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import EntryForms from './components/Entryforms';
import OrderReportTables from './components/OrderReportTables';



function App() {

  return (
    <div className='App'>
      <Router>
        {/* <div className='app-container'> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allFroms" element={<AllForms />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/formsentry" element={<EntryForms />} />
            <Route path="/orderreportstables" element={<OrderReportTables />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        {/* </div> */}
      </Router>
    </div>
  )
}

export default App
