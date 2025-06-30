import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaPlus, FaMinus } from 'react-icons/fa';
import { FaHome, FaInfoCircle, FaCalendarAlt, FaImages, FaEnvelope } from 'react-icons/fa';
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
  const [openCategories, setOpenCategories] = useState({
    shareables: true,
    poutine: false,
    // Add other categories as needed
  });

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.bgColor }}>
      {/* Navigation Bar */}
      <nav className="bg-luxury-charcoal shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/img/logo-light.png" 
                alt="IceCoal Lounge Logo" 
                className="h-12"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150x60?text=IceCoal+Lounge';
                }}
              />
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <a 
                href="https://www.icecoal.ca/" 
                className="text-luxury-gold hover:text-luxury-accent flex items-center space-x-1 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaHome className="mr-1" />
                <span>Home</span>
              </a>
              <a 
                href="https://www.icecoal.ca/about-us/" 
                className="text-luxury-gold hover:text-luxury-accent flex items-center space-x-1 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaInfoCircle className="mr-1" />
                <span>About Us</span>
              </a>
              <a 
                href="https://www.icecoal.ca/reservations/" 
                className="text-luxury-gold hover:text-luxury-accent flex items-center space-x-1 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaCalendarAlt className="mr-1" />
                <span>Reservation</span>
              </a>
              <a 
                href="https://www.google.com/maps/contrib/100690302882111051076/photos/@43.536913,-79.727382,3a,75y,90t/data=!3m7!1e2!3m5!1sAF1QipMkZYPcOIpX5XFS-j2oqyrhZ4hmH6euQNFH34Oc!2e10!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipMkZYPcOIpX5XFS-j2oqyrhZ4hmH6euQNFH34Oc%3Dw365-h273-k-no!7i1600!8i1200!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" 
                className="text-luxury-gold hover:text-luxury-accent flex items-center space-x-1 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaImages className="mr-1" />
                <span>Gallery</span>
              </a>
              <a 
                href="https://www.icecoal.ca/contact/" 
                className="text-luxury-gold hover:text-luxury-accent flex items-center space-x-1 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaEnvelope className="mr-1" />
                <span>Contact</span>
              </a>
            </div>
            
            {/* Mobile menu button (hidden on larger screens) */}
            <div className="md:hidden">
              <button className="text-luxury-gold focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu (hidden by default) */}
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { name: 'Home', href: 'https://www.icecoal.ca/', icon: <FaHome className="mr-2" /> },
                { name: 'About Us', href: 'https://www.icecoal.ca/about-us/', icon: <FaInfoCircle className="mr-2" /> },
                { name: 'Reservation', href: 'https://www.icecoal.ca/reservations/', icon: <FaCalendarAlt className="mr-2" /> },
                { name: 'Gallery', href: 'https://www.google.com/maps/contrib/100690302882111051076/photos/@43.536913,-79.727382,3a,75y,90t/data=!3m7!1e2!3m5!1sAF1QipMkZYPcOIpX5XFS-j2oqyrhZ4hmH6euQNFH34Oc!2e10!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipMkZYPcOIpX5XFS-j2oqyrhZ4hmH6euQNFH34Oc%3Dw365-h273-k-no!7i1600!8i1200!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D', icon: <FaImages className="mr-2" /> },
                { name: 'Contact', href: 'https://www.icecoal.ca/contact/', icon: <FaEnvelope className="mr-2" /> },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-luxury-gold hover:bg-luxury-charcoal hover:text-luxury-accent block px-3 py-2 rounded-md text-base font-medium"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center">
                    {item.icon}
                    {item.name}
                  </div>
                </a>
              ))}
            </div>
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