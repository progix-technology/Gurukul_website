import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { INSTITUTION_INFO } from '../../data/institutionalData';
import LanguageToggle from '../common/LanguageToggle';
import { useLanguage } from '../../context/LanguageContext';

const FacebookIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76M7.86 18.5v-8.37H5.07v8.37h2.79z" />
  </svg>
);

export const HeaderTopBar = () => {
  const { contact, socials } = INSTITUTION_INFO;
  const { t } = useLanguage();

  return (
    <div className="bg-[#FFCD33] text-gray-900 text-xs py-1.5 px-3 sm:px-4 border-b border-amber-400 font-medium">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left Side: Social Media Icons */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold text-gray-800 hidden md:inline">
            {t('topbar.followUs', 'अनुसरण करें:')}
          </span>
          <a
            href={socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 rounded-full bg-white/60 hover:bg-white text-gray-900 flex items-center justify-center transition-all shadow-sm"
            aria-label="फेसबुक"
          >
            <FacebookIcon />
          </a>
          <a
            href={socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 rounded-full bg-white/60 hover:bg-white text-gray-900 flex items-center justify-center transition-all shadow-sm"
            aria-label="यूट्यूब"
          >
            <YoutubeIcon />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 rounded-full bg-white/60 hover:bg-white text-gray-900 flex items-center justify-center transition-all shadow-sm"
            aria-label="लिंक्डइन"
          >
            <LinkedinIcon />
          </a>
        </div>

        {/* Right Side: Contact Numbers, Email & Language Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <a
            href={`tel:${contact.primaryPhone}`}
            className="inline-flex items-center gap-1.5 font-bold text-gray-900 hover:text-black transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gray-800" />
            <span>{contact.phones[0]}</span>
          </a>

          <a
            href={`tel:${contact.whatsappPhone}`}
            className="hidden lg:inline-flex items-center gap-1.5 font-semibold text-gray-900 hover:text-black transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gray-800" />
            <span>{contact.phones[1]}</span>
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="hidden sm:inline-flex items-center gap-1.5 font-bold text-gray-900 hover:text-black transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-gray-800" />
            <span>{contact.email}</span>
          </a>

          {/* Language Switcher Pill */}
          <LanguageToggle variant="topbar" />
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
