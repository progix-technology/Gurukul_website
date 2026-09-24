import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

/**
 * LanguageToggle Component
 * Clean in-app React Language Switcher without external scripts, popups or layout shifts.
 */
export const LanguageToggle = ({ variant = 'default', className = '' }) => {
  const { language, setLanguage, toggleLanguage } = useLanguage();

  // Variant 1: Compact Pill Switcher (Ideal for HeaderTopBar & Drawer)
  if (variant === 'topbar') {
    return (
      <div className={`inline-flex items-center rounded-none bg-black/10 p-0.5 border border-black/15 ${className}`}>
        <button
          type="button"
          onClick={() => setLanguage('hi')}
          className={`px-2 py-0.5 text-[11px] font-bold rounded-none transition-all ${
            language === 'hi'
              ? 'bg-[#241B15] text-[#FFCD33] shadow-sm'
              : 'text-[#241B15] hover:bg-black/10'
          }`}
          title="हिन्दी में पढ़ें"
        >
          हिन्दी
        </button>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-2 py-0.5 text-[11px] font-bold rounded-none transition-all ${
            language === 'en'
              ? 'bg-[#241B15] text-[#FFCD33] shadow-sm'
              : 'text-[#241B15] hover:bg-black/10'
          }`}
          title="Switch to English"
        >
          English
        </button>
      </div>
    );
  }

  // Variant 2: Navbar / Drawer Button (Sleek badge with globe)
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <button
        type="button"
        onClick={toggleLanguage}
        className="inline-flex items-center justify-center gap-1.5 px-3 h-8 sm:h-9 text-xs sm:text-sm font-bold rounded border border-[#C68A32]/50 bg-[#F8F4EA] text-[#241B15] hover:bg-[#C96B25] hover:text-white transition-all shadow-sm group"
        title={language === 'hi' ? 'Switch entire website to English' : 'वेबसाइट को हिन्दी में बदलें'}
      >
        <Globe className="w-3.5 h-3.5 text-[#C96B25] group-hover:text-white transition-colors flex-shrink-0" />
        <span className="whitespace-nowrap">{language === 'hi' ? 'English' : 'हिन्दी'}</span>
      </button>
    </div>
  );
};

export default LanguageToggle;

