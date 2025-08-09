import { useState, useEffect } from 'react';
import { 
  FiChevronRight, 
  FiShoppingCart, 
  FiGrid, 
  FiStar,
  FiArrowRight
} from 'react-icons/fi';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllFeatured, setShowAllFeatured] = useState(false);

  const COLORS = ['#3B82F6', '#6366F1', '#8B5CF6', '#A855F7', '#D946EF'];

  // Complete product data
  const allProducts = [
    {
      id: 1,
      name: 'Premium Cotton Hoodie',
      category: 'Hoodies',
      price: 59.99,
      rating: 4.8,
      image: 'https://i.ibb.co.com/N61s1dtM/hoodi.jpg',
      isNew: true,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Gray', 'Navy']
    },
    {
      id: 2,
      name: 'Classic White T-Shirt',
      category: 'T-Shirts',
      price: 29.99,
      rating: 4.5,
      image: 'https://i.ibb.co.com/SXNQLGzK/handsome-adult-male-waiting-bus.jpg',
      isNew: false,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Gray']
    },
    {
      id: 3,
      name: 'Slim Fit Chino Pants',
      category: 'Pants',
      price: 49.99,
      rating: 4.7,
      image: 'https://izod.com/cdn/shop/files/IZAGC14R_250_a_600x.jpg?v=1714490308',
      isNew: true,
      sizes: ['28', '30', '32', '34', '36'],
      colors: ['Khaki', 'Navy', 'Black']
    },
    {
      id: 4,
      name: 'Signature Snapback Cap',
      category: 'Caps',
      price: 24.99,
      rating: 4.3,
      image: 'https://mosscotton.com/wp-content/uploads/2018/09/mockup_Front_Maroon-510x510.jpg',
      isNew: false,
      sizes: ['One Size'],
      colors: ['Black', 'Navy', 'Red']
    },
    {
      id: 5,
      name: 'Denim Jacket',
      category: 'Jackets',
      price: 79.99,
      rating: 4.9,
      image: 'https://artisanclick.com/wp-content/uploads/2021/09/369-scaled.jpg',
      isNew: true,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Blue', 'Black']
    },
    {
      id: 6,
      name: 'Casual Linen Shirt',
      category: 'Shirts',
      price: 39.99,
      rating: 4.6,
      image: 'https://camixa.com.au/cdn/shop/products/Casual_Fit_TULUM_Linen_Shirt_LS-21-Olive-green.jpg?v=1677557910&width=1080',
      isNew: false,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Blue', 'Olive']
    },
    {
      id: 7,
      name: 'Jogger Sweatpants',
      category: 'Pants',
      price: 44.99,
      rating: 4.4,
      image: 'https://m.media-amazon.com/images/I/71jk-WJxgoL._AC_SY500_.jpg',
      isNew: false,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Gray', 'Navy']
    },
    {
      id: 8,
      name: 'Beanie Hat',
      category: 'Accessories',
      price: 19.99,
      rating: 4.2,
      image: 'https://heatholders.co.uk/cdn/shop/products/BLACKHALDENHAT.jpg?v=1663925370&width=1024',
      isNew: true,
      sizes: ['One Size'],
      colors: ['Black', 'Gray', 'Navy']
    }
  ];

  const categories = [
    { name: 'Hoodies', value: 35 },
    { name: 'T-Shirts', value: 28 },
    { name: 'Pants', value: 22 },
    { name: 'Caps', value: 12 },
    { name: 'Accessories', value: 3 }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setFeaturedProducts(allProducts);
        setCategoryData(categories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const displayedProducts = showAllFeatured ? featuredProducts : featuredProducts.slice(0, 4);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"
          />
          <motion.p
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
            className="text-gray-600"
          >
            Loading our premium collections...
          </motion.p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://i.ibb.co.com/TBcMxysQ/Chat-GPT-Image-Aug-9-2025-10-41-35-AM.png')",
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0,0,0,0.4)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-center w-full">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight"
            >
              Elevate Your <span className="text-amber-400">Style</span> Essence
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-200 font-light"
            >
              Curated luxury fashion for the modern connoisseur
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-5"
            >
              <Link 
                to="/shop" 
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-black font-medium rounded-lg hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Collection <FiArrowRight className="ml-2 animate-pulse" />
              </Link>
              
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <motion.h2 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-6 md:mb-0"
          >
            <span className="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
              Curated Collections
            </span>
          </motion.h2>
          
          {!showAllFeatured && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllFeatured(true)}
              className="flex items-center text-amber-600 hover:text-amber-800 font-medium px-5 py-3 rounded-lg hover:bg-amber-50 transition-colors border border-amber-200"
            >
              <FiGrid className="mr-2" />
              View All Products
            </motion.button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {displayedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {showAllFeatured && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link 
              to="/shop" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-medium rounded-lg hover:from-amber-600 hover:to-amber-500 transition-all shadow-lg hover:shadow-xl"
            >
              Explore Full Collection <FiChevronRight className="ml-2" />
            </Link>
          </motion.div>
        )}
      </div>

      {/* Category Distribution Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              Our Product Universe
            </span>
          </motion.h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 h-[400px] bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={140}
                    innerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[index % COLORS.length]} 
                        stroke="rgba(0,0,0,0.3)"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      background: 'rgba(0,0,0,0.8)',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(4px)',
                      color: 'white'
                    }}
                  />
                  <Legend 
                    wrapperStyle={{ bottom: -20 }}
                    formatter={(value) => <span className="text-gray-300">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
            
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-8 text-amber-300">Category Breakdown</h3>
              <div className="space-y-6">
                {categoryData.map((category, index) => (
                  <div key={category.name} className="flex items-center">
                    <div 
                      className="w-5 h-5 rounded-full mr-4 shadow-md" 
                      style={{ backgroundColor: COLORS[index] }}
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-200 font-medium">{category.name}</span>
                        <span className="font-bold text-white">{category.value}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${category.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: COLORS[index] }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-amber-100 relative"
  >
    <div className="relative h-80 overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {product.isNew && (
        <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
          NEW
        </div>
      )}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-5 py-2.5 bg-amber-500 text-black rounded-full shadow-lg hover:bg-amber-400 flex items-center font-medium"
      >
        <FiShoppingCart className="mr-2" />
        Add to Cart
      </motion.button>
    </div>
    <div className="p-5">
      <span className="text-xs font-medium text-amber-600 uppercase tracking-wider">
        {product.category}
      </span>
      <h3 className="text-xl font-semibold mt-1 mb-3 text-gray-900 group-hover:text-amber-600 transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center mb-3">
        <div className="flex text-amber-400">
          {[...Array(5)].map((_, i) => (
            <FiStar 
              key={i} 
              className={i < Math.floor(product.rating) ? 'fill-current' : ''} 
              size={16}
            />
          ))}
        </div>
        <span className="text-gray-500 text-sm ml-2">({product.rating})</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400 line-through">
          ${(product.price * 1.2).toFixed(2)}
        </span>
        <span className="text-amber-600 font-bold text-lg">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  </motion.div>
);

export default Home;