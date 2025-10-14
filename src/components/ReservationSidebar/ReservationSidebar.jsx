import React, { useState } from 'react'
import './ReservationSidebar.css'
import ReservationConfirmation from '../ReservationConfirmation/ReservationConfirmation'

const ReservationSidebar = ({ isOpen, onClose, restaurant }) => {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [guests, setGuests] = useState(2)
  const [specialRequests, setSpecialRequests] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false)

  const timeSlots = [
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', 
    '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ]

  const handleReserve = () => {
    // Handle reservation logic here
    console.log('Reservation details:', {
      restaurant: restaurant?.name,
      date: selectedDate,
      time: selectedTime,
      guests,
      specialRequests
    })
    setShowConfirmation(true)
  }

  const handleCloseConfirmation = () => {
    setShowConfirmation(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="sidebar-overlay" onClick={onClose}>
      <div className="reservation-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="sidebar-header">
          <h2>Reserve a Table</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="sidebar-content">
          {restaurant && (
            <div className="restaurant-info">
              <h3>{restaurant.name}</h3>
              <p>{restaurant.cuisine} • {restaurant.location}</p>
              <div className="rating">
                <span className="star">⭐</span>
                <span>{restaurant.rating}</span>
                <span>({restaurant.reviews} reviews)</span>
              </div>
            </div>
          )}

          <div className="form-section">
            <label>Select Date</label>
            <input 
              type="date" 
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-section">
            <label>Select Time</label>
            <div className="time-slots">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className={`time-btn ${selectedTime === time ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="form-section">
            <label>Number of Guests</label>
            <div className="guests-selector">
              <button 
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="guest-btn"
              >
                -
              </button>
              <span className="guest-count">{guests}</span>
              <button 
                onClick={() => setGuests(guests + 1)}
                className="guest-btn"
              >
                +
              </button>
            </div>
          </div>

          <div className="form-section">
            <label>Special Requests (Optional)</label>
            <textarea
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder="Any special dietary requirements or requests..."
              className="form-textarea"
              rows="3"
            />
          </div>

          <div className="sidebar-footer">
            <button className="reserve-btn" onClick={handleReserve}>
              Confirm Reservation
            </button>
            <button className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      
      <ReservationConfirmation 
        isOpen={showConfirmation}
        onClose={handleCloseConfirmation}
        reservationData={{
          restaurant: restaurant?.name,
          date: selectedDate || 'Friday, July 26, 2024',
          time: selectedTime || '8:00 PM',
          guests: guests.toString(),
          confirmationId: 'KYK-001234567'
        }}
      />
    </div>
  )
}

export default ReservationSidebar
