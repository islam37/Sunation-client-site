import { FiShoppingCart, FiStar, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Calculate discount percentage
  const originalPrice = product.price * 1.2; // Assuming 20% markup for original price
  const discountPercent = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  return (
    <div 
      className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = '/images/placeholder-product.jpg';
            }}
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              NEW
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button 
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
        >
          <FiHeart className={isWishlisted ? 'fill-current' : ''} />
        </button>

        {/* Add to Cart Button (shown on hover) */}
        {isHovered && (
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in px-6 py-2 bg-white text-blue-600 rounded-full shadow-md hover:bg-blue-50 flex items-center">
            <FiShoppingCart className="mr-2" />
            Add to Cart
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="text-lg font-semibold mt-1 mb-2 text-gray-900 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          
          {/* Rating */}
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

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              {originalPrice > product.price && (
                <span className="text-sm text-gray-500 line-through mr-2">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
              <span className="text-blue-600 font-bold">
                ${product.price.toFixed(2)}
              </span>
            </div>
            
            {/* Color Swatches (for Shop page) */}
            {product.colors && product.colors.length > 0 && (
              <div className="flex space-x-1">
                {product.colors.slice(0, 3).map(color => (
                  <span 
                    key={color} 
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                ))}
                {product.colors.length > 3 && (
                  <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
                )}
              </div>
            )}
          </div>
        </Link>

        {/* Quick View (mobile) */}
        <div className="mt-3 md:hidden">
          <Link 
            to={`/product/${product.id}`} 
            className="block w-full py-2 text-center text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Quick View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;