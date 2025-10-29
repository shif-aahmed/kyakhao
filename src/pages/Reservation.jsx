import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReservationHeroBanner from '../components/ReservationHeroBanner/ReservationHeroBanner'
import FilterBar from '../components/FilterBar/FilterBar'
import AllReservation from '../components/AllReservation/AllReservation'
import ReservationCTA from '../components/ReservationCTA/ReservationCTA'
import TasteSurveyModal from '../components/TasteSurveyModal/TasteSurveyModal'

function Reservation() {
  const location = useLocation()
  const [showTasteSurvey, setShowTasteSurvey] = useState(false)
  const [activeFilters, setActiveFilters] = useState({})
  const [sortBy, setSortBy] = useState('Top Rated')
  
  console.log('Reservation page loaded')

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
      <ReservationHeroBanner />
      <FilterBar 
        onFiltersChange={setActiveFilters}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <AllReservation filters={activeFilters} sortBy={sortBy} />
      <ReservationCTA />
      <TasteSurveyModal
        isOpen={showTasteSurvey}
        onClose={() => setShowTasteSurvey(false)}
        onStartSurvey={() => setShowTasteSurvey(false)}
      />
    </div>
  )
}

export default Reservation
