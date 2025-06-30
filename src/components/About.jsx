import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiAward, FiUsers, FiClock } = FiIcons;

const About = () => {
  const stats = [
    { icon: FiAward, number: '25+', label: 'Years of Excellence' },
    { icon: FiStar, number: '3', label: 'Michelin Stars' },
    { icon: FiUsers, number: '500k+', label: 'Happy Guests' },
    { icon: FiClock, number: '24/7', label: 'Service Available' }
  ];

  return (
    <section id="about" className="py-20 bg-luxury-charcoal">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            About <span className="text-luxury-accent">Lumière</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A culinary journey that began with passion and continues with excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-serif font-bold text-white mb-6">
              Our Story
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Founded in 1998 by renowned Chef Antoine Dubois, Lumière has been 
                setting the standard for fine dining excellence for over two decades. 
                What started as a dream to create an unforgettable culinary experience 
                has evolved into one of the most celebrated restaurants in the city.
              </p>
              <p>
                Our commitment to using only the finest ingredients, combined with 
                innovative culinary techniques and impeccable service, has earned us 
                three Michelin stars and the loyalty of discerning diners from around 
                the world.
              </p>
              <p>
                Every dish tells a story, every ingredient is carefully selected, 
                and every moment in our restaurant is crafted to create memories 
                that last a lifetime.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-luxury-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={stat.icon} className="text-2xl text-luxury-dark" />
              </div>
              <div className="text-3xl font-bold text-luxury-accent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Chef Section */}
        <motion.div
          className="bg-luxury-slate rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-white mb-6">
                Meet Our <span className="text-luxury-accent">Executive Chef</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Chef Antoine Dubois brings over 30 years of culinary expertise to 
                Lumière. Trained in the finest kitchens of France and recognized 
                with numerous international awards, Chef Dubois continues to push 
                the boundaries of modern cuisine while honoring classical techniques.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• James Beard Award Winner 2019</p>
                <p>• Michelin Guide Featured Chef</p>
                <p>• Culinary Institute of America Graduate</p>
                <p>• Author of "The Art of Modern French Cuisine"</p>
              </div>
            </div>
            <div className="relative">
              <div className="h-80 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Chef Antoine Dubois"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;