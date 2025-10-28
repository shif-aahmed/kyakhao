import React, { useState } from 'react';
import './SidebarReserveTable.css';

const SidebarReserveTable = ({ isOpen, onClose, restaurant }) => {
  const [selectedDate, setSelectedDate] = useState('October 24th, 2025');
  const [selectedTime, setSelectedTime] = useState('7:00 PM');
  const [guestCount, setGuestCount] = useState(2);
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [tableDecor, setTableDecor] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const timeSlots = [
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', 
    '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const occasions = [
    'Birthday', 'Anniversary', 'Business Meeting', 'Date Night', 
    'Family Dinner', 'Celebration', 'Other'
  ];

  const handleReserve = () => {
    console.log('Reservation details:', {
      restaurant: restaurant?.name || 'Premium Eats Downtown',
      date: selectedDate,
      time: selectedTime,
      guests: guestCount,
      occasion: selectedOccasion,
      tableDecor,
      couponCode,
      specialRequests
    });
    // Handle reservation logic here
  };

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="sidebar-reserve-table-overlay" onClick={handleClose}>
      <div className="sidebar-reserve-table-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="sidebar-reserve-table-header">
          <div className="sidebar-reserve-table-title-section">
            <h2 className="sidebar-reserve-table-title">Reserve Your Table</h2>
          </div>
          <div className="sidebar-reserve-table-subtitle-section">
            <p className="sidebar-reserve-table-subtitle">Book a premium dining experience with ease.</p>
          </div>
          <button className="sidebar-reserve-table-close-btn" onClick={handleClose}>×</button>
        </div>

        {/* Content */}
        <div className="sidebar-reserve-table-content">
          {/* Restaurant Selection */}
          <div className="sidebar-reserve-table-field">
            <label className="sidebar-reserve-table-label">Restaurant</label>
            <div className="sidebar-reserve-table-dropdown">
              <input 
                type="text" 
                value={restaurant?.name || 'Premium Eats Downtown'}
                readOnly
                className="sidebar-reserve-table-input"
              />
              <span className="sidebar-reserve-table-arrow">▼</span>
            </div>
          </div>

          {/* Date Selection */}
          <div className="sidebar-reserve-table-field">
            <label className="sidebar-reserve-table-label">Date</label>
            <div className="sidebar-reserve-table-date-input">
              <span className="sidebar-reserve-table-calendar-icon">📅</span>
              <input 
                type="text" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="sidebar-reserve-table-input"
              />
            </div>
          </div>

          {/* Time Slot Selection */}
          <div className="sidebar-reserve-table-field">
            <label className="sidebar-reserve-table-label">Time Slot</label>
            <div className="sidebar-reserve-table-time-slots">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className={`sidebar-reserve-table-time-btn ${selectedTime === time ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
            <div className="sidebar-reserve-table-divider"></div>
          </div>

          {/* Guests Selection */}
          <div className="sidebar-reserve-table-field">
            <label className="sidebar-reserve-table-label">Guests</label>
            <div className="sidebar-reserve-table-guests-selector">
              <button 
                className="sidebar-reserve-table-guest-btn"
                onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
              >
                −
              </button>
              <span className="sidebar-reserve-table-guest-count">{guestCount}</span>
              <button 
                className="sidebar-reserve-table-guest-btn"
                onClick={() => setGuestCount(guestCount + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Occasion Selection */}
          <div className="sidebar-reserve-table-field">
            <label className="sidebar-reserve-table-label">Occasion (Optional)</label>
            <div className="sidebar-reserve-table-dropdown">
              <input 
                type="text" 
                value={selectedOccasion}
                placeholder="Select occasion"
                onChange={(e) => setSelectedOccasion(e.target.value)}
                className="sidebar-reserve-table-input"
              />
              <span className="sidebar-reserve-table-arrow">▼</span>
            </div>
          </div>

          {/* Table Décor Toggle */}
          <div className="sidebar-reserve-table-field">
            <div className="sidebar-reserve-table-toggle-section">
              <label className="sidebar-reserve-table-label">Add table décor</label>
              <div 
                className={`sidebar-reserve-table-toggle ${tableDecor ? 'active' : ''}`}
                onClick={() => setTableDecor(!tableDecor)}
              >
                <div className="sidebar-reserve-table-toggle-slider"></div>
              </div>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="sidebar-reserve-table-field">
            <label className="sidebar-reserve-table-label">Coupon Code or Loyalty ID</label>
            <div className="sidebar-reserve-table-coupon-section">
              <input 
                type="text" 
                value={couponCode}
                placeholder="Enter code"
                onChange={(e) => setCouponCode(e.target.value)}
                className="sidebar-reserve-table-input"
              />
              <button className="sidebar-reserve-table-apply-btn">Apply</button>
            </div>
            <p className="sidebar-reserve-table-loyalty-text">You have 1200 loyalty points.</p>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="sidebar-reserve-table-footer">
          <button className="sidebar-reserve-table-reserve-btn" onClick={handleReserve}>
            Reserve Table
          </button>
          <button className="sidebar-reserve-table-cancel-btn" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarReserveTable;
