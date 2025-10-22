import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Explore from './pages/Explore'
import AIPicks from './pages/AIPicks'
import KitchenDetail from './pages/KitchenDetail'
import Reservation from './pages/Reservation'
import Contact from './pages/Contact'

import RestaurantDetail from './pages/RestaurantDetail'
import DishDetail from './pages/DishDetail'
import FAQs from './pages/FAQs'
import './App.css'

function App() {
  console.log('App component rendered');
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/ai-picks" element={<AIPicks />} />
          <Route path="/kitchen" element={<KitchenDetail />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/dish/:id" element={<DishDetail />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="*" element={<div style={{padding: '2rem', textAlign: 'center'}}><h1>Page Not Found</h1><p>The page you're looking for doesn't exist.</p></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
