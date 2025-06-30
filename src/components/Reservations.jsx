import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiClock, FiUsers, FiUser, FiMail, FiPhone, FiCheck } = FiIcons;

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    requests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
    '9:00 PM', '9:30 PM'
  ];

  const occasions = [
    'Birthday', 'Anniversary', 'Business Dinner', 
    'Date Night', 'Family Celebration', 'Other'
  ];

  return (
    <section id="reservations" className="py-20 bg-luxury-dark">
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
            Make a <span className="text-luxury-accent">Reservation</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Reserve your table for an unforgettable dining experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {isSubmitted && (
            <motion.div
              className="bg-green-600/20 border border-green-500 rounded-lg p-4 mb-8 flex items-center space-x-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <SafeIcon icon={FiCheck} className="text-green-400 text-xl" />
              <p className="text-green-400">
                Reservation request submitted successfully! We'll contact you shortly to confirm.
              </p>
            </motion.div>
          )}

          <motion.div
            className="bg-luxury-slate rounded-2xl p-8 lg:p-12 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    <SafeIcon icon={FiUser} className="inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-luxury-dark border border-luxury-slate rounded-lg text-white placeholder-gray-400 focus:border-luxury-accent focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">
                    <SafeIcon icon={FiMail} className="inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-luxury-dark border border-luxury-slate rounded-lg text-white placeholder-gray-400 focus:border-luxury-accent focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  <SafeIcon icon={FiPhone} className="inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-luxury-dark border border-luxury-slate rounded-lg text-white placeholder-gray-400 focus:border-luxury-accent focus:outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Reservation Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    <SafeIcon icon={FiCalendar} className="inline mr-2" />
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-luxury-dark border border-luxury-slate rounded-lg text-white focus:border-luxury-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">
                    <SafeIcon icon={FiClock} className="inline mr-2" />
                    Time *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-luxury-dark border border-luxury-slate rounded-lg text-white focus:border-luxury-accent focus:outline-none transition-colors"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">
                    <SafeIcon icon={FiUsers} className="inline mr-2" />
                    Guests *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-luxury-dark border border-luxury-slate rounded-lg text-white focus:border-luxury-accent focus:outline-none transition-colors"
                  >
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Special Occasion
                </label>
                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-luxury-dark border border-luxury-slate rounded-lg text-white focus:border-luxury-accent focus:outline-none transition-colors"
                >
                  <option value="">Select an occasion</option>
                  {occasions.map((occasion) => (
                    <option key={occasion} value={occasion}>{occasion}</option>
                  ))}
                </select>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Special Requests
                </label>
                <textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-luxury-dark border border-luxury-slate rounded-lg text-white placeholder-gray-400 focus:border-luxury-accent focus:outline-none transition-colors resize-none"
                  placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-luxury-accent text-luxury-dark font-semibold py-4 px-8 rounded-lg hover:bg-gold-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Make Reservation
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-400 mb-4">
              For immediate assistance or large party reservations, please call us directly:
            </p>
            <a
              href="tel:+15551234567"
              className="text-luxury-accent hover:text-gold-400 text-xl font-semibold transition-colors"
            >
              +1 (555) 123-4567
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;