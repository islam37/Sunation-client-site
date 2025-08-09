import { useState, useEffect } from "react";
import { FiShoppingCart, FiUser, FiSearch, FiMenu, FiX, FiLogIn, FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
 const [searchQuery, setSearchQuery] = useState(""); // empty string as initial value
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Categories for dropdown
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
    <nav className={`mb-5 fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Mobile Menu Button */}
          <div className="flex items-center">
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            <Link to="/" className="ml-2 flex items-center group">
              <img 
                src="https://i.ibb.co.com/MDs4hfD4/logo1-01.png" 
                alt="Luxury Brand Logo"
                className="h-10 w-10 mr-2 transition-transform group-hover:rotate-12 duration-500"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                SUNATION
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <div className="flex items-center">
                  <Link
                    to={link.path}
                    className="text-gray-800 hover:text-amber-600 font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <FiChevronDown className="ml-1 text-gray-500 group-hover:text-amber-600 transition-colors" />
                  )}
                </div>
                {link.dropdown && (
                  <div className="absolute hidden group-hover:block bg-white/95 backdrop-blur-lg shadow-xl rounded-lg mt-2 py-2 w-48 z-50 border border-gray-100 animate-fadeIn">
                    {link.dropdown.map((category) => (
                      <Link
                        key={category.name}
                        to={category.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
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
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 transition-all duration-300 hover:bg-gray-200/80">
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none w-40 text-sm placeholder-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="text-gray-500 ml-2 hover:text-amber-600 transition-colors" />
            </div>

            {/* Auth Buttons (Desktop) */}
            {!isLoggedIn ? (
              <div className="hidden md:flex space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-amber-600 hover:bg-amber-50 rounded-full flex items-center transition-colors"
                >
                  <FiLogIn className="mr-1" /> Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-amber-600 to-amber-400 text-white hover:from-amber-700 hover:to-amber-500 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Register
                </Link>
              </div>
            ) : (
              <Link
                to="/profile"
                className="p-2 text-gray-700 hover:text-amber-600 rounded-full hover:bg-amber-50 transition-colors"
              >
                <FiUser size={20} />
              </Link>
            )}

            {/* Shopping Cart (With Floating Badge) */}
            <Link
              to="/cart"
              className="p-2 text-gray-700 hover:text-amber-600 rounded-full hover:bg-amber-50 transition-colors relative"
            >
              <FiShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu (Slides In) */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg shadow-xl rounded-b-lg py-4 px-4 animate-slideDown">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className="block py-2 text-gray-800 hover:text-amber-600 font-medium transition-colors"
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
                          className="block py-1 text-gray-600 hover:text-amber-600 transition-colors"
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
              <div className="pt-4 border-t border-gray-200">
                {!isLoggedIn ? (
                  <div className="flex flex-col space-y-3">
                    <Link
                      to="/login"
                      className="w-full py-2 text-center text-amber-600 font-medium rounded-lg hover:bg-amber-50 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="w-full py-2 text-center bg-gradient-to-r from-amber-600 to-amber-400 text-white font-medium rounded-lg hover:from-amber-700 hover:to-amber-500 transition-all duration-300 shadow-md hover:shadow-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </div>
                ) : (
                  <Link
                    to="/profile"
                    className="block py-2 text-gray-800 hover:text-amber-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                )}
              </div>
            </div>

            {/* Mobile Search Bar */}
            <div className="mt-4 flex items-center bg-gray-100 rounded-full px-4 py-2 transition-all duration-300 hover:bg-gray-200/80">
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none w-full text-sm placeholder-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="text-gray-500 ml-2 hover:text-amber-600 transition-colors" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;