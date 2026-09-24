import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

import heroSlide1 from '../../assets/img_2.jpeg';
import heroSlide2 from '../../assets/img_3.jpeg';
import heroSlide3 from '../../assets/img_4.jpeg';
import heroSlide4 from '../../assets/img_6.jpeg';
import heroSlide5 from '../../assets/img_1.png';

const serifFont = { fontFamily: "'Noto Serif Devanagari', serif" };
const sansFont = { fontFamily: "'Noto Sans Devanagari', sans-serif" };

const slides = [
  {
    id: 1,
    image: heroSlide1,
    tag: 'सन् 1925 से अखंड वैदिक सेवा',
    tag_en: 'UNINTERRUPTED VEDIC SERVICE SINCE 1925',
    title: 'श्री निःशुल्क गुरुकुल महाविद्यालय',
    title_en: 'Shri Nishulk Gurukul Mahavidyalaya',
    subtitle: 'अयोध्या, उत्तर प्रदेश',
    subtitle_en: 'Ayodhya, Uttar Pradesh',
    tagline: 'परंपरा, संस्कार और ज्ञान की समन्वित शिक्षा',
    tagline_en: 'Integrated Education of Tradition, Culture & Wisdom',
    description: 'सन् 1925 से वेद, संस्कृत एवं आधुनिक शिक्षा का अद्वितीय केंद्र — जहाँ प्राचीन ज्ञान और नई पीढ़ी का समागम होता है।',
    description_en: 'A unique centre of Vedic, Sanskrit and modern education since 1925 – where ancient wisdom meets the new generation.',
    primaryBtn: { text: 'प्रवेश की जानकारी', text_en: 'Admission Info', link: '/admission' },
    secondaryBtn: { text: 'गुरुकुल परिचय', text_en: 'Gurukul Introduction', link: '/about' }
  },
  {
    id: 2,
    image: heroSlide2,
    tag: 'वैदिक स्वाध्याय एवं ऋषिकुल परंपरा',
    tag_en: 'VEDIC STUDIES & RISHIKUL TRADITION',
    title: 'श्री निःशुल्क गुरुकुल महाविद्यालय',
    title_en: 'Shri Nishulk Gurukul Mahavidyalaya',
    subtitle: 'अयोध्या, उत्तर प्रदेश',
    subtitle_en: 'Ayodhya, Uttar Pradesh',
    tagline: 'वेद, व्याकरण, न्याय, सांख्य एवं ज्योतिष शिक्षा',
    tagline_en: 'Vedas, Sanskrit Grammar, Logic & Astronomy Education',
    description: 'सम्पूर्णानन्द संस्कृत विश्वविद्यालय वाराणसी से संबद्ध — प्राचीन ऋषियों की ज्ञान परंपरा का संवर्धन।',
    description_en: 'Affiliated to Sampurnanand Sanskrit University, Varanasi – fostering the ancient lineage of wisdom.',
    primaryBtn: { text: 'पाठ्यक्रम विवरण', text_en: 'Course Details', link: '/courses' },
    secondaryBtn: { text: 'दैनिक दिनचर्या', text_en: 'Daily Routine', link: '/about' }
  },
  {
    id: 3,
    image: heroSlide3,
    tag: 'आधुनिक तकनीकी ज्ञान',
    tag_en: 'MODERN DIGITAL EMPOWERMENT',
    title: 'श्री निःशुल्क गुरुकुल महाविद्यालय',
    title_en: 'Shri Nishulk Gurukul Mahavidyalaya',
    subtitle: 'अयोध्या, उत्तर प्रदेश',
    subtitle_en: 'Ayodhya, Uttar Pradesh',
    tagline: 'Adani Computer Lab — संस्कृत के साथ डिजिटल दक्षता',
    tagline_en: 'Adani Computer Lab — Digital Skills with Vedic Sanskrit',
    description: 'अडानी फाउंडेशन द्वारा स्थापित अत्याधुनिक कंप्यूटर लैब से ब्रह्मचारियों को कोडिंग, टाइपिंग और डिजिटल शिक्षा।',
    description_en: 'State-of-the-art computer lab powered by Adani Foundation equipping Brahmacharis with coding and digital skills.',
    primaryBtn: { text: 'Adani Computer Lab', text_en: 'Adani Computer Lab', link: '/adani-computer-lab' },
    secondaryBtn: { text: 'Lab Facilities', text_en: 'Lab Facilities', link: '/adani-computer-lab' }
  },
  {
    id: 4,
    image: heroSlide4,
    tag: 'संस्कार, योग एवं अनुशासन',
    tag_en: 'DISCIPLINE, YOGA & MORALS',
    title: 'श्री निःशुल्क गुरुकुल महाविद्यालय',
    title_en: 'Shri Nishulk Gurukul Mahavidyalaya',
    subtitle: 'अयोध्या, उत्तर प्रदेश',
    subtitle_en: 'Ayodhya, Uttar Pradesh',
    tagline: 'चरित्र निर्माण, संध्या-वंदन एवं सर्वांगीण विकास',
    tagline_en: 'Character Building, Daily Hawan & Holistic Development',
    description: 'पवित्र सरयू तट पर स्थित गुरुकुल में ब्रह्मचारियों का आध्यात्मिक, बौद्धिक एवं शारीरिक उन्नयन।',
    description_en: 'Spiritual, intellectual and physical upliftment of students in the sacred land of Ayodhya.',
    primaryBtn: { text: 'आयोजन एवं गतिविधियाँ', text_en: 'Events & Activities', link: '/events' },
    secondaryBtn: { text: 'चित्र दीर्घा', text_en: 'Photo Gallery', link: '/gallery' }
  },
  {
    id: 5,
    image: heroSlide5,
    tag: 'पूर्णतः निःशुल्क आवासीय शिक्षा',
    tag_en: '100% FREE RESIDENTIAL EDUCATION',
    title: 'श्री निःशुल्क गुरुकुल महाविद्यालय',
    title_en: 'Shri Nishulk Gurukul Mahavidyalaya',
    subtitle: 'अयोध्या, उत्तर प्रदेश',
    subtitle_en: 'Ayodhya, Uttar Pradesh',
    tagline: 'ऋषिकुल मर्यादा एवं आधुनिक डिजिटल शिक्षा',
    tagline_en: 'Vedic Ethos & Contemporary Education',
    description: 'कक्षा 6 (प्रथमा) से आचार्य (M.A.) स्तर तक संपूर्ण निःशुल्क आवासीय शिक्षा, भोजन, आवास, वस्त्र एवं Adani Computer Lab।',
    description_en: 'Complete free boarding, meals, uniforms & digital computer education from Class 6 to Acharya (M.A.).',
    primaryBtn: { text: 'प्रवेश आवेदन करें', text_en: 'Apply for Admission', link: '/admission' },
    secondaryBtn: { text: 'संपर्क सूत्र', text_en: 'Contact Us', link: '/contact' }
  }
];

// Instant preloader for all Hero Banner images so they load before anything else
if (typeof window !== 'undefined') {
  [heroSlide1, heroSlide2, heroSlide3, heroSlide4, heroSlide5].forEach((src) => {
    const preloader = new Image();

    preloader.src = src;
  });
}

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { language } = useLanguage();
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);
  const isTransitioningRef = useRef(false);
  const timerRef = useRef(null);

  // Preload all slides on mount
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const resetAutoplayTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
  };

  // Auto slide every 6 seconds with clean reset on user interaction
  useEffect(() => {
    resetAutoplayTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlide]);

  const prevSlide = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 500);
  };

  const nextSlide = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 500);
  };

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = Math.abs(touchStartY.current - touchEndY.current);

    // Only trigger horizontal swipe if horizontal movement is significant and greater than vertical scroll
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > diffY) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    // Reset touch coordinates and unpause
    touchStartX.current = 0;
    touchEndX.current = 0;
    touchStartY.current = 0;
    touchEndY.current = 0;
    setIsPaused(false);
  };

  return (
    <div
      className="relative min-h-[580px] sm:min-h-screen w-full overflow-hidden bg-[#241B15] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container with Left-to-Right Slide Animation */}
      <div
        className="flex w-full h-full min-h-[580px] sm:min-h-screen transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, idx) => {
          const isEn = language === 'en';
          const slideTag = isEn ? (slide.tag_en || slide.tag) : slide.tag;
          const slideTitle = isEn ? (slide.title_en || slide.title) : slide.title;
          const slideSubtitle = isEn ? (slide.subtitle_en || slide.subtitle) : slide.subtitle;
          const slideTagline = isEn ? (slide.tagline_en || slide.tagline) : slide.tagline;
          const slideDesc = isEn ? (slide.description_en || slide.description) : slide.description;
          const primaryText = isEn ? (slide.primaryBtn.text_en || slide.primaryBtn.text) : slide.primaryBtn.text;
          const secondaryText = isEn ? (slide.secondaryBtn.text_en || slide.secondaryBtn.text) : slide.secondaryBtn.text;

          return (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 relative min-h-[580px] sm:min-h-screen flex items-center justify-center"
            >
              {/* Background Image: Native eager high-priority img tag for instant load */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slideTitle}
                  loading="eager"
                  fetchpriority={idx === 0 ? "high" : "auto"}
                  decoding="sync"
                  className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Dark Vedic Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(36,27,21,0.78) 0%, rgba(36,27,21,0.65) 50%, rgba(36,27,21,0.92) 100%)',
                }}
              />

              {/* Slide Content */}
              <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20 pb-16 sm:py-24">
                <div className="text-4xl sm:text-5xl mb-3 animate-fade-in" style={{ ...serifFont, color: '#C68A32' }}>
                  ॐ
                </div>

                <div className="inline-flex items-center px-4 py-1.5 rounded-none text-xs sm:text-sm font-serif font-bold uppercase tracking-wider mb-4 bg-transparent text-[#F8F4EA] border border-[#C68A32] shadow-sm">
                  <span>{slideTag}</span>
                </div>

                <h1
                  className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3 text-white drop-shadow-md"
                  style={serifFont}
                >
                  {slideTitle}
                </h1>

                <p
                  className="text-lg sm:text-2xl mb-3 font-semibold drop-shadow"
                  style={{ ...sansFont, color: '#C68A32' }}
                >
                  {slideSubtitle}
                </p>

                <div className="h-0.5 w-24 mx-auto mb-4 bg-[#C68A32]" />

                <p
                  className="text-base sm:text-xl mb-3 font-serif drop-shadow"
                  style={{ color: '#EDE7D4' }}
                >
                  {slideTagline}
                </p>

                <p
                  className="text-xs sm:text-base mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
                  style={{ ...sansFont, color: '#D4C4A0' }}
                >
                  {slideDesc}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to={slide.primaryBtn.link}
                    className="w-full sm:w-[220px] h-[48px] inline-flex items-center justify-center text-center px-6 rounded font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg shrink-0"
                    style={{
                      backgroundColor: '#C96B25',
                      border: '2px solid #C96B25',
                      color: '#F8F4EA',
                      ...sansFont,
                    }}
                  >
                    {primaryText}
                  </Link>

                  <Link
                    to={slide.secondaryBtn.link}
                    className="w-full sm:w-[220px] h-[48px] inline-flex items-center justify-center text-center px-6 rounded font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5 shadow-md backdrop-blur-sm shrink-0"
                    style={{
                      border: '2px solid #F8F4EA',
                      color: '#F8F4EA',
                      backgroundColor: 'rgba(36,27,21,0.4)',
                      ...sansFont,
                    }}
                  >
                    {secondaryText}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Left Arrow Navigation - Only visible when there is a previous slide */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          aria-label="पिछली स्लाइड"
          className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 text-white/80 hover:text-[#C96B25] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] transition-all duration-200 hover:scale-110 focus:outline-none active:scale-95"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 stroke-[2]" />
        </button>
      )}

      {/* Right Arrow Navigation - Only visible when there is a next slide */}
      {currentSlide < slides.length - 1 && (
        <button
          onClick={nextSlide}
          aria-label="अगली स्लाइड"
          className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 text-white/80 hover:text-[#C96B25] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] transition-all duration-200 hover:scale-110 focus:outline-none active:scale-95"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[2]" />
        </button>
      )}

      {/* Dots Indicator (Clickable Navigation Dots) */}
      <div className="absolute bottom-6 inset-x-0 z-20 flex items-center justify-center gap-2.5">
        {slides.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => setCurrentSlide(dotIdx)}
            aria-label={`स्लाइड ${dotIdx + 1} पर जाएं`}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === dotIdx
                ? 'w-8 h-2.5 bg-[#C96B25] shadow-lg border border-[#C68A32]'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white border border-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
