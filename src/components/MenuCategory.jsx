import React from 'react';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';

const MenuCategory = ({ category, items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
          className="h-full"
        >
          <MenuItem item={item} />
        </motion.div>
      ))}
    </div>
  );
};

export default MenuCategory;