import { useEffect } from 'react';

export const SEO = ({
  title,
  description = "सम्पूर्णानन्द संस्कृत विश्वविद्यालय वाराणसी से 'क-वर्ग' प्रथम श्रेणी में मान्यता प्राप्त। श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या - निःशुल्क आवासीय शिक्षा संस्थान।",
  keywords = "गुरुकुल अयोध्या, निःशुल्क गुरुकुल, सम्पूर्णानन्द संस्कृत विश्वविद्यालय, संस्कृत शिक्षा, वेद अध्ययन, स्वामी त्यागानन्द सरस्वती, Ayodhya Gurukul",
  ogImage = "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
}) => {
  useEffect(() => {
    // Set document title
    const fullTitle = title
      ? `${title} | श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या`
      : 'श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या | निःशुल्क आवासीय शिक्षा';
    document.title = fullTitle;

    // Helper to update or create meta tags
    const setMetaTag = (nameAttr, nameValue, content) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', window.location.href);

  }, [title, description, keywords, ogImage]);

  return null;
};

export default SEO;
