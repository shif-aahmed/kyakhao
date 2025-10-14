import React, { useState } from 'react'
import ExploreHeroBanner from '../components/ExploreHeroBanner/ExploreHeroBanner'
import ExploreFilters from '../components/ExploreFilters/ExploreFilters'
import FoodGrid from '../components/FoodGrid/FoodGrid'

function Explore() {
  const [appliedFilters, setAppliedFilters] = useState(null);

  const handleFiltersChange = (filters) => {
    setAppliedFilters(filters);
  };

  return (
    <div>
      <ExploreHeroBanner />
      <ExploreFilters onFiltersChange={handleFiltersChange} />
      <FoodGrid filters={appliedFilters} />
    </div>
  )
}

export default Explore
