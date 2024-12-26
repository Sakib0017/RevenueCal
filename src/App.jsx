import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar"
import Dashboard from "../src/components/Dashboard"
import Calculate from "../src/components/Calculate"
import Credits from './components/Credits';
import 'flowbite';
function App() {

  return (
    <>
    <Router>
      
      
        <Routes>
          <Route element={<Navbar />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      
    </Router>
      
      
    </>
  )
}

export default App
