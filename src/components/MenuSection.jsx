import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuCategory from './MenuCategory';
import { menuData } from '../data/menuData';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = Object.keys(menuData);
  
  // Function to get all menu items from all categories
  const getAllMenuItems = () => {
    return Object.values(menuData).flat();
  };

  return (
    <section id="menu" className="py-12 bg-[#0a0f1a]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Our <span className="text-luxury-accent">Menu</span>
          </h2>
          <div className="w-16 h-1 bg-luxury-accent mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Discover our curated selection of exceptional dishes, 
            crafted with passion and premium ingredients
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8 px-2 overflow-x-auto pb-2 scrollbar-hide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex gap-2">
            <button
              key="all"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-sm rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-luxury-accent text-luxury-dark shadow-md font-semibold'
                  : 'bg-[#1e293b] text-gray-300 hover:bg-[#2d3b51] hover:text-white'
              }`}
            >
              Start All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-luxury-accent text-luxury-dark shadow-md font-semibold'
                    : 'bg-[#1e293b] text-gray-300 hover:bg-[#2d3b51] hover:text-white'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="py-2"
          >
            {activeCategory !== 'all' && (
              <h3 className="text-xl font-bold text-white mb-6 ml-2">
                {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
              </h3>
            )}
            <MenuCategory 
              category={activeCategory}
              items={activeCategory === 'all' ? getAllMenuItems() : menuData[activeCategory]}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;