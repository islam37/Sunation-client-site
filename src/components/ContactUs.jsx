import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thank you for contacting us! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Spacer for navbar */}
      <div className="h-20"></div>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-6 py-20"
      >
        {/* Premium Card Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50">
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-10 text-center">
            <h2 className="text-4xl font-bold text-white tracking-tight">Contact Sunation</h2>
            <p className="text-blue-100 mt-3 text-lg">
              We're here to elevate your experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Email</h4>
                    <a 
                      href="mailto:sunation13@gmail.com" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      sun12@sunation.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Phone</h4>
                    <a 
                      href="tel:+1234567890" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      +8801568289690
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Address</h4>
                    <p className="text-gray-600">City Center, Sylhet, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-medium text-gray-700 mb-3">Business Hours</h4>
                <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                <p className="text-gray-600">Saturday: 10am - 4pm</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div whileHover={{ scale: 1.01 }}>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }}>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }}>
                  <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }}>
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your message..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-5 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  ></textarea>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex justify-center items-center py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-md hover:shadow-lg"
                >
                  Send Message <FiSend className="ml-2" />
                </motion.button>
              </form>

              {status && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg"
                >
                  {status}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Spacer for footer */}
      <div className="h-20"></div>
    </div>
  );
};

export default ContactUs;