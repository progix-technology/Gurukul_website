import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  hi: {
    // Navigation
    'nav.home': 'मुख्य पृष्ठ',
    'nav.about': 'गुरुकुल परिचय',
    'nav.courses': 'पाठ्यक्रम',
    'nav.admission': 'प्रवेश प्रक्रिया',
    'nav.adaniLab': 'Adani Computer Lab',
    'nav.events': 'कार्यक्रम',
    'nav.gallery': 'छायाचित्र',
    'nav.contact': 'संपर्क',
    'nav.admissionCta': 'प्रवेश संबंधी जानकारी',
    'nav.gurukulName': 'गुरुकुल महाविद्यालय',
    'nav.brandSub': 'अयोध्या धाम (उ.प्र.)',
    'nav.openMenu': 'मेनू खोलें',
    'nav.closeMenu': 'बंद करें',
    'nav.langLabel': 'भाषा / Language:',

    // TopBar
    'topbar.followUs': 'अनुसरण करें:',

    // Common Buttons & Labels
    'btn.admissionInfo': 'प्रवेश संबंधी जानकारी',
    'btn.aboutGurukul': 'गुरुकुल के बारे में',
    'btn.viewCourses': 'सभी पाठ्यक्रम देखें',
    'btn.contactUs': 'संपर्क करें',
    'btn.submit': 'संदेश भेजें',
    'btn.submitting': 'भेजा जा रहा है...',
    'btn.readMore': 'और पढ़ें',
    'btn.viewGallery': 'संपूर्ण छायाचित्र देखें',
    'btn.downloadBrochure': 'विवरणिका डाउनलोड करें',

    // Hero Section
    'hero.badge': '1925 से अविरल वैदिक सेवा',
    'hero.title': 'श्री निःशुल्क गुरुकुल महाविद्यालय',
    'hero.location': 'अयोध्या, उत्तर प्रदेश',
    'hero.subtitle': 'परम्परा, संस्कृति एवं ज्ञान की एकात्म शिक्षा',
    'hero.desc': 'प्राचीन ज्ञान और नई पीढ़ी का संगम – 1925 से वैदिक, संस्कृत और आधुनिक शिक्षा का अनूठा केंद्र।',

    // Home Sections
    'home.stats.experience': 'गौरवशाली वर्ष',
    'home.stats.students': 'वर्तमान में अध्ययनरत विद्यार्थी',
    'home.stats.freeEducation': 'निःशुल्क शिक्षा एवं आवास',
    'home.stats.affiliation': 'सम्पूर्णानन्द वि.वि. से संबद्ध',

    'home.about.heading': 'गुरुकुल के बारे में',
    'home.about.sub': 'ऋषि परम्परा और आधुनिक ज्ञान का संगम',
    
    'home.courses.heading': 'हमारे प्रमुख पाठ्यक्रम',
    'home.courses.sub': 'प्राथमिक से शास्त्री (स्नातक) एवं आचार्य (परास्नातक) तक की वैदिक एवं आधुनिक शिक्षा',

    'home.events.heading': 'आगामी एवं प्रमुख कार्यक्रम',
    'home.events.sub': 'गुरुकुल में आयोजित होने वाले प्रमुख वैदिक उत्सव एवं सांस्कृतिक कार्यक्रम',

    'home.gallery.heading': 'गुरुकुल छायाचित्र',
    'home.gallery.sub': 'यज्ञ, अध्ययन, कंप्यूटर लैब एवं आश्रम जीवन की कुछ झलकियाँ',

    // Footer
    'footer.aboutTitle': 'श्री निःशुल्क गुरुकुल महाविद्यालय',
    'footer.aboutDesc': 'सम्पूर्णानन्द संस्कृत विश्वविद्यालय वाराणसी से "क-वर्ग" प्रथम श्रेणी में मान्यता प्राप्त। 1925 से वैदिक संस्कृति, संस्कृत व्याकरण एवं आधुनिक कंप्यूटर शिक्षा का निःशुल्क केंद्र।',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.coursesTitle': 'पाठ्यक्रम',
    'footer.contactTitle': 'संपर्क विवरण',
    'footer.address': '5/5/13 जालपा लाला, जालपा मंदिर के सामने, अयोध्या, फैज़ाबाद - 224123',
    'footer.copyright': '© 2026 श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या। सर्वाधिकार सुरक्षित।',
    'footer.designedBy': 'प्रोजिक्स टेक्नोलॉजीज द्वारा विकसित'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Gurukul',
    'nav.courses': 'Courses',
    'nav.admission': 'Admission Process',
    'nav.adaniLab': 'Adani Computer Lab',
    'nav.events': 'Events & Utsav',
    'nav.gallery': 'Photo Gallery',
    'nav.contact': 'Contact Us',
    'nav.admissionCta': 'Admission Inquiry',
    'nav.gurukulName': 'Gurukul Mahavidyalaya',
    'nav.brandSub': 'Ayodhya Dham (U.P.)',
    'nav.openMenu': 'Open Menu',
    'nav.closeMenu': 'Close',
    'nav.langLabel': 'Language / भाषा:',

    // TopBar
    'topbar.followUs': 'Follow Us:',

    // Common Buttons & Labels
    'btn.admissionInfo': 'Admission Information',
    'btn.aboutGurukul': 'About Gurukul',
    'btn.viewCourses': 'View All Courses',
    'btn.contactUs': 'Contact Us',
    'btn.submit': 'Send Message',
    'btn.submitting': 'Sending...',
    'btn.readMore': 'Read More',
    'btn.viewGallery': 'View Full Gallery',
    'btn.downloadBrochure': 'Download Brochure',

    // Hero Section
    'hero.badge': 'UNINTERRUPTED VEDIC SERVICE SINCE 1925',
    'hero.title': 'Shri Nishulk Gurukul Mahavidyalaya',
    'hero.location': 'Ayodhya, Uttar Pradesh',
    'hero.subtitle': 'Integrated Education of Tradition, Culture & Wisdom',
    'hero.desc': 'A unique centre of Vedic, Sanskrit and modern education since 1925 – a confluence of ancient heritage and the new generation.',

    // Home Sections
    'home.stats.experience': 'Glorious Years',
    'home.stats.students': 'Active Enrolled Students',
    'home.stats.freeEducation': 'Free Education & Boarding',
    'home.stats.affiliation': 'Affiliated to Sampurnanand Univ.',

    'home.about.heading': 'About The Gurukul',
    'home.about.sub': 'Confluence of Rishi Tradition and Modern Knowledge',

    'home.courses.heading': 'Our Academic Programs',
    'home.courses.sub': 'Vedic, Sanskrit & Modern education from Prathama to Shastri (UG) & Acharya (PG)',

    'home.events.heading': 'Upcoming & Key Events',
    'home.events.sub': 'Annual Vedic Yagnas, festivals and cultural celebrations organized at Gurukul',

    'home.gallery.heading': 'Gurukul Photo Gallery',
    'home.gallery.sub': 'Glimpses of daily Hawan, Vedic chanting, Computer Lab & Ashram life',

    // Footer
    'footer.aboutTitle': 'Shri Nishulk Gurukul Mahavidyalaya',
    'footer.aboutDesc': 'Recognized in "A-Grade First Class" by Sampurnanand Sanskrit University, Varanasi. Free center for Vedic culture, Sanskrit grammar and modern computer education since 1925.',
    'footer.quickLinks': 'Quick Links',
    'footer.coursesTitle': 'Programs',
    'footer.contactTitle': 'Contact Details',
    'footer.address': '5/5/13 Jalpa Lala, Opp. Jalpa Temple, Ayodhya, Faizabad - 224123 (U.P.)',
    'footer.copyright': '© 2026 Shri Nishulk Gurukul Mahavidyalaya, Ayodhya. All Rights Reserved.',
    'footer.designedBy': 'Developed by Progix Technologies'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('site_language') || 'hi';
  });

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem('site_language', lang);
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'hi' ? 'en' : 'hi');
  };

  const t = (key, fallback = '') => {
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    if (translations.hi[key]) {
      return translations.hi[key];
    }
    return fallback || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
