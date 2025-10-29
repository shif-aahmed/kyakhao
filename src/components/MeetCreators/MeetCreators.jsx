import React from 'react'
import './MeetCreators.css'

const MeetCreators = () => {
  const creators = [
    {
      id: 1,
      name: 'Chef Isabella Rodriguez',
      tagline: 'Master of Latin-Asian Flavors',
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Chef Kenji Tanaka',
      tagline: 'Innovator of Japanese-European Delights',
      image: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Chef Aisha Khan',
      tagline: 'The Queen of Modern Desi Fusion',
      image: 'https://images.unsplash.com/photo-1532635132-00a6b2d94c31?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  return (
    <section className="meet-creators-section">
      <div className="meet-creators-header">
        <h2 className="meet-creators-title">Meet Our Top Creators</h2>
        <p className="meet-creators-subtitle">Discover the visionary chefs pushing the boundaries of fusion cuisine.</p>
      </div>

      <div className="meet-creators-grid">
        {creators.map((creator) => (
          <div key={creator.id} className="creator-card">
            <div className="creator-image">
              <img src={creator.image} alt={creator.name} />
              <div className="creator-overlay" />
            </div>
            <div className="creator-content">
              <h3 className="creator-name">{creator.name}</h3>
              <p className="creator-tagline">{creator.tagline}</p>
              <button className="creator-btn">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MeetCreators


