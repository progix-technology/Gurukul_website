import React from 'react';
import { Flame, BookOpen, Laptop, Home, Heart, Activity } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ABOUT_DATA } from '../../data/aboutData';

const ICON_MAP = {
  Flame,
  BookOpen,
  Laptop,
  Home,
  Heart,
  Activity,
};

export const CampusFacilities = () => {
  const { facilities } = ABOUT_DATA;

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-orange-100">
      <Container>
        <SectionHeading
          badge="परिसर एवं व्यवस्थाएँ"
          title="गुरुकुल परिसर एवं आधुनिक सुविधाएँ"
          subtitle="विद्यार्थियों के सर्वांगीण विकास हेतु आवश्यक समस्त भौतिक व आध्यात्मिक व्यवस्थाएँ"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilities.map((fac, idx) => {
            const IconComponent = ICON_MAP[fac.icon] || Home;

            return (
              <div
                key={idx}
                className="bg-gurukul-cream-100/60 rounded-2xl p-6 border border-orange-100 hover:shadow-vedic hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-gurukul-saffron flex items-center justify-center mb-4 group-hover:bg-gurukul-saffron group-hover:text-white transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="font-serif font-bold text-lg text-gray-900 mb-2 group-hover:text-gurukul-saffron transition-colors">
                  {fac.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CampusFacilities;
