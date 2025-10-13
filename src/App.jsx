import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroBanner from './components/HeroBanner/HeroBanner'
import DishOfTheWeek from './components/DishOfTheWeek/DishOfTheWeek'
import AISuggestions from './components/AISuggestions/AISuggestions'
import TopRatedRestaurants from './components/TopRatedRestaurants/TopRatedRestaurants'
import NewOnKyaKhao from './components/NewOnKyaKhao/NewOnKyaKhao'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <DishOfTheWeek />
      <AISuggestions />
      <TopRatedRestaurants />
      <NewOnKyaKhao />
      <Footer />
    </div>
  )
}

export default App
