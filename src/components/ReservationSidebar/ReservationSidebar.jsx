import React, { useState } from 'react';
import './ReservationSidebar.css';

const ReservationSidebar = ({ isOpen, onClose, restaurant }) => {
  const [date, setDate] = useState('October 24th, 2025');
  const [selectedTime, setSelectedTime] = useState('7:00 PM');
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('');
  const [addDecor, setAddDecor] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [loyaltyPoints] = useState(1200);

  const timeSlots = [
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const occasions = [
    'Birthday', 'Anniversary', 'Business Meeting', 'Date Night',
    'Family Dinner', 'Celebration', 'Other'
  ];

  const handleReserve = () => {
    console.log('Reservation confirmed:', {
      restaurant,
      date,
      time: selectedTime,
      guests,
      occasion,
      addDecor,
      coupon
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="reservation-overlay" onClick={onClose}>
      <div className="reservation-sidebar" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="reservation-header">
          <button className="reservation-close" onClick={onClose}>×</button>
        </div>

        {/* Form Content */}
        <div className="reservation-body">
          {/* Restaurant */}
          <div className="reservation-field">
            <label className="reservation-label">Restaurant</label>
            <div className="reservation-select-wrapper">
              <select className="reservation-select">
                <option>The Grand Bistro</option>
                <option>Urban Taste</option>
                <option>Golden Spoon</option>
              </select>
              <span className="reservation-arrow">▼</span>
            </div>
          </div>

          {/* Date */}
          <div className="reservation-field">
            <label className="reservation-label">Date</label>
            <div className="reservation-date-wrapper">
              <span className="reservation-calendar">📅</span>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="reservation-input"
                placeholder="October 24th, 2025"
              />
            </div>
          </div>

          {/* Time Slots */}
          <div className="reservation-field">
            <label className="reservation-label">Time Slot</label>
            <div className="reservation-times">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className={`reservation-time ${selectedTime === time ? 'reservation-time-selected' : ''}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Guests */}
          <div className="reservation-field">
            <label className="reservation-label">Guests</label>
            <div className="reservation-guests">
              <button
                className="reservation-guest-btn"
                onClick={() => setGuests(Math.max(1, guests - 1))}
              >–</button>
              <span className="reservation-guest-count">{guests}</span>
              <button
                className="reservation-guest-btn"
                onClick={() => setGuests(guests + 1)}
              >+</button>
            </div>
          </div>

          {/* Occasion */}
          <div className="reservation-field">
            <label className="reservation-label">Occasion (Optional)</label>
            <div className="reservation-select-wrapper">
              <select
                className="reservation-select"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="">Select occasion</option>
                {occasions.map((occ) => (
                  <option key={occ} value={occ}>{occ}</option>
                ))}
              </select>
              <span className="reservation-arrow">▼</span>
            </div>
          </div>

          {/* Table Decor */}
          <div className="reservation-field reservation-toggle-field">
            <label className="reservation-label">Add table décor</label>
            <label className="reservation-switch">
              <input
                type="checkbox"
                checked={addDecor}
                onChange={(e) => setAddDecor(e.target.checked)}
              />
              <span className="reservation-switch-slider"></span>
            </label>
          </div>

          {/* Coupon */}
          <div className="reservation-field">
            <label className="reservation-label">Coupon Code or Loyalty ID</label>
            <div className="reservation-coupon">
              <input
                type="text"
                placeholder="Enter code"
                className="reservation-input"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button className="reservation-apply">Apply</button>
            </div>
            <p className="reservation-loyalty">You have {loyaltyPoints} loyalty points.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="reservation-footer">
          <button className="reservation-reserve" onClick={handleReserve}>
            Reserve Table
          </button>
          <button className="reservation-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationSidebar;
