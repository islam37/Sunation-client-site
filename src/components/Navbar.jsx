import { useState } from "react";
import { FiShoppingCart, FiUser, FiSearch, FiMenu, FiX, FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Categories from your project proposal
  const categories = [
    { name: "Hoodies", path: "/shop/hoodies" },
    { name: "T-Shirts", path: "/shop/t-shirts" },
    { name: "Shirts", path: "/shop/shirts" },
    { name: "Pants", path: "/shop/pants" },
    { name: "Caps", path: "/shop/caps" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop", dropdown: categories },
    { name: "New Arrivals", path: "/new" },
    { name: "Sale", path: "/sale" },
    { name: "About", path: "/about" },
  ];

  // Simulated auth state (replace with real auth later)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile menu button and logo */}
        <div className="flex justify-between items-center h-16">
          {/* Logo & Mobile Menu Button */}
          <div className="flex items-center">
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            <Link
              to="/"
              className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
            >
              SUNATION
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48 z-50 border border-gray-100">
                    {link.dropdown.map((category) => (
                      <Link
                        key={category.name}
                        to={category.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search, Auth, Cart */}
          <div className="flex items-center space-x-4">
            {/* Search Bar (Desktop) */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1">
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none w-40 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="text-gray-500 ml-2" />
            </div>

            {/* Auth Buttons (Desktop) */}
            {!isLoggedIn ? (
              <div className="hidden md:flex space-x-2">
                <Link
                  to="/login"
                  className="px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-full flex items-center"
                >
                  <FiLogIn className="mr-1" /> Login
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-1 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-full"
                >
                  Register
                </Link>
              </div>
            ) : (
              <Link
                to="/profile"
                className="p-2 text-gray-700 hover:text-blue-600 rounded-full hover:bg-gray-100"
              >
                <FiUser size={20} />
              </Link>
            )}

            {/* Shopping Cart */}
            <Link
              to="/cart"
              className="p-2 text-gray-700 hover:text-blue-600 rounded-full hover:bg-gray-100 relative"
            >
              <FiShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white py-4 px-4 shadow-lg rounded-b-lg">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 mt-1 space-y-2">
                      {link.dropdown.map((category) => (
                        <Link
                          key={category.name}
                          to={category.path}
                          className="block py-1 text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="pt-2 border-t border-gray-200">
                {!isLoggedIn ? (
                  <div className="flex flex-col space-y-2">
                    <Link
                      to="/login"
                      className="w-full py-2 text-center text-blue-600 font-medium rounded-lg hover:bg-blue-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="w-full py-2 text-center bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </div>
                ) : (
                  <Link
                    to="/profile"
                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                )}
              </div>
            </div>

            {/* Mobile Search Bar */}
            <div className="mt-4 flex items-center bg-gray-100 rounded-full px-3 py-2">
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none w-full text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="text-gray-500 ml-2" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;