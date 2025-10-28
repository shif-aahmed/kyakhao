import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonalizeModal.css';

const PersonalizeModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLoginSignUpClick = () => {
    onClose();
    navigate('/join-now', { replace: true });
  };

  if (!isOpen) return null;

  return (
    <div className="personalize-modal-overlay" onClick={onClose}>
      <div className="personalize-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="personalize-modal-close-btn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Fork and Knife Icon */}
        <div className="personalize-modal-icon">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Fork */}
            <path d="M20 8V56M20 8C20 4 24 2 28 2C32 2 36 4 36 8V56M20 8C20 4 16 2 12 2C8 2 4 4 4 8V56" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Knife */}
            <path d="M44 8L56 20L48 28L40 20L44 8Z" fill="#EAB308"/>
            <path d="M44 8L40 20L48 28L56 20L44 8Z" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M40 20L48 28L44 36L36 28L40 20Z" fill="#EAB308"/>
            <path d="M40 20L36 28L44 36L48 28L40 20Z" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M36 28L44 36L40 44L32 36L36 28Z" fill="#EAB308"/>
            <path d="M36 28L32 36L40 44L44 36L36 28Z" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32 36L40 44L36 52L28 44L32 36Z" fill="#EAB308"/>
            <path d="M32 36L28 44L36 52L40 44L32 36Z" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28 44L36 52L32 60L24 52L28 44Z" fill="#EAB308"/>
            <path d="M28 44L24 52L32 60L36 52L28 44Z" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Title */}
        <h2 className="personalize-modal-title">Personalize Your Food Experience</h2>

        {/* Subtitle */}
        <p className="personalize-modal-subtitle">Login to get AI-based suggestions tailored to your taste.</p>

        {/* Login/Sign Up Button */}
        <button className="personalize-modal-btn" onClick={handleLoginSignUpClick}>
          Login / Sign Up
        </button>
      </div>
    </div>
  );
};

export default PersonalizeModal;
