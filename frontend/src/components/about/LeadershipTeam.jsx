import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';

import teacher1 from '../../assets/teachers_images/img_1.jpeg';
import teacher2 from '../../assets/teachers_images/img_2.jpeg';
import teacher3 from '../../assets/teachers_images/img_3.jpeg';
import teacher4 from '../../assets/teachers_images/img_4.jpeg';
import teacher5 from '../../assets/teachers_images/img_5.jpeg';
import teacher6 from '../../assets/teachers_images/img_6.jpeg';

export const LeadershipTeam = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const teachers = [
    { id: 1, image: teacher1 },
    { id: 2, image: teacher2 },
    { id: 3, image: teacher3 },
    { id: 4, image: teacher4 },
    { id: 5, image: teacher5 },
    { id: 6, image: teacher6 },
  ];

  return (
    <section id="management" className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-[#C68A32]/30">
      <Container className="max-w-7xl">
        <SectionHeading
          badge={isEn ? "FACULTY & ACHARYAS" : "शिक्षक एवं आचार्य वृन्द"}
          title={isEn ? "Our Revered Acharyas & Faculty" : "हमारे पूज्य आचार्य एवं अध्यापक"}
          subtitle={
            isEn
              ? "Dedicated scholars and mentors imparting authentic Vedic traditions, Sanskrit grammar, and modern academia"
              : "वैदिक परंपरा, संस्कृत व्याकरण एवं आधुनिक विषयों के निष्ठावान मार्गदर्शक एवं शिक्षक"
          }
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mt-8">
          {teachers.map((teacher, idx) => (
            <div
              key={teacher.id || idx}
              className="group relative overflow-hidden rounded-2xl bg-[#241B15] border-2 border-[#C68A32]/40 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 aspect-[3/4]"
            >
              <img
                src={teacher.image}
                alt={isEn ? "Gurukul Faculty" : "गुरुकुल आचार्य एवं अध्यापक"}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-amber-900/10 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LeadershipTeam;


