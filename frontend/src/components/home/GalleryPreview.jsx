import React, { useState } from 'react';
import { Camera, ArrowRight, Eye } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import Lightbox from '../common/Lightbox';
import ImageWithFallback from '../common/ImageWithFallback';
import { GALLERY_ITEMS } from '../../data/galleryData';

export const GalleryPreview = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const previewItems = GALLERY_ITEMS.slice(0, 6);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20 bg-[#F8F4EA] border-b border-[#C68A32]/30">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <SectionHeading
            badge="चित्र दीर्घा"
            title="गुरुकुल दर्शन (Photo Gallery)"
            subtitle="परिसर, यज्ञशाला, दैनिक दिनचर्या एवं उत्सवों के मनोहारी दृश्य"
            align="left"
            className="mb-0"
          />

          <Button
            to="/gallery"
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
          >
            सम्पूर्ण चित्र दीर्घा देखें
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-none overflow-hidden aspect-[4/3] bg-[#241B15] cursor-pointer shadow-sm hover:shadow-md border border-[#C68A32]/40 transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
              aria-label={`चित्र देखें: ${item.title}`}
            >
              <ImageWithFallback
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none"
              />

              {/* Hover effect only, no text */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </Container>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        images={previewItems}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : previewItems.length - 1))}
        onNext={() => setCurrentIndex((prev) => (prev < previewItems.length - 1 ? prev + 1 : 0))}
      />
    </section>
  );
};

export default GalleryPreview;
