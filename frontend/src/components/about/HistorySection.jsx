import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ABOUT_DATA } from '../../data/aboutData';
import { Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import founderImg from '../../assets/IMG_1968.jpg';

export const HistorySection = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const { history } = ABOUT_DATA;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge={isEn ? "FOUNDER & HERITAGE" : "संस्थापक एवं इतिहास"}
              title={isEn ? "Glorious Heritage of Gurukul" : "गुरुकुल का गौरवशाली इतिहास"}
              subtitle={isEn ? "Sacred seat of learning in Ayodhya established by Swami Tyaganand Saraswati Ji" : "स्वामी त्यागानन्द सरस्वती जी द्वारा स्थापित अयोध्या की पावन विद्यापीठ"}
              align="left"
              className="mb-6"
            />

            <div className="space-y-4 text-base sm:text-lg text-gray-800 leading-relaxed font-serif">
              <p>
                {isEn ? (history.narrative_en || history.narrative) : history.narrative}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-orange-50/80 border border-orange-200">
                <div className="flex items-center gap-2 text-gurukul-saffron font-bold text-sm mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>{isEn ? "Established" : "स्थापना काल"}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold">
                  {isEn ? (history.established_en || history.established) : history.established}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>{isEn ? "Founder's Birthplace" : "संस्थापक जन्मस्थान"}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold">
                  {isEn ? (history.founderBirthPlace_en || history.founderBirthPlace) : history.founderBirthPlace}
                </p>
              </div>
            </div>
          </div>

          {/* Right Image / Founder Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400 bg-amber-50">
              <img
                src={founderImg}
                alt={isEn ? "Swami Tyaganand Saraswati - Founder" : "स्वामी त्यागानन्द सरस्वती - संस्थापक एवं प्रथम कुलपति"}
                className="w-full h-[400px] object-cover object-top block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241B15]/90 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <span className="px-3 py-1 rounded-full bg-gurukul-saffron text-white text-xs font-bold w-max mb-1.5 shadow">
                  {isEn ? "Founder & First Chancellor (1925)" : "संस्थापक एवं प्रथम कुलपति"}
                </span>
                <h4 className="font-serif font-bold text-lg text-amber-200">
                  {isEn ? (history.founderName_en || history.founderName) : history.founderName}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HistorySection;

