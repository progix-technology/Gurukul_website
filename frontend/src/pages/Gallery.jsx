import React from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import GalleryGrid from '../components/gallery/GalleryGrid';
import CallToAction from '../components/home/CallToAction';
import { Camera, Sparkles } from 'lucide-react';
import bannerBgImg from '../assets/img_2.jpeg';

export const Gallery = () => {
  return (
    <>
      <SEO
        title="छायाचित्र एवं वीडियो"
        description="श्री निःशुल्क गुरुकुल महाविद्यालय अयोध्या के छायाचित्र एवं वीडियो: यज्ञशाला, कंप्यूटर लैब, कक्षाएं, योगाभ्यास, वार्षिकोत्सव एवं परिसर दृश्य।"
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden text-white pt-24 pb-16 sm:pt-32 sm:pb-24 bg-[#241B15] select-none">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBgImg}
            alt="श्री निःशुल्क गुरुकुल महाविद्यालय छायाचित्र"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          {/* Light Warm Vedic Overlay - letting the building shine through */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(36,27,21,0.55) 0%, rgba(36,27,21,0.35) 50%, rgba(36,27,21,0.70) 100%)',
            }}
          />
          <div className="absolute top-0 right-0 w-80 h-80 bg-gurukul-saffron/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="text-3xl sm:text-4xl mb-2 font-serif text-[#C68A32]">
            ॐ
          </div>
          <div className="inline-flex items-center px-4 py-1 rounded-none text-xs sm:text-sm font-serif font-bold uppercase tracking-wider mb-4 bg-transparent text-[#F8F4EA] border border-[#C68A32] shadow-sm">
            <span>गुरुकुल पावन दर्शन</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 drop-shadow-md">
            छायाचित्र एवं वीडियो वीथिका
          </h1>
          <p className="text-sm sm:text-base text-[#F8F4EA]/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
            गुरुकुल परिसर, आधुनिक कंप्यूटर लैब, दैनिक देवयज्ञ, शास्त्र अध्ययन, योग एवं मीडिया वीडियो कवरेज
          </p>
        </Container>
      </section>

      {/* Main Gallery Section */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            badge="दृश्यावली एवं वीडियो"
            title="गुरुकुल जीवन के विविध आयाम"
            subtitle="चित्रों व वीडियो पर क्लिक करके उच्च गुणवत्ता में विवरण सहित देखें"
          />

          <GalleryGrid />
        </Container>
      </section>

      {/* CTA */}
      <CallToAction />
    </>
  );
};

export default Gallery;
