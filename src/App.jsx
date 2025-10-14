import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Explore from './pages/Explore'
import AIPicks from './pages/AIPicks'
import KitchenDetail from './pages/KitchenDetail'

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
          <Route path="/kitchen" element={<KitchenDetail />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
