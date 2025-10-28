import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import TasteSurveyModal from '../components/TasteSurveyModal/TasteSurveyModal'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import './Home.css'
import ExploreOurFood from '../components/ExploreOurFood/ExploreOurFood'
import AISuggestions from '../components/AISuggestions/AISuggestions'
import TopRatedRestaurants from '../components/TopRatedRestaurants/TopRatedRestaurants'
import RestaurantsSection from '../components/RestaurantsSection/RestaurantsSection'
import DishesGrid from '../components/DishesGrid/DishesGrid'
import DishesCategoryFilter from '../components/DishesCategoryFilter/DishesCategoryFilter'
import ReviewsVlogs from '../components/ReviewsVlogs/ReviewsVlogs'
import TrendingNow from '../components/TrendingNow/TrendingNow'
import FeaturedCreator from '../components/FeaturedCreator/FeaturedCreator'
import UploadModal from '../components/UploadModal/UploadModal'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import TrySomethingNew from '../components/TrySomethingNew/TrySomethingNew'
import CommunityCreations from '../components/CommunityCreations/CommunityCreations'
import NewInTown from '../components/NewInTown/NewInTown'
import ExploreDishes from '../components/ExploreDishes/ExploreDishes'
import Deals from '../components/Deals/Deals'
import Benefits from '../components/Benefits/Benefits'
import LoyaltyTiers from '../components/LoyaltyTiers/LoyaltyTiers'
import UserProfile from '../components/UserProfile/UserProfile'
import NewKyaKhao from '../components/NewKyaKhao/NewKyaKhao'

function Home() {
  const [activeTab, setActiveTab] = useState('Search All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [isVideoPlayerOpen, setIsVideoPlayerOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(null)
  const [showTasteSurvey, setShowTasteSurvey] = useState(false)
  const location = useLocation()

  const handleVideoClick = (videoData) => {
    setCurrentVideo(videoData)
    setIsVideoPlayerOpen(true)
  }

  const handleCloseVideo = () => {
    setIsVideoPlayerOpen(false)
    setCurrentVideo(null)
  }

  // Scroll to top whenever activeTab changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Show taste survey modal if requested via navigation state
  useEffect(() => {
    if (location.state && location.state.showTasteSurvey) {
      setShowTasteSurvey(true)
      // clear state so it doesn't persist on refresh
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  const renderContent = () => {
    if (activeTab === 'Restaurants') {
      return <RestaurantsSection />
    }
    
    if (activeTab === 'Taste Fusion') {
      return (
        <div>
          <TrySomethingNew onVideoClick={handleVideoClick} />
          <CommunityCreations />
        </div>
      )
    }
    
    if (activeTab === 'Deals') {
      return (
        <div>
          <Deals />
          <Benefits />
          <LoyaltyTiers />
          <UserProfile />
        </div>
      )
    }
    
    if (activeTab === 'Vlogs') {
      return (
        <div>
          <DishesCategoryFilter 
            onCategoryChange={setSelectedCategory}
            onUploadClick={() => setIsUploadModalOpen(true)}
          />
          <DishesGrid 
            selectedCategory={selectedCategory}
            onVideoClick={handleVideoClick}
          />
          <ReviewsVlogs />
          <TrendingNow onVideoClick={handleVideoClick} />
          <FeaturedCreator />
          <UploadModal 
            isOpen={isUploadModalOpen}
            onClose={() => setIsUploadModalOpen(false)}
          />
          <VideoPlayer 
            isOpen={isVideoPlayerOpen}
            onClose={handleCloseVideo}
            videoData={currentVideo}
          />
        </div>
      )
    }
    
    if (activeTab === 'Trending') {
      return (
        <div>
          <NewInTown />
          <ExploreDishes />
        </div>
      )
    }
    
    return (
      <div>
        <ExploreOurFood />
        <AISuggestions />
        <TopRatedRestaurants />
        <NewKyaKhao />
      </div>
    )
  }

  return (
    <div className="home-page">
      <HeroBanner 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
      />
      <div className="container">
        {renderContent()}
      </div>
      <TasteSurveyModal
        isOpen={showTasteSurvey}
        onClose={() => setShowTasteSurvey(false)}
        onStartSurvey={() => setShowTasteSurvey(false)}
      />
    </div>
  )
}

export default Home
