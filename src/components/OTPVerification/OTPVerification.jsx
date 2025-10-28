import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OTPVerification.css';
import logoImage from '../../assets/logo.png';

const OTPVerification = ({ isOpen, onClose, userEmail = "john.jerry@gmail.com" }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [isResending, setIsResending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockTime, setBlockTime] = useState(0);
  const inputRefs = useRef([]);
  
  // Correct OTP for testing (in real app, this would come from backend)
  const correctOTP = "12345";

  useEffect(() => {
    if (isOpen) {
      // Reset states when modal opens
      setOtp(['', '', '', '', '']);
      setErrorMessage('');
      setAttempts(0);
      setIsBlocked(false);
      setBlockTime(0);
      
      // Focus first input when modal opens
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }
  }, [isOpen]);

  // Countdown timer for blocked state
  useEffect(() => {
    let interval;
    if (isBlocked && blockTime > 0) {
      interval = setInterval(() => {
        setBlockTime(prev => {
          if (prev <= 1) {
            setIsBlocked(false);
            setErrorMessage('');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isBlocked, blockTime]);

  const handleInputChange = (index, value) => {
    // Only allow single digit
    if (value.length > 1) return;
    
    // Clear error message when user starts typing
    if (errorMessage) {
      setErrorMessage('');
    }
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 5);
    const newOtp = [...otp];
    
    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i];
    }
    
    setOtp(newOtp);
    
    // Focus the next empty input or last input
    const nextEmptyIndex = newOtp.findIndex((digit, index) => !digit && index >= pastedData.length);
    const focusIndex = nextEmptyIndex !== -1 ? nextEmptyIndex : Math.min(pastedData.length, 4);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isBlocked) {
      setErrorMessage(`Please wait ${blockTime} seconds before trying again.`);
      return;
    }
    
    const otpString = otp.join('');
    if (otpString.length !== 5) {
      setErrorMessage('Please enter complete OTP');
      return;
    }

    setIsVerifying(true);
    setErrorMessage('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if OTP is correct
    if (otpString === correctOTP) {
      console.log('OTP verified successfully:', otpString);
      alert('OTP Verified Successfully!');
      try { sessionStorage.setItem('isSignedIn', '1'); } catch {}
      onClose();
      // Navigate to pricing page after successful verification
      navigate('/pricing', { replace: true });
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      
      if (newAttempts >= 3) {
        // Block user for 30 seconds after 3 failed attempts
        setIsBlocked(true);
        setBlockTime(30);
        setErrorMessage('Too many failed attempts. Please wait 30 seconds before trying again.');
      } else {
        setErrorMessage(`Invalid OTP. ${3 - newAttempts} attempts remaining.`);
      }
      
      // Clear OTP inputs
      setOtp(['', '', '', '', '']);
      inputRefs.current[0]?.focus();
    }
    
    setIsVerifying(false);
  };

  const handleResend = async () => {
    if (isBlocked) {
      setErrorMessage(`Please wait ${blockTime} seconds before requesting a new OTP.`);
      return;
    }
    
    setIsResending(true);
    setErrorMessage('');
    
    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
      setAttempts(0); // Reset attempts on resend
      alert('New OTP sent successfully!');
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="otp-verification-page">
      <div className="otp-verification-container">
        {/* Back Button */}
        <button className="otp-verification-back-btn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Logo */}
        <div className="otp-verification-logo">
          <img src={logoImage} alt="KyaKhao Logo" className="otp-verification-logo-image" />
        </div>

        {/* Title */}
        <h1 className="otp-verification-title">OTP Verification</h1>

        {/* Instruction Text */}
        <p className="otp-verification-instruction">
          Enter the code from the sms we sent to
        </p>

        {/* Email Display */}
        <p className="otp-verification-email">{userEmail}</p>

        {/* Error Message */}
        {errorMessage && (
          <div className="otp-verification-error">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}

        {/* OTP Input Fields */}
        <form className="otp-verification-form" onSubmit={handleSubmit}>
          <div className="otp-verification-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                pattern="[0-9]"
                maxLength="1"
                className="otp-verification-input"
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                autoComplete="off"
              />
            ))}
          </div>

          {/* Resend Option */}
          <div className="otp-verification-resend">
            <span className="otp-verification-resend-text">I didn't receive any code.</span>
            <button
              type="button"
              className="otp-verification-resend-btn"
              onClick={handleResend}
              disabled={isResending}
            >
              {isResending ? 'Sending...' : 'RESEND'}
            </button>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="otp-verification-submit-btn"
            disabled={isVerifying || isBlocked}
          >
            {isVerifying ? (
              <>
                <svg className="otp-verification-spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Verifying...
              </>
            ) : isBlocked ? (
              `Wait ${blockTime}s`
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
