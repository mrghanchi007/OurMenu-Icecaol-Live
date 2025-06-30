import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiLeaf, FiZap, FiPlus, FiStar } from 'react-icons/fi';

const MenuItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getBadgeIcon = (badge) => {
    switch (badge) {
      case 'chef-special':
        return FiStar;
      case 'vegetarian':
        return FiLeaf;
      case 'spicy':
        return FiZap;
      default:
        return FiStar;
    }
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'chef-special':
        return 'text-luxury-accent bg-luxury-accent/20';
      case 'vegetarian':
        return 'text-green-400 bg-green-400/20';
      case 'spicy':
        return 'text-red-400 bg-red-400/20';
      default:
        return 'text-luxury-accent bg-luxury-accent/20';
    }
  };

  return (
    <motion.div
      className="bg-[#0f172a] border border-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col hover:border-luxury-accent/50"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Badges */}
        {item.badges && item.badges.length > 0 && (
          <div className="absolute top-2 left-2 flex gap-1">
            {item.badges.map((badge, index) => (
              <div
                key={index}
                className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${getBadgeColor(badge)}`}
              >
                <SafeIcon icon={getBadgeIcon(badge)} className="text-[10px]" />
                <span className="capitalize">{badge.replace('-', ' ')}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-semibold text-white">
            {item.name}
          </h3>
          <div className="flex items-center gap-1">
            <div className="flex text-luxury-accent">
              <FiStar className="text-sm" />
              <FiStar className="text-sm" />
              <FiStar className="text-sm" />
              <FiStar className="text-sm" />
              <FiStar className="text-sm opacity-30" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-2">
          <div className="text-luxury-accent font-bold text-lg">${item.price}</div>
          <button className="text-luxury-accent hover:text-white hover:bg-luxury-accent/20 p-1 rounded-full transition-colors">
            <FiPlus className="text-xl" />
          </button>
        </div>

        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>
        
        {/* Badge */}
        {item.badges?.includes('chef-special') && (
          <div className="mt-2">
            <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
              SIGNATURE
            </span>
          </div>
        )}
        
        {/* Add to Order Button */}
        <button className="mt-4 w-full py-2 text-luxury-accent border border-luxury-accent rounded-lg font-medium hover:bg-luxury-accent hover:text-luxury-dark transition-colors duration-300 flex items-center justify-center gap-2">
          <span>Add to Order</span>
          <FiPlus className="text-sm" />
        </button>
      </div>

      {/* Allergens */}
      {item.allergens && item.allergens.length > 0 && (
        <div className="border-t border-luxury-dark/30 px-4 py-2 mt-2">
          <p className="text-xs text-gray-400">
            <span className="font-medium">Allergens:</span> {item.allergens.join(', ')}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default MenuItem;