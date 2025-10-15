import React, { useState, useEffect } from 'react'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import DishOfTheWeek from '../components/DishOfTheWeek/DishOfTheWeek'
import AISuggestions from '../components/AISuggestions/AISuggestions'
import TopRatedRestaurants from '../components/TopRatedRestaurants/TopRatedRestaurants'
import NewOnKyaKhao from '../components/NewOnKyaKhao/NewOnKyaKhao'
import RestaurantsSection from '../components/RestaurantsSection/RestaurantsSection'
import DishesGrid from '../components/DishesGrid/DishesGrid'
import DishesCategoryFilter from '../components/DishesCategoryFilter/DishesCategoryFilter'
import TrendingNow from '../components/TrendingNow/TrendingNow'
import FeaturedCreator from '../components/FeaturedCreator/FeaturedCreator'
import UploadModal from '../components/UploadModal/UploadModal'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import TrySomethingNew from '../components/TrySomethingNew/TrySomethingNew'
import AIFusionSuggestion from '../components/AIFusionSuggestion/AIFusionSuggestion'
import CommunityCreations from '../components/CommunityCreations/CommunityCreations'

function Home() {
  const [activeTab, setActiveTab] = useState('Search All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [isVideoPlayerOpen, setIsVideoPlayerOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(null)

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

  const renderContent = () => {
    if (activeTab === 'Restaurants') {
      return <RestaurantsSection />
    }
    
    if (activeTab === 'Things to Do') {
      return <TrySomethingNew onVideoClick={handleVideoClick} />
    }
    
    if (activeTab === 'AI Picks') {
      return (
        <div>
          <AIFusionSuggestion />
          <CommunityCreations />
        </div>
      )
    }
    
    if (activeTab === 'Dishes') {
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
    
    return (
      <div>
        <DishOfTheWeek />
        <AISuggestions />
        <TopRatedRestaurants setActiveTab={setActiveTab} />
        <NewOnKyaKhao />
      </div>
    )
  }

  return (
    <div>
      <HeroBanner 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
      />
      {renderContent()}
    </div>
  )
}

export default Home
