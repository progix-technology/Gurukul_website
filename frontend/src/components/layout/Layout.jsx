import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import useScrollToTop from '../../hooks/useScrollToTop';

export const Layout = ({ children }) => {
  useScrollToTop();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-gurukul-cream-100 text-gray-800">
      {/* Fixed Navbar with transparent-to-solid transition */}
      <Navbar />

      {/* Main Content: Starts at top under navbar with zero gap */}
      <main className="flex-1 w-full pt-0" id="main-content">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
