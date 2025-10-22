import React, { useState } from 'react';
import FoodCard from './FoodCard';
import Pagination from './Pagination';
import AddToCartModal from '../AddToCartModal/AddToCartModal';
import './FoodGrid.css';

const FoodGrid = ({ filters = null }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 9; // Changed to 9 to ensure complete rows of 3 cards

  // Sample food data matching the image
  const foodItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Butter Chicken",
      description: "Creamy tomato-based curry with tender chicken pieces, a North Indian classic",
      restaurant: "Punjabi Dhaba",
      rating: 4.7,
      price: 18.99,
      tags: ["Spicy", "Chef's Special"]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Margherita Pizza",
      description: "Classic Italian pizza with fresh mozzarella, tomato sauce, and basil",
      restaurant: "Pizzeria Roma",
      rating: 4.5,
      price: 14.50,
      tags: ["Vegetarian"]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1565299585323-38174c4a4b0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Tacos Al Pastor",
      description: "Authentic Mexican tacos with marinated pork and fresh toppings",
      restaurant: "El Fuego",
      rating: 4.8,
      price: 12.00,
      tags: ["Spicy"]
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Sushi Platter",
      description: "Fresh assortment of nigiri and maki rolls with premium fish",
      restaurant: "Sakura Sushi",
      rating: 4.9,
      price: 35.00,
      tags: ["Gluten-Free", "Chef's Special"]
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Vegan Buddha Bowl",
      description: "Nutritious bowl with quinoa, roasted vegetables, and tahini dressing",
      restaurant: "Green Garden",
      rating: 4.3,
      price: 16.75,
      tags: ["Vegan", "Gluten-Free", "Organic"]
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, served with vanilla ice cream",
      restaurant: "Sweet Indulgence",
      rating: 4.6,
      price: 9.25,
      tags: []
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Biryani",
      description: "Fragrant basmati rice with spiced meat, a South Asian delicacy",
      restaurant: "Deccan Spice",
      rating: 4.4,
      price: 20.50,
      tags: ["Spicy"]
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Pad Thai",
      description: "Stir-fried rice noodles with shrimp, tofu, and traditional Thai flavors",
      restaurant: "Thai Orchid",
      rating: 4.2,
      price: 15.75,
      tags: ["Chef's Special"]
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1563379091339-03246963d4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Beef Burger",
      description: "Juicy beef patty with fresh lettuce, tomato, and special sauce",
      restaurant: "Burger Palace",
      rating: 4.6,
      price: 13.99,
      tags: ["Chef's Special"]
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Caesar Salad",
      description: "Fresh romaine lettuce with parmesan cheese and croutons",
      restaurant: "Garden Fresh",
      rating: 4.1,
      price: 11.50,
      tags: ["Vegetarian", "Gluten-Free"]
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Chicken Wings",
      description: "Crispy buffalo wings with spicy sauce and blue cheese dip",
      restaurant: "Wing Stop",
      rating: 4.5,
      price: 16.99,
      tags: ["Spicy"]
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Fish & Chips",
      description: "Beer-battered cod with crispy fries and tartar sauce",
      restaurant: "The Fish House",
      rating: 4.3,
      price: 17.50,
      tags: ["Chef's Special"]
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Ramen Bowl",
      description: "Rich pork broth with noodles, soft-boiled egg, and vegetables",
      restaurant: "Tokyo Ramen",
      rating: 4.8,
      price: 14.99,
      tags: ["Spicy"]
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Greek Gyro",
      description: "Grilled lamb with tzatziki sauce in warm pita bread",
      restaurant: "Athens Cafe",
      rating: 4.4,
      price: 12.75,
      tags: ["Chef's Special"]
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "BBQ Ribs",
      description: "Slow-cooked pork ribs with tangy barbecue sauce",
      restaurant: "Smokehouse",
      rating: 4.7,
      price: 22.99,
      tags: ["Chef's Special"]
    },
    {
      id: 16,
      image: "https://images.unsplash.com/photo-1572441713132-51c75654db73?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Falafel Wrap",
      description: "Crispy chickpea balls with hummus and fresh vegetables",
      restaurant: "Mediterranean Delight",
      rating: 4.2,
      price: 10.99,
      tags: ["Vegan", "Vegetarian"]
    },
    {
      id: 17,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Chicken Curry",
      description: "Aromatic curry with tender chicken and basmati rice",
      restaurant: "Spice Garden",
      rating: 4.5,
      price: 19.99,
      tags: ["Spicy"]
    },
    {
      id: 18,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Pasta Carbonara",
      description: "Creamy pasta with pancetta, eggs, and parmesan cheese",
      restaurant: "Bella Italia",
      rating: 4.6,
      price: 16.50,
      tags: ["Chef's Special"]
    },
    {
      id: 19,
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Miso Soup",
      description: "Traditional Japanese soup with tofu and seaweed",
      restaurant: "Zen Garden",
      rating: 4.0,
      price: 8.99,
      tags: ["Vegetarian", "Gluten-Free"]
    },
    {
      id: 20,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Chicken Tikka",
      description: "Tender marinated chicken with aromatic spices and yogurt",
      restaurant: "Royal Indian",
      rating: 4.8,
      price: 18.50,
      tags: ["Spicy", "Chef's Special"]
    },
    {
      id: 21,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Quinoa Salad",
      description: "Healthy salad with quinoa, vegetables, and lemon dressing",
      restaurant: "Health Hub",
      rating: 4.3,
      price: 13.99,
      tags: ["Vegan", "Gluten-Free", "Organic"]
    },
    {
      id: 22,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Beef Steak",
      description: "Grilled ribeye steak with roasted vegetables and mashed potatoes",
      restaurant: "Steakhouse Prime",
      rating: 4.9,
      price: 28.99,
      tags: ["Chef's Special"]
    },
    {
      id: 23,
      image: "https://images.unsplash.com/photo-1563379091339-03246963d4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Vegetable Stir Fry",
      description: "Fresh mixed vegetables with soy sauce and ginger",
      restaurant: "Wok Express",
      rating: 4.1,
      price: 12.99,
      tags: ["Vegetarian", "Vegan"]
    },
    {
      id: 24,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Chocolate Mousse",
      description: "Rich and creamy chocolate dessert with whipped cream",
      restaurant: "Dessert Dreams",
      rating: 4.7,
      price: 7.99,
      tags: []
    }
  ];

  // Filter food items based on applied filters
  const filteredItems = React.useMemo(() => {
    if (!filters) return foodItems;

    return foodItems.filter(item => {
      // Price filter
      if (filters.price && filters.price.length >= 2) {
        if (item.price < filters.price[0] || item.price > filters.price[1]) {
          return false;
        }
      }

      // Spice level filter
      if (filters.spiceLevel > 0) {
        const hasSpicyTag = item.tags.includes('Spicy');
        if (filters.spiceLevel >= 3 && !hasSpicyTag) {
          return false;
        }
        if (filters.spiceLevel < 3 && hasSpicyTag) {
          return false;
        }
      }

      // Cuisine filter
      if (filters.cuisine !== 'All Cuisines') {
        const cuisineMap = {
          'Italian': ['Margherita Pizza', 'Pasta Carbonara'],
          'Pakistani': ['Butter Chicken', 'Biryani', 'Chicken Tikka'],
          'Thai': ['Pad Thai'],
          'Chinese': ['Vegetable Stir Fry'],
          'Indian': ['Butter Chicken', 'Biryani', 'Chicken Curry', 'Chicken Tikka'],
          'Mexican': ['Tacos Al Pastor'],
          'Japanese': ['Sushi Platter', 'Ramen Bowl', 'Miso Soup'],
          'American': ['Beef Burger', 'Chicken Wings', 'BBQ Ribs', 'Beef Steak']
        };
        if (cuisineMap[filters.cuisine] && !cuisineMap[filters.cuisine].includes(item.title)) {
          return false;
        }
      }

      // Meal type filter
      if (filters.mealType !== 'All Meal Types') {
        const mealTypeMap = {
          'Breakfast': ['Caesar Salad', 'Quinoa Salad'],
          'Lunch': ['Margherita Pizza', 'Tacos Al Pastor', 'Sushi Platter', 'Vegan Buddha Bowl', 'Biryani', 'Pad Thai', 'Beef Burger', 'Caesar Salad', 'Chicken Wings', 'Fish & Chips', 'Ramen Bowl', 'Greek Gyro', 'BBQ Ribs', 'Falafel Wrap', 'Chicken Curry', 'Pasta Carbonara', 'Miso Soup', 'Chicken Tikka', 'Quinoa Salad', 'Beef Steak', 'Vegetable Stir Fry'],
          'Dinner': ['Butter Chicken', 'Margherita Pizza', 'Tacos Al Pastor', 'Sushi Platter', 'Vegan Buddha Bowl', 'Biryani', 'Pad Thai', 'Beef Burger', 'Chicken Wings', 'Fish & Chips', 'Ramen Bowl', 'Greek Gyro', 'BBQ Ribs', 'Falafel Wrap', 'Chicken Curry', 'Pasta Carbonara', 'Miso Soup', 'Chicken Tikka', 'Quinoa Salad', 'Beef Steak', 'Vegetable Stir Fry'],
          'Snacks': ['Chicken Wings', 'Falafel Wrap'],
          'Desserts': ['Chocolate Lava Cake', 'Chocolate Mousse']
        };
        if (mealTypeMap[filters.mealType] && !mealTypeMap[filters.mealType].includes(item.title)) {
          return false;
        }
      }

      // Dietary filter
      if (filters.dietary !== 'All Dietary') {
        const dietaryMap = {
          'Vegetarian': ['Margherita Pizza', 'Vegan Buddha Bowl', 'Caesar Salad', 'Falafel Wrap', 'Miso Soup', 'Quinoa Salad', 'Vegetable Stir Fry'],
          'Vegan': ['Vegan Buddha Bowl', 'Falafel Wrap', 'Quinoa Salad', 'Vegetable Stir Fry'],
          'Gluten-Free': ['Sushi Platter', 'Vegan Buddha Bowl', 'Caesar Salad', 'Miso Soup', 'Quinoa Salad'],
          'Keto': ['BBQ Ribs', 'Beef Steak'],
          'Halal': ['Butter Chicken', 'Biryani', 'Chicken Curry', 'Chicken Tikka'],
          'Kosher': ['Caesar Salad', 'Falafel Wrap']
        };
        if (dietaryMap[filters.dietary] && !dietaryMap[filters.dietary].includes(item.title)) {
          return false;
        }
      }

      // Portion size filter
      if (filters.portionSize !== 'All Sizes') {
        const portionMap = {
          'Small': ['Chocolate Lava Cake', 'Miso Soup', 'Chocolate Mousse'],
          'Medium': ['Margherita Pizza', 'Tacos Al Pastor', 'Vegan Buddha Bowl', 'Pad Thai', 'Caesar Salad', 'Chicken Wings', 'Ramen Bowl', 'Greek Gyro', 'Falafel Wrap', 'Pasta Carbonara', 'Chicken Tikka', 'Quinoa Salad', 'Vegetable Stir Fry'],
          'Large': ['Butter Chicken', 'Sushi Platter', 'Biryani', 'Beef Burger', 'Fish & Chips', 'BBQ Ribs', 'Chicken Curry', 'Beef Steak'],
          'Extra Large': ['Sushi Platter', 'BBQ Ribs', 'Beef Steak']
        };
        if (portionMap[filters.portionSize] && !portionMap[filters.portionSize].includes(item.title)) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAddToCart = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <div className="food-grid-container">
      {filteredItems.length === 0 ? (
        <div className="no-items-found">
          <h2>No items found</h2>
          <p>No items found matching your search criteria.</p>
        </div>
      ) : (
        <>
          <div className="food-grid">
            {currentItems.map((item) => (
              <FoodCard 
                key={item.id} 
                item={item} 
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
      
      {/* Add to Cart Modal */}
      <AddToCartModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        dish={selectedItem}
      />
    </div>
  );
};

export default FoodGrid;
