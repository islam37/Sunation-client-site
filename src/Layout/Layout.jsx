import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-600 shadow-md  h-16 flex items-center ">
        <Navbar />
      </header>

      {/* Main content with spacer */}
      <main className="flex-grow pt-16 px-4 md:px-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 p-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
