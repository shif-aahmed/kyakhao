import React from 'react'
import AIPicksHeroBanner from '../components/AIPicksHeroBanner/AIPicksHeroBanner'
import AIPickFilter from '../components/AIPickFilter/AIPickFilter'
import RecipeSuggestion from '../components/RecipeSuggestion/RecipeSuggestion'
import RecipeCards from '../components/RecipeCards/RecipeCards'
import RecipeCardsHorizontal from '../components/RecipeCardsHorizontal/RecipeCardsHorizontal'
import './AIPicks.css'

function AIPicks() {
  return (
    <div className="ai-picks-page">
      <AIPicksHeroBanner />
      <AIPickFilter />
      <RecipeSuggestion />
      <RecipeCards />
      <RecipeCardsHorizontal />
    </div>
  )
}

export default AIPicks
