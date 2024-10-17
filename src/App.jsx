import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Services from './components/pages/services/Services'
import Contact from './components/pages/contact/Contact'
import Update from './components/pages/update/Update'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<h1>page not found</h1>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/updates" element={<Update/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App