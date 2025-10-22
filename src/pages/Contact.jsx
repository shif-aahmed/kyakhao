import React from 'react';
import ContactHeroBanner from '../components/ContactHeroBanner/ContactHeroBanner';
import ContactSection from '../components/ContactSection/ContactSection';
import MapSection from '../components/MapSection/MapSection';

function Contact() {
  return (
    <div>
      <ContactHeroBanner />
      <ContactSection />
      <MapSection />
    </div>
  );
}

export default Contact;
