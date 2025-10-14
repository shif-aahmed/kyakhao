import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import DishOfTheWeek from '../components/DishOfTheWeek/DishOfTheWeek'
import AISuggestions from '../components/AISuggestions/AISuggestions'
import TopRatedRestaurants from '../components/TopRatedRestaurants/TopRatedRestaurants'
import NewOnKyaKhao from '../components/NewOnKyaKhao/NewOnKyaKhao'
import RestaurantsSection from '../components/RestaurantsSection/RestaurantsSection'

function Home() {
  const [activeTab, setActiveTab] = useState('Search All')

  const renderContent = () => {
    if (activeTab === 'Restaurants') {
      return <RestaurantsSection />
    }
    
    return (
      <div>
        <DishOfTheWeek />
        <AISuggestions />
        <TopRatedRestaurants />
        <NewOnKyaKhao />
      </div>
    )
  }

  return (
    <div>
      <HeroBanner activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  )
}

export default Home
