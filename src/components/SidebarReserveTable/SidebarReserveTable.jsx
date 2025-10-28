import React, { useState } from 'react';
import './SidebarReserveTable.css';

const SidebarReserveTable = ({ isOpen, onClose, restaurant }) => {
  const [selectedDate, setSelectedDate] = useState('October 24th, 2025');
  const [selectedTime, setSelectedTime] = useState('7:00 PM');
  const [guestCount, setGuestCount] = useState(2);
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [tableDecor, setTableDecor] = useState(false);
  const [selectedDecor, setSelectedDecor] = useState('Starter');
  const [couponCode, setCouponCode] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

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
      selectedDecor,
      couponCode
    });

    onClose(); // close sidebar
    setTimeout(() => setShowConfirmation(true), 300); // show confirmation popup
  };

  const closeConfirmation = () => setShowConfirmation(false);

  if (!isOpen && !showConfirmation) return null;

  return (
    <>
      {isOpen && (
        <div className="sidebar-reserve-table-overlay" onClick={onClose}>
          <div
            className="sidebar-reserve-table-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sidebar-reserve-table-header">
              <div className="sidebar-reserve-table-title-section">
                <h2 className="sidebar-reserve-table-title">Reserve Your Table</h2>
                <p className="sidebar-reserve-table-subtitle">
                  Book a premium dining experience with ease.
                </p>
              </div>
              <button className="sidebar-reserve-table-close-btn" onClick={onClose}>
                ×
              </button>
            </div>

            {/* Content */}
            <div className="sidebar-reserve-table-content">
              {/* Restaurant */}
              <div className="sidebar-reserve-table-field">
                <label className="sidebar-reserve-table-label">Restaurant</label>
                <div className="sidebar-reserve-table-dropdown">
                  <input
                    type="text"
                    value={restaurant?.name || 'Premium Eats Downtown'}
                    readOnly
                    className="sidebar-reserve-table-input"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="sidebar-reserve-table-field">
                <label className="sidebar-reserve-table-label">Date</label>
                <div className="sidebar-reserve-table-date-input">
                  <span className="sidebar-reserve-table-calendar-icon">🗓️</span>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="sidebar-reserve-table-input"
                  />
                </div>
              </div>

              {/* Time Slot */}
              <div className="sidebar-reserve-table-field">
                <label className="sidebar-reserve-table-label">Time Slot</label>
                <div className="sidebar-reserve-table-time-slots">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      className={`sidebar-reserve-table-time-btn ${
                        selectedTime === time ? 'selected' : ''
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                <div className="sidebar-reserve-table-divider"></div>
              </div>

              {/* Guests */}
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

              {/* Occasion */}
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
                </div>
              </div>

              {/* Table Decor Toggle */}
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

              {/* Table Decor Selection */}
              {tableDecor && (
                <div className="sidebar-reserve-table-decor-section">
                  <p className="sidebar-reserve-table-decor-title">
                    Choose a décor level to match your table style.
                  </p>

                  <div className="sidebar-reserve-table-decor-options">
                    {['Starter', 'Plus', 'Premium'].map((level) => (
                      <button
                        key={level}
                        className={`sidebar-reserve-table-decor-btn ${
                          selectedDecor === level ? 'selected' : ''
                        }`}
                        onClick={() => setSelectedDecor(level)}
                      >
                        {level}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Plan Details */}
                  <div className="sidebar-reserve-table-decor-box">
                    <h4 className="sidebar-reserve-table-decor-plan">
                      {selectedDecor} Plan Inclusions
                    </h4>
                    <ul className="sidebar-reserve-table-decor-list">
                      {selectedDecor === 'Starter' && (
                        <>
                          <li>25+ fresh flowers</li>
                          <li>LED candle set</li>
                          <li>3-color theme arrangement</li>
                          <li>Rose-petal centerpiece</li>
                          <li>Custom name banner/message</li>
                        </>
                      )}

                      {selectedDecor === 'Plus' && (
                        <>
                          <li>40+ premium flowers</li>
                          <li>LED & real candle mix</li>
                          <li>Custom floral arch or heart stand</li>
                          <li>Luxury table runner & accessories</li>
                          <li>Handwritten card & small cake</li>
                        </>
                      )}

                      {selectedDecor === 'Premium' && (
                        <>
                          <li>80+ exotic flowers (roses, orchids, lilies)</li>
                          <li>Grand floral arch & light setup</li>
                          <li>Custom signage or neon name board</li>
                          <li>5-color theme with luxury fabrics</li>
                          <li>Personalized gifts & champagne setup</li>
                        </>
                      )}
                    </ul>
                    <p className="sidebar-reserve-table-decor-note">
                      Décor is arranged by the restaurant based on availability.
                    </p>
                  </div>
                </div>
              )}

              {/* Coupon */}
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
                <p className="sidebar-reserve-table-loyalty-text">
                  You have 1200 loyalty points.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="sidebar-reserve-table-footer">
              <button className="sidebar-reserve-table-reserve-btn" onClick={handleReserve}>
                Reserve Table
              </button>
              <button className="sidebar-reserve-table-cancel-btn" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="reservation-confirmation-overlay" onClick={closeConfirmation}>
          <div
            className="reservation-confirmation-card"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="reservation-confirmation-title">Reservation Confirmed! 🎉</h3>
            <div className="reservation-confirmation-details">
              <p><strong>Restaurant:</strong> {restaurant?.name || 'Premium Eats Downtown'}</p>
              <p><strong>Date:</strong> {selectedDate}</p>
              <p><strong>Time:</strong> {selectedTime}</p>
              <p><strong>Guests:</strong> {guestCount}</p>
              {selectedOccasion && <p><strong>Occasion:</strong> {selectedOccasion}</p>}
              {tableDecor && <p><strong>Décor Plan:</strong> {selectedDecor}</p>}
            </div>
            <div className="reservation-confirmation-buttons">
              <button className="primary-btn" onClick={closeConfirmation}>
                View My Reservations
              </button>
              <button className="secondary-btn" onClick={closeConfirmation}>
                Add to Calendar
              </button>
              <button className="secondary-btn" onClick={closeConfirmation}>
                Book Another Table
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarReserveTable;
