import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Explore from './pages/Explore'
import AIPicks from './pages/AIPicks'
import RestaurantDetail from './pages/RestaurantDetail'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/ai-picks" element={<AIPicks />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
