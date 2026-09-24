import React, { useState } from 'react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../../data/galleryData';
import GalleryCard from './GalleryCard';
import Lightbox from '../common/Lightbox';
import EmptyState from '../common/EmptyState';
import { useLanguage } from '../../context/LanguageContext';

export const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();
  const isEn = language === 'en';

  const [isFilterChanging, setIsFilterChanging] = useState(false);

  const handleCategoryChange = (catId) => {
    if (activeCategory === catId) return;
    setIsFilterChanging(true);
    setActiveCategory(catId);
    setTimeout(() => {
      setIsFilterChanging(false);
    }, 180);
  };

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => {
        if (Array.isArray(item.category)) {
          return item.category.includes(activeCategory);
        }
        if (item.categories && Array.isArray(item.categories)) {
          return item.categories.includes(activeCategory);
        }
        return item.category === activeCategory;
      });

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategory === cat.id
                ? 'bg-gurukul-saffron text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-orange-50 border border-orange-100 hover:text-gurukul-saffron'
            }`}
          >
            {isEn ? (cat.label_en || cat.label) : cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Images */}
      {filteredItems.length === 0 ? (
        <EmptyState
          title={isEn ? "No Images Found" : "कोई चित्र नहीं मिला"}
          message={isEn ? "No images are currently available in this category." : "इस श्रेणी में वर्तमान में कोई चित्र उपलब्ध नहीं है।"}
        />
      ) : (
        <div className={`grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 transition-all duration-300 ${
          isFilterChanging ? 'opacity-40 scale-[0.99] filter blur-[1px]' : 'opacity-100 scale-100'
        }`}>
          {filteredItems.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onOpen={handleOpenLightbox}
            />
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        images={filteredItems}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))}
        onNext={() => setCurrentIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))}
      />
    </div>
  );
};

export default GalleryGrid;
