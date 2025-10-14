import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLightbulb, 
  faPen, 
  faFilter, 
  faChevronDown, 
  faSearch,
  faThumbsUp,
  faEllipsis
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import './Reviews.css';

const Reviews = () => {
  const [sortBy, setSortBy] = useState('Most recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [reviews, setReviews] = useState([]);
  const [overallRating, setOverallRating] = useState(4.8);
  const [totalReviews, setTotalReviews] = useState(3341);

  // Update overall rating when reviews change
  useEffect(() => {
    if (reviews.length > 0) {
      const newReviewsSum = reviews.reduce((sum, review) => sum + review.rating, 0);
      const originalSum = 4.8 * 3341; // Original average * original count
      const newTotal = 3341 + reviews.length;
      const newAverage = (originalSum + newReviewsSum) / newTotal;
      
      setOverallRating(Math.round(newAverage * 10) / 10); // Round to 1 decimal place
      setTotalReviews(newTotal);
    }
  }, [reviews]);

  // Event handlers
  const handleTipsQA = () => {
    // Create tips modal
    const modal = document.createElement('div');
    modal.className = 'reviews-modal-overlay';
    modal.innerHTML = `
      <div class="reviews-modal-content-large">
        <h3 class="reviews-modal-title">Tips & Q&A (38)</h3>
        <div class="reviews-modal-section">
          <div class="reviews-modal-qa-item">
            <div class="reviews-modal-qa-question">Q: Is this restaurant family-friendly?</div>
            <div class="reviews-modal-qa-answer">A: Yes, they have highchairs and a kids menu.</div>
            <small class="reviews-modal-qa-date">Asked 2 days ago</small>
          </div>
          <div class="reviews-modal-qa-item">
            <div class="reviews-modal-qa-question">Q: Do they take reservations?</div>
            <div class="reviews-modal-qa-answer">A: Yes, reservations are recommended, especially on weekends.</div>
            <small class="reviews-modal-qa-date">Asked 1 week ago</small>
          </div>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" class="reviews-modal-button-close">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  };

  const handleAllReviews = () => {
    // Scroll to reviews section or show all reviews
    const reviewsSection = document.querySelector('.reviews-review-card');
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShareTip = () => {
    // Create tip sharing form
    const modal = document.createElement('div');
    modal.className = 'reviews-modal-overlay';
    modal.innerHTML = `
      <div class="reviews-modal-content">
        <h3 class="reviews-modal-title">Share a Tip</h3>
        <textarea 
          placeholder="Share your tip about this restaurant..." 
          class="reviews-modal-textarea"
        ></textarea>
        <div class="reviews-modal-buttons">
          <button 
            onclick="this.parentElement.parentElement.parentElement.remove()" 
            class="reviews-modal-button-cancel"
          >Cancel</button>
          <button 
            onclick="this.parentElement.parentElement.parentElement.remove()" 
            class="reviews-modal-button-submit"
          >Share Tip</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  };

  const handleWriteReview = () => {
    // Create review form
    const modal = document.createElement('div');
    modal.className = 'reviews-modal-overlay';
    modal.innerHTML = `
      <div class="reviews-modal-content-large">
        <h3 class="reviews-modal-title">Write a Review</h3>
        <div class="reviews-modal-section">
          <label class="reviews-modal-rating-label">Rating:</label>
          <div class="reviews-modal-stars" id="rating-stars">
            ${[...Array(5)].map((_, i) => `<span class="reviews-modal-star" data-rating="${i + 1}" onclick="this.style.color='#FFD700'; this.parentElement.querySelectorAll('span').forEach((star, index) => { if(index <= Array.from(this.parentElement.children).indexOf(this)) star.style.color='#FFD700'; else star.style.color='#ddd'; })">★</span>`).join('')}
          </div>
        </div>
        <input 
          type="text" 
          placeholder="Review title..." 
          class="reviews-modal-input"
          id="review-title"
        />
        <textarea 
          placeholder="Write your review..." 
          class="reviews-modal-textarea-large"
          id="review-text"
        ></textarea>
        <div class="reviews-modal-section">
          <label class="reviews-modal-label">Add Photos (Optional):</label>
          <input 
            type="file" 
            id="review-images"
            accept="image/*"
            multiple
            class="reviews-modal-file-input"
          />
          <div id="image-preview" class="reviews-modal-image-preview"></div>
        </div>
        <div class="reviews-modal-buttons">
          <button 
            onclick="this.parentElement.parentElement.parentElement.remove()" 
            class="reviews-modal-button-cancel"
          >Cancel</button>
          <button 
            onclick="window.submitReview()" 
            class="reviews-modal-button-submit"
          >Submit Review</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });

    // Add image preview functionality
    const imageInput = modal.querySelector('#review-images');
    const imagePreview = modal.querySelector('#image-preview');
    
    if (imageInput && imagePreview) {
      imageInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        imagePreview.innerHTML = '';
        
        files.forEach((file, index) => {
          if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
              const imageDiv = document.createElement('div');
              imageDiv.className = 'reviews-modal-preview-image';
              imageDiv.innerHTML = `
                <img src="${e.target.result}" alt="Preview ${index + 1}" />
                <button class="reviews-modal-remove-image" onclick="this.parentElement.remove()">×</button>
              `;
              imagePreview.appendChild(imageDiv);
            };
            reader.readAsDataURL(file);
          }
        });
      });
    }
  };

  // Function to submit review
  const submitReview = () => {
    const titleInput = document.getElementById('review-title');
    const textInput = document.getElementById('review-text');
    const starsContainer = document.getElementById('rating-stars');
    const imageInput = document.getElementById('review-images');
    
    if (!titleInput || !textInput || !starsContainer) return;
    
    const title = titleInput.value.trim();
    const text = textInput.value.trim();
    
    // Get selected rating
    const selectedStars = starsContainer.querySelectorAll('.reviews-modal-star[style*="color: rgb(255, 215, 0)"]');
    const rating = selectedStars.length;
    
    if (!title || !text || rating === 0) {
      alert('Please fill in all fields and select a rating');
      return;
    }
    
    // Get uploaded images
    const images = [];
    if (imageInput && imageInput.files) {
      for (let i = 0; i < imageInput.files.length; i++) {
        const file = imageInput.files[i];
        const imageUrl = URL.createObjectURL(file);
        images.push(imageUrl);
      }
    }
    
    // Create new review object
    const newReview = {
      id: Date.now(), // Simple ID generation
      reviewer: {
        name: 'You',
        location: 'Local',
        contributions: 1,
        avatar: null
      },
      rating: rating,
      title: title,
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      context: 'SOLO',
      text: text,
      images: images, // Array of image URLs
      writtenDate: `Written ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`,
      helpful: 0
    };
    
    // Add review to state
    setReviews(prevReviews => [newReview, ...prevReviews]);
    
    // Close modal
    const modal = document.querySelector('.reviews-modal-overlay');
    if (modal) {
      modal.remove();
    }
    
    // Show success message
    alert('Review submitted successfully!');
  };

  // Make submitReview available globally for the onclick handler
  window.submitReview = submitReview;

  const handleFilters = () => {
    // Create filters panel
    const modal = document.createElement('div');
    modal.className = 'reviews-modal-overlay';
    modal.innerHTML = `
      <div class="reviews-modal-content-small">
        <h3 class="reviews-modal-title">Filter Reviews</h3>
        <div class="reviews-modal-section">
          <label class="reviews-modal-label">Rating:</label>
          <select class="reviews-modal-select">
            <option>All ratings</option>
            <option>5 stars only</option>
            <option>4+ stars</option>
            <option>3+ stars</option>
          </select>
        </div>
        <div class="reviews-modal-section">
          <label class="reviews-modal-label">Language:</label>
          <select class="reviews-modal-select">
            <option>All languages</option>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
        <div class="reviews-modal-section">
          <label class="reviews-modal-label-flex">
            <input type="checkbox" class="reviews-modal-checkbox" /> With photos only
          </label>
        </div>
        <div class="reviews-modal-buttons-large">
          <button 
            onclick="this.parentElement.parentElement.parentElement.remove()" 
            class="reviews-modal-button-cancel"
          >Cancel</button>
          <button 
            onclick="this.parentElement.parentElement.parentElement.remove()" 
            class="reviews-modal-button-submit"
          >Apply Filters</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  };

  const handleSortChange = () => {
    const options = ['Most recent', 'Most helpful', 'Highest rated', 'Lowest rated'];
    const currentIndex = options.indexOf(sortBy);
    const nextIndex = (currentIndex + 1) % options.length;
    setSortBy(options[nextIndex]);
  };

  const handleMentionClick = (mention) => {
    // Filter reviews by mention
    setSearchQuery(mention);
    // Scroll to reviews
    const reviewsSection = document.querySelector('.reviews-review-card');
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHelpful = () => {
    // Toggle helpful state
    const button = document.querySelector('.reviews-helpful-btn');
    if (button) {
      const span = button.querySelector('span');
      const currentCount = parseInt(span.textContent);
      span.textContent = currentCount + 1;
      button.style.background = '#4CAF50';
      button.style.color = 'white';
    }
  };

  const handleMoreOptions = () => {
    // Create options menu
    const menu = document.createElement('div');
    menu.style.cssText = `
      position: absolute; top: 100%; right: 0; background: white; 
      border: 1px solid #ddd; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      z-index: 1000; min-width: 150px;
    `;
    menu.innerHTML = `
      <div style="padding: 0.5rem 0;">
        <div style="padding: 0.5rem 1rem; cursor: pointer; hover: background: #f8f9fa;" onclick="this.parentElement.parentElement.remove()">Report review</div>
        <div style="padding: 0.5rem 1rem; cursor: pointer; hover: background: #f8f9fa;" onclick="this.parentElement.parentElement.remove()">Share review</div>
        <div style="padding: 0.5rem 1rem; cursor: pointer; hover: background: #f8f9fa;" onclick="this.parentElement.parentElement.remove()">Copy link</div>
      </div>
    `;
    
    const button = document.querySelector('.reviews-more-btn');
    button.style.position = 'relative';
    button.appendChild(menu);
    
    // Remove menu when clicking outside
    setTimeout(() => {
      document.addEventListener('click', () => {
        if (menu.parentElement) {
          menu.remove();
        }
      }, { once: true });
    }, 100);
  };

  const handleShowOriginal = () => {
    // Toggle between translated and original text
    const originalText = "Fantastisches Essen. Lokale Delikatessen, aber dann großartig zubereitet. Der Besitzer schafft die Stimmung. Sie machen dort keine Pizza. Sehr empfehlenswert.";
    const translatedText = sampleReview.text;
    
    const reviewText = document.querySelector('.reviews-review-text');
    const showOriginalLink = document.querySelector('.reviews-show-original');
    
    if (reviewText.textContent === translatedText) {
      reviewText.textContent = originalText;
      showOriginalLink.textContent = 'Show translation';
    } else {
      reviewText.textContent = translatedText;
      showOriginalLink.textContent = 'Show original';
    }
  };

  const handleTransparencyReport = () => {
    // Open transparency report
    window.open('https://www.tripadvisor.com/TransparencyReport', '_blank');
  };

  const ratingBreakdown = [
    { label: 'Excellent', count: 2682, percentage: 80 },
    { label: 'Good', count: 456, percentage: 14 },
    { label: 'Average', count: 134, percentage: 4 },
    { label: 'Poor', count: 45, percentage: 1 },
    { label: 'Terrible', count: 24, percentage: 1 }
  ];

  const aspectRatings = [
    { aspect: 'Service', rating: 4.6 },
    { aspect: 'Food', rating: 4.8 },
    { aspect: 'Value', rating: 4.7 },
    { aspect: 'Atmosphere', rating: 4.5 }
  ];

  const popularMentions = [
    'soup', 'cantucci', 'the owner', 'grilled pecorino', 
    'visiting pienza', 'limited menu', 'vin'
  ];

  const sampleReview = {
    reviewer: {
      name: 'martin',
      location: 'Utrecht',
      contributions: 77,
      avatar: null
    },
    rating: 5,
    title: 'Exceptional',
    date: 'Aug 2025',
    context: 'FRIENDS',
    text: 'Fantastic food. Local delicacies but then great prepared. Owner creates the Mood. They don\'t do pizza there. Highly recommended',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&h=200&fit=crop',
    writtenDate: 'Written September 11, 2025',
    helpful: 0
  };

  return (
    <div className="reviews-container">
        <div className="reviews-container-inner">
      {/* Top Navigation */}
      <div className="reviews-top-bar">
        <h2 className="reviews-title">Reviews</h2>
         <div className="reviews-top-actions">
           <span className="reviews-tips-link" onClick={handleTipsQA}>Tips/Q&A (38)</span>
           <span className="reviews-all-link" onClick={handleAllReviews}>All reviews ({totalReviews.toLocaleString()})</span>
           <button className="reviews-share-tip-btn" onClick={handleShareTip}>
             <FontAwesomeIcon icon={faLightbulb} />
             <span>Share a tip</span>
           </button>
           <button className="reviews-write-review-btn" onClick={handleWriteReview}>
             <FontAwesomeIcon icon={faPen} />
             <span>Write a review</span>
           </button>
         </div>
      </div>

      {/* Rating Summary */}
      <div className="reviews-rating-summary">
        <div className="reviews-overall-rating">
          <div className="reviews-rating-number">{overallRating}</div>
          <div className="reviews-rating-label">Excellent</div>
          <div className="reviews-rating-stars">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="reviews-star filled"></div>
            ))}
            <span className="reviews-total-count">({totalReviews.toLocaleString()})</span>
          </div>
        </div>

        <div className="reviews-breakdown">
          <div className="reviews-category-breakdown">
            {ratingBreakdown.map((item, index) => (
              <div key={index} className="reviews-breakdown-item">
                <span className="reviews-breakdown-label">{item.label}</span>
                <span className="reviews-breakdown-count">{item.count.toLocaleString()}</span>
                <div className="reviews-breakdown-bar">
                  <div 
                    className={`reviews-breakdown-fill ${item.label.toLowerCase()}`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="reviews-aspect-breakdown">
            {aspectRatings.map((item, index) => (
              <div key={index} className="reviews-aspect-item">
                <span className="reviews-aspect-label">{item.aspect}</span>
                <span className="reviews-aspect-rating">{item.rating}</span>
                <div className="reviews-aspect-bar">
                  <div 
                    className="reviews-aspect-fill"
                    style={{ width: `${(item.rating / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Reviews Section */}
      <div className="reviews-all-section">
        <h3 className="reviews-all-title">All reviews ({totalReviews.toLocaleString()})</h3>
         <p className="reviews-disclaimer">
           Reviews are the subjective opinion of Tripadvisor members and not of Tripadvisor LLC. 
           Tripadvisor performs checks on reviews as part of our industry-leading trust & safety standards. 
           Read our <a href="#" className="reviews-transparency-link" onClick={(e) => {e.preventDefault(); handleTransparencyReport();}}>transparency report</a> to learn more.
         </p>

        {/* Filter and Search Bar */}
         <div className="reviews-filter-bar">
           <button className="reviews-filters-btn" onClick={handleFilters}>
             <FontAwesomeIcon icon={faFilter} />
             <span>Filters (1)</span>
           </button>
           <div className="reviews-sort-dropdown" onClick={handleSortChange}>
             <span>Sort by: {sortBy}</span>
             <FontAwesomeIcon icon={faChevronDown} />
           </div>
          <div className="reviews-search-container">
            <FontAwesomeIcon icon={faSearch} className="reviews-search-icon" />
            <input 
              type="text" 
              placeholder="Search reviews"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="reviews-search-input"
            />
          </div>
        </div>

        {/* Popular Mentions */}
         <div className="reviews-popular-mentions">
           {popularMentions.map((mention, index) => (
             <span key={index} className="reviews-mention-tag" onClick={() => handleMentionClick(mention)}>{mention}</span>
           ))}
         </div>

        {/* Reviews List */}
        {reviews.length > 0 && reviews.map((review) => (
          <div key={review.id} className="reviews-review-card">
            <div className="reviews-review-header">
              <div className="reviews-reviewer-info">
                <div className="reviews-reviewer-avatar">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="reviews-reviewer-details">
                  <div className="reviews-reviewer-name">{review.reviewer.name}</div>
                  <div className="reviews-reviewer-location">
                    {review.reviewer.location} • {review.reviewer.contributions} contribution{review.reviewer.contributions !== 1 ? 's' : ''}
                  </div>
                </div>
              </div>
              <div className="reviews-review-actions">
                <button className="reviews-helpful-btn" onClick={handleHelpful}>
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <span>{review.helpful}</span>
                </button>
                <button className="reviews-more-btn" onClick={handleMoreOptions}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </button>
              </div>
            </div>

            <div className="reviews-review-rating">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`reviews-star ${i < review.rating ? 'filled' : ''}`}></div>
              ))}
            </div>

            <div className="reviews-review-title">{review.title}</div>
            <div className="reviews-review-meta">
              {review.date} • {review.context}
            </div>

            <div className="reviews-review-text">{review.text}</div>

            {review.images && review.images.length > 0 && (
              <div className="reviews-review-images">
                {review.images.map((image, index) => (
                  <div key={index} className="reviews-review-image">
                    <img src={image} alt={`Review ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}

            <div className="reviews-review-footer">
              <div className="reviews-written-date">{review.writtenDate}</div>
            </div>
          </div>
        ))}

        {/* Sample Review Card */}
        <div className="reviews-review-card">
          <div className="reviews-review-header">
            <div className="reviews-reviewer-info">
              <div className="reviews-reviewer-avatar">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="reviews-reviewer-details">
                <div className="reviews-reviewer-name">{sampleReview.reviewer.name}</div>
                <div className="reviews-reviewer-location">
                  {sampleReview.reviewer.location} • {sampleReview.reviewer.contributions} contributions
                </div>
              </div>
            </div>
             <div className="reviews-review-actions">
               <button className="reviews-helpful-btn" onClick={handleHelpful}>
                 <FontAwesomeIcon icon={faThumbsUp} />
                 <span>{sampleReview.helpful}</span>
               </button>
               <button className="reviews-more-btn" onClick={handleMoreOptions}>
                 <FontAwesomeIcon icon={faEllipsis} />
               </button>
             </div>
          </div>

          <div className="reviews-review-rating">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="reviews-star filled"></div>
            ))}
          </div>

          <div className="reviews-review-title">{sampleReview.title}</div>
          <div className="reviews-review-meta">
            {sampleReview.date} • {sampleReview.context}
          </div>

          <div className="reviews-review-text">{sampleReview.text}</div>

          <div className="reviews-review-image">
            <img src={sampleReview.image} alt="Review" />
          </div>

           <div className="reviews-review-footer">
             <span className="reviews-translation-link">Machine Translated</span>
             <span className="reviews-show-original" onClick={handleShowOriginal}>Show original</span>
             <div className="reviews-written-date">{sampleReview.writtenDate}</div>
           </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Reviews;
