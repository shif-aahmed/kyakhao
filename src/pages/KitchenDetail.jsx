import React from 'react'
import { useParams } from 'react-router-dom'
import KitchenDetailHeroBanner from '../components/KitchenDetailHeroBanner/KitchenDetailHeroBanner'
import CulinarySpaces from '../components/CulinarySpaces/CulinarySpaces'
import FeaturedKitchens from '../components/FeaturedKitchens/FeaturedKitchens'
import MasterChefs from '../components/MasterChefs/MasterChefs'

function KitchenDetail() {
  const { id } = useParams()
  
  console.log('KitchenDetail page loaded with ID:', id)
  
  return (
    <div>
      <KitchenDetailHeroBanner />
      <CulinarySpaces />
      <FeaturedKitchens />
      <MasterChefs />
    </div>
  )
}

export default KitchenDetail
