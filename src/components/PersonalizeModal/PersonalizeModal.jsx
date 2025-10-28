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
<path d="M31.5674 17.0607C31.5674 14.2652 32.664 11.579 34.6208 9.58261L40.7794 3.42388C41.8221 2.38134 43.5122 2.38165 44.5551 3.42388C45.5977 4.46657 45.5977 6.15674 44.5551 7.19943L38.4328 13.3217L38.0886 13.7128C37.3282 14.6575 36.9074 15.8377 36.9074 17.0607C36.9076 18.4577 37.455 19.7993 38.4328 20.7971L43.2016 25.5661L43.5928 25.9129C44.5374 26.6729 45.7181 27.0913 46.9407 27.0913L47.4622 27.0681C48.6685 26.9495 49.804 26.4217 50.6771 25.5661L56.7994 19.4439C57.8421 18.4013 59.5322 18.4017 60.5751 19.4439C61.6177 20.4866 61.6177 22.1767 60.5751 23.2194L54.4346 29.36L54.4162 29.3808L54.4135 29.3782C52.5418 31.2125 50.0678 32.2909 47.4622 32.4185L46.9407 32.4313C44.1452 32.4313 41.4616 31.335 39.4652 29.3782L39.4444 29.36L34.6208 24.5362C32.664 22.54 31.5676 19.8558 31.5674 17.0607Z" fill="#EAB308"/>
<path d="M7.10149 6.67985C8.15101 5.83968 9.68466 5.90729 10.6554 6.87802L60.5848 56.8076L60.7674 57.0084C61.6234 58.0569 61.5626 59.6052 60.5848 60.583C59.6071 61.561 58.0587 61.6216 57.0102 60.7656L56.8094 60.583L40.0045 43.7782L37.6215 46.1642C37.5796 46.2058 37.5379 46.2477 37.4936 46.2867C34.52 48.8886 29.6606 49.1281 26.6545 46.4352L26.3703 46.1642L6.87985 26.6734C5.57032 25.3849 4.52795 23.8486 3.81613 22.1549C3.18994 20.6647 2.82997 19.0777 2.74968 17.4668L2.73145 16.7758C2.73145 14.9287 3.10057 13.0995 3.81613 11.3967C4.53153 9.69442 5.57929 8.15214 6.89809 6.85976L7.10149 6.67985ZM8.08186 17.2008C8.13123 18.1919 8.35377 19.1677 8.73895 20.0846C9.12417 21.0014 9.66664 21.8432 10.3399 22.5721L10.6372 22.8798L30.1458 42.3885L30.3022 42.5241C31.1283 43.158 32.7995 43.2485 33.9267 42.3049L36.2291 40.0026L9.04402 12.8177C8.93348 13.0291 8.83167 13.2463 8.73895 13.467C8.29882 14.5147 8.07144 15.6394 8.07144 16.7758L8.08186 17.2008Z" fill="#EAB308"/>
<path d="M21.0062 39.2364C22.0616 38.3895 23.606 38.4626 24.5757 39.4476C25.6102 40.4985 25.5979 42.1889 24.5471 43.2232L7.45801 60.0437C6.40718 61.0775 4.71678 61.0655 3.68247 60.0151C2.64801 58.9642 2.66288 57.2714 3.71376 56.2368L20.8002 39.4163L21.0062 39.2364Z" fill="#EAB308"/>
<path d="M48.9898 11.2548C50.0386 10.3995 51.5845 10.4598 52.562 11.4374C53.5395 12.4149 53.5998 13.9608 52.7446 15.0095L52.562 15.2129L33.872 33.9028C32.8294 34.9457 31.1393 34.9457 30.0966 33.9028C29.0537 32.8602 29.0537 31.1701 30.0966 30.1274L48.7866 11.4374L48.9898 11.2548Z" fill="#EAB308"/>
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
