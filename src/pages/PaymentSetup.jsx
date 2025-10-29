import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentSetup.css';

function PaymentSetup() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPlan = location.state?.plan || 'Premium';

  const onBack = () => navigate(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Always navigate to the originating page to show the modal
    try {
      sessionStorage.setItem('hasSubscription', '1');
      localStorage.setItem('hasSubscription', '1'); // Also store in localStorage for persistence
      const origin = sessionStorage.getItem('tasteOriginPath');
      if (origin) {
        // If origin isn't a content page (e.g., came from pricing), go to AI Picks for survey
        const nonContentOrigins = ['/pricing', '/payment-setup', '/'];
        if (nonContentOrigins.includes(origin)) {
          navigate('/ai-picks', { state: { showTasteSurvey: true }, replace: true });
          return;
        }
        navigate(origin, { state: { showTasteSurvey: true }, replace: true });
        return;
      }
    } catch {
      // If no origin, go to home page
    }
    // Fallback to AI Picks with survey prompt
    navigate('/ai-picks', { state: { showTasteSurvey: true }, replace: true });
  };

  return (
    <div className="payment-setup-page">
      <div className="payment-card">
        {/* Back */}
        <button className="ps-back-btn" onClick={onBack} aria-label="Back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <h2 className="ps-title">Set up your credit or debit card</h2>

        <div className="ps-brands">
          <span className="ps-brand visa" />
          <span className="ps-brand mc" />
          <span className="ps-brand amex" />
          <span className="ps-brand rupay" />
        </div>

        <div className="ps-form" role="form" aria-label="Payment setup form">
          {/* Inputs block to match image (purely visual; no validation) */}
          <div className="ps-input-row">
            <div className="ps-input-with-icon">
              <input
                className="ps-input"
                type="text"
                inputMode="numeric"
                placeholder="Card number"
                autoComplete="cc-number"
                name="cardnumber"
              />
              <span className="ps-input-icon" />
            </div>
          </div>

          <div className="ps-two-cols">
            <div className="ps-input-row">
              <div className="ps-input-with-icon">
                <input
                  className="ps-input"
                  type="text"
                  placeholder="Expiry date"
                  autoComplete="cc-exp"
                  name="exp-date"
                />
                <span className="ps-input-icon calendar" />
              </div>
            </div>
            <div className="ps-input-row">
              <div className="ps-input-with-icon">
                <input
                  className="ps-input"
                  type="password"
                  inputMode="numeric"
                  placeholder="CVV"
                  autoComplete="cc-csc"
                  name="cvc"
                />
                <span className="ps-input-icon info" />
              </div>
            </div>
          </div>

          <div className="ps-input-row">
            <input
              className="ps-input"
              type="text"
              placeholder="Name on card"
              autoComplete="cc-name"
              name="cardholder"
            />
          </div>

          <div className="ps-plan-box">
            <div className="ps-plan-amount">PKR 1,100/month</div>
            <div className="ps-plan-name">{selectedPlan}</div>
            <button type="button" className="ps-plan-change" onClick={onBack}>Change</button>
          </div>

          <p className="ps-note">
            Your payments will be processed internationally. Additional bank fees may apply.
          </p>

          <div className="ps-terms">
            <label className="ps-checkbox">
              <input type="checkbox" />
              <span>I agree.</span>
            </label>
            <p className="ps-legal">
              By ticking the box below, you agree to our <a href="#">Terms of Use</a>, <a href="#">Privacy
              Statement</a>, and that you are over 18. You also acknowledge our <a href="#">Recurring
              Charges</a> and agree that we’ll charge the membership fee currently <b>PKR 1,100/month</b> to your payment method until you cancel. You may
              cancel at any time to avoid future charges.
            </p>
          </div>

          <button type="button" className="ps-submit" onClick={handleSubmit}>
            Start Membership
          </button>

          <p className="ps-recaptcha">This page is protected by Google reCAPTCHA to ensure you’re not a bot. <a href="#">Learn more</a>.</p>
        </div>
      </div>

    </div>
  );
}

export default PaymentSetup;
