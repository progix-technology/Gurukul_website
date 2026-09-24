import React from 'react';
import { Link } from 'react-router-dom';
import heroBgImage from '../../assets/img_1.png';

export const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#241B15] overflow-hidden select-none">
      {/* Background Image: Gurukul Building and Acharyas */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="श्री निःशुल्क गुरुकुल महाविद्यालय अयोध्या परिसर एवं आचार्य"
          loading="eager"
          fetchpriority="high"
          className="w-full h-full object-cover object-center scale-105"
        />

        {/* Multi-layered cinematic gradient overlays in #241B15 Dark Brown */}
        <div className="absolute inset-0 bg-[#241B15]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#241B15] via-[#241B15]/40 to-[#241B15]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#241B15]/60 via-transparent to-[#241B15]/60" />
      </div>

      {/* Hero Content matching Figma screenshot */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center text-[#F8F4EA] flex flex-col items-center justify-center space-y-4 sm:space-y-5 animate-fadeIn">
        
        {/* Golden Vedic Om Emblem */}
        <div className="text-[#C68A32] font-serif text-3xl sm:text-4xl font-extrabold drop-shadow-[0_0_15px_rgba(198,138,50,0.5)]">
          ॐ
        </div>

        {/* Main Institution Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-md">
          श्री निःशुल्क गुरुकुल महाविद्यालय
        </h1>

        {/* Location Sub-headline with subtle decorative lines */}
        <div className="flex items-center justify-center gap-3 w-full max-w-xs mx-auto opacity-85">
          <span className="h-[1px] bg-[#C68A32]/40 flex-1" />
          <span className="font-serif text-sm sm:text-base text-[#C68A32] font-medium tracking-wide whitespace-nowrap">
            अयोध्या, उत्तर प्रदेश
          </span>
          <span className="h-[1px] bg-[#C68A32]/40 flex-1" />
        </div>

        {/* Tagline Text - Soft and minimal */}
        <p className="font-sans text-xs sm:text-sm text-[#F8F4EA]/75 font-normal tracking-wide">
          परंपरा, संस्कार और ज्ञान की समन्वित शिक्षा
        </p>

        {/* Description Paragraph - Subtle and clean */}
        <p className="max-w-xl text-xs sm:text-sm text-[#F8F4EA]/65 leading-relaxed font-sans font-normal">
          सन् 1925 से वेद, संस्कृत एवं आधुनिक शिक्षा का अद्वितीय केंद्र — जहाँ प्राचीन ज्ञान और नई पीढ़ी का समागम होता है।
        </p>

        {/* Two Rectangular CTA Buttons matching Screenshot */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 w-full sm:w-auto">
          {/* Solid Light Saffron / Orange CTA */}
          <Link
            to="/admission"
            className="w-full sm:w-auto min-w-[190px] h-[44px] inline-flex items-center justify-center text-center px-7 rounded-none font-serif font-bold text-sm sm:text-base bg-[#C96B25] hover:bg-[#B55D1D] text-white shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
          >
            प्रवेश की जानकारी
          </Link>

          {/* Semi-transparent Glass CTA with White Outline */}
          <Link
            to="/about"
            className="w-full sm:w-auto min-w-[190px] h-[44px] inline-flex items-center justify-center text-center px-7 rounded-none font-serif font-bold text-sm sm:text-base bg-[#241B15]/40 hover:bg-white hover:text-[#241B15] text-white border border-white backdrop-blur-sm shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
          >
            गुरुकुल के बारे में
          </Link>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        onClick={scrollToContent}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 cursor-pointer flex flex-col items-center gap-1 text-[#F8F4EA]/70 hover:text-[#C68A32] transition-colors"
        aria-label="नीचे स्क्रॉल करें"
      >
        <div className="w-6 h-10 rounded-none border-2 border-[#F8F4EA]/60 flex items-start justify-center p-1.5 backdrop-blur-sm">
          <div className="w-1 h-2.5 bg-[#E5832E] rounded-none animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
