import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
  <h1 className="text-7xl font-extrabold text-gray-900 mb-6">404</h1>
  <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
  <p className="text-gray-600 mb-8 max-w-md text-center leading-relaxed">
    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
  </p>
</div>

    );
};

export default ErrorPage;