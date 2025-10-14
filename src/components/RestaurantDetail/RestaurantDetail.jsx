import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faHeart, 
  faShare, 
  faMapMarkerAlt, 
  faGlobe, 
  faPhone,
  faCheck,
  faLeaf,
  faCreditCard,
  faArrowRight,
  faCamera,
  faUser,
  faPen
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import Reviews from '../Reviews/Reviews';
import './RestaurantDetail.css';

const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [activeTab, setActiveTab] = useState('Overview');
  const [isSaved, setIsSaved] = useState(true);

  // Event handlers
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: restaurant?.name,
        text: `Check out ${restaurant?.name} restaurant`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleReview = () => {
    // Scroll to reviews section
    const reviewsSection = document.querySelector('.reviews-container');
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    // Save to localStorage
    const savedRestaurants = JSON.parse(localStorage.getItem('savedRestaurants') || '[]');
    if (isSaved) {
      const updated = savedRestaurants.filter(id => id !== restaurant.id);
      localStorage.setItem('savedRestaurants', JSON.stringify(updated));
    } else {
      savedRestaurants.push(restaurant.id);
      localStorage.setItem('savedRestaurants', JSON.stringify(savedRestaurants));
    }
  };

  const handleCamera = () => {
    // Open camera for photo upload
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        // Handle photo upload
        console.log('Photo selected:', file.name);
      }
    };
    input.click();
  };

  const handleUser = () => {
    // Navigate to user profile or login
    navigate('/profile');
  };

  const handleWebsite = () => {
    if (restaurant?.website) {
      window.open(`https://${restaurant.website}`, '_blank');
    }
  };

  const handlePhone = () => {
    if (restaurant?.phone) {
      window.open(`tel:${restaurant.phone}`, '_self');
    }
  };


  const handleSeeAllFeatures = () => {
    // Show expanded features modal or section
    const features = restaurant.features;
    const additionalFeatures = [
      'Wheelchair accessible',
      'Highchairs available',
      'Reservations required',
      'Private dining',
      'Live music',
      'Outdoor seating',
      'Valet parking',
      'Free WiFi'
    ];
    
    // Create modal or expand section
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
      background: rgba(0,0,0,0.5); z-index: 1000; display: flex; 
      align-items: center; justify-content: center;
    `;
    modal.innerHTML = `
      <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 500px; max-height: 80vh; overflow-y: auto;">
        <h3>All Features</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 1rem;">
          ${[...features, ...additionalFeatures].map(feature => `<div>✓ ${feature}</div>`).join('')}
        </div>
        <button onclick="this.parentElement.parentElement.remove()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
  };

  const handleLocation = () => {
    if (restaurant?.address) {
      const encodedAddress = encodeURIComponent(restaurant.address);
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    }
  };


  // Restaurant data - this would normally come from an API
  const restaurantData = {
    1: {
      id: 1,
      name: "The Golden Spoon",
      cuisine: "Italian",
      location: "Pienza",
      rating: 4.8,
      reviews: 3341,
      price: "$",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop",
      badges: ["Premium", "Trending"],
      tags: ["1.2 km", "family-friendly", "outdoor"],
      address: "Piazza di Spagna 1, 53026, Pienza Italy",
      phone: "+39 0578 749092",
      website: "www.goldenspoon.com",
      hours: {
        "Sunday": "12:00 PM - 2:00 PM, 7:30 PM - 9:00 PM",
        "Monday": "12:00 PM - 2:00 PM, 7:30 PM - 9:00 PM", 
        "Tuesday": "12:00 PM - 2:00 PM, 7:30 PM - 9:00 PM",
        "Wednesday": "Closed",
        "Thursday": "12:00 PM - 2:00 PM, 7:30 PM - 9:00 PM",
        "Friday": "12:00 PM - 2:00 PM, 7:30 PM - 9:00 PM",
        "Saturday": "12:00 PM - 2:00 PM, 7:30 PM - 9:00 PM"
      },
      features: ["Vegetarian friendly", "Accepts Credit Cards", "Lunch, Dinner"],
      about: "Award-winning Italian restaurant with authentic flavors and modern presentation.",
      ranking: "#2 of 83 Restaurants in Pienza"
    },
    2: {
      id: 2,
      name: "Spice Route",
      cuisine: "Indian",
      location: "Uptown",
      rating: 4.5,
      reviews: 850,
      price: "$15-25",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d4d0?w=800&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1563379091339-03246963d4d0?w=1200&h=600&fit=crop",
      badges: ["New"],
      tags: ["0.8 km", "halal", "live kitchen"],
      address: "456 Spice Avenue, Uptown, City",
      phone: "+1 (555) 234-5678",
      website: "www.spiceroute.com",
      hours: {
        "Sunday": "11:00 AM - 3:00 PM, 6:00 PM - 10:00 PM",
        "Monday": "11:00 AM - 3:00 PM, 6:00 PM - 10:00 PM",
        "Tuesday": "11:00 AM - 3:00 PM, 6:00 PM - 10:00 PM",
        "Wednesday": "11:00 AM - 3:00 PM, 6:00 PM - 10:00 PM",
        "Thursday": "11:00 AM - 3:00 PM, 6:00 PM - 10:00 PM",
        "Friday": "11:00 AM - 3:00 PM, 6:00 PM - 10:00 PM",
        "Saturday": "11:00 AM - 3:00 PM, 6:00 PM - 10:00 PM"
      },
      features: ["Vegetarian friendly", "Accepts Credit Cards", "Lunch, Dinner", "Halal"],
      about: "Authentic Indian cuisine with traditional spices and modern cooking techniques.",
      ranking: "#5 of 83 Restaurants in Uptown"
    },
    3: {
      id: 3,
      name: "Ocean Delight",
      cuisine: "Seafood",
      location: "Coastal Area",
      rating: 4.7,
      reviews: 1500,
      price: "$30-45",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&h=600&fit=crop",
      badges: ["Premium"],
      tags: ["2.5 km", "outdoor"],
      address: "789 Ocean Drive, Coastal Area, City",
      phone: "+1 (555) 345-6789",
      website: "www.oceandelight.com",
      hours: {
        "Sunday": "11:00 AM - 10:00 PM",
        "Monday": "11:00 AM - 10:00 PM",
        "Tuesday": "11:00 AM - 10:00 PM",
        "Wednesday": "11:00 AM - 10:00 PM",
        "Thursday": "11:00 AM - 10:00 PM",
        "Friday": "11:00 AM - 11:00 PM",
        "Saturday": "11:00 AM - 11:00 PM"
      },
      features: ["Accepts Credit Cards", "Lunch, Dinner", "Outdoor Seating"],
      about: "Fresh seafood with ocean views and premium dining experience.",
      ranking: "#3 of 83 Restaurants in Coastal Area"
    },
    4: {
      id: 4,
      name: "Green Oasis",
      cuisine: "Vegan",
      location: "Suburbia",
      rating: 4.6,
      reviews: 700,
      price: "$8-15",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=600&fit=crop",
      badges: [],
      tags: ["3.1 km", "family-friendly"],
      address: "321 Green Street, Suburbia, City",
      phone: "+1 (555) 456-7890",
      website: "www.greenoasis.com",
      hours: {
        "Sunday": "9:00 AM - 9:00 PM",
        "Monday": "9:00 AM - 9:00 PM",
        "Tuesday": "9:00 AM - 9:00 PM",
        "Wednesday": "9:00 AM - 9:00 PM",
        "Thursday": "9:00 AM - 9:00 PM",
        "Friday": "9:00 AM - 10:00 PM",
        "Saturday": "9:00 AM - 10:00 PM"
      },
      features: ["Vegetarian friendly", "Vegan Options", "Accepts Credit Cards", "Lunch, Dinner"],
      about: "Plant-based cuisine with fresh, organic ingredients and sustainable practices.",
      ranking: "#4 of 83 Restaurants in Suburbia"
    },
    5: {
      id: 5,
      name: "Burger Palace",
      cuisine: "American",
      location: "City Center",
      rating: 4.3,
      reviews: 950,
      price: "$12-20",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=600&fit=crop",
      badges: ["Trending"],
      tags: ["0.5 km", "family-friendly"],
      address: "555 Burger Lane, City Center, City",
      phone: "+1 (555) 567-8901",
      website: "www.burgerpalace.com",
      hours: {
        "Sunday": "11:00 AM - 11:00 PM",
        "Monday": "11:00 AM - 11:00 PM",
        "Tuesday": "11:00 AM - 11:00 PM",
        "Wednesday": "11:00 AM - 11:00 PM",
        "Thursday": "11:00 AM - 11:00 PM",
        "Friday": "11:00 AM - 12:00 AM",
        "Saturday": "11:00 AM - 12:00 AM"
      },
      features: ["Accepts Credit Cards", "Lunch, Dinner", "Family Friendly"],
      about: "Classic American burgers with premium ingredients and casual atmosphere.",
      ranking: "#5 of 83 Restaurants in City Center"
    },
    6: {
      id: 6,
      name: "Sushi Master",
      cuisine: "Japanese",
      location: "Financial District",
      rating: 4.9,
      reviews: 1800,
      price: "$35-50",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1200&h=600&fit=crop",
      badges: ["Premium", "New"],
      tags: ["1.8 km", "outdoor", "live kitchen"],
      address: "888 Sushi Street, Financial District, City",
      phone: "+1 (555) 678-9012",
      website: "www.sushimaster.com",
      hours: {
        "Sunday": "5:00 PM - 11:00 PM",
        "Monday": "5:00 PM - 11:00 PM",
        "Tuesday": "5:00 PM - 11:00 PM",
        "Wednesday": "5:00 PM - 11:00 PM",
        "Thursday": "5:00 PM - 11:00 PM",
        "Friday": "5:00 PM - 12:00 AM",
        "Saturday": "5:00 PM - 12:00 AM"
      },
      features: ["Accepts Credit Cards", "Dinner", "Live Kitchen", "Premium"],
      about: "Authentic Japanese sushi with master chefs and premium ingredients.",
      ranking: "#1 of 83 Restaurants in Financial District"
    },
    7: {
      id: 7,
      name: "Taco Fiesta",
      cuisine: "Mexican",
      location: "Old Town",
      rating: 4.3,
      reviews: 600,
      price: "$8-15",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200&h=600&fit=crop",
      badges: [],
      tags: ["0.7 km", "family-friendly"],
      address: "222 Taco Avenue, Old Town, City",
      phone: "+1 (555) 789-0123",
      website: "www.tacofiesta.com",
      hours: {
        "Sunday": "10:00 AM - 10:00 PM",
        "Monday": "10:00 AM - 10:00 PM",
        "Tuesday": "10:00 AM - 10:00 PM",
        "Wednesday": "10:00 AM - 10:00 PM",
        "Thursday": "10:00 AM - 10:00 PM",
        "Friday": "10:00 AM - 11:00 PM",
        "Saturday": "10:00 AM - 11:00 PM"
      },
      features: ["Vegetarian friendly", "Accepts Credit Cards", "Lunch, Dinner"],
      about: "Authentic Mexican tacos with fresh ingredients and vibrant atmosphere.",
      ranking: "#6 of 83 Restaurants in Old Town"
    },
    8: {
      id: 8,
      name: "Pizza Corner",
      cuisine: "Italian",
      location: "Market Square",
      rating: 4.4,
      reviews: 800,
      price: "$15-25",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=1200&h=600&fit=crop",
      badges: ["Trending"],
      tags: ["1.1 km", "delivery"],
      address: "444 Pizza Plaza, Market Square, City",
      phone: "+1 (555) 890-1234",
      website: "www.pizzacorner.com",
      hours: {
        "Sunday": "11:00 AM - 11:00 PM",
        "Monday": "11:00 AM - 11:00 PM",
        "Tuesday": "11:00 AM - 11:00 PM",
        "Wednesday": "11:00 AM - 11:00 PM",
        "Thursday": "11:00 AM - 11:00 PM",
        "Friday": "11:00 AM - 12:00 AM",
        "Saturday": "11:00 AM - 12:00 AM"
      },
      features: ["Accepts Credit Cards", "Lunch, Dinner", "Delivery", "Takeout"],
      about: "Traditional Italian pizza with wood-fired oven and fresh ingredients.",
      ranking: "#7 of 83 Restaurants in Market Square"
    },
    9: {
      id: 9,
      name: "Green Oasis",
      cuisine: "Vegan",
      location: "Suburbia",
      rating: 4.6,
      reviews: 700,
      price: "$8-15",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=600&fit=crop",
      badges: [],
      tags: ["3.1 km", "family-friendly"],
      address: "321 Green Street, Suburbia, City",
      phone: "+1 (555) 456-7890",
      website: "www.greenoasis.com",
      hours: {
        "Sunday": "9:00 AM - 9:00 PM",
        "Monday": "9:00 AM - 9:00 PM",
        "Tuesday": "9:00 AM - 9:00 PM",
        "Wednesday": "9:00 AM - 9:00 PM",
        "Thursday": "9:00 AM - 9:00 PM",
        "Friday": "9:00 AM - 10:00 PM",
        "Saturday": "9:00 AM - 10:00 PM"
      },
      features: ["Vegetarian friendly", "Vegan Options", "Accepts Credit Cards", "Lunch, Dinner"],
      about: "Plant-based cuisine with fresh, organic ingredients and sustainable practices.",
      ranking: "#4 of 83 Restaurants in Suburbia"
    },
    10: {
      id: 10,
      name: "Burger Haven",
      cuisine: "American",
      location: "City Center",
      rating: 4.2,
      reviews: 950,
      price: "$15-25",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=600&fit=crop",
      badges: ["Trending"],
      tags: ["0.5 km", "family-friendly"],
      address: "555 Burger Lane, City Center, City",
      phone: "+1 (555) 567-8901",
      website: "www.burgerhaven.com",
      hours: {
        "Sunday": "11:00 AM - 11:00 PM",
        "Monday": "11:00 AM - 11:00 PM",
        "Tuesday": "11:00 AM - 11:00 PM",
        "Wednesday": "11:00 AM - 11:00 PM",
        "Thursday": "11:00 AM - 11:00 PM",
        "Friday": "11:00 AM - 12:00 AM",
        "Saturday": "11:00 AM - 12:00 AM"
      },
      features: ["Accepts Credit Cards", "Lunch, Dinner", "Family Friendly"],
      about: "Classic American burgers with premium ingredients and casual atmosphere.",
      ranking: "#5 of 83 Restaurants in City Center"
    },
    11: {
      id: 11,
      name: "Sushi Zen",
      cuisine: "Japanese",
      location: "Financial District",
      rating: 4.9,
      reviews: 1800,
      price: "$30-45",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1200&h=600&fit=crop",
      badges: ["Premium", "New"],
      tags: ["1.8 km", "outdoor", "live kitchen"],
      address: "888 Sushi Street, Financial District, City",
      phone: "+1 (555) 678-9012",
      website: "www.sushizen.com",
      hours: {
        "Sunday": "5:00 PM - 11:00 PM",
        "Monday": "5:00 PM - 11:00 PM",
        "Tuesday": "5:00 PM - 11:00 PM",
        "Wednesday": "5:00 PM - 11:00 PM",
        "Thursday": "5:00 PM - 11:00 PM",
        "Friday": "5:00 PM - 12:00 AM",
        "Saturday": "5:00 PM - 12:00 AM"
      },
      features: ["Accepts Credit Cards", "Dinner", "Live Kitchen", "Premium"],
      about: "Authentic Japanese sushi with master chefs and premium ingredients.",
      ranking: "#1 of 83 Restaurants in Financial District"
    },
    12: {
      id: 12,
      name: "Taco Fiesta",
      cuisine: "Mexican",
      location: "Old Town",
      rating: 4.3,
      reviews: 600,
      price: "$8-15",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200&h=600&fit=crop",
      badges: [],
      tags: ["0.7 km", "family-friendly"],
      address: "222 Taco Avenue, Old Town, City",
      phone: "+1 (555) 789-0123",
      website: "www.tacofiesta.com",
      hours: {
        "Sunday": "10:00 AM - 10:00 PM",
        "Monday": "10:00 AM - 10:00 PM",
        "Tuesday": "10:00 AM - 10:00 PM",
        "Wednesday": "10:00 AM - 10:00 PM",
        "Thursday": "10:00 AM - 10:00 PM",
        "Friday": "10:00 AM - 11:00 PM",
        "Saturday": "10:00 AM - 11:00 PM"
      },
      features: ["Vegetarian friendly", "Accepts Credit Cards", "Lunch, Dinner"],
      about: "Authentic Mexican tacos with fresh ingredients and vibrant atmosphere.",
      ranking: "#6 of 83 Restaurants in Old Town"
    },
    13: {
      id: 13,
      name: "Noodle House",
      cuisine: "Asian",
      location: "Chinatown",
      rating: 4.5,
      reviews: 450,
      price: "$15-25",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=1200&h=600&fit=crop",
      badges: ["New"],
      tags: ["1.3 km", "comfort food"],
      address: "777 Noodle Lane, Chinatown, City",
      phone: "+1 (555) 901-2345",
      website: "www.noodlehouse.com",
      hours: {
        "Sunday": "11:00 AM - 10:00 PM",
        "Monday": "11:00 AM - 10:00 PM",
        "Tuesday": "11:00 AM - 10:00 PM",
        "Wednesday": "11:00 AM - 10:00 PM",
        "Thursday": "11:00 AM - 10:00 PM",
        "Friday": "11:00 AM - 11:00 PM",
        "Saturday": "11:00 AM - 11:00 PM"
      },
      features: ["Vegetarian friendly", "Accepts Credit Cards", "Lunch, Dinner"],
      about: "Authentic Asian noodles with traditional recipes and fresh ingredients.",
      ranking: "#8 of 83 Restaurants in Chinatown"
    },
    14: {
      id: 14,
      name: "BBQ Station",
      cuisine: "American",
      location: "Industrial District",
      rating: 4.7,
      reviews: 1100,
      price: "$30-45",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=600&fit=crop",
      badges: ["Premium"],
      tags: ["2.2 km", "outdoor", "smoking"],
      address: "999 BBQ Boulevard, Industrial District, City",
      phone: "+1 (555) 012-3456",
      website: "www.bbqstation.com",
      hours: {
        "Sunday": "12:00 PM - 10:00 PM",
        "Monday": "12:00 PM - 10:00 PM",
        "Tuesday": "12:00 PM - 10:00 PM",
        "Wednesday": "12:00 PM - 10:00 PM",
        "Thursday": "12:00 PM - 10:00 PM",
        "Friday": "12:00 PM - 11:00 PM",
        "Saturday": "12:00 PM - 11:00 PM"
      },
      features: ["Accepts Credit Cards", "Lunch, Dinner", "Outdoor Seating"],
      about: "Premium BBQ with slow-smoked meats and authentic flavors.",
      ranking: "#9 of 83 Restaurants in Industrial District"
    },
    15: {
      id: 15,
      name: "Curry Corner",
      cuisine: "Indian",
      location: "Little India",
      rating: 4.4,
      reviews: 750,
      price: "$15-25",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200&h=600&fit=crop",
      badges: ["Trending"],
      tags: ["1.5 km", "spicy", "halal"],
      address: "333 Curry Court, Little India, City",
      phone: "+1 (555) 123-4567",
      website: "www.currycorner.com",
      hours: {
        "Sunday": "11:00 AM - 10:00 PM",
        "Monday": "11:00 AM - 10:00 PM",
        "Tuesday": "11:00 AM - 10:00 PM",
        "Wednesday": "11:00 AM - 10:00 PM",
        "Thursday": "11:00 AM - 10:00 PM",
        "Friday": "11:00 AM - 11:00 PM",
        "Saturday": "11:00 AM - 11:00 PM"
      },
      features: ["Vegetarian friendly", "Accepts Credit Cards", "Lunch, Dinner", "Halal"],
      about: "Authentic Indian curries with traditional spices and modern presentation.",
      ranking: "#10 of 83 Restaurants in Little India"
    },
    16: {
      id: 16,
      name: "Cafe Delight",
      cuisine: "Cafe",
      location: "Arts Quarter",
      rating: 4.1,
      reviews: 320,
      price: "$8-15",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=600&fit=crop",
      badges: ["New"],
      tags: ["0.9 km", "cozy", "wifi"],
      address: "111 Cafe Street, Arts Quarter, City",
      phone: "+1 (555) 234-5678",
      website: "www.cafedelight.com",
      hours: {
        "Sunday": "7:00 AM - 8:00 PM",
        "Monday": "7:00 AM - 8:00 PM",
        "Tuesday": "7:00 AM - 8:00 PM",
        "Wednesday": "7:00 AM - 8:00 PM",
        "Thursday": "7:00 AM - 8:00 PM",
        "Friday": "7:00 AM - 9:00 PM",
        "Saturday": "7:00 AM - 9:00 PM"
      },
      features: ["Vegetarian friendly", "Accepts Credit Cards", "Breakfast, Lunch", "WiFi"],
      about: "Cozy cafe with artisanal coffee, pastries, and creative atmosphere.",
      ranking: "#11 of 83 Restaurants in Arts Quarter"
    }
    // Add more restaurants as needed
  };

  useEffect(() => {
    const restaurantInfo = restaurantData[id];
    if (restaurantInfo) {
      setRestaurant(restaurantInfo);
    } else {
      // Handle restaurant not found
      navigate('/');
    }
  }, [id, navigate]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  const tabs = ['Overview', 'Hours', 'Location', 'Reviews'];

  return (
    <div className="restaurant-detail-page">
      {/* Hero Section */}
      <div className="restaurant-detail-hero">
        <div className="restaurant-detail-hero-image">
          <img src={restaurant.heroImage} alt={restaurant.name} />
          <div className="restaurant-detail-hero-overlay"></div>
        </div>
        
            <div className="restaurant-detail-hero-content">
              <div className="restaurant-detail-action-buttons">
                <button className="restaurant-detail-action-btn camera-btn" onClick={handleCamera}>
                  <FontAwesomeIcon icon={faCamera} />
                </button>
                <button className="restaurant-detail-action-btn user-btn" onClick={handleUser}>
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </div>
            </div>
      </div>

      {/* Main Content */}
      <div className="restaurant-detail-main-content">
        <div className="restaurant-detail-content-container">
          {/* Restaurant Header Info */}
          <div className="restaurant-detail-header-info">
            <div className="restaurant-detail-title-section">
              <h1 className="restaurant-detail-name">{restaurant.name}</h1>
              <div className="restaurant-detail-claimed-badge">
                <FontAwesomeIcon icon={faCheck} />
                <span>Claimed</span>
              </div>
            </div>

            <div className="restaurant-detail-rating">
              <div className="restaurant-detail-rating-stars">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon 
                    key={i} 
                    icon={faStar} 
                    className={`restaurant-detail-star ${i < Math.floor(restaurant.rating) ? 'filled' : ''}`}
                  />
                ))}
              </div>
              <span className="restaurant-detail-rating-number">{restaurant.rating}</span>
              <span className="restaurant-detail-rating-reviews">({restaurant.reviews.toLocaleString()} reviews)</span>
            </div>

            <div className="restaurant-detail-ranking">{restaurant.ranking}</div>
            <div className="restaurant-detail-cuisine">{restaurant.cuisine}</div>
            <div className="restaurant-detail-price">{restaurant.price}</div>
          </div>

          {/* Content Grid */}
          <div className="restaurant-detail-content-grid">
            {/* Left Column */}
            <div className="restaurant-detail-left-column">
            {/* Navigation Tabs */}
            <div className="restaurant-detail-nav-tabs">
              {tabs.map(tab => (
                <button
                  key={tab}
                  className={`restaurant-detail-nav-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'Overview' && (
              <div className="restaurant-detail-tab-content">
                {/* At a glance */}
                <div className="restaurant-detail-content-section">
                  <h2 className="restaurant-detail-section-title">At a glance</h2>
                  <div className="restaurant-detail-glance-info">
                    <div className="restaurant-detail-info-item">
                      <span className="info-label">Open until 2:00 PM, 7:30 PM - 9:00 PM</span>
                    </div>
                    <div className="restaurant-detail-info-item">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span>{restaurant.address}</span>
                    </div>
                          <div className="restaurant-detail-info-item" onClick={handleWebsite} style={{cursor: 'pointer'}}>
                            <FontAwesomeIcon icon={faGlobe} />
                            <span>Website</span>
                          </div>
                          <div className="restaurant-detail-info-item" onClick={handlePhone} style={{cursor: 'pointer'}}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>{restaurant.phone}</span>
                          </div>
                  </div>
                </div>

                {/* About */}
                <div className="restaurant-detail-content-section">
                  <h2 className="restaurant-detail-section-title">About</h2>
                  <div className="restaurant-detail-about-content">
                    <div className="restaurant-detail-award-badge">
                      <div className="award-icon">T</div>
                      <div className="award-text">
                        <div className="award-title">Travelers' Choice Best of the Best</div>
                        <div className="award-year">2023</div>
                      </div>
                    </div>
                    <p>{restaurant.about}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="restaurant-detail-content-section">
                        <div className="restaurant-detail-section-header">
                          <h2 className="restaurant-detail-section-title">Features</h2>
                          <span className="restaurant-detail-see-all-link" onClick={handleSeeAllFeatures}>See all features</span>
                        </div>
                  <div className="restaurant-detail-features-list">
                    {restaurant.features.map((feature, index) => (
                      <div key={index} className="restaurant-detail-feature-item">
                        <FontAwesomeIcon 
                          icon={feature.includes('Vegetarian') ? faLeaf : 
                                feature.includes('Credit') ? faCreditCard : faCheck} 
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="restaurant-detail-content-section">
                  <h2 className="restaurant-detail-section-title">Location</h2>
                        <div className="restaurant-detail-location-content">
                          <div className="restaurant-detail-map-container">
                            <div className="restaurant-detail-map-placeholder">
                              <div className="restaurant-detail-map-marker">📍</div>
                            </div>
                          </div>
                          <div className="restaurant-detail-address-info" onClick={handleLocation}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span>{restaurant.address}</span>
                            <FontAwesomeIcon icon={faArrowRight} className="restaurant-detail-arrow-icon" />
                          </div>
                        </div>
                </div>

                {/* Questionnaire */}
                <div className="restaurant-detail-questionnaire">
                  <p>Does this restaurant have a full bar?</p>
                  <div className="restaurant-detail-radio-options">
                    <label>
                      <input type="radio" name="bar" value="yes" />
                      <span>Yes</span>
                    </label>
                    <label>
                      <input type="radio" name="bar" value="no" />
                      <span>No</span>
                    </label>
                    <label>
                      <input type="radio" name="bar" value="unsure" />
                      <span>Unsure</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Hours' && (
              <div className="restaurant-detail-tab-content">
                <div className="restaurant-detail-content-section">
                  <h2 className="restaurant-detail-section-title">Hours</h2>
                  <div className="restaurant-detail-hours-content">
                    <div className="restaurant-detail-current-status">Open until 2:00 PM</div>
                    <div className="restaurant-detail-hours-list">
                      {Object.entries(restaurant.hours).map(([day, hours]) => (
                        <div key={day} className="restaurant-detail-hours-item">
                          <span className="restaurant-detail-day">{day}</span>
                          <span className="restaurant-detail-hours">{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Location' && (
              <div className="restaurant-detail-tab-content">
                <div className="restaurant-detail-content-section">
                  <h2 className="restaurant-detail-section-title">Location</h2>
                  <div className="restaurant-detail-location-content">
                    <div className="restaurant-detail-map-container">
                      <div className="restaurant-detail-map-placeholder">
                        <span>Interactive Map</span>
                        <div className="restaurant-detail-map-marker">📍</div>
                      </div>
                    </div>
                    <div className="restaurant-detail-address-info">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span>{restaurant.address}</span>
                      <FontAwesomeIcon icon={faArrowRight} className="restaurant-detail-arrow-icon" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Reviews' && (
              <div className="restaurant-detail-tab-content">
                <div className="restaurant-detail-content-section">
                  <h2 className="restaurant-detail-section-title">Reviews</h2>
                  <p>Reviews content would go here...</p>
                </div>
              </div>
            )}
          </div>

            {/* Right Column */}
            <div className="restaurant-detail-right-column">
            {/* Action Buttons */}
                  <div className="restaurant-detail-action-buttons-right">
                    <button className="restaurant-detail-action-btn-right share" onClick={handleShare}>
                      <FontAwesomeIcon icon={faShare} />
                      <span>Share</span>
                    </button>
                    <button className="restaurant-detail-action-btn-right review" onClick={handleReview}>
                      <FontAwesomeIcon icon={faPen} />
                      <span>Review</span>
                    </button>
                    <button
                      className={`restaurant-detail-action-btn-right save ${isSaved ? 'saved' : ''}`}
                      onClick={handleSave}
                    >
                      <FontAwesomeIcon icon={isSaved ? faHeart : faHeartRegular} />
                      <span>Save</span>
                    </button>
                  </div>

            {/* Save Restaurant */}
            <div className="restaurant-detail-save-section">
              <h3 className="restaurant-detail-section-title">Save this restaurant</h3>
              <button
                className={`restaurant-detail-save-button ${isSaved ? 'saved' : ''}`}
                onClick={handleSave}
              >
                <FontAwesomeIcon icon={isSaved ? faHeart : faHeartRegular} />
                <span>Save</span>
              </button>
            </div>

            {/* Hours */}
            <div className="restaurant-detail-hours-section">
              <div className="restaurant-detail-section-header">
                <h3 className="restaurant-detail-section-title">Hours</h3>
              </div>
              <div className="restaurant-detail-current-status">Open until 2:00 PM</div>
              <div className="restaurant-detail-hours-list">
                {Object.entries(restaurant.hours).map(([day, hours]) => (
                  <div key={day} className="restaurant-detail-hours-item">
                    <span className="restaurant-detail-day">{day}</span>
                    <span className="restaurant-detail-hours">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Reviews Section */}
    <Reviews />
  </div>
  );
};

export default RestaurantDetail;
