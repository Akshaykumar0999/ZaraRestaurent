import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css'

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';



function App() {

  return (
    <div className='App'>
      <Router>
        {/* <div className='app-container'> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        {/* </div> */}
      </Router>
    </div>
  )
}

export default App
