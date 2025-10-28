import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import KitchenDetailHeroBanner from '../components/KitchenDetailHeroBanner/KitchenDetailHeroBanner'
import CulinarySpaces from '../components/CulinarySpaces/CulinarySpaces'
import FeaturedKitchens from '../components/FeaturedKitchens/FeaturedKitchens'
import MasterChefs from '../components/MasterChefs/MasterChefs'
import TasteSurveyModal from '../components/TasteSurveyModal/TasteSurveyModal'

function KitchenDetail() {
  const { id } = useParams()
  const location = useLocation()
  const [showTasteSurvey, setShowTasteSurvey] = useState(false)
  
  console.log('KitchenDetail page loaded with ID:', id)

  // Show taste survey modal if requested via navigation state
  useEffect(() => {
    if (location.state && location.state.showTasteSurvey) {
      setShowTasteSurvey(true)
      // clear state so it doesn't persist on refresh
      window.history.replaceState({}, document.title)
    }
  }, [location.state])
  
  return (
    <div>
      <KitchenDetailHeroBanner />
      <CulinarySpaces />
      <FeaturedKitchens />
      <MasterChefs />
      <TasteSurveyModal
        isOpen={showTasteSurvey}
        onClose={() => setShowTasteSurvey(false)}
        onStartSurvey={() => setShowTasteSurvey(false)}
      />
    </div>
  )
}

export default KitchenDetail
