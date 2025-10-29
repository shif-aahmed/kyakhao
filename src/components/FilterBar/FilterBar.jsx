import React, { useState, useEffect } from 'react'
import './FilterBar.css'

const FilterBar = ({ onFiltersChange, sortBy, onSortChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('')
  const [isSortOpen, setIsSortOpen] = useState(false)

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

  // Build and emit active filter toggles
  useEffect(() => {
    const active = {
      minRating: selectedFilter === 'Rating (⭐ 4.0+)' ? 4.0 : undefined,
      premiumOnly: selectedFilter === 'Availability' ? true : undefined,
    }
    onFiltersChange && onFiltersChange(active)
  }, [selectedFilter, onFiltersChange])

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
            <div 
              className={`sort-select-custom ${isSortOpen ? 'open' : ''}`}
              onClick={() => setIsSortOpen(!isSortOpen)}
              role="button"
              aria-haspopup="listbox"
              aria-expanded={isSortOpen}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsSortOpen(!isSortOpen)
                }
                if (e.key === 'Escape') setIsSortOpen(false)
              }}
            >
              <span className="sort-selected-label">{sortBy}</span>
              <span className="sort-caret">▾</span>
              {isSortOpen && (
                <ul className="sort-menu" role="listbox">
                  {sortOptions.map((option, index) => (
                    <li
                      key={index}
                      role="option"
                      aria-selected={sortBy === option}
                      className={`sort-option ${sortBy === option ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        onSortChange && onSortChange(option)
                        setIsSortOpen(false)
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBar
