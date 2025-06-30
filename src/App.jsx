import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaPlus, FaMinus } from 'react-icons/fa';
// Icons removed for simplicity
import { menuData } from './data/menuData';
import './App.css';

// Global theme colors
const theme = {
  bgColor: '#0b101a',
  cardBg: '#060a12',
  text: {
    primary: '#ffffff',
    secondary: '#a0aec0',
    accent: '#f68623',
  },
  border: {
    light: 'rgba(255, 255, 255, 0.1)',
    accent: 'rgba(246, 134, 35, 0.3)',
  },
};

// Menu Item Component
// Placeholder image component
const PlaceholderImage = ({ name, style = {} }) => (
  <div 
    className="w-full h-32 md:h-40 bg-luxury-charcoal rounded-lg flex items-center justify-center text-luxury-gold/30"
    style={style}
  >
    <span className="text-2xl font-bold">{name.charAt(0).toUpperCase()}</span>
  </div>
);

const MenuItem = ({ item }) => {
  const [imageError, setImageError] = useState(!item.image);
  
  return (
    <div className="h-full flex flex-col">
      <div className="mb-3 overflow-hidden rounded-lg" style={{ backgroundColor: theme.cardBg }}>
        {!imageError ? (
          <img 
            src={item.image} 
            alt={item.name}
            title={item.name}
            className="w-full h-32 md:h-40 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <PlaceholderImage name={item.name} />
        )}
      </div>
    
      <div className="flex-1 flex flex-col" style={{ backgroundColor: theme.cardBg }}>
        {/* Item Name - First Line */}
        <div className="text-left">
          <h3 className="text-base md:text-lg font-medium text-luxury-gold leading-tight">
            {item.name}
          </h3>
        </div>
        
        {/* Description - Second Line */}
        {item.description && (
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed line-clamp-2 text-left">
            {item.description}
          </p>
        )}
        
        {/* Price - Third Line, Right Aligned */}
        <div className="flex justify-end mt-1">
          <span className="bg-luxury-gold/10 text-luxury-gold font-medium px-2 py-1 rounded text-sm md:text-base border border-luxury-gold/30">
            {item.price}
          </span>
        </div>
        

      </div>
    </div>
  );
};
// Menu Category Component
const MenuCategory = ({ category, items, isOpen, onClick }) => {
  const formattedCategory = category.replace(/([A-Z])/g, ' $1').trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="border-b border-luxury-accent/30" style={{ backgroundColor: theme.cardBg }}>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 px-2 text-left focus:outline-none"
      >
        <h2 className="text-xl font-bold" style={{ color: '#3cc6f0' }}>
          {formattedCategory}
        </h2>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: '#f05830' }}
        >
          {isOpen ? <FaMinus /> : <FaPlus />}
        </motion.span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="py-2 px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                  <div key={item.id} className="border border-luxury-accent/20 p-4 rounded-lg">
                    <MenuItem item={item} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main App Component
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState({
    shareables: true,
    poutine: false,
    // Add other categories as needed
  });

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.bgColor }}>
      {/* Simple Navigation Bar */}
      <nav className="bg-luxury-charcoal shadow-lg p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/">
                <img 
                  src="/img/logo-light.png" 
                  alt="IceCoal Lounge Logo" 
                  className="h-12"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/150x60?text=IceCoal+Lounge';
                  }}
                />
              </a>
            </div>
            
            {/* Simple Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="https://www.icecoal.ca/" className="text-luxury-gold hover:text-luxury-accent">Home</a>
              <a href="https://www.icecoal.ca/about-us/" className="text-luxury-gold hover:text-luxury-accent">About</a>
              <a href="https://www.icecoal.ca/reservations/" className="text-luxury-gold hover:text-luxury-accent">Reservations</a>
              <a href="https://www.icecoal.ca/contact/" className="text-luxury-gold hover:text-luxury-accent">Contact</a>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-luxury-gold">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl" style={{ backgroundColor: theme.bgColor }}>
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-luxury-gold mb-2">
            IceCoal Lounge
          </h1>
          <p className="text-luxury-accent/80">
            Discover our exquisite menu
          </p>
        </header>

        <div className="space-y-2">
          {Object.entries(menuData).map(([category, items]) => (
            <MenuCategory
              key={category}
              category={category}
              items={items}
              isOpen={openCategories[category] || false}
              onClick={() => toggleCategory(category)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;