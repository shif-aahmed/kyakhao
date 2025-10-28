import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactHeroBanner from '../components/ContactHeroBanner/ContactHeroBanner';
import ContactSection from '../components/ContactSection/ContactSection';
import MapSection from '../components/MapSection/MapSection';
import TasteSurveyModal from '../components/TasteSurveyModal/TasteSurveyModal';

function Contact() {
  const location = useLocation();
  const [showTasteSurvey, setShowTasteSurvey] = useState(false);

  // Show taste survey modal if requested via navigation state
  useEffect(() => {
    if (location.state && location.state.showTasteSurvey) {
      setShowTasteSurvey(true);
      // clear state so it doesn't persist on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div>
      <ContactHeroBanner />
      <ContactSection />
      <MapSection />
      <TasteSurveyModal
        isOpen={showTasteSurvey}
        onClose={() => setShowTasteSurvey(false)}
        onStartSurvey={() => setShowTasteSurvey(false)}
      />
    </div>
  );
}

export default Contact;
