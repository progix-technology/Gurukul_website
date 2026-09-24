import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, PhoneCall, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import { INSTITUTION_INFO } from '../../data/institutionalData';
import { useLanguage } from '../../context/LanguageContext';

export const CallToAction = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-[#C68A32]/20 relative overflow-hidden w-full">
      <Container className="relative z-10 max-w-7xl px-4 sm:px-6">
        <div
          className="w-full rounded-2xl sm:rounded-3xl p-8 sm:p-14 text-center text-[#F8F4EA] relative overflow-hidden shadow-2xl"
          style={{
            backgroundColor: "#241B15",
            border: "2px solid #C68A32",
            boxShadow: "0 16px 40px rgba(36,27,21,0.22)",
          }}
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C68A32]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C96B25]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none text-xs font-serif font-bold uppercase tracking-wider mb-3.5 bg-[#C96B25] text-white border border-amber-300/30 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              {isEn ? "Session 2026-27 Admissions Open" : "सत्र 2026-27 प्रवेश प्रारम्भ"}
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#F8F4EA] leading-tight">
              {isEn ? (
                <>Provide Your Child With 100% Free <br className="hidden sm:inline" />Vedic Values & Modern Education</>
              ) : (
                <>अपने बालक को प्रदान करें निःशुल्क <br className="hidden sm:inline" />ऋषिकुल संस्कार एवं आधुनिक शिक्षा</>
              )}
            </h2>

            <p className="text-sm sm:text-base text-[#EDE7D4] leading-relaxed max-w-3xl mx-auto font-sans">
              {isEn
                ? "From Class 6 to Acharya (M.A.) level - entire boarding, lodging, sattvic meals, and textbooks are completely free. Admission timeline: 1 July to 31 July."
                : "कक्षा 6 से आचार्य (M.A.) स्तर तक संपूर्ण आवासीय शिक्षा, भोजन, आवास एवं पाठ्य पुस्तकें निःशुल्क। प्रवेश अवधि: 1 जुलाई से 31 जुलाई।"}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/admission"
                className="w-full sm:w-auto sm:min-w-[280px] h-[48px] inline-flex items-center justify-center text-center gap-2 px-6 rounded font-semibold text-sm sm:text-base whitespace-nowrap flex-nowrap transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-md shrink-0"
                style={{
                  backgroundColor: "#E5832E",
                  border: "2px solid #E5832E",
                  color: "#F8F4EA",
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                }}
              >
                <GraduationCap className="w-5 h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">{isEn ? "Inquire for Admission" : "ऑनलाइन प्रवेश पूछताछ करें"}</span>
              </Link>

              <a
                href={`tel:${INSTITUTION_INFO.contact.primaryPhone}`}
                className="w-full sm:w-auto sm:min-w-[280px] h-[48px] inline-flex items-center justify-center text-center gap-2 px-6 rounded font-semibold text-sm sm:text-base whitespace-nowrap flex-nowrap transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5 shadow-sm shrink-0"
                style={{
                  border: "2px solid #F8F4EA",
                  color: "#F8F4EA",
                  backgroundColor: "transparent",
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                }}
              >
                <PhoneCall className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">{isEn ? "Helpline: " : "हेल्पलाइन: "}{INSTITUTION_INFO.contact.phones[0]}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
