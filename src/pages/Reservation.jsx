import React from 'react'
import ReservationHeroBanner from '../components/ReservationHeroBanner/ReservationHeroBanner'
import FilterBar from '../components/FilterBar/FilterBar'
import AllReservation from '../components/AllReservation/AllReservation'
import ReservationCTA from '../components/ReservationCTA/ReservationCTA'

function Reservation() {
  console.log('Reservation page loaded')
  
  return (
    <div>
      <ReservationHeroBanner />
      <FilterBar />
      <AllReservation />
      <ReservationCTA />
    </div>
  )
}

export default Reservation
