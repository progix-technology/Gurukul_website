import React, { useState, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';

/**
 * LanguageToggle Component
 * Provides seamless Hindi <-> English translation across the entire Gurukul website
 * using the official Google Translate engine with a custom, sleek Indian institutional UI.
 */
export const LanguageToggle = ({ variant = 'default', className = '' }) => {
  const [currentLang, setCurrentLang] = useState('hi');
  const [isOpen, setIsOpen] = useState(false);

  // Read current language from cookie or localStorage on mount
  useEffect(() => {
    const getCookie = (name) => {
      const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      return match ? match[2] : null;
    };

    const transCookie = getCookie('googtrans');
    if (transCookie && transCookie.includes('/en')) {
      setCurrentLang('en');
    } else {
      setCurrentLang('hi');
    }
  }, []);

  const changeLanguage = (langCode) => {
    if (langCode === currentLang) {
      setIsOpen(false);
      return;
    }

    const domain = window.location.hostname;

    if (langCode === 'en') {
      // Set cookie for Hindi to English translation
      document.cookie = `googtrans=/hi/en; path=/; domain=${domain}`;
      document.cookie = `googtrans=/hi/en; path=/;`;
      localStorage.setItem('preferred_language', 'en');
      setCurrentLang('en');
    } else {
      // Restore original Hindi
      document.cookie = `googtrans=/hi/hi; path=/; domain=${domain}`;
      document.cookie = `googtrans=/hi/hi; path=/;`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      localStorage.setItem('preferred_language', 'hi');
      setCurrentLang('hi');
    }

    // Trigger select change in Google Translate widget if available
    const selectElem = document.querySelector('#google_translate_element select');
    if (selectElem) {
      selectElem.value = langCode;
      selectElem.dispatchEvent(new Event('change'));
    }

    setIsOpen(false);
    // Reload smoothly to apply translations cleanly across all components
    window.location.reload();
  };

  // Variant 1: Compact Pill Switcher (Ideal for HeaderTopBar)
  if (variant === 'topbar') {
    return (
      <div className={`inline-flex items-center rounded-sm bg-black/10 p-0.5 border border-black/15 ${className}`}>
        <button
          type="button"
          onClick={() => changeLanguage('hi')}
          className={`px-2 py-0.5 text-[11px] font-bold rounded-sm transition-all ${
            currentLang === 'hi'
              ? 'bg-[#241B15] text-[#FFCD33] shadow-sm'
              : 'text-[#241B15] hover:bg-black/10'
          }`}
          title="हिन्दी में पढ़ें"
        >
          हिन्दी
        </button>
        <button
          type="button"
          onClick={() => changeLanguage('en')}
          className={`px-2 py-0.5 text-[11px] font-bold rounded-sm transition-all ${
            currentLang === 'en'
              ? 'bg-[#241B15] text-[#FFCD33] shadow-sm'
              : 'text-[#241B15] hover:bg-black/10'
          }`}
          title="Translate to English"
        >
          English
        </button>
      </div>
    );
  }

  // Variant 2: Navbar / Drawer Button (Sleek badge with globe)
  return (
    <div className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={() => changeLanguage(currentLang === 'hi' ? 'en' : 'hi')}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-sm border border-[#C68A32]/40 bg-[#F8F4EA] text-[#241B15] hover:bg-[#C96B25] hover:text-white transition-all shadow-sm group"
        title={currentLang === 'hi' ? 'Translate entire website to English' : 'वेबसाइट को हिन्दी में बदलें'}
      >
        <Globe className="w-3.5 h-3.5 text-[#C96B25] group-hover:text-white transition-colors" />
        <span>{currentLang === 'hi' ? 'English' : 'हिन्दी'}</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
