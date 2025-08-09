import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiFeather, FiHeart } from 'react-icons/fi';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Spacer for navbar */}
      <div className="h-20"></div>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        {/* Premium Card Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50">
          {/* Hero Section */}
          <div className="relative h-64 bg-gradient-to-r from-blue-800 to-blue-600 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
            <h2 className="text-5xl font-bold text-white relative z-10 tracking-tight">
              Our <span className="text-amber-300">Story</span>
            </h2>
          </div>

          <div className="p-12">
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl leading-relaxed text-gray-700 mb-8"
            >
              At <span className="font-bold text-blue-600">SUNATION</span>, we believe luxury is more than just fashion — it's an experience. Founded with a vision to redefine elegance, SUNATION crafts timeless apparel that celebrates sophistication, quality, and individuality. Our collections blend impeccable craftsmanship with contemporary design, creating pieces that elevate your wardrobe and inspire confidence.
            </motion.p>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl leading-relaxed text-gray-700 mb-8"
            >
              Driven by a commitment to excellence, SUNATION uses only the finest fabrics and pays meticulous attention to detail in every stitch. Each garment reflects our passion for innovation and the pursuit of perfection, ensuring that you not only wear clothing but embrace a lifestyle of refined luxury.
            </motion.p>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl leading-relaxed text-gray-700 mb-12"
            >
              Discover <span className="font-bold text-blue-600">SUNATION</span> — where style meets substance, and every piece tells a story of grace and distinction.
            </motion.p>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiAward className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Craftsmanship</h3>
                <p className="text-gray-600">Precision in every detail, excellence in every stitch</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
              >
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiFeather className="text-amber-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Elegance</h3>
                <p className="text-gray-600">Timeless designs that transcend trends</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiHeart className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Ethics</h3>
                <p className="text-gray-600">Sustainable luxury with integrity</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Spacer for footer */}
      <div className="h-20"></div>
    </div>
  );
};

export default About;