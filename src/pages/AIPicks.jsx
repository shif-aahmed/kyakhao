import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AIPicksHeroBanner from '../components/AIPicksHeroBanner/AIPicksHeroBanner'
import AIPickFilter from '../components/AIPickFilter/AIPickFilter'
import RecipeSuggestion from '../components/RecipeSuggestion/RecipeSuggestion'
import RecipeCards from '../components/RecipeCards/RecipeCards'
import RecipeCardsHorizontal from '../components/RecipeCardsHorizontal/RecipeCardsHorizontal'
import TasteSurveyModal from '../components/TasteSurveyModal/TasteSurveyModal'
import './AIPicks.css'

function AIPicks() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showTasteSurvey, setShowTasteSurvey] = useState(false);
  const [recipeSuggestion, setRecipeSuggestion] = useState(null);

  useEffect(() => {
    if (location.state?.showTasteSurvey) {
      setShowTasteSurvey(true);
      window.history.replaceState({}, document.title);
      return;
    }

    const isSignedIn = sessionStorage.getItem('isSignedIn') === '1';
    const hasSubscription = sessionStorage.getItem('hasSubscription') === '1';
    const skippedTaste = sessionStorage.getItem('didSkipTasteSurvey') === '1';

    if (!isSignedIn) {
      navigate('/signin', { replace: true, state: { from: '/ai-picks' } });
      return;
    }

    if (!hasSubscription) {
      try {
        sessionStorage.setItem('tasteOriginPath', '/ai-picks');
      } catch {}
      navigate('/payment-setup', { replace: true });
      return;
    }

    if (!skippedTaste) {
      setShowTasteSurvey(true);
    }
  }, [location.state]);

  const handleStartSurvey = () => {
    setShowTasteSurvey(false);
    alert('Survey started! This would typically navigate to a survey page.');
  };

  const handleCloseSurvey = () => {
    setShowTasteSurvey(false);
    try { sessionStorage.setItem('didSkipTasteSurvey', '1'); } catch {}
  };

  return (
    <div className="ai-picks-page">
      <AIPicksHeroBanner />
      <AIPickFilter setRecipeSuggestion={setRecipeSuggestion} />
      <RecipeSuggestion recipeSuggestion={recipeSuggestion} />
      <RecipeCards recipeSuggestion={recipeSuggestion} />
      <RecipeCardsHorizontal />

      <TasteSurveyModal
        isOpen={showTasteSurvey}
        onClose={handleCloseSurvey}
        onStartSurvey={handleStartSurvey}
      />
    </div>
  )
}

export default AIPicks
