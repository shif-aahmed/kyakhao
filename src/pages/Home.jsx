import React from 'react'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import DishOfTheWeek from '../components/DishOfTheWeek/DishOfTheWeek'
import AISuggestions from '../components/AISuggestions/AISuggestions'
import TopRatedRestaurants from '../components/TopRatedRestaurants/TopRatedRestaurants'
import NewOnKyaKhao from '../components/NewOnKyaKhao/NewOnKyaKhao'

function Home() {
  return (
    <div>
      <HeroBanner />
      <DishOfTheWeek />
      <AISuggestions />
      <TopRatedRestaurants />
      <NewOnKyaKhao />
    </div>
  )
}

export default Home
