import React from 'react'
import './ReservationConfirmation.css'

const ReservationConfirmation = ({ isOpen, onClose, reservationData }) => {
  if (!isOpen) return null

  const handleViewReservations = () => {
    // Navigate to reservations page
    console.log('View My Reservations clicked')
    onClose()
  }

  const handleAddToCalendar = () => {
    // Add to calendar functionality
    console.log('Add to Calendar clicked')
  }

  const handleBookAnother = () => {
    // Book another table
    console.log('Book Another Table clicked')
    onClose()
  }

  return (
    <div className="confirmation-overlay" onClick={onClose}>
      <div className="confirmation-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="confirmation-title">Reservation Confirmed</h2>
          <div className="celebration-icon">🎉</div>
        </div>
        
        <div className="reservation-details">
          <div className="detail-row">
            <span className="detail-label">Restaurant</span>
            <span className="detail-value">{reservationData?.restaurant || 'The Grand Feast'}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Date</span>
            <span className="detail-value">{reservationData?.date || 'Friday, July 26, 2024'}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Time</span>
            <span className="detail-value">{reservationData?.time || '8:00 PM'}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Guests</span>
            <span className="detail-value">{reservationData?.guests || '4'}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Confirmation ID</span>
            <span className="detail-value">{reservationData?.confirmationId || 'KYK-001234567'}</span>
          </div>
        </div>

        <div className="modal-actions">
          <button className="primary-btn" onClick={handleViewReservations}>
            View My Reservations
          </button>
          <button className="secondary-btn" onClick={handleAddToCalendar}>
            Add to Calendar
          </button>
          <button className="secondary-btn" onClick={handleBookAnother}>
            Book Another Table
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReservationConfirmation
