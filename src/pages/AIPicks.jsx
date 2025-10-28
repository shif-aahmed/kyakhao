import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AIPicksHeroBanner from '../components/AIPicksHeroBanner/AIPicksHeroBanner'
import AIPickFilter from '../components/AIPickFilter/AIPickFilter'
import RecipeSuggestion from '../components/RecipeSuggestion/RecipeSuggestion'
import RecipeCards from '../components/RecipeCards/RecipeCards'
import RecipeCardsHorizontal from '../components/RecipeCardsHorizontal/RecipeCardsHorizontal'
import TasteSurveyModal from '../components/TasteSurveyModal/TasteSurveyModal'
import './AIPicks.css'

function AIPicks() {
  const location = useLocation();
  const [showTasteSurvey, setShowTasteSurvey] = useState(false);

  useEffect(() => {
    // Check if we should show the taste survey modal
    if (location.state?.showTasteSurvey) {
      setShowTasteSurvey(true);
      // Clear the state to prevent showing modal on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleStartSurvey = () => {
    setShowTasteSurvey(false);
    alert('Survey started! This would typically navigate to a survey page.');
  };

  const handleCloseSurvey = () => {
    setShowTasteSurvey(false);
  };

  return (
    <div className="ai-picks-page">
      <AIPicksHeroBanner />
      <AIPickFilter />
      <RecipeSuggestion />
      <RecipeCards />
      <RecipeCardsHorizontal />

      {/* Taste Survey Modal */}
      <TasteSurveyModal
        isOpen={showTasteSurvey}
        onClose={handleCloseSurvey}
        onStartSurvey={handleStartSurvey}
      />
    </div>
  )
}

export default AIPicks
