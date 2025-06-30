import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Address',
      details: ['123 Luxury Avenue', 'Fine City, FC 12345'],
      link: 'https://maps.google.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      details: ['+1 (555) 123-4567'],
      link: 'tel:+15551234567'
    },
    {
      icon: FiMail,
      title: 'Email',
      details: ['info@lumiere.com'],
      link: 'mailto:info@lumiere.com'
    },
    {
      icon: FiClock,
      title: 'Hours',
      details: ['Mon-Thu: 5:00 PM - 10:00 PM', 'Fri-Sat: 5:00 PM - 11:00 PM', 'Sun: 4:00 PM - 9:00 PM'],
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-luxury-charcoal">
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
            Get in <span className="text-luxury-accent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-luxury-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={info.icon} className="text-luxury-dark text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-400 hover:text-luxury-accent transition-colors"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.details.map((detail, i) => (
                          <p key={i}>{detail}</p>
                        ))}
                      </a>
                    ) : (
                      <div className="text-gray-400">
                        {info.details.map((detail, i) => (
                          <p key={i}>{detail}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              className="mt-12 h-64 bg-luxury-slate rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-luxury-accent/20 to-luxury-dark flex items-center justify-center">
                <div className="text-center">
                  <SafeIcon icon={FiMapPin} className="text-4xl text-luxury-accent mb-2" />
                  <p className="text-gray-400">Interactive Map</p>
                  <p className="text-sm text-gray-500">Click to view location</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {isSubmitted && (
              <motion.div
                className="bg-green-600/20 border border-green-500 rounded-lg p-4 mb-6 flex items-center space-x-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <SafeIcon icon={FiCheck} className="text-green-400 text-xl" />
                <p className="text-green-400">
                  Message sent successfully! We'll get back to you soon.
                </p>
              </motion.div>
            )}

            <div className="bg-luxury-slate rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-luxury-dark border border-luxury-slate rounded-lg text-white placeholder-gray-400 focus:border-luxury-accent focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-luxury-dark border border-luxury-slate rounded-lg text-white placeholder-gray-400 focus:border-luxury-accent focus:outline-none transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-luxury-dark border border-luxury-slate rounded-lg text-white placeholder-gray-400 focus:border-luxury-accent focus:outline-none transition-colors"
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-luxury-dark border border-luxury-slate rounded-lg text-white placeholder-gray-400 focus:border-luxury-accent focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-luxury-accent text-luxury-dark font-semibold py-4 px-8 rounded-lg hover:bg-gold-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SafeIcon icon={FiSend} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;