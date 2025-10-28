import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import './Deals.css';

const Deals = () => {
  const [copiedCodes, setCopiedCodes] = useState({});
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [priceMax, setPriceMax] = useState(80);
  const [spiceLevel, setSpiceLevel] = useState(2);
  const [minRating, setMinRating] = useState(3);

  const deals = [
    {
      id: 1,
      title: "Delicious Pizza Deal",
      description: "Get 2 Large Pizzas for the price of 1 at Pizza Palace. Perfect for family dinner!",
      couponCode: "PIZZADEAL50",
      expirationDate: "12/31/2024",
      isPopular: true,
      cuisine: 'Italian',
      price: 40,
      spiceLevel: 1,
      rating: 4.5,
      tag: 'new'
    },
    {
      id: 2,
      title: "Coffee & Croissant Combo",
      description: "Enjoy a fresh brew and a pastry at Cafe Daily. Start your day right!",
      couponCode: "CAFEDESK10",
      expirationDate: "11/15/2024",
      isPopular: false,
      cuisine: 'Cafe',
      price: 12,
      spiceLevel: 0,
      rating: 4.1,
      tag: 'trending'
    },
    {
      id: 3,
      title: "Sushi Night Special",
      description: "20% off all Sushi rolls and Sashimi platters every Tuesday and Thursday.",
      couponCode: "SUSHI20OFF",
      expirationDate: "01/30/2025",
      isPopular: true,
      cuisine: 'Japanese',
      price: 28,
      spiceLevel: 1,
      rating: 4.7,
      tag: 'underrated'
    },
    {
      id: 4,
      title: "Burger Bonanza",
      description: "Buy one burger, get one free at The Burger Hub. Valid on all classic burgers.",
      couponCode: "BBHUBOGO",
      expirationDate: "10/20/2024",
      isPopular: false,
      cuisine: 'American',
      price: 18,
      spiceLevel: 2,
      rating: 4.0,
      tag: 'trending'
    },
    {
      id: 5,
      title: "Dessert Delight",
      description: "Sweeten your meal with a complimentary dessert at The Sweet Spot. Any dessert of your choice.",
      couponCode: "SWEETFREE",
      expirationDate: "12/01/2024",
      isPopular: false,
      cuisine: 'Bakery',
      price: 10,
      spiceLevel: 0,
      rating: 3.8,
      tag: 'new'
    },
    {
      id: 6,
      title: "Healthy Meal Prep",
      description: "15% off your first order from Green Grub meal delivery service. Eat healthy, live better!",
      couponCode: "GREENGRUB15",
      expirationDate: "09/30/2024",
      isPopular: true,
      cuisine: 'Healthy',
      price: 30,
      spiceLevel: 1,
      rating: 4.3,
      tag: 'underrated'
    }
  ];

  const cuisines = useMemo(() => ['All', ...Array.from(new Set(deals.map(d => d.cuisine)))], []);

  const CustomSelect = ({ value, options, onChange }) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
      const onDocClick = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener('mousedown', onDocClick);
      return () => document.removeEventListener('mousedown', onDocClick);
    }, []);

    const handleSelect = (opt) => {
      onChange(opt);
      setOpen(false);
    };

    return (
      <div className="custom-select" ref={containerRef}>
        <button type="button" className="custom-select-trigger" onClick={() => setOpen(!open)} aria-haspopup="listbox" aria-expanded={open}>
          <span>{value}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`chevron ${open ? 'open' : ''}`}>
            <polyline points="6 9 12 15 18 9" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {open && (
          <ul className="custom-select-menu" role="listbox">
            {options.map(opt => (
              <li key={opt} role="option" aria-selected={opt === value}
                  className={`custom-select-option ${opt === value ? 'selected' : ''}`}
                  onClick={() => handleSelect(opt)}>
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const filteredDeals = useMemo(() => {
    return deals.filter(d =>
      (activeTab === 'all' ? true : d.tag === activeTab) &&
      (selectedCuisine === 'All' || d.cuisine === selectedCuisine) &&
      d.price <= priceMax &&
      d.spiceLevel <= spiceLevel &&
      d.rating >= minRating
    );
  }, [deals, activeTab, selectedCuisine, priceMax, spiceLevel, minRating]);

  const clearFilters = () => {
    setSelectedCuisine('All');
    setPriceMax(80);
    setSpiceLevel(2);
    setMinRating(3);
    setActiveTab('all');
  };

  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodes(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedCodes(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const handleApplyCoupon = (deal) => {
    alert(`Coupon ${deal.couponCode} applied successfully!`);
  };

  return (
    <div className="deals-container">
      <div className="deals-content">
        <div className="deals-header">
          <div className="deals-tabs">
            <button className={`deals-tab ${activeTab==='all'?'active':''}`} onClick={() => setActiveTab('all')}>All</button>
            <button className={`deals-tab ${activeTab==='new'?'active':''}`} onClick={() => setActiveTab('new')}>New in Town</button>
            <button className={`deals-tab ${activeTab==='trending'?'active':''}`} onClick={() => setActiveTab('trending')}>Trending Dishes</button>
            <button className={`deals-tab ${activeTab==='underrated'?'active':''}`} onClick={() => setActiveTab('underrated')}>Underrated Picks</button>
          </div>

          <div className="deals-filters">
            <div className="filter-item">
              <label className="filter-label">Cuisine</label>
              <CustomSelect value={selectedCuisine} options={cuisines} onChange={setSelectedCuisine} />
            </div>

            <div className="filter-item">
              <label className="filter-label">Price Range: $20 - ${priceMax}</label>
              <input className="filter-range" type="range" min="20" max="80" step="5" value={priceMax} onChange={(e)=>setPriceMax(Number(e.target.value))} />
            </div>

            <div className="filter-item">
              <label className="filter-label">Spice Level: 1 - {spiceLevel}</label>
              <input className="filter-range" type="range" min="1" max="4" step="1" value={spiceLevel} onChange={(e)=>setSpiceLevel(Number(e.target.value))} />
            </div>

            <div className="filter-item">
              <label className="filter-label">Rating: {minRating} - 5 Stars</label>
              <input className="filter-range" type="range" min="1" max="5" step="0.5" value={minRating} onChange={(e)=>setMinRating(Number(e.target.value))} />
            </div>

            <button className="clear-filters" onClick={clearFilters}>Clear Filters</button>
          </div>
        </div>
        
        <div className="deals-grid">
          {filteredDeals.map((deal) => (
            <div key={deal.id} className="deal-card">
              {deal.isPopular && (
                <div className="popular-tag">Popular Offer</div>
              )}
              
              <h3 className="deal-title">{deal.title}</h3>
              <p className="deal-description">{deal.description}</p>
              
              <div className="coupon-section">
                <div className="coupon-code-field">
                  <span className="coupon-code">{deal.couponCode}</span>
                  <button 
                    className="copy-btn"
                    onClick={() => handleCopyCode(deal.couponCode, deal.id)}
                  >
                    <FontAwesomeIcon 
                      icon={copiedCodes[deal.id] ? faCheck : faCopy} 
                      className="copy-icon"
                    />
                  </button>
                </div>
              </div>
              
              <div className="expiration-date">
                Expires: {deal.expirationDate}
              </div>
              
              <button 
                className="apply-coupon-btn"
                onClick={() => handleApplyCoupon(deal)}
              >
                Apply Coupon
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
