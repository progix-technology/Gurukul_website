import React from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import HistorySection from '../components/about/HistorySection';
import LeadershipTeam from '../components/about/LeadershipTeam';
 import CampusFacilities from '../components/about/CampusFacilities';
import MediaCoverageSection from '../components/common/MediaCoverageSection';
import MissionVision from '../components/about/MissionVision';
import CallToAction from '../components/home/CallToAction';
import { ABOUT_DATA } from '../data/aboutData';
import { Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import formerPrincipalImg from '../assets/IMG_1968.jpg';
import bannerBgImg from '../assets/img_2.jpeg';

export const About = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const { principalMessage } = ABOUT_DATA;

  const currentMsg = isEn ? (principalMessage.message_en || principalMessage.message) : principalMessage.message;
  const currentTitle = isEn ? (principalMessage.title_en || principalMessage.title) : principalMessage.title;
  const currentPrincipalName = isEn ? (principalMessage.principalName_en || principalMessage.principalName) : principalMessage.principalName;
  const currentQual = isEn ? (principalMessage.qualification_en || principalMessage.qualification) : principalMessage.qualification;

  return (
    <>
      <SEO
        title={isEn ? "About Gurukul - Heritage & Leadership" : "गुरुकुल परिचय"}
        description={isEn 
          ? "History, Swami Tyaganand Saraswati Ji, Principal's Message, and Academic Facilities of Shri Nishulk Gurukul Mahavidyalaya Ayodhya."
          : "श्री निःशुल्क गुरुकुल महाविद्यालय अयोध्या का इतिहास, संस्थापक स्वामी त्यागानन्द सरस्वती जी, प्राचार्य का संदेश एवं प्रबंध समिति।"
        }
      />

      {/* Page Header Banner */}
      <section className="relative overflow-hidden text-white pt-24 pb-16 sm:pt-32 sm:pb-24 bg-[#241B15] select-none">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBgImg}
            alt="श्री निःशुल्क गुरुकुल महाविद्यालय अयोध्या परिसर"
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
            <span>{isEn ? "ESTABLISHED IN 1925" : "सन् 1925 से स्थापित"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 drop-shadow-md">
            {isEn ? "About Gurukul Mahavidyalaya" : "गुरुकुल परिचय"}
          </h1>
          <p className="text-sm sm:text-base text-[#F8F4EA]/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
            {isEn 
              ? "Synthesizing ancient Vedic wisdom and modern sciences to nurture future nation-builders"
              : "प्राचीन प्राच्य शिक्षा पद्धति एवं आधुनिक ज्ञान के समन्वय से राष्ट्र निर्माता ब्रह्मचारियों का निर्माण"
            }
          </p>
        </Container>
      </section>

      {/* History */}
      <HistorySection />

      {/* Full Principal Message Section (Compact Open Layout, White BG) */}
      <section id="principal" className="py-12 sm:py-14 bg-white border-t border-[#C68A32]/30">
        <Container className="max-w-7xl">
          {/* Header Title */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-none text-xs font-serif font-bold uppercase tracking-wider mb-3.5 border bg-[#F2EBDA] text-[#C96B25] border-[#C68A32]/30 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-none bg-[#C96B25]"></span>
              {currentTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#241B15]">
              {isEn ? "Gurukul's Growth Journey & Auspicious Blessings" : "गुरुकुल की विकास यात्रा एवं मंगल कामना"}
            </h2>
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-px w-12 bg-[#C68A32]" />
              <span className="text-[#C96B25] text-base">✦</span>
              <div className="h-px w-12 bg-[#C68A32]" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 1. Left: पूर्व प्रधानाचार्य */}
            <div className="lg:col-span-3 flex flex-col items-center text-center order-2 lg:order-1">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-[#C68A32] shadow-lg p-1 bg-[#F8F4EA] mb-3 transition-transform duration-300 hover:scale-105">
                <img
                  src={formerPrincipalImg}
                  alt={isEn ? "Former Principal Swami Tyaganand Saraswati" : "पूर्व प्रधानाचार्य स्वामी त्यागानन्द सरस्वती"}
                  className="w-full h-full object-cover rounded-full object-top"
                  loading="lazy"
                />
              </div>
              <span className="px-3 py-0.5 rounded-full bg-[#241B15] text-[#C68A32] text-xs font-bold mb-1 shadow-sm">
                {isEn ? "Founder Principal" : "पूर्व प्रधानाचार्य"}
              </span>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#241B15]">
                {isEn ? "Swami Tyaganand Saraswati Ji" : "स्वामी त्यागानन्द सरस्वती जी"}
              </h3>
              <p className="text-xs text-[#8B4513] font-semibold mt-0.5">
                {isEn ? "Founder & 1st Chancellor (1925)" : "संस्थापक एवं प्रथम कुलपति (1925)"}
              </p>
            </div>

            {/* 2. Center: Principal Message Text */}
            <div className="lg:col-span-6 space-y-3 text-center order-1 lg:order-2 px-2 sm:px-3">
              <div className="space-y-3 text-sm sm:text-base text-[#3D2B1F] leading-relaxed font-serif text-justify sm:text-center">
                {currentMsg.split('\n\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Vedic Shloka Box */}
              <div className="mt-5 p-3.5 rounded-xl bg-[#F8F4EA] border border-[#C68A32] text-[#241B15] font-serif font-bold text-sm sm:text-base shadow-sm">
                <p>॥ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।</p>
                <p className="mt-0.5 text-[#8B4513]">सर्वे भद्राणि पश्यन्तु मा कश्चिद् दुःखभाग्भवेत् ॥</p>
              </div>
            </div>

            {/* 3. Right: वर्तमान प्रधानाचार्य */}
            <div className="lg:col-span-3 flex flex-col items-center text-center order-3">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-[#C68A32] shadow-lg p-1 bg-[#F8F4EA] mb-3 transition-transform duration-300 hover:scale-105">
                <img
                  src={formerPrincipalImg}
                  alt={isEn ? "Current Principal" : "वर्तमान प्रधानाचार्य"}
                  className="w-full h-full object-cover rounded-full object-top"
                  loading="lazy"
                />
              </div>
              <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#C96B25] text-[#F8F4EA] text-xs font-bold mb-1 shadow-sm">
                <Award className="w-3.5 h-3.5 text-white" />
                {isEn ? "Current Principal" : "वर्तमान प्रधानाचार्य"}
              </span>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#241B15]">
                {currentPrincipalName}
              </h3>
              <p className="text-xs text-[#8B4513] font-semibold mt-0.5">
                {currentQual}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission and Vision */}
      <MissionVision />

      {/* Leadership & Management */}
      <LeadershipTeam />

      {/* Facilities */}
      <CampusFacilities />

      {/* Media Coverage & Social Channels */}
      <MediaCoverageSection />

      {/* CTA */}
      <CallToAction />
    </>
  );
};

export default About;

