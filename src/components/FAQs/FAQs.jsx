import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './FAQs.css';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How do I place an order on KyaKhao?",
      answer: "Simply Browse Our Menu, Explore Our AI-Powered Suggestions, And Select Your Favorite Dishes. Once You're Ready, Proceed To Checkout. You Can Choose Between Delivery Or Pickup Before Confirming Your Order."
    },
    {
      question: "What are KyaKhao's delivery hours?",
      answer: "We deliver from 11:00 AM to 10:00 PM, seven days a week. Our kitchen is closed on major holidays, but we'll notify you in advance."
    },
    {
      question: "Is there a minimum order for delivery?",
      answer: "Yes, we have a minimum order of $15 for delivery. This helps us maintain quality service and cover delivery costs."
    },
    {
      question: "Can I customize my order?",
      answer: "Absolutely! You can customize ingredients, spice levels, and special dietary requirements. Just add your preferences in the special instructions section."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and cash on delivery. All payments are processed securely."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order is confirmed, you'll receive a tracking link via SMS and email. You can also track your order in real-time through our app."
    },
    {
      question: "Can I schedule an order in advance?",
      answer: "Yes! You can schedule orders up to 7 days in advance. Perfect for meal planning and special occasions."
    },
    {
      question: "What should I do if there's a problem with my order?",
      answer: "Contact our customer support immediately. We'll resolve any issues within 24 hours and ensure you're completely satisfied."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quote form submitted');
  };

  return (
    <div className="faqs-page">
      {/* Hero Section */}
      <div className="faqs-hero-section">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop" alt="Kitchen background" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">FAQs</h1>
          <p className="hero-subtitle">
            Find answers to common questions. If you need more help, we're just a message away!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="faqs-main-content">
        <div className="faqs-container">
          {/* Left Column - FAQs */}
          <div className="faqs-section">
            <div className="faqs-list">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${openFAQ === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-question">
                    <span className="question-text">{faq.question}</span>
                    <FontAwesomeIcon 
                      icon={openFAQ === index ? faChevronUp : faChevronDown} 
                      className="chevron-icon"
                    />
                  </div>
                  {openFAQ === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div className="quote-section">
            <div className="quote-form-container">
              <h3 className="quote-title">Get Free Quote</h3>
              <form className="quote-form" onSubmit={handleQuoteSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="your name" 
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Business email" 
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    placeholder="Message" 
                    className="form-textarea"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="quote-btn">
                  GET A QUOTE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
