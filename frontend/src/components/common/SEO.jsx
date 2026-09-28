import { useEffect } from 'react';

/**
 * Enhanced SEO Component with Dynamic OpenGraph, Twitter Cards, Canonical URL
 * and JSON-LD Structured Data for Google Search Knowledge Graph.
 */
export const SEO = ({
  title,
  description = "सम्पूर्णानन्द संस्कृत विश्वविद्यालय वाराणसी से 'क-वर्ग' प्रथम श्रेणी में मान्यता प्राप्त। मर्यादा पुरुषोत्तम श्री राम की पावन जन्मभूमि अयोध्या में 100 वर्षों से संचालित निःशुल्क आवासीय वैदिक एवं आधुनिक शिक्षा संस्थान (स्थापना 1925)।",
  keywords = "गुरुकुल अयोध्या, निःशुल्क गुरुकुल, सम्पूर्णानन्द संस्कृत विश्वविद्यालय, संस्कृत शिक्षा, वेद अध्ययन, स्वामी त्यागानन्द सरस्वती, Ayodhya Gurukul, Vedic Education Ayodhya",
  ogImage = "https://www.gurukulayodhya.com/favicon.jpeg",
  ogType = "website",
  canonicalUrl,
}) => {
  useEffect(() => {
    // 1. Title formatting
    const fullTitle = title
      ? `${title} | श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या`
      : 'श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या | 100 वर्ष पुरातन निःशुल्क आवासीय शिक्षा';
    document.title = fullTitle;

    // Current page URL
    const currentUrl = canonicalUrl || window.location.href;

    // 2. Helper to set/create <meta> tags
    const setMeta = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Helper to set/create <link> tags
    const setLink = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Standard Meta
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'author', 'श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या');

    // Canonical link
    setLink('canonical', currentUrl);

    // OpenGraph Tags
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', currentUrl);
    setMeta('property', 'og:site_name', 'श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या');
    setMeta('property', 'og:locale', 'hi_IN');

    // Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // 4. Inject / Update JSON-LD Structured Data Schema (EducationalOrganization)
    const schemaId = 'gurukul-structured-data';
    let scriptTag = document.getElementById(schemaId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या",
      "alternateName": "Shri Nishulk Gurukul Mahavidyalaya Ayodhya",
      "url": "https://www.gurukulayodhya.com",
      "logo": "https://www.gurukulayodhya.com/favicon.jpeg",
      "foundingDate": "1925",
      "founder": {
        "@type": "Person",
        "name": "स्वामी त्यागानन्द सरस्वती जी"
      },
      "description": "सम्पूर्णानन्द संस्कृत विश्वविद्यालय वाराणसी से मान्यता प्राप्त अयोध्या धाम में 100 वर्षों से संचालित निःशुल्क आवासीय गुरुकुल।",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5/5/13 जालपा लाला, जालपा मंदिर के सामने",
        "addressLocality": "Ayodhya",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "224123",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.7818185,
        "longitude": 82.1793697
      },
      "telephone": "+919071235505",
      "email": "gurukulayodhya@gmail.com",
      "sameAs": [
        "https://www.facebook.com/sri.nissulka.gurukulamahavidyalaya.ayodhya/",
        "https://www.youtube.com/@gurukulayodhya"
      ]
    };

    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, ogImage, ogType, canonicalUrl]);

  return null;
};

export default SEO;
