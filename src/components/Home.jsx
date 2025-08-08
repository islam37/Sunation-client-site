import { useState, useEffect } from 'react';
import { 
  FiChevronRight, 
  FiShoppingCart, 
  FiGrid, 
  FiStar,
  FiTrendingUp
} from 'react-icons/fi';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllFeatured, setShowAllFeatured] = useState(false);

  // Color palette for pie chart
  const COLORS = ['#3B82F6', '#6366F1', '#8B5CF6', '#A855F7', '#D946EF'];

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      try {
        // Mock products data with your provided URLs
        const products = [
          {
            id: 1,
            name: 'Premium Cotton Hoodie',
            category: 'Hoodies',
            price: 59.99,
            rating: 4.8,
            image: 'https://i.ibb.co.com/N61s1dtM/hoodi.jpg',
            isNew: true
          },
          {
            id: 2,
            name: 'Classic White T-Shirt',
            category: 'T-Shirts',
            price: 29.99,
            rating: 4.5,
            image: 'https://i.ibb.co.com/SXNQLGzK/handsome-adult-male-waiting-bus.jpg',
            isNew: false
          },
          {
            id: 3,
            name: 'Slim Fit Chino Pants',
            category: 'Pants',
            price: 49.99,
            rating: 4.7,
            image: 'https://izod.com/cdn/shop/files/IZAGC14R_250_a_600x.jpg?v=1714490308',
            isNew: true
          },
          {
            id: 4,
            name: 'Signature Snapback Cap',
            category: 'Caps',
            price: 24.99,
            rating: 4.3,
            image: 'https://mosscotton.com/wp-content/uploads/2018/09/mockup_Front_Maroon-510x510.jpg',
            isNew: false
          },
          {
            id: 5,
            name: 'Denim Jacket',
            category: 'Jackets',
            price: 79.99,
            rating: 4.9,
            image: 'https://artisanclick.com/wp-content/uploads/2021/09/369-scaled.jpg',
            isNew: true
          },
          {
            id: 6,
            name: 'Casual Linen Shirt',
            category: 'Shirts',
            price: 39.99,
            rating: 4.6,
            image: 'https://camixa.com.au/cdn/shop/products/Casual_Fit_TULUM_Linen_Shirt_LS-21-Olive-green.jpg?v=1677557910&width=1080',
            isNew: false
          },
          {
            id: 7,
            name: 'Jogger Sweatpants',
            category: 'Pants',
            price: 44.99,
            rating: 4.4,
            image: 'https://m.media-amazon.com/images/I/71jk-WJxgoL._AC_SY500_.jpg',
            isNew: false
          },
          {
            id: 8,
            name: 'Beanie Hat',
            category: 'Accessories',
            price: 19.99,
            rating: 4.2,
            image: 'https://heatholders.co.uk/cdn/shop/products/BLACKHALDENHAT.jpg?v=1663925370&width=1024',
            isNew: true
          }
        ];

        // Mock category distribution data
        const categories = [
          { name: 'Hoodies', value: 35 },
          { name: 'T-Shirts', value: 28 },
          { name: 'Pants', value: 22 },
          { name: 'Caps', value: 12 },
          { name: 'Accessories', value: 3 }
        ];

        setFeaturedProducts(products);
        setCategoryData(categories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Show only 4 products initially, or all if showAllFeatured is true
  const displayedProducts = showAllFeatured 
    ? featuredProducts 
    : featuredProducts.slice(0, 4);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-600">Loading our premium collections...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/texture.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Elevate Your <span className="text-blue-300">Style</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Discover premium men's fashion curated for the modern gentleman
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/shop" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Shop Collection <FiChevronRight className="ml-2" />
            </Link>
            <Link 
              to="/new-arrivals" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
            >
              New Arrivals
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Curated Collections
            </span>
          </h2>
          {!showAllFeatured && (
            <button 
              onClick={() => setShowAllFeatured(true)}
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <FiGrid className="mr-2" />
              View All Products
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {showAllFeatured && (
          <div className="mt-12 text-center">
            <Link 
              to="/shop" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Explore Full Collection <FiChevronRight className="ml-2" />
            </Link>
          </div>
        )}
      </div>

      {/* Category Distribution Pie Chart Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Product Categories
            </span>
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 h-96">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    innerRadius={60}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Market Share']}
                    contentStyle={{
                      background: 'rgba(255, 255, 255, 0.96)',
                      borderRadius: '0.5rem',
                      border: 'none',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      padding: '0.75rem'
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Top Categories</h3>
              <div className="space-y-4">
                {categoryData.map((category, index) => (
                  <div key={category.name} className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded-full mr-3" 
                      style={{ backgroundColor: COLORS[index] }}
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700 font-medium">{category.name}</span>
                        <span className="font-bold">{category.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full" 
                          style={{ 
                            width: `${category.value}%`,
                            backgroundColor: COLORS[index]
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }) => (
  <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100">
    <div className="relative h-64 overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = '/images/placeholder-product.jpg';
        }}
      />
      {product.isNew && (
        <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          NEW
        </div>
      )}
      <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-white text-blue-600 rounded-full shadow-md hover:bg-blue-50 flex items-center">
        <FiShoppingCart className="mr-2" />
        Add to Cart
      </button>
    </div>
    <div className="p-4">
      <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
        {product.category}
      </span>
      <h3 className="text-lg font-semibold mt-1 mb-2 text-gray-900">
        {product.name}
      </h3>
      <div className="flex items-center mb-2">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FiStar 
              key={i} 
              className={i < Math.floor(product.rating) ? 'fill-current' : ''} 
              size={14}
            />
          ))}
        </div>
        <span className="text-gray-500 text-sm ml-1">({product.rating})</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500 line-through mr-2">
          ${(product.price * 1.2).toFixed(2)}
        </span>
        <span className="text-blue-600 font-bold">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  </div>
);

export default Home;