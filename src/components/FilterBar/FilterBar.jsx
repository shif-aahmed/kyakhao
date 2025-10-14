import React, { useState } from 'react'
import './FilterBar.css'

const FilterBar = () => {
  const [selectedFilter, setSelectedFilter] = useState('')
  const [sortBy, setSortBy] = useState('Top Rated')

  const filters = [
    'Cuisine',
    'Location', 
    'Price',
    'Rating (⭐ 4.0+)',
    'Availability'
  ]

  const sortOptions = [
    'Top Rated',
    'Price: Low to High',
    'Price: High to Low',
    'Distance',
    'Newest'
  ]

  return (
    <div className="filter-bar-section">
      <div className="container">
        <div className="filter-bar">
          <div className="filter-buttons">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
                onClick={() => setSelectedFilter(selectedFilter === filter ? '' : filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <div className="sort-dropdown">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              {sortOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBar
