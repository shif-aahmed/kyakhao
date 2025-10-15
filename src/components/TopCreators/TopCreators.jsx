import React, { useState } from 'react';
import './TopCreators.css';

const TopCreators = () => {
  const [selectedCreator, setSelectedCreator] = useState(null);

  const topCreators = [
    {
      id: 1,
      name: "Chef Isabella Rodriguez",
      title: "Master of Latin-Asian Flavors",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Pioneering the fusion of Latin American and Asian cuisines with innovative techniques and bold flavors."
    },
    {
      id: 2,
      name: "Chef Kenji Tanaka",
      title: "Innovator of Japanese-European Delights",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Blending traditional Japanese techniques with European culinary traditions to create extraordinary dining experiences."
    },
    {
      id: 3,
      name: "Chef Aisha Patel",
      title: "The Queen of Spice Fusion",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Revolutionizing fusion cuisine with her mastery of Indian spices and global cooking techniques."
    }
  ];

  const handleViewProfile = (creator) => {
    setSelectedCreator(creator);
  };

  const closeModal = () => {
    setSelectedCreator(null);
  };

  return (
    <div className="top-creators-container">
      <div className="top-creators-content">
        <div className="top-creators-header">
          <h2 className="top-creators-title">Meet Our Top Creators</h2>
          <p className="top-creators-subtitle">
            Discover the visionary chefs pushing the boundaries of fusion cuisine.
          </p>
        </div>
        
        <div className="creators-grid">
          {topCreators.map((creator) => (
            <div key={creator.id} className="creator-card">
              <div className="creator-image">
                <img src={creator.image} alt={creator.name} />
                <div className="image-overlay"></div>
              </div>
              
              <div className="creator-info">
                <h3 className="creator-name">{creator.name}</h3>
                <p className="creator-title">{creator.title}</p>
                
                <button 
                  className="view-profile-btn"
                  onClick={() => handleViewProfile(creator)}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Creator Profile Modal */}
      {selectedCreator && (
        <div className="creator-modal-overlay" onClick={closeModal}>
          <div className="creator-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{selectedCreator.name}</h2>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            
            <div className="modal-content">
              <div className="creator-profile-image">
                <img src={selectedCreator.image} alt={selectedCreator.name} />
              </div>
              
              <div className="creator-profile-details">
                <div className="creator-profile-info">
                  <h3 className="creator-profile-title">{selectedCreator.title}</h3>
                  <p className="creator-profile-description">{selectedCreator.description}</p>
                  
                  <div className="creator-stats">
                    <div className="stat-item">
                      <span className="stat-number">15+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">500+</span>
                      <span className="stat-label">Fusion Recipes</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">50K+</span>
                      <span className="stat-label">Followers</span>
                    </div>
                  </div>
                  
                  <div className="creator-specialties">
                    <h4>Specialties</h4>
                    <div className="specialty-tags">
                      <span className="specialty-tag">Fusion Techniques</span>
                      <span className="specialty-tag">Spice Blending</span>
                      <span className="specialty-tag">Cultural Cuisine</span>
                      <span className="specialty-tag">Innovation</span>
                    </div>
                  </div>
                  
                  <div className="creator-achievements">
                    <h4>Achievements</h4>
                    <ul>
                      <li>🏆 Winner of International Fusion Chef Competition 2023</li>
                      <li>📚 Author of "The Art of Fusion Cooking"</li>
                      <li>🌟 Featured in Top 10 Fusion Chefs Worldwide</li>
                      <li>🎓 Master's in Culinary Arts from Le Cordon Bleu</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="modal-actions">
              <button className="follow-btn">Follow Chef</button>
              <button className="view-recipes-btn">View Recipes</button>
              <button className="contact-btn">Contact</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopCreators;
