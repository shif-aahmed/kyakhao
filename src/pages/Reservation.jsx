import React from 'react'
import ReservationHeroBanner from '../components/ReservationHeroBanner/ReservationHeroBanner'
import FilterBar from '../components/FilterBar/FilterBar'
import RestaurantGrid from '../components/RestaurantGrid/RestaurantGrid'
import ReservationCTA from '../components/ReservationCTA/ReservationCTA'

function Reservation() {
  console.log('Reservation page loaded')
  
  return (
    <div>
      <ReservationHeroBanner />
      <FilterBar />
      <RestaurantGrid />
      <ReservationCTA />
    </div>
  )
}

export default Reservation
