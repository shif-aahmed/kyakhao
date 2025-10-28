import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ExploreHeroBanner from '../components/ExploreHeroBanner/ExploreHeroBanner'
import BannerNewFilter from '../components/BannerNewFilter/BannerNewFilter'
import FoodGrid from '../components/FoodGrid/FoodGrid'
import TasteSurveyModal from '../components/TasteSurveyModal/TasteSurveyModal'
import './Explore.css'

function Explore() {
  const [showTasteSurvey, setShowTasteSurvey] = useState(false)
  const location = useLocation()

  // Show taste survey modal if requested via navigation state
  useEffect(() => {
    if (location.state && location.state.showTasteSurvey) {
      setShowTasteSurvey(true)
      // clear state so it doesn't persist on refresh
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  return (
    <div className="explore-page">
      <ExploreHeroBanner />
      <BannerNewFilter />
      <FoodGrid />
      <TasteSurveyModal
        isOpen={showTasteSurvey}
        onClose={() => setShowTasteSurvey(false)}
        onStartSurvey={() => setShowTasteSurvey(false)}
      />
    </div>
  )
}

export default Explore
