import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pricing.css';

function Pricing() {
  const navigate = useNavigate();
  const handleSelectPlan = (planName) => {
    navigate('/payment-setup', { state: { plan: planName } });
  };

  return (
    <div className="pricing-page">
      {/* Header */}
      <div className="pricing-header">
        <h1 className="pricing-title">Choose Your Experience</h1>
        <p className="pricing-subtitle">Unlock personalized recommendations, rewards & exclusive offers.</p>
        <button className="pricing-cta-btn">Based on your taste profile</button>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-cards-container">
        {/* Starter Plan */}
        <div className="pricing-card starter-card">
          <div className="pricing-card-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L20 12L30 12L22 19L26 29L16 22L6 29L10 19L2 12L12 12L16 2Z" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="pricing-card-title">Starter</h3>
          <div className="pricing-card-price">
            <span className="price-amount">$9.99</span>
            <span className="price-period">/month</span>
          </div>
          <p className="pricing-card-description">
            Ideal for individuals seeking essential features and a great start.
          </p>
          <ul className="pricing-card-features">
            <li className="feature-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Access to basic dish discovery</span>
            </li>
            <li className="feature-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>AI picks (limited)</span>
            </li>
            <li className="feature-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Standard restaurant info</span>
            </li>
            <li className="feature-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Ad-supported experience</span>
            </li>
          </ul>
          <button 
            className="pricing-card-btn starter-btn"
            onClick={() => handleSelectPlan('Starter')}
          >
            Select Starter
          </button>
        </div>

        {/* Plus Plan */}
        <div className="pricing-card plus-card">
          <div className="pricing-card-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L20 12L30 12L22 19L26 29L16 22L6 29L10 19L2 12L12 12L16 2Z" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="pricing-card-title">Plus</h3>
          <div className="pricing-card-price">
            <span className="price-amount">$19.99</span>
            <span className="price-period">/month</span>
          </div>
          <p className="pricing-card-description">
            Upgrade for enhanced features, better quality, and more flexibility.
          </p>
          <ul className="pricing-card-features">
            <li className="feature-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Better AI suggestions</span>
            </li>
            <li className="feature-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Save up to 10 favorite dishes</span>
            </li>
            <li className="feature-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Kitchen visit videos</span>
            </li>
            <li className="feature-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Loyalty points and coupons</span>
            </li>
            <li className="feature-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Trending lists</span>
            </li>
          </ul>
          <button 
            className="pricing-card-btn plus-btn"
            onClick={() => handleSelectPlan('Plus')}
          >
            Select Plus
          </button>
        </div>

        {/* Premium Plan */}
        <div className="pricing-card premium-card">
          <div className="pricing-card-icon">
            <svg width="37" height="27" viewBox="0 0 37 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.6991 0.0228288C18.9201 0.0525214 19.1363 0.110487 19.3416 0.197344L19.64 0.349013L19.9157 0.538191C20.0904 0.675883 20.2466 0.835618 20.3788 1.01439L20.5599 1.29654L20.5746 1.32426L25.4949 10.6626L32.6153 4.56478L32.6478 4.53706L32.806 4.418C33.1856 4.15635 33.6314 4.00401 34.0944 3.97929L34.2934 3.97604C34.6887 3.98636 35.076 4.09065 35.4235 4.27938L35.5932 4.38049L35.7562 4.49466C36.0696 4.73584 36.3205 5.04905 36.4902 5.40631L36.5685 5.58732L36.6321 5.77651C36.7617 6.21901 36.7667 6.69079 36.6451 7.13828L36.6435 7.1448L31.9107 24.2558C31.7173 24.9556 31.301 25.5733 30.725 26.0155C30.1488 26.4579 29.4439 26.7012 28.7175 26.7069L8.01697 26.7069C7.2902 26.7019 6.58451 26.4592 6.00774 26.017C5.43114 25.5748 5.01398 24.9562 4.82047 24.2558L0.089364 7.14643L0.0877274 7.1399C-0.0513001 6.62825 -0.0245985 6.08434 0.16438 5.58896L0.242653 5.40793C0.440648 4.99113 0.750667 4.6351 1.13963 4.38211L1.30923 4.28101C1.65674 4.0923 2.04412 3.98796 2.43942 3.97767L2.63839 3.98093L2.83573 3.99887C3.22738 4.05107 3.60146 4.19536 3.92677 4.41964L4.08496 4.53868L4.11759 4.56641L11.2346 10.6642L16.1566 1.32426L16.1713 1.29654C16.3875 0.903988 16.7053 0.577052 17.0911 0.349013L17.3895 0.197344C17.697 0.067301 18.0286 0.0001002 18.3648 0L18.6991 0.0228288ZM14.1816 12.2412L14.1718 12.2592C13.9367 12.6925 13.6088 13.0685 13.2113 13.3599C12.8136 13.6515 12.3563 13.8516 11.8723 13.9454C11.3882 14.0393 10.8889 14.0249 10.4111 13.903C10.0526 13.8117 9.71274 13.6614 9.40482 13.4595L9.10802 13.2409C9.10047 13.2347 9.0926 13.2277 9.08517 13.2214L4.03766 8.89634L8.0398 23.3654L28.6914 23.3669L32.6936 8.89308L27.6443 13.2198C27.637 13.2261 27.6291 13.2331 27.6215 13.2393C27.2417 13.5532 26.7975 13.7798 26.32 13.9015C25.8424 14.0233 25.3429 14.0376 24.8588 13.9439C24.3748 13.8499 23.9176 13.6498 23.5199 13.3584C23.1223 13.0669 22.7945 12.6908 22.5593 12.2575L22.5495 12.2396L18.3648 4.29569L14.1816 12.2412Z" fill="#EAB308"/>
            </svg>
          </div>
          <h3 className="pricing-card-title">Premium</h3>
          <div className="pricing-card-price">
            <span className="price-amount">$29.99</span>
            <span className="price-period">/month</span>
          </div>
          <p className="pricing-card-description">
            Experience the ultimate with all advanced features and VIP support.
          </p>
          <ul className="pricing-card-features">
            <li className="feature-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Exclusive discounts & early offers</span>
            </li>
            <li className="feature-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Premium table reservations</span>
            </li>
            <li className="feature-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Kitchen visit tours</span>
            </li>
            <li className="feature-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Dedicated VIP support channel</span>
            </li>
            <li className="feature-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Priority customer service</span>
            </li>
          </ul>
          <button 
            className="pricing-card-btn premium-btn"
            onClick={() => handleSelectPlan('Premium')}
          >
            Select Premium
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="pricing-footer">
        <p className="pricing-footer-text">You can change your plan anytime.</p>
      </div>
    </div>
  );
}

export default Pricing;
