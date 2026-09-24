import React from 'react';
import { FileText, UserCheck, Award, Home } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ADMISSION_DATA } from '../../data/admissionData';

const ICON_MAP = {
  FileText,
  UserCheck,
  Award,
  Home,
};

export const AdmissionProcess = () => {
  const { steps, timeline } = ADMISSION_DATA;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        {/* Timeline Highlight Bar */}
        <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200 rounded-2xl p-6 sm:p-8 mb-16 shadow-sm text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-gurukul-saffron text-white text-xs font-bold uppercase tracking-wider inline-block mb-3">
            वार्षिक प्रवेश अवधि
          </span>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-gray-900 mb-2">
            प्रवेश सत्र {timeline.session}: {timeline.startDate} से {timeline.endDate}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
            {timeline.specialNote}
          </p>
        </div>

        <SectionHeading
          badge="प्रवेश विधि"
          title="चरणबद्ध प्रवेश प्रक्रिया (Step-by-Step Process)"
          subtitle="गुरुकुल में प्रवेश हेतु सरल एवं पारदर्शी 4-चरणीय व्यवस्था"
        />

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 relative">
          {steps.map((step) => {
            const IconComponent = ICON_MAP[step.icon] || FileText;

            return (
              <div
                key={step.stepNumber}
                className="bg-gurukul-cream-100/70 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 border border-orange-100 hover:shadow-vedic transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-gurukul-saffron text-white flex items-center justify-center font-serif text-sm sm:text-lg font-bold shadow-md group-hover:scale-105 transition-transform">
                      {step.stepNumber}
                    </div>
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-orange-100 text-gurukul-saffron flex items-center justify-center">
                      <IconComponent className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  <h4 className="font-serif font-bold text-xs sm:text-base text-gray-900 mb-1 sm:mb-2 group-hover:text-gurukul-saffron transition-colors line-clamp-2 sm:line-clamp-none">
                    {step.title}
                  </h4>

                  <p className="text-[11px] sm:text-sm text-gray-600 leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="mt-3 sm:mt-6 pt-2 sm:pt-3 border-t border-orange-100/80 text-[10px] sm:text-[11px] font-bold text-gurukul-maroon">
                  चरण {step.stepNumber} पूर्ण करें
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AdmissionProcess;
