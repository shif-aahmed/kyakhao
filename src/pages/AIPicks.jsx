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
  const [filteredRecipes, setFilteredRecipes] = useState(null);

  useEffect(() => {
    const isSignedIn = sessionStorage.getItem('isSignedIn') === '1';
    // Check both sessionStorage and localStorage for subscription
    const hasSubscription = sessionStorage.getItem('hasSubscription') === '1' || localStorage.getItem('hasSubscription') === '1';

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

    // If user has an active subscription, check if they should see the survey
    if (location.state?.showTasteSurvey) {
      setShowTasteSurvey(true);
      window.history.replaceState({}, document.title);
      return;
    }

    // If user has subscription and no survey needed, open AI Picks directly
    setShowTasteSurvey(false);
    try { 
      sessionStorage.setItem('didSkipTasteSurvey', '1');
      // Ensure subscription flag is maintained in both storages
      sessionStorage.setItem('hasSubscription', '1');
      localStorage.setItem('hasSubscription', '1');
    } catch {}
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
      <AIPickFilter 
        setRecipeSuggestion={setRecipeSuggestion} 
        setFilteredRecipes={setFilteredRecipes} 
      />
      <RecipeSuggestion recipeSuggestion={recipeSuggestion} />
      <RecipeCards filteredRecipes={filteredRecipes} />
      <RecipeCardsHorizontal filteredRecipes={filteredRecipes} />

      <TasteSurveyModal
        isOpen={showTasteSurvey}
        onClose={handleCloseSurvey}
        onStartSurvey={handleStartSurvey}
      />
    </div>
  )
}

export default AIPicks
