import React from 'react';
import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import './App.css'

import Home from './components/Home';
import AllForms from './components/AllForms';
import Login from './components/Login';
import DashBoard from './components/DashBoard';



import EntryForms from './components/Entryforms';
import OrderReportTables from './components/OrderReportTables';


import { useSelector } from 'react-redux';

const ProtectedRoute=({children})=>{
  const {auth}=useSelector((state)=>state)
  console.log(auth.isLoggedIn)
      if(auth.isLoggedIn){
        return children
      }else{
        return <Navigate to={"/login"}/>

      }
}

function App() {

  return (
    <div className='App'>
      <Router>
        {/* <div className='app-container'> */}
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/allFroms" element={<ProtectedRoute><AllForms /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><DashBoard /></ProtectedRoute>} />
            <Route path="/formsentry" element={<ProtectedRoute><EntryForms /></ProtectedRoute>} />
            <Route path="/orderreportstables" element={<ProtectedRoute><OrderReportTables /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        {/* </div> */}
      </Router>
    </div>
  )
}

export default App
