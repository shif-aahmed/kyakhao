import React from 'react';
import './NewCheckout.css';

const NewCheckout = () => {
  return (
    <div className="new-checkout-page">
      {/* Header */}
      <header className="checkout-header">
        <div className="header-content">
          <div className="logo">
            <img src="/logo.png" alt="KyaKhao" className="logo-image" />
          </div>
          <nav className="nav-links">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Explore</a>
            <a href="#" className="nav-link">AI Pick</a>
            <a href="#" className="nav-link">Kitchen</a>
            <a href="#" className="nav-link">Reservation</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>
          <div className="header-actions">
            <button className="search-btn">🔍</button>
            <button className="signin-btn">Sign In</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="new-checkout-hero-section">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop" alt="Kitchen background" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Checkout</h1>
          <p className="hero-subtitle">
            Complete your order and enjoy a seamless checkout experience.<br />
            We're here to ensure your satisfaction every step of the way!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="new-checkout-main-content">
        <div className="checkout-container">
          <div className="checkout-content-grid">
            {/* Billing Details Section */}
            <div className="billing-details-section">
              <h2 className="section-title">Billing Details</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="First Name" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Last Name" className="form-input" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Company Name" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Town / City" className="form-input" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Country / Region*" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="State" className="form-input" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Apartment, Suite, unit, etc (Optional)" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Zip Code" className="form-input" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input type="email" placeholder="E-mail Address" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone" className="form-input" />
                </div>
              </div>

              <div className="delivery-label-section">
                <p className="delivery-label-text">Select a label for effective delivery:</p>
                <div className="delivery-buttons">
                  <div className="delivery-options">
                    <button className="delivery-btn">
                      <span className="briefcase-icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.75 9.1875C8.73177 9.46094 8.58594 9.60677 8.3125 9.625H5.6875C5.41406 9.60677 5.26823 9.46094 5.25 9.1875V7.875H0V11.8125C0.0182292 12.1771 0.145833 12.487 0.382812 12.7422C0.638021 12.9792 0.947917 13.1068 1.3125 13.125H12.6875C13.0521 13.1068 13.362 12.9792 13.6172 12.7422C13.8542 12.487 13.9818 12.1771 14 11.8125V7.875H8.75V9.1875ZM12.6875 2.625H10.5V1.3125C10.4818 0.947917 10.3542 0.638021 10.1172 0.382812C9.86198 0.145833 9.55208 0.0182295 9.1875 0H4.8125C4.44792 0.0182295 4.13802 0.145833 3.88281 0.382812C3.64583 0.638021 3.51823 0.947917 3.5 1.3125V2.625H1.3125C0.947917 2.64323 0.638021 2.77083 0.382812 3.00781C0.145833 3.26302 0.0182292 3.57292 0 3.9375V7H14V3.9375C13.9818 3.57292 13.8542 3.26302 13.6172 3.00781C13.362 2.77083 13.0521 2.64323 12.6875 2.625ZM9.1875 2.625H4.8125V1.3125H9.1875V2.625Z" fill="#111111"/>
                        </svg>
                      </span>
                      HOME
                    </button>
                    <button className="delivery-btn">
                      <span className="briefcase-icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.75 9.1875C8.73177 9.46094 8.58594 9.60677 8.3125 9.625H5.6875C5.41406 9.60677 5.26823 9.46094 5.25 9.1875V7.875H0V11.8125C0.0182292 12.1771 0.145833 12.487 0.382812 12.7422C0.638021 12.9792 0.947917 13.1068 1.3125 13.125H12.6875C13.0521 13.1068 13.362 12.9792 13.6172 12.7422C13.8542 12.487 13.9818 12.1771 14 11.8125V7.875H8.75V9.1875ZM12.6875 2.625H10.5V1.3125C10.4818 0.947917 10.3542 0.638021 10.1172 0.382812C9.86198 0.145833 9.55208 0.0182295 9.1875 0H4.8125C4.44792 0.0182295 4.13802 0.145833 3.88281 0.382812C3.64583 0.638021 3.51823 0.947917 3.5 1.3125V2.625H1.3125C0.947917 2.64323 0.638021 2.77083 0.382812 3.00781C0.145833 3.26302 0.0182292 3.57292 0 3.9375V7H14V3.9375C13.9818 3.57292 13.8542 3.26302 13.6172 3.00781C13.362 2.77083 13.0521 2.64323 12.6875 2.625ZM9.1875 2.625H4.8125V1.3125H9.1875V2.625Z" fill="#111111"/>
                        </svg>
                      </span>
                      OFFICE
                    </button>
                  </div>
                  <button className="save-btn">Save</button>
                </div>
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="order-summary-section">
              <h2 className="section-title">Order Summary</h2>
              
              <div className="order-items">
                <div className="order-item">
                  <div className="item-image">
                    <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=100&h=100&fit=crop" alt="Spicy Mushroom Pasta" />
                  </div>
                  <div className="item-details">
                    <h4 className="item-name">Spicy Mushroom Pasta</h4>
                    <span className="item-price">$24.00</span>
                  </div>
                  <div className="quantity-selector">
                    <button className="qty-btn">-</button>
                    <span className="qty-number">1</span>
                    <button className="qty-btn">+</button>
                  </div>
                </div>

                <div className="order-item">
                  <div className="item-image">
                    <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=100&h=100&fit=crop" alt="Spicy Mushroom Pasta" />
                  </div>
                  <div className="item-details">
                    <h4 className="item-name">Spicy Mushroom Pasta</h4>
                    <span className="item-price">$24.00</span>
                  </div>
                  <div className="quantity-selector">
                    <button className="qty-btn">-</button>
                    <span className="qty-number">1</span>
                    <button className="qty-btn">+</button>
                  </div>
                </div>

                <div className="order-item">
                  <div className="item-image">
                    <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=100&h=100&fit=crop" alt="Spicy Mushroom Pasta" />
                  </div>
                  <div className="item-details">
                    <h4 className="item-name">Spicy Mushroom Pasta</h4>
                    <span className="item-price">$24.00</span>
                  </div>
                  <div className="quantity-selector">
                    <button className="qty-btn">-</button>
                    <span className="qty-number">1</span>
                    <button className="qty-btn">+</button>
                  </div>
                </div>
              </div>

              <div className="order-totals">
                <div className="total-row">
                  <span className="total-label">Subtotal</span>
                  <span className="total-value">$2,390.00</span>
                </div>
                <div className="total-row">
                  <span className="total-label">Subtotal</span>
                  <span className="total-value">$2,390.00</span>
                </div>
                <div className="total-row final-total">
                  <span className="total-label">Total(USD)</span>
                  <span className="total-value">$2450.00</span>
                </div>
              </div>

              <button className="confirm-order-btn">Confirm Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCheckout;
