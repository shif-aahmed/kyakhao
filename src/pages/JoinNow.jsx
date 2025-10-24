import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../assets/logo.png'
import './JoinNow.css'

function JoinNow() {
  const [fullName, setFullName] = useState('ethanthomsan')
  const [email, setEmail] = useState('example@gmail.com')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle sign up logic here
    console.log('Sign up:', { fullName, email, password, agreeToTerms })
  }

  return (
    <div className="join-now-page">
      <div className="join-now-container">
        {/* Left Section - Join Now Form */}
        <div className="join-now-form-section">
          <div className="join-now-form-container">
            <h1 className="join-now-title">Join Now</h1>
            
            <p className="signin-prompt">
              Already have an account? <Link to="/signin" className="signin-link">Sign In</Link>
            </p>

            <form className="join-now-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  className="form-input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="password-input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="form-input password-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {showPassword ? (
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
                      ) : (
                        <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" fill="currentColor"/>
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    required
                  />
                  <span className="checkmark"></span>
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>

              <button type="submit" className="join-now-btn">Sign Up</button>
            </form>

            <div className="divider">
              <span className="divider-text">OR</span>
            </div>

            <div className="social-login">
              <button className="social-btn google-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>Continue with Google</span>
              </button>
              
              <button className="social-btn facebook-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Continue with Facebook</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Food Image */}
        <div className="join-now-image-section">
          <div className="food-image-container">
            <div className="brand-logo">
              <img src={logoImage} alt="KyaKhao Logo" className="brand-logo-image" />
            </div>
            
            <div className="food-layout">
              {/* Cheese Block */}
              <div className="cheese-block">
                <div className="cheese-main"></div>
                <div className="cheese-pieces">
                  <div className="cheese-piece"></div>
                  <div className="cheese-piece"></div>
                  <div className="cheese-piece"></div>
                </div>
              </div>

              {/* Mushroom Bowl */}
              <div className="mushroom-bowl">
                <div className="mushroom-bowl-container">
                  <div className="mushroom"></div>
                  <div className="mushroom"></div>
                  <div className="mushroom"></div>
                  <div className="mushroom"></div>
                </div>
              </div>

              {/* Peppercorns */}
              <div className="peppercorns">
                <div className="peppercorn red"></div>
                <div className="peppercorn black"></div>
                <div className="peppercorn red"></div>
                <div className="peppercorn black"></div>
                <div className="peppercorn red"></div>
              </div>

              {/* Chili Pepper */}
              <div className="chili-pepper"></div>

              {/* Pasta */}
              <div className="pasta-pieces">
                <div className="pasta-piece"></div>
                <div className="pasta-piece"></div>
                <div className="pasta-piece"></div>
                <div className="pasta-piece"></div>
              </div>

              {/* Fettuccine Nests */}
              <div className="fettuccine-nests">
                <div className="fettuccine-nest"></div>
                <div className="fettuccine-nest"></div>
              </div>

              {/* Tomato Bowl */}
              <div className="tomato-bowl">
                <div className="tomato-bowl-container">
                  <div className="cherry-tomato"></div>
                  <div className="cherry-tomato"></div>
                  <div className="cherry-tomato"></div>
                  <div className="garlic-clove"></div>
                  <div className="garlic-clove"></div>
                </div>
                <div className="herbs">
                  <div className="rosemary"></div>
                  <div className="bay-leaf"></div>
                  <div className="bay-leaf"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinNow

