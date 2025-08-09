import { useState, useEffect } from 'react';
import {  FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    size: [],
    color: [],
    priceRange: 'All'
  });

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
    },
    {
      id: 9,
      name: 'Premium Leather Belt',
      category: 'Accessories',
      price: 34.99,
      rating: 4.5,
      image: 'https://m.media-amazon.com/images/I/41N3sMrvH0L._UY1100_.jpg',
      isNew: false,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Brown', 'Black']
    }
  ];

  // Available filter options
  const filterOptions = {
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36', 'One Size'],
    color: ['Black', 'White', 'Blue', 'Gray', 'Navy', 'Beige', 'Khaki', 'Red', 'Olive', 'Brown'],
    priceRange: ['All', 'Under $25', '$25-$50', '$50-$100', 'Over $100']
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Filter by category if specified
        const filteredProducts = category 
          ? allProducts.filter(p => 
              p.category.toLowerCase() === category.toLowerCase() ||
              (category === 'accessories' && p.category.toLowerCase() === 'accessories')
            )
          : allProducts;

        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  // Apply filters to products
  const filteredProducts = products.filter(product => {
    // Size filter
    if (selectedFilters.size.length > 0 && 
        !selectedFilters.size.some(size => product.sizes.includes(size))) {
      return false;
    }
    
    // Color filter
    if (selectedFilters.color.length > 0 && 
        !selectedFilters.color.some(color => product.colors.includes(color))) {
      return false;
    }
    
    // Price filter
    switch(selectedFilters.priceRange) {
      case 'Under $25':
        if (product.price >= 25) return false;
        break;
      case '$25-$50':
        if (product.price < 25 || product.price > 50) return false;
        break;
      case '$50-$100':
        if (product.price < 50 || product.price > 100) return false;
        break;
      case 'Over $100':
        if (product.price <= 100) return false;
        break;
    }
    
    return true;
  });

  const toggleFilters = () => setFiltersOpen(!filtersOpen);

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => {
      if (filterType === 'priceRange') {
        return { ...prev, priceRange: value };
      } else {
        const newFilters = { ...prev };
        newFilters[filterType] = prev[filterType].includes(value)
          ? prev[filterType].filter(item => item !== value)
          : [...prev[filterType], value];
        return newFilters;
      }
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      size: [],
      color: [],
      priceRange: 'All'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/subtle-carbon.png")'
      }}></div>
      
      <div className="relative">
        {/* Shop Header */}
        <div className="bg-gray-800/80 py-8 border-b border-gray-700 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-amber-100">
              {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'All Products'}
            </h1>
            <p className="text-gray-400 mt-2">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 flex-shrink-0">
              <button 
                onClick={toggleFilters}
                className="md:hidden flex items-center justify-between w-full py-3 px-4 bg-gray-800 rounded-lg mb-4 border border-gray-700 hover:bg-gray-700 transition-colors"
              >
                <span className="font-medium">Filters</span>
                {filtersOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>

              <div className={`${filtersOpen ? 'block' : 'hidden'} md:block bg-gray-800/80 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700`}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-medium text-lg">Filters</h2>
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Clear all
                  </button>
                </div>

                {/* Size Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Size</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {filterOptions.size.map(size => (
                      <button
                        key={size}
                        onClick={() => handleFilterChange('size', size)}
                        className={`py-1 px-2 text-xs rounded border transition-colors ${
                          selectedFilters.size.includes(size) 
                            ? 'bg-amber-500/20 border-amber-400 text-amber-100' 
                            : 'border-gray-600 hover:border-gray-500'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Color</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {filterOptions.color.map(color => (
                      <button
                        key={color}
                        onClick={() => handleFilterChange('color', color)}
                        className={`py-1 px-2 text-xs rounded border flex items-center transition-colors ${
                          selectedFilters.color.includes(color) 
                            ? 'bg-amber-500/20 border-amber-400 text-amber-100' 
                            : 'border-gray-600 hover:border-gray-500'
                        }`}
                      >
                        <span 
                          className="w-3 h-3 rounded-full mr-1 border border-gray-200"
                          style={{ backgroundColor: color.toLowerCase() }}
                        />
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {filterOptions.priceRange.map(range => (
                      <div key={range} className="flex items-center">
                        <input
                          type="radio"
                          id={`price-${range}`}
                          name="priceRange"
                          checked={selectedFilters.priceRange === range}
                          onChange={() => handleFilterChange('priceRange', range)}
                          className="mr-2 accent-amber-500"
                        />
                        <label htmlFor={`price-${range}`}>{range}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Sorting Options */}
              <div className="flex justify-between items-center mb-8">
                <div className="text-sm text-gray-400">
                  Showing {filteredProducts.length} of {products.length} products
                </div>
                <div className="flex items-center">
                  <label htmlFor="sort" className="mr-2 text-sm text-gray-400">Sort by:</label>
                  <select
                    id="sort"
                    className="bg-gray-800 border border-gray-700 rounded-md py-2 pl-3 pr-10 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest Arrivals</option>
                    <option>Best Rated</option>
                  </select>
                </div>
              </div>

              {/* Products */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map(product => (
                    <div key={product.id} className="transform hover:scale-[1.02] transition-transform duration-300">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-gray-400">No products found matching your filters.</p>
                  <button 
                    onClick={clearFilters}
                    className="mt-4 px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded-md transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;