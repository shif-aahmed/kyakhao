import React from 'react';
import './MapSection.css';

const MapSection = () => {
  return (
    <div className="map-section-container">
      <div className="map-content-wrapper">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.2!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KyaKhao Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
