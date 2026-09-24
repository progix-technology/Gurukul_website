import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Lightbox from '../components/common/Lightbox';
import CallToAction from '../components/home/CallToAction';

import bannerLabImage from '../assets/Images/WhatsApp Image 2026-09-24 at 11.11.06 AM.jpeg';
import showcaseImg from '../assets/img_4.jpeg';
import img1 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.10.55 AM.jpeg';
import img2 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.10.56 AM (2).jpeg';
import img3 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.10.56 AM.jpeg';
import img4 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.10.57 AM (1).jpeg';
import img5 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.10.59 AM (3).jpeg';
import img6 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.11.01 AM (2).jpeg';
import img7 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.11.01 AM (3).jpeg';
import img8 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.11.01 AM.jpeg';
import img9 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.11.02 AM (1).jpeg';
import img10 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.11.02 AM (2).jpeg';
import img11 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.11.02 AM.jpeg';
import img12 from '../assets/Images/WhatsApp Image 2026-09-24 at 11.11.04 AM.jpeg';
import adaniLabPdf from '../assets/gurukul_adani_lab.pdf';

import {
  Monitor,
  Cpu,
  Wifi,
  BookOpen,
  ShieldCheck,
  Sparkles,
  Code,
  Globe,
  Database,
  Award,
  CheckCircle2,
  Zap,
  GraduationCap,
  Camera,
  Layers,
  Download,
  FileText,
  ExternalLink
} from 'lucide-react';

export const AdaniComputerLab = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images array for Lightbox and Grid
  const labGallery = [
    {
      id: 1,
      thumbnail: bannerLabImage,
      fullImage: bannerLabImage,
      title: 'Adani Computer Lab - मुख्य हेरिटेज म्यूरल',
      caption: 'प्राचीन वैदिक ज्ञान, धनुर्विद्या व आधुनिक कंप्यूटर विज्ञान एवं रोबोटिक्स का समन्वय दर्शाता भव्य कलात्मक म्यूरल।'
    },
    {
      id: 2,
      thumbnail: img1,
      fullImage: img1,
      title: 'हेडसेट के साथ डिजिटल अध्ययन',
      caption: 'कंप्यूटर वर्कस्टेशन पर हेडफोन लगाकर डिजिटल ऑडियो-विजुअल पाठ का अध्ययन करता उत्साहित छात्र।'
    },
    {
      id: 3,
      thumbnail: img2,
      fullImage: img2,
      title: 'परस्पर सहयोगात्मक अध्ययन',
      caption: 'कंप्यूटर लैब में हेडफोन लगाए एक साथ डिजिटल शिक्षण व कंप्यूटर प्रैक्टिकल करते दो विद्यार्थी।'
    },
    {
      id: 4,
      thumbnail: img3,
      fullImage: img3,
      title: 'अत्याधुनिक वर्कस्टेशन व पुस्तकालय',
      caption: 'वातानुकूलित कंप्यूटर लैब का आंतरिक दृश्य, सुसज्जित कंप्यूटर टेबल, वॉल बुकशेल्फ एवं हार्डवेयर चार्ट।'
    },
    {
      id: 5,
      thumbnail: img4,
      fullImage: img4,
      title: 'भव्य स्वागत कक्ष एवं पुष्प सज्जा',
      caption: 'अडानी कंप्यूटर लैब का सुसज्जित रिसेप्शन काउंटर, ताजे फूलों की मालाएँ एवं सुनहरी वॉल पेंटिंग।'
    },
    {
      id: 6,
      thumbnail: img5,
      fullImage: img5,
      title: 'Adani Computer Lab का बाह्य स्वरूप',
      caption: 'गुरुकुल परिसर में नवनिर्मित वातानुकूलित कंप्यूटर लैब भवन का भव्य प्रवेश द्वार व हरियाली।'
    },
    {
      id: 7,
      thumbnail: img6,
      fullImage: img6,
      title: 'वैदिक उद्घाटन एवं श्रीफल पूजन',
      caption: 'कंप्यूटर लैब के लोकार्पण पर वैदिक मंत्रोच्चार के बीच मुख्य द्वार पर श्रीफल (नारियल) फोड़कर पूजा-अर्चना।'
    },
    {
      id: 8,
      thumbnail: img7,
      fullImage: img7,
      title: 'आचार्य जी द्वारा व्यक्तिगत मार्गदर्शन',
      caption: 'कंप्यूटर शिक्षक/आचार्य जी द्वारा विद्यार्थियों को कंप्यूटर स्क्रीन पर कोडिंग एवं टाइपिंग का व्यावहारिक मार्गदर्शन।'
    },
    {
      id: 9,
      thumbnail: img8,
      fullImage: img8,
      title: 'लोकार्पण अवसर पर सामूहिक छायाचित्र',
      caption: 'कंप्यूटर लैब के उद्घाटन पर गुरुकुल के ब्रह्मचारी, आचार्यगण, न्यासी एवं सम्मानित अतिथियों का सामूहिक चित्र।'
    },
    {
      id: 10,
      thumbnail: img9,
      fullImage: img9,
      title: 'सीनियर एवं जूनियर ब्रह्मचारियों का साथ',
      caption: 'सीनियर छात्र द्वारा कीबोर्ड पर टाइपिंग अभ्यास एवं कनिष्ठ छात्र द्वारा स्क्रीन पर उत्सुकता से सीखना।'
    },
    {
      id: 11,
      thumbnail: img10,
      fullImage: img10,
      title: 'कतारबद्ध वर्कस्टेशन्स पर अध्ययन',
      caption: 'आधुनिक वातानुकूलित वातावरण में कतारबद्ध वर्कस्टेशन्स पर तल्लीन होकर कंप्यूटर सीखते छात्र।'
    },
    {
      id: 12,
      thumbnail: img11,
      fullImage: img11,
      title: 'कक्षा में डिजिटल अभ्यास',
      caption: 'स्कूल बैग के साथ कंप्यूटर लैब में साथी छात्र को डिजिटल स्क्रीन पर अभ्यास करते देखता विद्यार्थी।'
    },
    {
      id: 13,
      thumbnail: img12,
      fullImage: img12,
      title: 'लैब में अनुशासित शिक्षण सत्र',
      caption: 'सभी वर्कस्टेशन्स पर हेडफोन लगाकर पूरे अनुशासन एवं एकाग्रता के साथ डिजिटल अध्ययन करते छात्र।'
    }
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? labGallery.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === labGallery.length - 1 ? 0 : prev + 1));
  };

  const modules = [
    {
      icon: Monitor,
      title: 'कंप्यूटर आधारभूत शिक्षा (Fundamentals)',
      englishTitle: 'Basic Computer Operations & MS Office',
      desc: 'ऑपरेटिंग सिस्टम, एमएस ऑफिस सुइट (Word, Excel, PowerPoint), इंटरनेट सुरक्षा तथा हिंदी/संस्कृत यूनिकोड टाइपिंग का संपूर्ण व्यावहारिक अभ्यास।',
      points: [
        'विंडोज़ व बेसिक ऑपरेटिंग सिस्टम प्रबंधन',
        'यूनिकोड देवनागरी एवं संस्कृत टाइपिंग में दक्षता',
        'इंटरनेट ब्राउजिंग, ईमेल व साइबर सुरक्षा जागरूकता',
        'दैनिक अभिलेख व डॉक्यूमेंटेशन निर्माण'
      ],
      color: '#C96B25'
    },
    {
      icon: Code,
      title: 'संस्कृत एवं कम्प्यूटेशनल भाषाविज्ञान',
      englishTitle: 'Sanskrit & Computational Linguistics',
      desc: 'पाणिनीय व्याकरण के नियमों को कंप्यूटर एल्गोरिदम से जोड़कर संस्कृत ग्रंथों का डिजिटलीकरण, ओसीआर (OCR) एवं डिजिटल शोध तकनीकों का प्रशिक्षण।',
      points: [
        'प्राचीन पांडुलिपियों व ग्रंथों का डिजिटलीकरण',
        'संस्कृत सर्च इंजन व डिजिटल शब्दकोश का उपयोग',
        'पाणिनीय सूत्र संरचना व कंप्यूटर लॉजिक का समन्वय',
        'संस्कृत ई-बुक्स व डिजिटल शोध पत्रिकाओं का संपादन'
      ],
      color: '#C68A32'
    },
    {
      icon: Globe,
      title: 'आधुनिक प्रोग्रामिंग एवं कोडिंग',
      englishTitle: 'Programming, Python & Web Basics',
      desc: 'विद्यार्थियों में तार्किक सोच और समस्या समाधान क्षमता विकसित करने हेतु आधुनिक प्रोग्रामिंग भाषाएं (Python Basics, HTML/CSS) और लॉजिक बिल्डिंग।',
      points: [
        'पायथन प्रोग्रामिंग की बुनियादी अवधारणाएं',
        'वेबसाइट निर्माण (HTML/CSS/Web Basics)',
        'कंप्यूटेशनल थिंकिंग एवं एल्गोरिदम लॉजिक',
        'डिजिटल प्रोजेक्ट्स व प्रैक्टिकल असाइनमेंट्स'
      ],
      color: '#2E7D32'
    },
    {
      icon: Database,
      title: 'डिजिटल ई-लाइब्रेरी एवं ऑनलाइन शोध',
      englishTitle: 'Digital E-Library & Online Research',
      desc: 'राष्ट्रीय डिजिटल लाइब्रेरी (NDL), सम्पूर्णानन्द संस्कृत विश्वविद्यालय के डिजिटल रिपॉजिटरी तथा वैश्विक शोध पत्रिकाओं तक छात्रों की निःशुल्क पहुँच।',
      points: [
        'वैदिक एवं दार्शनिक ग्रंथों की डिजिटल लाइब्रेरी',
        'ऑनलाइन शोध पोर्टल व शोध-पत्रों का अध्ययन',
        'ऑडियो-विजुअल वैदिक व्याख्यान एवं लेक्चर्स',
        'डिजिटल नोट्स व असाइनमेंट सबमिशन सिस्टम'
      ],
      color: '#1565C0'
    }
  ];

  const labFeatures = [
    {
      icon: Cpu,
      title: 'शक्तिशाली कंप्यूटिंग सिस्टम्स',
      desc: 'नवीनतम प्रोसेसर, तेज एसएसडी (SSD) और हाई-रेज़ोल्यूशन मॉनिटर्स से सुसज्जित आधुनिक वर्कस्टेशन।'
    },
    {
      icon: Zap,
      title: 'निर्बाध ऑनलाइन यूपीएस बैकअप',
      desc: 'कक्षाओं व प्रैक्टिकल सत्रों में बिना किसी रुकावट के अध्ययन हेतु 24x7 पावर बैकअप सुविधा।'
    },
    {
      icon: Wifi,
      title: 'उच्च गति सुरक्षित ब्रॉडबैंड',
      desc: 'शैक्षणिक शोध व अध्ययन के लिए सुरक्षित, फ़िल्टर्ड हाई-स्पीड वाई-फाई एवं लैन कनेक्टिविटी।'
    },
    {
      icon: GraduationCap,
      title: 'योग्य एवं समर्पित आईटी प्रशिक्षक',
      desc: 'अनुभवी कंप्यूटर शिक्षकों द्वारा प्रत्येक विद्यार्थी पर व्यक्तिगत ध्यान व प्रायोगिक मार्गदर्शन।'
    },
    {
      icon: Award,
      title: 'प्रैक्टिकल व प्रोजेक्ट आधारित शिक्षा',
      desc: 'केवल थ्योरी नहीं, बल्कि दैनिक हैंड्स-ऑन प्रैक्टिकल और रियल-वर्ल्ड प्रोजेक्ट्स पर विशेष बल।'
    },
    {
      icon: ShieldCheck,
      title: 'वातानुकूलित एवं सुरक्षित वातावरण',
      desc: 'छात्रों के स्वास्थ्य एवं एकाग्रता हेतु शांत, स्वच्छ, आधुनिक व पूर्णतः वातानुकूलित कंप्यूटर लैब।'
    }
  ];

  return (
    <>
      <SEO
        title="Adani Computer Lab - आधुनिक कंप्यूटर प्रयोगशाला"
        description="श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या की अत्याधुनिक Adani Computer Lab - अप्रैल 2026 में अडानी फाउंडेशन (Adani Foundation) द्वारा स्थापित। जहाँ वैदिक संस्कृति के साथ आधुनिक कंप्यूटर, कोडिंग एवं डिजिटल साक्षरता की निःशुल्क शिक्षा दी जाती है।"
      />

      {/* 1. HERO BANNER WITH USER'S SPECIFIED IMAGE */}
      <section className="relative min-h-[440px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-[#241B15] select-none">
        {/* Background Image with Light Warm Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url("${bannerLabImage}")` }}
        />
        {/* Light Warm Vedic Overlay - letting the lab image shine through */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(36,27,21,0.55) 0%, rgba(36,27,21,0.35) 50%, rgba(36,27,21,0.70) 100%)',
          }}
        />
        <div className="absolute top-0 right-0 w-80 h-80 bg-gurukul-saffron/20 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10 text-center pt-28 pb-16 sm:pt-36 sm:pb-24 max-w-4xl mx-auto">
          <div className="text-3xl sm:text-4xl mb-2 font-serif text-[#C68A32]">
            ॐ
          </div>
          <div className="inline-flex items-center px-4 py-1.5 rounded-none bg-transparent text-[#F8F4EA] text-xs sm:text-sm font-serif font-bold uppercase tracking-wider mb-4 border border-[#C68A32] shadow-sm">
            <span>लोकार्पण: अप्रैल 2026 | अडानी फाउंडेशन (ADANI FOUNDATION) द्वारा स्थापित</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-3 tracking-tight drop-shadow-md">
            Adani Computer Lab
          </h1>

          <p className="text-lg sm:text-2xl text-[#C68A32] font-serif font-semibold mb-4 drop-shadow">
            अडानी कंप्यूटर एवं डिजिटल साक्षरता प्रयोगशाला
          </p>

          <div className="h-0.5 w-24 bg-[#C68A32] mx-auto mb-5" />

          <p className="text-sm sm:text-base text-[#F8F4EA]/95 max-w-3xl mx-auto leading-relaxed font-sans drop-shadow-sm font-medium">
            अप्रैल 2026 में <strong>अडानी फाउंडेशन (Adani Foundation)</strong> के पावन सहयोग से स्थापित यह अत्याधुनिक कंप्यूटर लैब, गुरुकुल के विद्यार्थियों को वैदिक ज्ञान के साथ 21वीं सदी के डिजिटल कौशल, कोडिंग व ई-रिसर्च से सुसज्जित कर रही है।
          </p>
        </Container>
      </section>

      {/* 2. LAB OVERVIEW & BANNER IMAGE SHOWCASE */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Main Banner Image with golden frame */}
            <div className="lg:col-span-6 relative">
              <div
                onClick={() => openLightbox(4)}
                className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                style={{
                  border: '3px solid #C68A32',
                  boxShadow: '0 20px 40px rgba(36,27,21,0.22)'
                }}
              >
                <img
                  src={showcaseImg}
                  alt="Adani Computer Lab - Shri Nishulk Gurukul Ayodhya"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6 text-white">
                  <span className="inline-block px-2.5 py-1 bg-[#C96B25] text-white text-[11px] font-bold rounded-sm mb-1 uppercase tracking-wider">
                    लोकार्पण: अप्रैल 2026 (अडानी फाउंडेशन)
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white">
                    अडानी कंप्यूटर लैब - भव्य स्वागत कक्ष एवं आंतरिक स्वरूप
                  </h3>
                </div>
              </div>
            </div>

            {/* Right: Overview Text */}
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none text-xs font-serif font-bold uppercase tracking-wider bg-[#FFF2DE] text-[#B35614] border border-[#E9BF8C] shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#C96B25]" />
                अडानी फाउंडेशन पहल — अप्रैल 2026
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#241B15] leading-tight">
                आधुनिक तकनीक से सशक्त बनते हमारे वैदिक विद्यार्थी
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                <strong>अप्रैल 2026</strong> में <strong>अडानी फाउंडेशन (Adani Foundation)</strong> द्वारा श्री निःशुल्क गुरुकुल महाविद्यालय में अत्याधुनिक कंप्यूटर लैब का भव्य शुभारंभ किया गया।
              </p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                यहाँ छात्र वेद और व्याकरण की प्राचीन विद्या के साथ-साथ आधुनिक डिजिटल टूल्स, प्रोग्रामिंग लॉजिक (Python, Web Basics), ई-रिसर्च और कंप्यूटर अनुप्रयोगों का व्यावहारिक ज्ञान पूर्णतः निःशुल्क प्राप्त कर रहे हैं।
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  '100% हैंड्स-ऑन प्रैक्टिकल ट्रेनिंग',
                  'संस्कृत डिजिटलीकरण व शोध कार्य',
                  'स्मार्ट ऑडियो-विजुअल लर्निंग',
                  'प्रत्येक छात्र को व्यक्तिगत कंप्यूटर'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#C96B25] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. ADANI FAMILY VISIT STORY & GAUTAM ADANI'S OFFICIAL QUOTE */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#C68A32]/20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              badge="प्रेरणादायी पहल"
              title="अडानी परिवार का अयोध्या प्रवास एवं गुरुकुल को अनुपम उपहार"
              subtitle="विद्यार्थियों की अभिलाषा और अडानी फाउंडेशन का पावन संकल्प"
            />

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Story narrative */}
              <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                <p>
                  <strong>अप्रैल 2026</strong> में प्रसिद्ध उद्योगपति <strong>श्री गौतम अडानी</strong>, अपनी धर्मपत्नी एवं अडानी फाउंडेशन की अध्यक्षा <strong>डॉ. प्रीति अडानी</strong>, सुपुत्र <strong>श्री करण अडानी</strong> तथा पुत्रवधू <strong>श्रीमती परिधि अडानी</strong> के साथ अयोध्या धाम पधारे।
                </p>
                <p>
                  श्रीराम जन्मभूमि मंदिर में रामलला के दर्शन एवं पूजन के उपरांत अडानी परिवार ने <strong>श्री निःशुल्क गुरुकुल महाविद्यालय</strong> का अवलोकन किया तथा यहाँ अध्ययनरत आचार्यों एवं ब्रह्मचारियों से आत्मीय संवाद स्थापित किया।
                </p>
                <p>
                  संवाद के दौरान जब गुरुकुल के नन्हे विद्यार्थियों ने आधुनिक कंप्यूटर सीखने की इच्छा व्यक्त की, तो इस विनम्र आग्रह को सम्मान देते हुए <strong>अडानी फाउंडेशन (Adani Foundation)</strong> ने तत्परता से गुरुकुल परिसर में इस सर्वसुविधायुक्त स्टेट-ऑफ-द-आर्ट कंप्यूटर लैब की स्थापना की।
                </p>
              </div>

              {/* Official Quote Box */}
              <div
                className="lg:col-span-5 rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-xl"
                style={{
                  backgroundColor: '#241B15',
                  border: '2px solid #C68A32',
                }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#C68A32]/15 rounded-full blur-2xl pointer-events-none" />
                
                <div className="text-3xl text-[#C68A32] font-serif mb-2">“</div>
                <p className="text-xs sm:text-sm text-[#F8F4EA] leading-relaxed italic font-serif relative z-10">
                  श्री निःशुल्क गुरुकुल महाविद्यालय के विद्यार्थियों को आधुनिक कंप्यूटर लैब के माध्यम से तकनीक से जुड़ते देखना अत्यंत सुखद व संतोषप्रद है। विद्यार्थियों की एक छोटी सी इच्छा को पूरा कर पाना मेरे लिए असीम आनंद का विषय है।
                </p>
                <p className="text-xs text-[#EDE7D4] leading-relaxed mt-3 pt-3 border-t border-[#C68A32]/30 relative z-10 font-sans">
                  यह पहल भारत की प्राचीन ज्ञान परंपरा और डिजिटल युग के बीच एक सुदृढ़ सेतु निर्माण का प्रयास है, जिससे युवा पीढ़ी अपनी सांस्कृतिक जड़ों से जुड़े रहकर ज्ञान के नए अवसरों से समृद्ध हो सके।
                </p>

                <div className="mt-4 pt-3 flex items-center justify-between gap-3 text-left relative z-10">
                  <div>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#C68A32]">
                      श्री गौतम अडानी
                    </h4>
                    <span className="text-[11px] text-[#D4C4A0]">
                      सोशल मीडिया मंच 'X' पर व्यक्त उद्गार
                    </span>
                  </div>
                  <span className="px-2.5 py-1 bg-[#2E221B] border border-[#C68A32]/40 text-[#C68A32] text-[10px] font-bold rounded uppercase">
                    Adani Foundation
                  </span>
                </div>
              </div>
            </div>

            {/* Times of India Media Coverage Banner */}
            <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border-2 border-[#D32F2F]/30 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D32F2F] text-white flex items-center justify-center font-serif font-black text-xl shadow-md flex-shrink-0">
                  TOI
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold font-mono text-[#D32F2F] tracking-wide uppercase">
                      THE TIMES OF INDIA • Media Report
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#241B15]">
                    Adani Foundation sets up modern computer lab at Ayodhya Gurukul
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 font-sans">
                    टाइम्स ऑफ इंडिया में प्रकाशित विशेष समाचार रिपोर्ट (TNN Coverage)
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <a
                  href={adaniLabPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#D32F2F] hover:bg-[#b71c1c] text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>द टाइम्स ऑफ इंडिया PDF देखें</span>
                </a>
                <a
                  href="https://timesofindia.indiatimes.com/city/lucknow/adani-foundation-sets-up-modern-computer-lab-at-ayodhya-gurukul/articleshow/133548689.cms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 text-xs sm:text-sm font-semibold shadow-sm hover:bg-gray-50 transition-all"
                >
                  <ExternalLink className="w-4 h-4 text-[#C96B25]" />
                  <span>TOI Online Article</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. DEDICATED PHOTO GALLERY (ALL 13 LAB IMAGES) */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-[#C68A32]/20">
        <Container>
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none text-xs font-serif font-bold uppercase tracking-wider mb-2 bg-[#FFF2DE] text-[#B35614] border border-[#E9BF8C] shadow-sm">
              <Camera className="w-3.5 h-3.5 text-[#C96B25]" />
              चित्र वीथिका (Photo Gallery)
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#241B15]">
              Adani Computer Lab के सजीव छायाचित्र
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 font-sans">
              कंप्यूटर लैब के लोकार्पण, विद्यार्थियों के अध्ययन एवं प्रायोगिक प्रशिक्षण के दुर्लभ चित्र (क्लिक करके बड़े आकार में देखें)
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {labGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-xl overflow-hidden bg-white border border-[#C68A32]/30 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-3.5 bg-white flex-1 flex flex-col justify-between">
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-[#241B15] line-clamp-1 group-hover:text-[#C96B25] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-600 mt-1 line-clamp-2 leading-relaxed font-sans">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CURRICULUM MODULES */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#C68A32]/20">
        <Container>
          <SectionHeading
            badge="प्रशिक्षण पाठ्यक्रम"
            title="कंप्यूटर लैब में सिखाए जाने वाले मुख्य विषय"
            subtitle="कक्षा 6 से आचार्य स्तर तक क्रमिक एवं व्यवस्थित डिजिटल शिक्षा पाठ्यक्रम"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {modules.map((mod, idx) => {
              const IconComp = mod.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] rounded-2xl p-7 sm:p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
                  style={{ borderColor: 'rgba(198,138,50,0.3)' }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md flex-shrink-0"
                      style={{ backgroundColor: mod.color }}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-[#241B15]">
                        {mod.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#8B4513] mt-0.5">
                        {mod.englishTitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5 font-sans">
                    {mod.desc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-gray-200">
                    {mod.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                        <span className="text-[#C96B25] font-bold mt-0.5">•</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 7. INFRASTRUCTURE & FACILITIES */}
      <section className="py-16 sm:py-20 bg-[#241B15] text-[#F8F4EA] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C68A32]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C96B25]/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <SectionHeading
            badge="प्रयोगशाला सुविधाएँ"
            title="Adani Computer Lab की मुख्य विशेषताएँ"
            subtitle="अत्याधुनिक तकनीकी अवसंरचना जो विद्यार्थियों को देती है विश्वस्तरीय सीखने का माहौल"
            light={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {labFeatures.map((feat, idx) => {
              const FIcon = feat.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(198, 138, 50, 0.35)',
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C68A32]/20 border border-[#C68A32]/50 text-[#C68A32] flex items-center justify-center mb-4 shadow">
                    <FIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#C68A32] mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#EDE7D4] leading-relaxed font-sans">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Special Quote Banner */}
          <div
            className="mt-14 p-6 sm:p-8 rounded-2xl text-center relative overflow-hidden"
            style={{
              backgroundColor: 'rgba(201,107,37,0.15)',
              border: '2px solid #C68A32'
            }}
          >
            <p className="text-base sm:text-xl font-serif font-bold text-[#F8F4EA] leading-relaxed">
              "प्राचीन ऋषि परम्परा और 21वीं सदी की अत्याधुनिक तकनीक — दोनों के समन्वय से ही एक प्रबुद्ध एवं आत्मनिर्भर भारत का निर्माण सम्भव है।"
            </p>
            <p className="text-xs sm:text-sm text-[#C68A32] mt-2 font-serif font-semibold">
              — श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या
            </p>
          </div>
        </Container>
      </section>

      {/* 8. INTERACTIVE LIGHTBOX POPUP FOR FULLSCREEN VIEW */}
      <Lightbox
        isOpen={lightboxOpen}
        images={labGallery}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />

      {/* 9. CALL TO ACTION */}
      <CallToAction />
    </>
  );
};

export default AdaniComputerLab;
