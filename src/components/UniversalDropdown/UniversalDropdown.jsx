import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './UniversalDropdown.css';

const UniversalDropdown = ({ 
  label, 
  value, 
  options, 
  onChange, 
  placeholder = "Select an option",
  className = "",
  disabled = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const displayValue = value || placeholder;

  return (
    <div className={`universal-dropdown-container ${className}`}>
      {label && <label className="universal-dropdown-label">{label}</label>}
      <div className="universal-dropdown-wrapper" ref={dropdownRef}>
        <div 
          className={`universal-dropdown-header ${disabled ? 'disabled' : ''}`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          <span className="universal-dropdown-selected">{displayValue}</span>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`universal-dropdown-arrow ${isOpen ? 'open' : ''}`} 
          />
        </div>
        {isOpen && !disabled && (
          <div className="universal-dropdown-options">
            {options.map((option) => (
              <div
                key={option.value || option}
                className={`universal-dropdown-option ${value === (option.value || option) ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option.value || option)}
              >
                {option.label || option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversalDropdown;
