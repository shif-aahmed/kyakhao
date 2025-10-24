import React from 'react'
import ExploreHeroBanner from '../components/ExploreHeroBanner/ExploreHeroBanner'
import BannerNewFilter from '../components/BannerNewFilter/BannerNewFilter'
import FoodGrid from '../components/FoodGrid/FoodGrid'
import './Explore.css'

function Explore() {
  return (
    <div className="explore-page">
      <ExploreHeroBanner />
      <BannerNewFilter />
      <FoodGrid />
    </div>
  )
}

export default Explore
