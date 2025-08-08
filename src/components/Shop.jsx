import { useState, useEffect } from 'react';
import { FiFilter, FiChevronDown, FiChevronUp, FiStar } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; // Reuse your existing ProductCard component

const Shop = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    size: [],
    color: [],
    priceRange: [0, 500]
  });

  // Available filter options
  const filterOptions = {
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    color: ['Black', 'White', 'Blue', 'Gray', 'Navy', 'Beige'],
    priceRange: ['Under $50', '$50-$100', '$100-$200', 'Over $200']
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulate API call - replace with actual fetch
        const mockProducts = [
          // Your existing product data from Home.jsx
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
          // Add all other products with sizes/colors
        ];

        // Filter by category if specified
        const filteredProducts = category 
          ? mockProducts.filter(p => p.category.toLowerCase() === category.toLowerCase())
          : mockProducts;

        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const toggleFilters = () => setFiltersOpen(!filtersOpen);

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      if (filterType === 'priceRange') {
        // Handle price range selection
        newFilters[filterType] = value;
      } else {
        // Toggle selection for other filters
        newFilters[filterType] = prev[filterType].includes(value)
          ? prev[filterType].filter(item => item !== value)
          : [...prev[filterType], value];
      }
      return newFilters;
    });
  };

  const applyFilters = () => {
    // Filter logic would go here
    console.log("Applying filters:", selectedFilters);
    // In a real app, you would filter the products array or make a new API call
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Shop Header */}
      <div className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {category ? `${category}` : 'All Products'}
          </h1>
          <p className="text-gray-600 mt-2">
            {products.length} {products.length === 1 ? 'item' : 'items'}
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
              className="md:hidden flex items-center justify-between w-full py-2 px-4 bg-gray-100 rounded-lg mb-4"
            >
              <span className="font-medium">Filters</span>
              {filtersOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            <div className={`${filtersOpen ? 'block' : 'hidden'} md:block bg-white p-4 rounded-lg shadow-sm border border-gray-200`}>
              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {filterOptions.size.map(size => (
                    <button
                      key={size}
                      onClick={() => handleFilterChange('size', size)}
                      className={`py-1 px-2 text-sm rounded border ${selectedFilters.size.includes(size) ? 'bg-blue-100 border-blue-500 text-blue-700' : 'border-gray-300'}`}
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
                      className={`py-1 px-2 text-sm rounded border ${selectedFilters.color.includes(color) ? 'bg-blue-100 border-blue-500 text-blue-700' : 'border-gray-300'}`}
                      title={color}
                    >
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
                        onChange={() => handleFilterChange('priceRange', range)}
                        className="mr-2"
                      />
                      <label htmlFor={`price-${range}`}>{range}</label>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={applyFilters}
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sorting Options */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-600">
                Showing {products.length} of {products.length} products
              </div>
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-sm text-gray-600">Sort by:</label>
                <select
                  id="sort"
                  className="border border-gray-300 rounded-md py-1 pl-2 pr-8 text-sm"
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
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No products found matching your filters.</p>
                <button 
                  onClick={() => setSelectedFilters({ size: [], color: [], priceRange: [0, 500] })}
                  className="mt-4 text-blue-600 hover:text-blue-800"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;