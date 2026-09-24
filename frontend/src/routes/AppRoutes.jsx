import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from '../components/common/LoadingSpinner';

// Route-level code splitting (Lazy loading)
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Courses = lazy(() => import('../pages/Courses'));
const Admission = lazy(() => import('../pages/Admission'));
const Events = lazy(() => import('../pages/Events'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Contact = lazy(() => import('../pages/Contact'));
const AdaniComputerLab = lazy(() => import('../pages/AdaniComputerLab'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Hindi loading fallback for Suspense
const PageLoader = () => (
  <LoadingSpinner fullScreen message="पृष्ठ लोड हो रहा है, कृपया प्रतीक्षा करें..." />
);

export const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adani-computer-lab" element={<AdaniComputerLab />} />
        
        {/* Catch-all 404 Route */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
