import React from 'react';
import Container from '../common/Container';
 import SectionHeading from '../common/SectionHeading';
 import { ABOUT_DATA } from '../../data/aboutData';
 import { useLanguage } from '../../context/LanguageContext';

export const LeadershipTeam = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const { leadership } = ABOUT_DATA;

  return (
    <section id="management" className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-[#C68A32]/30">
      <Container className="max-w-7xl">
        <SectionHeading
          badge={isEn ? "GUIDES & MANAGEMENT COMMITTEE" : "मार्गदर्शक एवं प्रबंध समिति"}
          title={isEn ? "Leadership & Governing Council" : "आचार्य एवं प्रबंध मंडल"}
          subtitle={isEn ? "Distinguished visionaries dedicated to advancing Vedic ethos and institutional growth" : "गुरुकुल के सुचारू संचालन एवं वैदिक मूल्यों के संवर्धन हेतु समर्पित मनीषी"}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((person, idx) => {
            const name = isEn ? (person.name_en || person.name) : person.name;
            const role = isEn ? (person.role_en || person.role) : person.role;
            const desc = isEn ? (person.description_en || person.description) : person.description;

            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-[#C68A32]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between text-center group aspect-square hover:-translate-y-1"
                style={{
                  boxShadow: "0 4px 16px rgba(36,27,21,0.06)",
                }}
              >
                <div className="w-16 h-16 rounded-xl bg-[#FAF6ED] flex items-center justify-center text-[#C96B25] font-bold text-2xl font-serif border-2 border-[#C68A32] group-hover:scale-105 transition-transform shadow-sm">
                  {name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-serif font-bold text-base text-[#241B15] mb-1.5 group-hover:text-[#C96B25] transition-colors">
                    {name}
                  </h4>

                  <span className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-[#FAF6ED] text-[#8B4513] border border-[#C68A32]/40 mb-2.5">
                    {role}
                  </span>

                  <p className="text-xs text-[#5C3D2E] leading-relaxed line-clamp-3">
                    {desc}
                  </p>
                </div>

                <div className="w-8 h-0.5 bg-[#C68A32]/30 group-hover:w-16 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default LeadershipTeam;

